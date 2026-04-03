import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IApplication extends Document {
  // Personal Info
  firstName: string;
  middleName?: string;
  lastName: string;
  loanAmount: number;
  ssn: string; // Typically should be encrypted, but for assignment we store it
  dob: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;

  // Income Info
  incomeSource: string;
  employerName: string;
  jobTitle: string;
  grossMonthlyIncome: number;
  payFrequency: string;
  nextPayDate: string;

  // Financial Info
  bankName: string;
  routingNumber: string;
  accountNumber: string;

  // Documents
  documents: {
    frontIdFileName?: string;
    paystubFileName?: string;
    bankStatementFileName?: string;
  };

  createdAt: Date;
  status: string;
}

const ApplicationSchema: Schema<IApplication> = new Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    loanAmount: { type: Number, required: true },
    ssn: { type: String, required: true },
    dob: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },

    incomeSource: { type: String, required: true },
    employerName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    grossMonthlyIncome: { type: Number, required: true },
    payFrequency: { type: String, required: true },
    nextPayDate: { type: String, required: true },

    bankName: { type: String, required: true },
    routingNumber: { type: String, required: true },
    accountNumber: { type: String, required: true },

    documents: {
      frontIdFileName: { type: String },
      paystubFileName: { type: String },
      bankStatementFileName: { type: String },
    },
    status: { type: String, default: 'Pending' },
  },
  { timestamps: true }
);

// Check if model already exists to prevent OverwriteModelError in Next.js
const Application: Model<IApplication> = mongoose.models.Application || mongoose.model<IApplication>('Application', ApplicationSchema);

export default Application;
