import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa"; // Importing an edit icon
import { GetTokens } from "../../Apis/GetTokens";
import CustomDropdown from "./CustomDropdown";
import { editToken } from "../../Apis/EditToken";

const TokenTable = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [tokens, setTokens] = useState([]);
  const [editedStatus, setEditedStatus] = useState(null);

  const fetchTokens = async () => {
    const authToken = localStorage.getItem("authToken");
    const tokensData = await GetTokens(authToken, "all");
    setTokens(tokensData?.data || []);
  };

  useEffect(() => {
    fetchTokens();
  }, []);
  
  const handleEdit = async (tokenNumber, newStatus) => {
    console.log("tokennumber", tokenNumber)
    console.log("newStatus", newStatus)
    try {
      const editedToken = await editToken({ token: tokenNumber, status: newStatus });

      if (editedToken.success) {
        setEditedStatus(newStatus); 
        fetchTokens(); 
        console.log(`Token ${tokenNumber} updated to ${newStatus}`);
      } else {
        console.error("Failed to update token:", editedToken.message);
      }
    } catch (error) {
      console.error("Error editing token:", error);
    }
  };

  return (
    <div className="overflow-x-auto w-full flex justify-center px-[15px]">
      <table className="w-full table-auto border-collapse rounded-lg shadow-lg max-w-[1200px]">
        <thead className="bg-gray-100 font-bold">
          <tr>
            <th className="px-4 py-3 text-left">Token Number</th>
            <th className="px-4 py-3 text-left">User Name</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-200`}
            >
              <td className="px-4 py-3">{token.token}</td>
              <td className="px-4 py-3">{token.email}</td>
              <td className="px-4 py-3">
                <span
                  className={`${token.status === "pending"
                    ? "text-yellow-500"
                    : token.status === "approve"
                      ? "text-green-500"
                      : "text-red-500"
                    } px-3 py-1 rounded-full`}
                >
                  {token.status}
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <CustomDropdown
                  label={""}
                  value={token.status}
                  onChange={(newStatus) => handleEdit(token.token, newStatus)} // Call handleEdit with token number and selected status
                  name={"Edit Status"}
                  options={["pending", "approve", "reject"]}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenTable;
