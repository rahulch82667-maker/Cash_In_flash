import { NextResponse, after } from 'next/server';
import nodemailer from 'nodemailer';
import dbConnect from '@/lib/db';
import Application from '@/models/Application';

export async function POST(req: Request) {
  try {
    await dbConnect();
    
    const formData = await req.formData();
    
    const personalInfoString = formData.get('personalInfo') as string;
    const incomeInfoString = formData.get('incomeInfo') as string;
    const financialInfoString = formData.get('financialInfo') as string;

    if (!personalInfoString || !incomeInfoString || !financialInfoString) {
      return NextResponse.json({ message: 'Missing required form data' }, { status: 400 });
    }

    const personalInfo = JSON.parse(personalInfoString);
    const incomeInfo = JSON.parse(incomeInfoString);
    const financialInfo = JSON.parse(financialInfoString);

    const frontId = formData.get('frontId') as File | null;
    const paystub = formData.get('paystub') as File | null;
    const bankStatement = formData.get('bankStatement') as File | null;

    // Optional attachments for nodemailer
    const attachments: any[] = [];
    
    const processFile = async (file: File | null) => {
        if (!file) return null;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        attachments.push({
            filename: file.name,
            content: buffer,
        });
        return file.name; // We return the name to store in DB
    };

    const frontIdFileName = await processFile(frontId);
    const paystubFileName = await processFile(paystub);
    const bankStatementFileName = await processFile(bankStatement);

    // Prepare data
    const applicationData = {
        ...personalInfo,
        ...incomeInfo,
        ...financialInfo,
        documents: {
            frontIdFileName,
            paystubFileName,
            bankStatementFileName
        }
    };
    
    // Create instance but don't await save yet to speed up response
    const application = new Application(applicationData);
    const applicationId = application._id;

    // Use 'after' to background heavy tasks
    after(async () => {
        try {
            // 1. Save to MongoDB
            await application.save();
            console.log("Application saved to database:", applicationId);

            // 2. Send Email
            if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
                const transporter = nodemailer.createTransport({
                    host: process.env.EMAIL_HOST,
                    port: Number(process.env.EMAIL_PORT) || 587,
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                });

                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: personalInfo.email,
                    subject: 'Application Received - Cash In Flash',
                    html: `
                        <h2>Application Received!</h2>
                        <p>Dear ${personalInfo.firstName},</p>
                        <p>We have received your application for a loan of $${personalInfo.loanAmount}.</p>
                        <p>Your application is currently being reviewed. We will contact you soon.</p>
                        <br>
                        <p>Thank you,</p>
                        <p>Cash In Flash Team
                    `,
                    attachments: attachments,
                };

                await transporter.sendMail(mailOptions);
                console.log("Confirmation email sent to:", personalInfo.email);
            }
        } catch (bgError) {
            console.error("Background task error:", bgError);
        }
    });

    return NextResponse.json({ 
        message: 'Application submitted successfully', 
        applicationId 
    }, { status: 201 });

  } catch (error: any) {
    console.error('Error submitting application:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
