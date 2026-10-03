import { useState } from "react";
import UserPage from "./pages/UserPage";
import UserForm from "./pages/UserForm";
import UserList from "./pages/UserList";
import ServerUsers from "./pages/ServerUsers";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <>
      <div className="d-flex">
        <div className="left-section">
          <UserForm onUserSubmit={setUserData}></UserForm>

          <ServerUsers></ServerUsers>
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
