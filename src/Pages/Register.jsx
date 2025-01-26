import React, { useState } from "react";
import Joi from "joi";
import InputField from "../Components/UI/InputField";
import validate from "../Utils/Validate";
import Loader from "../Components/UI/Loader";
import { SendOTP } from "../Apis/sentOtp";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const schema = Joi.object({
    userName: Joi.string().min(3).required().label("UserName"),
    email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
  });

  const handleChange = ({ target: input }) => {
    const newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validationErrors = validate(data, schema);
      setErrors(validationErrors || {});
      if (validationErrors) return;
      setLoading(true);
      await SendOTP({ ...data, isResend: false, });
      localStorage.setItem("emailForVerify", data.email)
      return navigate("/verifyotp");
    } catch (error) {
      setLoading(false);
      toast.error(error.response ? error.response.data.message : error.message)
    }
  };

  if (loading) {
    return <Loader />
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#f1f1f1]">
      <div className="max-w-md w-full mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="UserName"
            type="text"
            name="userName"
            value={data.userName}
            onChange={handleChange}
            error={errors.userName}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            error={errors.password}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
