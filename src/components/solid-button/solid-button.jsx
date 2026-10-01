import "../../components/solid-button/solid-button.css"

function SolidButton({onShow}) {
  return (
    <>
      <button className="custom-btn btn-1" onClick={onShow}>Submit</button>
    </>
  );
}

export default SolidButton;
