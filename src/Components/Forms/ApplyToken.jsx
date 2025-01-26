import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import InputField from "../UI/InputField";
import PurposeSelect from "../UI/PurposeSelect";
import addToken from "../../Apis/AddToken";
import { toast } from "react-toastify";
import Loader from "../UI/Loader";
import { useNavigate } from "react-router-dom";

const ApplyToken = () => {
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    cnic: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Entering try block...");

      if (!formData.email || !formData.cnic || !selectedPurpose) {
        console.log("Missing fields validation triggered");
        setError("All fields are required!");
        return;
      }

      if (!/^\d{5}-\d{7}-\d{1}$/.test(formData.cnic)) {
        console.log("Invalid CNIC format");
        setError("CNIC! Format must be xxxxx-xxxxxxx-x.");
        return;
      }

      console.log("Validation passed, calling addToken...");

      setError("");
      setLoading(true);

      const {data} = await addToken({ ...formData, purpose: selectedPurpose });

      setToken(data?.token);
      setStep(2);
      setLoading(false);
    } catch (error) {
      console.error("Error caught:", error);
      toast.error(error.message || "An error occurred");
      setLoading(false);
    }




    //   console.log("Form Submitted: ", formData, token);


    // } catch (error) {


    // }
  };

  if (loading) {
    return <Loader />
  }

  return (
    <div className="bg-white shadow-none md:shadow-lg rounded-2xl p-8 w-[400px]">
      {step === 1 ? (
        <>
          <h2 className="text-lg font-semibold text-center mb-4">Hi there! How can i help you?</h2>
          {error && (
            <div className="mb-4 text-red-600 text-sm bg-red-100 p-2 rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">

            <InputField
              type="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              error={null}
              placeholder="example@domain.com"
            />

            <InputField
              type="text"
              name="cnic"
              label="CNIC NO"
              value={formData.snic}
              onChange={handleChange}
              error={null}
              placeholder="xxxxx-xxxxxxx-x"
            />

            <PurposeSelect selectedPurpose={selectedPurpose} setSelectedPurpose={setSelectedPurpose} />

            <button
              type="submit"
              className="w-full flex gap-2 hover:gap-3 justify-center items-center transition-all bg-primaryC opacity-75 hover:opacity-100 text-white font-semibold py-2 rounded-lg focus:outline-none"
            >
              Get Token <FaArrowRightLong />
            </button>
          </form>
        </>

      ) : (
        <div>
          <p>This is your Token </p>

          <h1 className="text-[20px] text-center my-[15px]">{token}</h1>
          <div onClick={()=>{navigate("/track-token")}} className="flex gap-2 hover:gap-4 cursor-pointer justify-center items-center transition-all text-primaryC">
            Now please Check Status Here <FaArrowRightLong />
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyToken;
