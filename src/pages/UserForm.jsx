import { useState } from "react";
import InputBox from "../components/input-box/input-box";
import SolidButton from "../components/solid-button/solid-button";
import SelectBox from "../components/select/Select-box";

function UserForm({ onUserSubmit }) {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userCity, setUserCity] = useState("");

  function submitUserForm(event) {
    event.preventDefault();

    onUserSubmit({
      userName,
      userRole,
      userCity,
    });
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

        <SelectBox
          value={userRole}
          onChange={(event) => setUserRole(event.target.value)}
        ></SelectBox>

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
