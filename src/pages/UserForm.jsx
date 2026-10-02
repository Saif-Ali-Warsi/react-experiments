import { useState } from "react";
import InputBox from "../components/input-box/input-box";
import SolidButton from "../components/solid-button/solid-button";
import SelectBox from "../components/select/Select-box";
import CheckBox from "../components/checkbox/CheckBox";

function UserForm({ onUserSubmit }) {
  const [formData, setFormData] = useState({
    userName: "",
    userRole: "",
    userCity: "",
    isActive: false,
  });

  function submitUserForm(event) {
    event.preventDefault();

    onUserSubmit({
      userName: formData.userName,
      userRole: formData.userRole,
      userCity: formData.userCity,
      isActive: formData.isActive,
    });
  }

  return (
    <>
      <h1>User Form</h1>
      <form onSubmit={submitUserForm}>
        <CheckBox
          label="Active"
          checked={formData.isActive}
          onChange={(event) =>
            setFormData({ ...formData, isActive: event.target.checked })
          }
        ></CheckBox>

        <InputBox
          type="text"
          placeholder="Enter User Name"
          value={formData.userName}
          onChange={(event) =>
            setFormData({
              ...formData,
              userName: event.target.value,
            })
          }
        ></InputBox>

        <SelectBox
          value={formData.userRole}
          onChange={(event) =>
            setFormData({ ...formData, userRole: event.target.value })
          }
        ></SelectBox>

        <InputBox
          type="text"
          placeholder="Enter User City"
          value={formData.userCity}
          onChange={(event) =>
            setFormData({ ...formData, userCity: event.target.value })
          }
        ></InputBox>

        <SolidButton type="submit" text="SUBMIT"></SolidButton>
      </form>
    </>
  );
}

export default UserForm;
