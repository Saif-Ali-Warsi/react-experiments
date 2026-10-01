import { useState } from "react";
import InputBox from "../components/input-box/input-box";
import SolidButton from "../components/solid-button/solid-button";

function UserForm() {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userCity, setUserCity] = useState("");

  function submitUserForm() {
    event.preventDefault();

    console.log(userName);
    console.log(userRole);
    console.log(userCity);
  }

  return (
    <>
      <h1>User Form</h1>
      <form onSubmit={submitUserForm}>
        <InputBox
          type="text"
          placeholder="Enter User Name"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></InputBox>

        <InputBox
          type="text"
          placeholder="Enter User Role"
          value={userRole}
          onChange={(event) => setUserRole(event.target.value)}
        ></InputBox>

        <InputBox
          type="text"
          placeholder="Enter User City"
          value={userCity}
          onChange={(event) => setUserCity(event.target.value)}
        ></InputBox>

        <SolidButton type="type" text="SUBMIT"></SolidButton>
      </form>
    </>
  );
}

export default UserForm;
