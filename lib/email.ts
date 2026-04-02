import nodemailer from 'nodemailer';

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// HTML email template for password reset
const getResetPasswordEmailTemplate = (resetUrl: string, userName: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Password</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #15C15D;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .header h1 {
          color: white;
          margin: 0;
          font-size: 24px;
        }
        .content {
          background-color: #f9f9f9;
          padding: 30px;
          border-radius: 0 0 8px 8px;
          border: 1px solid #e0e0e0;
          border-top: none;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #15C15D;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          margin: 20px 0;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          font-size: 12px;
          color: #666;
        }
        .warning {
          background-color: #fff3cd;
          border-left: 4px solid #ffc107;
          padding: 10px;
          margin: 20px 0;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Cash in Flash</h1>
        </div>
        <div class="content">
          <h2>Password Reset Request</h2>
          <p>Hello ${userName},</p>
          <p>We received a request to reset the password for your Cash in Flash account. Click the button below to create a new password:</p>
          
          <div style="text-align: center;">
            <a href="${resetUrl}" class="button">Reset Password</a>
          </div>
          
          <div class="warning">
            <strong>⚠️ Important:</strong> This link will expire in 15 minutes. If you didn't request a password reset, please ignore this email or contact support if you have concerns.
          </div>
          
          <p>If the button doesn't work, copy and paste this link into your browser:</p>
          <p style="word-break: break-all; color: #0066cc;">${resetUrl}</p>
          
          <hr style="margin: 20px 0;" />
          
          <p style="font-size: 14px;">For security reasons, this link can only be used once and will expire after 15 minutes.</p>
          <p>Best regards,<br/>Cash in Flash Team</p>
        </div>
        <div class="footer">
          <p>This is an automated message, please do not reply to this email.</p>
          <p>&copy; ${new Date().getFullYear()} Cash in Flash. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send password reset email
export const sendPasswordResetEmail = async (
  email: string,
  userName: string,
  resetToken: string
): Promise<void> => {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`;
  
  const mailOptions = {
    from: `"Cash in Flash" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'Reset Your Password - Cash in Flash',
    html: getResetPasswordEmailTemplate(resetUrl, userName),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Password reset email sent to ${email}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send reset email');
  }
};

// Test email configuration
export const verifyEmailConfig = async (): Promise<boolean> => {
  try {
    await transporter.verify();
    console.log('Email configuration verified successfully');
    return true;
  } catch (error) {
    console.error('Email configuration error:', error);
    return false;
  }
};