import "../../components/solid-button/solid-button.css";

function SolidButton({ onShow, type, text }) {
  return (
    <>
      <div className="custom-btn-container">
        <button className="custom-btn btn-1" type={type} onClick={onShow}>
          {text}
        </button>
      </div>
    </>
  );
}

export default SolidButton;
