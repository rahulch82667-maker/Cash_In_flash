import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Interfaces for our form steps
export interface PersonalInfoState {
  firstName: string;
  middleName: string;
  lastName: string;
  loanAmount: string;
  ssn: string;
  dob: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface IncomeInfoState {
  incomeSource: string;
  employerName: string;
  jobTitle: string;
  grossMonthlyIncome: string;
  payFrequency: string;
  nextPayDate: string;
}

export interface FinancialInfoState {
  bankName: string;
  routingNumber: string;
  accountNumber: string;
}

export interface ApplicationState {
  personalInfo: PersonalInfoState | null;
  incomeInfo: IncomeInfoState | null;
  financialInfo: FinancialInfoState | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: ApplicationState = {
  personalInfo: null,
  incomeInfo: null,
  financialInfo: null,
  loading: false,
  error: null,
  success: false,
};

// Async thunk to submit full application with files
export const submitApplication = createAsyncThunk(
  'application/submit',
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/apply', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    savePersonalInfo: (state, action: PayloadAction<PersonalInfoState>) => {
      state.personalInfo = action.payload;
    },
    saveIncomeInfo: (state, action: PayloadAction<IncomeInfoState>) => {
      state.incomeInfo = action.payload;
    },
    saveFinancialInfo: (state, action: PayloadAction<FinancialInfoState>) => {
      state.financialInfo = action.payload;
    },
    resetApplication: (state) => {
      state.personalInfo = null;
      state.incomeInfo = null;
      state.financialInfo = null;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitApplication.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {
  savePersonalInfo,
  saveIncomeInfo,
  saveFinancialInfo,
  resetApplication,
} = applicationSlice.actions;
export default applicationSlice.reducer;
