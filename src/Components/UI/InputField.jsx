const InputField = ({ label, type, name, value, onChange, error , placeholder="" }) => (
    <div className="mb-4">
        <label className="block text-[14px] text-gray-600 font-semibold mb-2" htmlFor={name}>
            {label}
        </label>
        <input
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryC"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);

export default InputField;