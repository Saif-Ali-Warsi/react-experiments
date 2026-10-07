import { Link, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function Dashboard({ propDrillData }) {
  return (
    <>
      <h4>Dashoard !!</h4>
      <nav>
        <Link to="profile" className="link">Profile</Link>
        <Link to="posts" className="link">Posts</Link>
        <Link to="posts-with-hook" className="link">Posts with Hooks</Link>
        <Link to="yup-form" className="link">Go to Yup Form</Link>
        <Link to="settings" className="link">Settings</Link>
      </nav>

      <Outlet />

      {/* <SideBar propDrillData={propDrillData}></SideBar> */}
    </>
  );
}

export default Dashboard;
