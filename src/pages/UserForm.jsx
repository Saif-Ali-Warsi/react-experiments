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

  const [errors, setErrors] = useState({});

  function submitUserForm(event) {
    event.preventDefault();

    const newErrors = {};

    if (!formData.userName.trim()) {
      newErrors.userName = "User Name is required";
    }

    if (!formData.userRole) {
      newErrors.userRole = "User Role is Required";
    }

    if (!formData.userCity.trim()) {
      newErrors.userCity = "User City is Required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    onUserSubmit(formData);

    setFormData({
      userName: "",
      userRole: "",
      userCity: "",
      isActive: false,
    });

    setErrors({});
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

        <div>
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

          {errors.userName && <p>{errors.userName}</p>}
        </div>

        <div>
          <SelectBox
            value={formData.userRole}
            onChange={(event) =>
              setFormData({ ...formData, userRole: event.target.value })
            }
          ></SelectBox>

          {errors.userRole && <p>{errors.userRole}</p>}
        </div>

        <div>
          <InputBox
            type="text"
            placeholder="Enter User City"
            value={formData.userCity}
            onChange={(event) =>
              setFormData({ ...formData, userCity: event.target.value })
            }
          ></InputBox>

          {errors.userCity && <p>{errors.userCity}</p>}
        </div>

        <SolidButton type="submit" text="SUBMIT"></SolidButton>
      </form>
    </>
  );
}

export default UserForm;
