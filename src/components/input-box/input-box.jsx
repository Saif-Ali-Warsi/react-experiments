import { forwardRef } from "react";
import "../input-box/input-box.css";

const InputBox = forwardRef(function InputBox(
  { value, onChange, type = "text", placeholder = "Enter Information", ...rest },
  ref,
) {
  return (
    <>
      <div className="input-box-container">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="input-box"
          ref={ref}
          {...rest}
        />
      </div>
    </>
  );
});

export default InputBox;
