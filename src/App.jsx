import { useState } from "react";
import UserPage from "./pages/UserPage";
import UserForm from "./pages/UserForm";
import UserList from "./pages/UserList";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <>
      <div className="d-flex">
        <div className="left-section">
          <UserForm onUserSubmit={setUserData}></UserForm>

          <UserList></UserList>
        </div>

        <div className="right-section">
          <UserPage user={userData}></UserPage>
        </div>
      </div>
    </>
  );
}

export default App;
