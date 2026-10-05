import { useState } from "react";
import UserForm from "../pages/UserForm";
import UserList from "../pages/UserList";
import ServerUsers from "../pages/ServerUsers";
import ProductList from "../pages/ProductList";
import { MsgContext } from "../contexts/MsgContext";
import Dashboard from "../pages/Dashboard";
import UserPage from "../pages/UserPage";

function HomePage() {
  const [userData, setUserData] = useState(null);

  const propDrillData = { title: "prop drilling data" };

  const ImpMsg = {
    title: "React Experiments from context",
  };

  return (
    <>
      <div className="d-flex">
        <div className="left-section">
          <Dashboard propDrillData={propDrillData}></Dashboard>

          <MsgContext.Provider value={ImpMsg}>
            <ProductList />
          </MsgContext.Provider>

          <UserForm onUserSubmit={setUserData} />

          <ServerUsers />

          <UserList />
        </div>

        <div className="right-section">
          <UserPage user={userData} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
