import { UploadCloud } from "lucide-react";

const DocumentsForm = ({ onBack }: { onBack: () => void; }) => {
  const labelStyle = "text-[#555] text-[12px] font-semibold uppercase tracking-wide mb-1.5 block";
  
  const docTypes = [
    { name: "Driver's License / State ID", desc: "Front copy, clear and valid" },
    { name: "Most Recent Paystub", desc: "Dated within last 30 days" },
    { name: "Last 60 Days Bank Statements", desc: "Full statements showing direct deposit" },
  ];

  return (
    <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Application Submitted!"); }}>
      <h2 className="text-[18px] font-bold text-[#2D2D32] mb-6">Document Upload</h2>

      {docTypes.map((doc, idx) => (
        <div key={idx} className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 hover:border-[#15C15D] hover:bg-[#F0FDF4] transition-colors cursor-pointer group">
          <label className={labelStyle}>{doc.name}</label>
          <p className="text-gray-500 text-[13px] mb-4">{doc.desc}</p>
          
          <div className="flex flex-col items-center justify-center py-4 text-center">
            <UploadCloud className="text-gray-400 group-hover:text-[#15C15D] mb-3" size={32} />
            <p className="font-medium text-[14px]">Click to upload or drag & drop</p>
            <p className="text-gray-400 text-[12px]">Max size: 10MB (PDF, JPG, PNG)</p>
          </div>
          <input type="file" className="sr-only" required />
        </div>
      ))}

      <div className="grid grid-cols-2 gap-4 mt-10 pt-6">
        <button type="button" onClick={onBack} className="h-[60px] border border-gray-300 rounded-full font-semibold text-gray-600">
          ← Back
        </button>
        <button type="submit" className="h-[60px] bg-[#15C15D] text-white rounded-full font-semibold shadow-lg hover:bg-[#12a850]">
          Submit Application
        </button>
      </div>
    </form>
  );
};

export default DocumentsForm;