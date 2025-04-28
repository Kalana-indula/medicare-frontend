//applying styles for all reuse and encapsulate styling
const Input = ({ placeholder, type = "text",onChange,value }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="border-gray-800 border-[2px] mt-[10px] mb-[10px] p-[10px]"
            onChange={onChange}
            value={value}
        />
    );
}

export default Input;