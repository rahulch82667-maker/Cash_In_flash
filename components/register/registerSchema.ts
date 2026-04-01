import * as Yup from 'yup';

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name cannot exceed 100 characters')
    .required('Full name is required'),
  
  email: Yup.string()
    .email('Invalid email address')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email address'
    )
    .required('Email is required'),
  
  phoneNumber: Yup.string()
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      'Please provide a valid phone number (format: 123-456-7890)'
    )
    .required('Phone number is required'),
  
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});