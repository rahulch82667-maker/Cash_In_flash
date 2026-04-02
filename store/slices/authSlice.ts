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

export interface LoginData {
  email: string;
  password: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  token: string;
  password: string;
  confirmPassword: string;
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
  loginSuccess: boolean;
  forgotPasswordSuccess: boolean;
  resetPasswordSuccess: boolean;
}

// Initial state
const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  success: false,
  loginSuccess: false,
  forgotPasswordSuccess: false,
  resetPasswordSuccess: false,
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

// Login async thunk
export const loginUser = createAsyncThunk(
  'auth/login',
  async (loginData: LoginData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/login', loginData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Forgot Password async thunk
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (data: ForgotPasswordData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/forgot-password', data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Reset Password async thunk
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (data: ResetPasswordData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/reset-password', data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Get current user async thunk
export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/me');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Logout async thunk
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/logout');
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
      state.loginSuccess = false;
      state.forgotPasswordSuccess = false;
      state.resetPasswordSuccess = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetLoginSuccess: (state) => {
      state.loginSuccess = false;
    },
    resetForgotPasswordSuccess: (state) => {
      state.forgotPasswordSuccess = false;
    },
    resetResetPasswordSuccess: (state) => {
      state.resetPasswordSuccess = false;
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
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.loginSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: User; message: string }>) => {
        state.loading = false;
        state.loginSuccess = true;
        state.user = action.payload.user;
        state.error = null;
        toast.success(action.payload.message || 'Login successful!');
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.loginSuccess = false;
        
        if (action.payload?.errors && Array.isArray(action.payload.errors)) {
          state.error = action.payload.errors.join(', ');
          toast.error(action.payload.errors.join(', '));
        } else if (action.payload?.error) {
          state.error = action.payload.error;
          toast.error(action.payload.error);
        } else {
          state.error = 'Login failed. Please try again.';
          toast.error('Login failed. Please try again.');
        }
      })
      // Forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.forgotPasswordSuccess = false;
      })
      .addCase(forgotPassword.fulfilled, (state, action: PayloadAction<{ message: string }>) => {
        state.loading = false;
        state.forgotPasswordSuccess = true;
        state.error = null;
        toast.success(action.payload.message);
      })
      .addCase(forgotPassword.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.forgotPasswordSuccess = false;
        
        const errorMessage = action.payload?.error || 'Failed to send reset link. Please try again.';
        state.error = errorMessage;
        toast.error(errorMessage);
      })
      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.resetPasswordSuccess = false;
      })
      .addCase(resetPassword.fulfilled, (state, action: PayloadAction<{ message: string }>) => {
        state.loading = false;
        state.resetPasswordSuccess = true;
        state.error = null;
        toast.success(action.payload.message);
      })
      .addCase(resetPassword.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.resetPasswordSuccess = false;
        
        const errorMessage = action.payload?.error || 
                           (action.payload?.errors && action.payload.errors[0]) || 
                           'Failed to reset password. Please try again.';
        state.error = errorMessage;
        toast.error(errorMessage);
      })
      // Get Current User
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action: PayloadAction<{ user: User }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.loading = false;
        state.user = null;
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.loginSuccess = false;
        toast.success('Logged out successfully');
      });
  },
});

export const { 
  resetState, 
  clearError, 
  resetLoginSuccess, 
  resetForgotPasswordSuccess, 
  resetResetPasswordSuccess 
} = authSlice.actions;
export default authSlice.reducer;