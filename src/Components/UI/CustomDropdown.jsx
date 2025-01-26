const CustomDropdown = ({ label, name, options, value, onChange, error }) => (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)} // Pass only the selected value
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
  
  export default CustomDropdown;
  