import { forwardRef } from "react";

const CustomInput = forwardRef(function CustomInput(
  { value, onChange, type = "text", placeholder = "Enter Information" },
  ref,
) {
  return (
    <>
      <div className="input-box-container">
        <input
          className="input-box"
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
    </>
  );
});

export default CustomInput;
