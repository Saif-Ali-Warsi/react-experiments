import "../../components/select/select-box.css";

function SelectBox({
    value,
    onChange,
}) {
  return (
    <>
      <div className="input-box-container">
        <select
        className="input-box"
          value={value}
          onChange={onChange}
        >
          <option value="">Select Role</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </select>
      </div>
    </>
  );
}

export default SelectBox;
