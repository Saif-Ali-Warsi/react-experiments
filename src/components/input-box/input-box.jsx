import "../input-box/input-box.css";

function InputBox({
  value,
  onChange,
  type = "text",
  placeholder = "Enter Information",
}) {
  return (
    <>
      <div className="input-box-container">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input-box"
        />
      </div>
    </>
  );
}

export default InputBox;
