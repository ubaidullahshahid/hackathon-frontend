import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../Apis/loginUser';
import { toast } from 'react-toastify';
import Loader from '../Components/UI/Loader';
import { fetchCurrentUser } from '../Redux/Slices/CurrentUser';
import InputField from '../Components/UI/InputField';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = ({ target: input }) => {
        const newData = { ...data };
        newData[input.name] = input.value;
        setData(newData);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!data.email, !data.password) {
            return toast.error("Please fill all input Fields")
        }
        try {
            setLoading(true)
            const {token} = await loginUser(data);
            localStorage.setItem("authToken", token);
            console.log(token);
            dispatch(fetchCurrentUser())
        } catch (error) {
            setLoading(false)
            toast.error(error.response ? error.response.data.message : error.message)
            console.error("Failed to login:", error);
        }
    };

    if (loading) {
        return <Loader />
    }

    return (
        <div className="flex justify-center items-center h-screen bg-[#f1f1f1]">
            <div className="max-w-md w-full mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-black text-center mb-6">Login</h2>
                <form onSubmit={handleLogin}>
                    <InputField
                        label="Email"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        error={null}
                    />
                    <InputField
                        label="Password"
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        error={null}
                    />
                    <button
                        type="submit"
                        className="w-full bg-primaryC text-white py-2 px-4 rounded-lg hover:opacity-100 opacity-80  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
