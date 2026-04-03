import { Eye, EyeOff, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { savePersonalInfo } from "@/store/slices/applicationSlice";
import { RootState } from "@/store/store";

const PersonalInfoForm = ({ onNext }: { onNext: () => void }) => {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state: RootState) => state.application.personalInfo);

  const [showSsn, setShowSsn] = useState(false);
  const [showConfirmSsn, setShowConfirmSsn] = useState(false);

  const inputStyle = (error?: boolean) => `w-full h-[52px] px-4 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-700 outline-none focus:border-[#15C15D] placeholder:text-gray-400`;
  const labelStyle = "text-[#555] text-[12px] font-semibold uppercase tracking-wide mb-1.5 block";
  const errorStyle = "text-red-500 text-[10px] mt-1 ml-1";

  const formik = useFormik({
    initialValues: {
      firstName: personalInfo?.firstName || "",
      middleName: personalInfo?.middleName || "",
      lastName: personalInfo?.lastName || "",
      loanAmount: personalInfo?.loanAmount || "",
      ssn: personalInfo?.ssn || "",
      confirmSsn: personalInfo?.ssn || "",
      dob: personalInfo?.dob || "",
      phone: personalInfo?.phone || "",
      addressLine1: personalInfo?.addressLine1 || "",
      addressLine2: personalInfo?.addressLine2 || "",
      city: personalInfo?.city || "",
      state: personalInfo?.state || "CA",
      zipCode: personalInfo?.zipCode || "",
      email: personalInfo?.email || "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      loanAmount: Yup.string().required("Loan amount is required"),
      ssn: Yup.string().matches(/^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/, "Invalid SSN").required("SSN is required"),
      confirmSsn: Yup.string().oneOf([Yup.ref('ssn')], 'SSNs must match').required("Confirm SSN"),
      dob: Yup.string().required("Date of Birth is required"),
      phone: Yup.string().required("Phone number is required"),
      addressLine1: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      zipCode: Yup.string().required("ZIP is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: (values) => {
      dispatch(savePersonalInfo(values));
      onNext();
    },
  });

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <h2 className="text-[18px] font-bold text-[#2D2D32] mb-6">Personal Information</h2>

      {/* Name Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className={labelStyle}>NAME</label>
          <input type="text" placeholder="First Name" {...formik.getFieldProps('firstName')} className={inputStyle(!!(formik.touched.firstName && formik.errors.firstName))} />
          {formik.touched.firstName && formik.errors.firstName && <div className={errorStyle}>{formik.errors.firstName}</div>}
        </div>
        <div>
          <label className={labelStyle}>&nbsp;</label>
          <input type="text" placeholder="Middle Name" {...formik.getFieldProps('middleName')} className={inputStyle()} />
        </div>
        <div>
          <label className={labelStyle}>&nbsp;</label>
          <input type="text" placeholder="Last Name" {...formik.getFieldProps('lastName')} className={inputStyle(!!(formik.touched.lastName && formik.errors.lastName))} />
          {formik.touched.lastName && formik.errors.lastName && <div className={errorStyle}>{formik.errors.lastName}</div>}
        </div>
      </div>

      {/* Loan Amount */}
      <div className="relative">
        <label className={labelStyle}>LOAN AMOUNT</label>
        <select {...formik.getFieldProps('loanAmount')} className={`${inputStyle(!!(formik.touched.loanAmount && formik.errors.loanAmount))} appearance-none cursor-pointer`}>
          <option value="" disabled >Please Select</option>
          <option value="100">$100.00</option>
          <option value="150">$150.00</option>
          <option value="200">$200.00</option>
          <option value="255">$255.00</option>
        </select>
        <ChevronDown className="absolute right-4 top-[43px] text-gray-400" size={20} />
        {formik.touched.loanAmount && formik.errors.loanAmount && <div className={errorStyle}>{formik.errors.loanAmount}</div>}
      </div>

      {/* SSN Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <label className={labelStyle}>SOCIAL SECURITY NUMBER</label>
          <input type={showSsn ? "text" : "password"} placeholder="XXX-XX-XXXX" {...formik.getFieldProps('ssn')} className={inputStyle(!!(formik.touched.ssn && formik.errors.ssn))} />
          <button type="button" onClick={() => setShowSsn(!showSsn)} className="absolute right-4 top-[43px] text-gray-400 cursor-pointer focus:outline-none">
            {showSsn ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {formik.touched.ssn && formik.errors.ssn && <div className={errorStyle}>{formik.errors.ssn}</div>}
        </div>
        <div className="relative">
          <label className={labelStyle}>CONFIRM SOCIAL SECURITY NUMBER</label>
          <input type={showConfirmSsn ? "text" : "password"} placeholder="XXX-XX-XXXX" {...formik.getFieldProps('confirmSsn')} className={inputStyle(!!(formik.touched.confirmSsn && formik.errors.confirmSsn))} />
          <button type="button" onClick={() => setShowConfirmSsn(!showConfirmSsn)} className="absolute right-4 top-[43px] text-gray-400 cursor-pointer focus:outline-none">
            {showConfirmSsn ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {formik.touched.confirmSsn && formik.errors.confirmSsn && <div className={errorStyle}>{formik.errors.confirmSsn}</div>}
        </div>
      </div>

      {/* DOB and Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelStyle}>DATE OF BIRTH</label>
          <input type="date" {...formik.getFieldProps('dob')} className={inputStyle(!!(formik.touched.dob && formik.errors.dob))} />
          {formik.touched.dob && formik.errors.dob && <div className={errorStyle}>{formik.errors.dob}</div>}
        </div>
        <div>
          <label className={labelStyle}>PHONE NUMBER</label>
          <input type="tel" placeholder="(000) 000-0000" {...formik.getFieldProps('phone')} className={inputStyle(!!(formik.touched.phone && formik.errors.phone))} />
          {formik.touched.phone && formik.errors.phone && <div className={errorStyle}>{formik.errors.phone}</div>}
        </div>
      </div>

      {/* Home Address Section */}
      <div>
        <label className={labelStyle}>HOME ADDRESS</label>
        <input type="text" placeholder="Start typing your address..." {...formik.getFieldProps('addressLine1')} className={`${inputStyle(!!(formik.touched.addressLine1 && formik.errors.addressLine1))} mb-4`} />
        {formik.touched.addressLine1 && formik.errors.addressLine1 && <div className={errorStyle}>{formik.errors.addressLine1}</div>}
        <input type="text" placeholder="Street Address Line 2 (optional)" {...formik.getFieldProps('addressLine2')} className={inputStyle()} />
      </div>

      {/* City, State, ZIP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <input type="text" placeholder="City" {...formik.getFieldProps('city')} className={inputStyle(!!(formik.touched.city && formik.errors.city))} />
          {formik.touched.city && formik.errors.city && <div className={errorStyle}>{formik.errors.city}</div>}
        </div>
        <div className="relative">
          <select {...formik.getFieldProps('state')} className={`${inputStyle()} appearance-none`} >
            <option value="CA">CA</option>
            <option value="Florida">Florida</option>
            <option value="Texas">Texas</option>
            <option value="New York">New York</option>
          </select>
          <ChevronDown className="absolute right-4 top-[16px] text-gray-400" size={20} />
        </div>
        <div>
          <input type="text" placeholder="ZIP Code" {...formik.getFieldProps('zipCode')} className={inputStyle(!!(formik.touched.zipCode && formik.errors.zipCode))} />
          {formik.touched.zipCode && formik.errors.zipCode && <div className={errorStyle}>{formik.errors.zipCode}</div>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={labelStyle}>EMAIL</label>
        <input type="email" placeholder="yourname@example.com" {...formik.getFieldProps('email')} className={inputStyle(!!(formik.touched.email && formik.errors.email))} />
        {formik.touched.email && formik.errors.email && <div className={errorStyle}>{formik.errors.email}</div>}
      </div>

      <button type="submit" className="w-full h-[60px] bg-[#15C15D] text-white rounded-full font-semibold text-[18px] mt-10 shadow-lg hover:bg-[#12a850]">
        Continue →
      </button>
    </form>
  );
};

export default PersonalInfoForm;