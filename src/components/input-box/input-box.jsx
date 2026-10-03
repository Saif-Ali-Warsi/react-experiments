import "../input-box/input-box.css";

function InputBox({
  value,
  onChange,
  type = "text",
  placeholder = "Enter Information",
  inputRef
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
          inputRef={inputRef}
        ></input>
      </div>
    </>
  );
}

export default InputBox;
