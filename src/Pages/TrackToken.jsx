import React, { useState } from "react";
import Header from "../Components/Layouts/Header";
import { GetTokenStatus } from "../Apis/GetTokenStatus";
import { toast } from "react-toastify";
import Loader from "../Components/UI/Loader";

const TrackToken = () => {
    const [token, setToken] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleTrack = async () => {
        if (!token) {
            setError("Please enter a token number.");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const { data } = await GetTokenStatus(token)
            console.log(data);
            
            if (data === "pending") {
                setStatus("Token is being pending.");
            } else if (data === "approve") {
                setStatus("Token has been approved.");
            } else if (data === "reject") {
                setStatus("Token has been Rejected.");
            } else {
                setStatus("Token not found.");
            }
            setLoading(false);
        } catch (error) {
            toast.error(error)
            setLoading(false)
        }
    };

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <Header />
            <div className="flex items-center justify-center  min-h-[calc(100vh_-_72px)] px-[15px] bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 w-[400px]">
                    <h2 className="text-2xl font-semibold text-center mb-6">Track Your Token</h2>

                    <div>
                        <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-2">
                            Enter your Token Number
                        </label>
                        <input
                            type="text"
                            id="token"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter token number"
                        />
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm mb-4">
                            {error}
                        </div>
                    )}

                    <button
                        onClick={handleTrack}
                        className="w-full bg-primaryC hover:opacity-100 opacity-80 text-white py-3 rounded-lg focus:outline-none"
                    >
                        {loading ? "Tracking..." : "Track"}
                    </button>

                    {status && (
                        <div className="mt-6 text-center">
                            <p className={`text-sm font-medium ${status === "Token not found." ? "text-red-600" : "text-green-600"}`}>
                                {status}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>

    );
};

export default TrackToken;