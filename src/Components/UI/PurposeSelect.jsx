import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const purposes = [
  "Medical Assistance",
  "Food Assistance",
  "Financial Aid",
  "Education Support",
  "Job Placement",
  "Shelter Request",
  "Clothing Support",
  "Utility Bill Assistance",
  "Legal Aid",
  "Counseling Services",
  "Emergency Relief",
  "Transportation Support",
  "Child Care Services",
  "Elderly Support",
  "Rehabilitation Programs",
  "Other"
];

const PurposeSelect = ({selectedPurpose , setSelectedPurpose }) => {
  const [customPurpose, setCustomPurpose] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (purpose) => {
    setSelectedPurpose(purpose);
    setShowDropdown(false);
    if (purpose !== "Other") {
      setCustomPurpose(""); // Reset custom purpose when another purpose is selected
    }
  };

  const handleCustomInput = (e) => {
    setCustomPurpose(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white w-full">
        <h2 className="text-sm font-semibold mb-2 text-start">Select a Purpose</h2>

        {/* Dropdown */}
        <div className="relative">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="border border-gray-200 p-2 rounded-lg cursor-pointer bg-white hover:bg-gray-100 flex justify-between items-center"
          >
            {selectedPurpose || "Choose a purpose"}
            <span className="text-gray-500">
            <MdOutlineKeyboardArrowDown />

            </span>
          </div>
          {showDropdown && (
            <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-40 overflow-auto shadow-lg">
              {purposes.map((purpose, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(purpose)}
                  className="p-2 hover:bg-blue-100 cursor-pointer"
                >
                  {purpose}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Custom Input */}
        {selectedPurpose === "Other" && (
          <div className="mt-4">
            <label
              htmlFor="customPurpose"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter your purpose
            </label>
            <input
              type="text"
              id="customPurpose"
              value={customPurpose}
              onChange={handleCustomInput}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your purpose here"
            />
          </div>
        )}

        {/* Submit Button */}
        {/* <button
          onClick={() => {
            const purposeToSubmit =
              selectedPurpose === "Other" ? customPurpose : selectedPurpose;
            alert(`Selected Purpose: ${purposeToSubmit}`);
          }}
          className="w-full mt-4 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button> */}
      </div>
    </div>
  );
};

export default PurposeSelect;
