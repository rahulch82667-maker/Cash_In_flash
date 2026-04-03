import { ChevronDown } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { saveIncomeInfo } from "@/store/slices/applicationSlice";
import { RootState } from "@/store/store";

const IncomeInfoForm = ({ onNext, onBack }: { onNext: () => void; onBack: () => void; }) => {
  const dispatch = useDispatch();
  const incomeInfo = useSelector((state: RootState) => state.application.incomeInfo);

  const inputStyle = (error?: boolean) => `w-full h-[52px] px-4 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-700 outline-none focus:border-[#15C15D]`;
  const labelStyle = "text-[#555] text-[12px] font-semibold uppercase tracking-wide mb-1.5 block";
  const errorStyle = "text-red-500 text-[10px] mt-1 ml-1";

  const formik = useFormik({
    initialValues: {
      incomeSource: incomeInfo?.incomeSource || "",
      employerName: incomeInfo?.employerName || "",
      jobTitle: incomeInfo?.jobTitle || "",
      grossMonthlyIncome: incomeInfo?.grossMonthlyIncome || "",
      payFrequency: incomeInfo?.payFrequency || "",
      nextPayDate: incomeInfo?.nextPayDate || "",
    },
    validationSchema: Yup.object({
      incomeSource: Yup.string().required("Income source is required"),
      employerName: Yup.string().required("Employer name is required"),
      jobTitle: Yup.string().required("Job title is required"),
      grossMonthlyIncome: Yup.number().typeError("Must be a number").required("Gross monthly income is required"),
      payFrequency: Yup.string().required("Pay frequency is required"),
      nextPayDate: Yup.string().required("Next pay date is required"),
    }),
    onSubmit: (values) => {
      dispatch(saveIncomeInfo(values));
      onNext();
    },
  });

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <h2 className="text-[18px] font-bold text-[#2D2D32] mb-6">Income Information</h2>

      <div className="relative">
        <label className={labelStyle}>PRIMARY INCOME SOURCE</label>
        <select {...formik.getFieldProps('incomeSource')} className={`${inputStyle(!!(formik.touched.incomeSource && formik.errors.incomeSource))} appearance-none`}>
          <option value="" disabled >Select Source</option>
          <option value="employment">Employment (W-2)</option>
          <option value="self_employed">Self-Employed / Independent Contractor</option>
          <option value="benefits">Government Benefits (SSI/SSDI)</option>
        </select>
        <ChevronDown className="absolute right-4 top-[43px] text-gray-400" size={20} />
        {formik.touched.incomeSource && formik.errors.incomeSource && <div className={errorStyle}>{formik.errors.incomeSource}</div>}
      </div>

      <div>
        <label className={labelStyle}>EMPLOYER NAME</label>
        <input type="text" placeholder="Required" {...formik.getFieldProps('employerName')} className={inputStyle(!!(formik.touched.employerName && formik.errors.employerName))} />
        {formik.touched.employerName && formik.errors.employerName && <div className={errorStyle}>{formik.errors.employerName}</div>}
      </div>
      <div>
        <label className={labelStyle}>JOB TITLE</label>
        <input type="text" placeholder="Required" {...formik.getFieldProps('jobTitle')} className={inputStyle(!!(formik.touched.jobTitle && formik.errors.jobTitle))} />
        {formik.touched.jobTitle && formik.errors.jobTitle && <div className={errorStyle}>{formik.errors.jobTitle}</div>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelStyle}>GROSS MONTHLY INCOME (Before Taxes)</label>
          <input type="text" placeholder="$0.00" {...formik.getFieldProps('grossMonthlyIncome')} className={inputStyle(!!(formik.touched.grossMonthlyIncome && formik.errors.grossMonthlyIncome))} />
          {formik.touched.grossMonthlyIncome && formik.errors.grossMonthlyIncome && <div className={errorStyle}>{formik.errors.grossMonthlyIncome}</div>}
        </div>
        <div className="relative">
          <label className={labelStyle}>PAY FREQUENCY</label>
          <select {...formik.getFieldProps('payFrequency')} className={`${inputStyle(!!(formik.touched.payFrequency && formik.errors.payFrequency))} appearance-none`}>
            <option value="" disabled >Select</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
          </select>
          <ChevronDown className="absolute right-4 top-[43px] text-gray-400" size={20} />
          {formik.touched.payFrequency && formik.errors.payFrequency && <div className={errorStyle}>{formik.errors.payFrequency}</div>}
        </div>
      </div>

      <div>
        <label className={labelStyle}>NEXT PAY DATE</label>
        <input type="date" {...formik.getFieldProps('nextPayDate')} className={inputStyle(!!(formik.touched.nextPayDate && formik.errors.nextPayDate))} />
        {formik.touched.nextPayDate && formik.errors.nextPayDate && <div className={errorStyle}>{formik.errors.nextPayDate}</div>}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-10 pt-6">
        <button type="button" onClick={onBack} className="h-[60px] border border-gray-300 rounded-full font-semibold text-gray-600">
          ← Back
        </button>
        <button type="submit" className="h-[60px] bg-[#15C15D] text-white rounded-full font-semibold">
          Continue →
        </button>
      </div>
    </form>
  );
};

export default IncomeInfoForm;