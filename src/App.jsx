import SolidButton from "./components/solid-button";

function App() {
  function handleMessage() {
    console.log("Clicked");
  }

  return (
    <>
      <SolidButton onShow={handleMessage}></SolidButton>
    </>
  );
}

export default App;
