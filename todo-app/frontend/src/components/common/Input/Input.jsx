import "./Input.css";

function Input({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;