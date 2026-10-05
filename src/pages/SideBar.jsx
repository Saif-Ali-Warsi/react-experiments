import Profile from "./Profile";


function SideBar({propDrillData}) {
  return (
    <>
      <h4>Side bar!!</h4>

      <Profile  propDrillData={propDrillData}></Profile>
    </>
  );
}

export default SideBar;
