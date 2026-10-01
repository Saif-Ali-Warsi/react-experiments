import { useState } from "react";
import UserPage from "./pages/UserPage";
import UserForm from "./pages/UserForm";

function App() {
  const [userData, setUserData] = useState(null);
  return (
    <>
      <div className="main-container">
        <div className="left-section">
          <UserForm onUserSubmit={setUserData}></UserForm>
        </div>

        <div className="right-section">
          <UserPage user={userData}></UserPage>
        </div>
      </div>
    </>
  );
}

export default App;
