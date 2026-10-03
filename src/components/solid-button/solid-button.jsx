import "../../components/solid-button/solid-button.css";

function SolidButton({ onClick, button, text }) {
  return (
    <>
      <div className="custom-btn-container">
        <button className="custom-btn btn-1" type={button} onClick={onClick}>
          {text}
        </button>
      </div>
    </>
  );
}

export default SolidButton;
