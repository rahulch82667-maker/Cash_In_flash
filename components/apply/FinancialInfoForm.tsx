import { ChevronDown } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { saveFinancialInfo } from "@/store/slices/applicationSlice";
import { RootState } from "@/store/store";

const FinancialInfoForm = ({ onNext, onBack }: { onNext: () => void; onBack: () => void; }) => {
  const dispatch = useDispatch();
  const financialInfo = useSelector((state: RootState) => state.application.financialInfo);

  const inputStyle = (error?: boolean) => `w-full h-[52px] px-4 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg text-gray-700 outline-none focus:border-[#15C15D]`;
  const labelStyle = "text-[#555] text-[12px] font-semibold uppercase tracking-wide mb-1.5 block";
  const errorStyle = "text-red-500 text-[10px] mt-1 ml-1";

  const formik = useFormik({
    initialValues: {
      bankName: financialInfo?.bankName || "",
      routingNumber: financialInfo?.routingNumber || "",
      accountNumber: financialInfo?.accountNumber || "",
      confirmAccountNumber: financialInfo?.accountNumber || "",
    },
    validationSchema: Yup.object({
      bankName: Yup.string().required("Bank name is required"),
      routingNumber: Yup.string().matches(/^[0-9]{9}$/, "Routing number must be 9 digits").required("Routing number is required"),
      accountNumber: Yup.string().required("Account number is required"),
      confirmAccountNumber: Yup.string().oneOf([Yup.ref('accountNumber')], 'Account numbers must match').required("Confirm account number"),
    }),
    onSubmit: (values) => {
      dispatch(saveFinancialInfo(values));
      onNext();
    },
  });

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <h2 className="text-[18px] font-bold text-[#2D2D32] mb-6">Banking Information</h2>

      <p className="text-[14px] text-gray-500 mb-6 bg-[#F0FDF4] p-4 rounded-lg border border-[#DCFCE7]">
        A valid checking account is required for funding. We do not accept prepaid cards.
      </p>

      <div>
        <label className={labelStyle}>BANK NAME</label>
        <input type="text" placeholder="Required" {...formik.getFieldProps('bankName')} className={inputStyle(!!(formik.touched.bankName && formik.errors.bankName))} />
        {formik.touched.bankName && formik.errors.bankName && <div className={errorStyle}>{formik.errors.bankName}</div>}
      </div>

      <div>
        <label className={labelStyle}>ROUTING NUMBER (9 digits)</label>
        <input type="text" placeholder="Required" {...formik.getFieldProps('routingNumber')} className={inputStyle(!!(formik.touched.routingNumber && formik.errors.routingNumber))} />
         {formik.touched.routingNumber && formik.errors.routingNumber && <div className={errorStyle}>{formik.errors.routingNumber}</div>}
      </div>

      <div>
         <label className={labelStyle}>CHECKING ACCOUNT NUMBER</label>
         <input type="password" placeholder="Required" {...formik.getFieldProps('accountNumber')} className={inputStyle(!!(formik.touched.accountNumber && formik.errors.accountNumber))} />
         {formik.touched.accountNumber && formik.errors.accountNumber && <div className={errorStyle}>{formik.errors.accountNumber}</div>}
      </div>

      <div>
         <label className={labelStyle}>CONFIRM ACCOUNT NUMBER</label>
         <input type="password" placeholder="Required" {...formik.getFieldProps('confirmAccountNumber')} className={inputStyle(!!(formik.touched.confirmAccountNumber && formik.errors.confirmAccountNumber))} />
         {formik.touched.confirmAccountNumber && formik.errors.confirmAccountNumber && <div className={errorStyle}>{formik.errors.confirmAccountNumber}</div>}
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

export default FinancialInfoForm;