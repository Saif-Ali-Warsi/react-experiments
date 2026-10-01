import UserPage from "./pages/UserPage";
import UserForm from "./pages/UserForm";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="left-section">
          <UserForm></UserForm>
        </div>

        <div className="right-section">
          <UserPage></UserPage>
        </div>
      </div>
    </>
  );
}

export default App;
