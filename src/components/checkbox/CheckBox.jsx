import "../../components/checkbox/checkbox.css";

function CheckBox({ type = "checkbox", checked, onChange, label }) {
  return (
    <>
      <div className="checkbox-main">
        <input type={type} checked={checked} onChange={onChange} />
        <p>{label}</p>
      </div>
    </>
  );
}

export default CheckBox;
