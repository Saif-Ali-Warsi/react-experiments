import { Link, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function Dashboard({ propDrillData }) {
  return (
    <>
      <h4>Dashoard !!</h4>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Outlet />

      {/* <SideBar propDrillData={propDrillData}></SideBar> */}
    </>
  );
}

export default Dashboard;
