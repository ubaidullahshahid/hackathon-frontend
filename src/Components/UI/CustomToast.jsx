import React, { useState, useEffect } from "react";
import { useToast } from "../../Hooks/ToastHook";

export const CustomToast = ({ text, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const iconColor = type === "success" ? "text-green-500" : "text-red-500";
  const waveColor = type === "success" ? "fill-green-300" : "fill-red-300";

  useEffect(() => {
    // Auto-hide the toast after 2 seconds with animation
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 1000); // Match the animation duration
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [onClose]);

  return (
    isVisible && (
      <div
        className={`fixed bottom-5 right-5 flex items-center justify-between gap-4 p-4 rounded-lg shadow-lg ${bgColor} animate-fade-in-out`}
      >
        <svg
          className={`wave absolute top-2 left-0 flex justify-start transform rotate-90 w-12 h-12 ${waveColor}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"></path>
        </svg>
        <div className="icon-container flex items-center justify-center w-10 h-10 rounded-full bg-opacity-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={`w-6 h-6 ${iconColor}`}
            viewBox="0 0 512 512"
          >
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path>
          </svg>
        </div>
        <div>
          <p className="font-bold text-lg">{text}</p>
          <p className="text-sm text-gray-600">Everything seems great</p>
        </div>
        <button onClick={onClose} className="text-gray-500">
          ✕
        </button>
      </div>
    )
  );
};




export const ToastProvider = () => {
    const { toast, hideToast } = useToast()
  
    return (
      <>
        {toast && (
          <CustomToast text={toast.text} type={toast.type} onClose={hideToast} />
        )}
      </>
    );
  };

