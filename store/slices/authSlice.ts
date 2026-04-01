import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Types
export interface RegisterData {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

// Initial state
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  success: false,
};

// Register async thunk
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData: RegisterData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/register', userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ user: User; message: string }>) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.user;
        state.error = null;
        toast.success(action.payload.message || 'Registration successful!');
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = false;
        
        // Handle different error formats
        if (action.payload?.errors && Array.isArray(action.payload.errors)) {
          state.error = action.payload.errors.join(', ');
          toast.error(action.payload.errors.join(', '));
        } else if (action.payload?.error) {
          state.error = action.payload.error;
          toast.error(action.payload.error);
        } else {
          state.error = 'Registration failed. Please try again.';
          toast.error('Registration failed. Please try again.');
        }
      });
  },
});

export const { resetState, clearError } = authSlice.actions;
export default authSlice.reducer;