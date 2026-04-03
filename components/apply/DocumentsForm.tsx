import { UploadCloud, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitApplication, resetApplication } from "@/store/slices/applicationSlice";
import { RootState, AppDispatch } from "@/store/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import imageCompression from 'browser-image-compression';

const DocumentsForm = ({ onBack }: { onBack: () => void; }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const applicationState = useSelector((state: RootState) => state.application);
  const { loading } = applicationState;

  const [frontId, setFrontId] = useState<File | null>(null);
  const [paystub, setPaystub] = useState<File | null>(null);
  const [bankStatement, setBankStatement] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const labelStyle = "text-[#555] text-[12px] font-semibold uppercase tracking-wide mb-1.5 block";
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<File | null>>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      if (file.type === 'application/pdf') {
        if (file.size > 1.2 * 1024 * 1024) {
          toast.error("PDF is too large. Max size is 1.2MB.");
          return;
        }
        setter(file);
      } else {
        try {
          setIsProcessing(true);
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1600,
            useWebWorker: true,
          };
          const compressedFile = await imageCompression(file, options);
          setter(new File([compressedFile], file.name, { type: compressedFile.type || file.type }));
        } catch (error) {
          console.error("Compression error:", error);
          toast.error("Error processing image file.");
        } finally {
          setIsProcessing(false);
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!applicationState.personalInfo || !applicationState.incomeInfo || !applicationState.financialInfo) {
      toast.error("Missing information from previous steps.");
      return;
    }

    const formData = new FormData();
    formData.append("personalInfo", JSON.stringify(applicationState.personalInfo));
    formData.append("incomeInfo", JSON.stringify(applicationState.incomeInfo));
    formData.append("financialInfo", JSON.stringify(applicationState.financialInfo));

    if (frontId) formData.append("frontId", frontId);
    if (paystub) formData.append("paystub", paystub);
    if (bankStatement) formData.append("bankStatement", bankStatement);

    const resultAction = await dispatch(submitApplication(formData));

    if (submitApplication.fulfilled.match(resultAction)) {
      toast.success("Application successfully submitted!");
      dispatch(resetApplication());
      setTimeout(() => {
         router.push('/');
      }, 2000);
    } else {
      toast.error(resultAction.payload as string || "Failed to submit application");
    }
  };

  const docTypes = [
    { name: "Driver's License / State ID", desc: "Front copy, clear and valid", state: frontId, setter: setFrontId, id: "frontId" },
    { name: "Most Recent Paystub", desc: "Dated within last 30 days", state: paystub, setter: setPaystub, id: "paystub" },
    { name: "Last 60 Days Bank Statements", desc: "Full statements showing direct deposit", state: bankStatement, setter: setBankStatement, id: "bankStatement" },
  ];

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <h2 className="text-[18px] font-bold text-[#2D2D32] mb-6">Document Upload (Optional)</h2>

      {docTypes.map((doc, idx) => (
        <div key={idx} className={`border-2 border-dashed ${doc.state ? 'border-[#15C15D] bg-[#F0FDF4]' : 'border-gray-200 bg-gray-50'} rounded-xl p-6 hover:border-[#15C15D] hover:bg-[#F0FDF4] transition-colors cursor-pointer group relative overflow-hidden`} onClick={() => document.getElementById(doc.id)?.click()}>
          <label className={labelStyle}>{doc.name}</label>
          <p className="text-gray-500 text-[13px] mb-4">{doc.desc}</p>
          
          <div className="flex flex-col items-center justify-center py-4 text-center">
            {doc.state ? (
               <><CheckCircle className="text-[#15C15D] mb-3" size={32} />
               <p className="font-medium text-[14px] text-[#15C15D]">{doc.state.name}</p></>
            ) : (
                <><UploadCloud className="text-gray-400 group-hover:text-[#15C15D] mb-3" size={32} />
                <p className="font-medium text-[14px]">Click to upload or drag & drop</p>
                <p className="text-gray-400 text-[12px]">Max size: 1.2MB for PDF. Images auto-compressed.</p></>
            )}
            
          </div>
          <input id={doc.id} type="file" className="sr-only" onChange={(e) => handleFileChange(e, doc.setter)} accept=".pdf,.jpg,.jpeg,.png" />
        </div>
      ))}

      <div className="grid grid-cols-2 gap-4 mt-10 pt-6">
        <button type="button" onClick={onBack} disabled={loading || isProcessing} className="h-[60px] border border-gray-300 rounded-full font-semibold text-gray-600 disabled:opacity-50">
          ← Back
        </button>
        <button type="submit" disabled={loading || isProcessing} className="h-[60px] bg-[#15C15D] text-white rounded-full font-semibold shadow-lg hover:bg-[#12a850] flex items-center justify-center disabled:opacity-70">
          {loading || isProcessing ? <Loader2 className="animate-spin" /> : 'Submit Application'}
        </button>
      </div>
    </form>
  );
};

export default DocumentsForm;