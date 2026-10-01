import { useState } from "react";
import InputBox from "../components/input-box/input-box";
import SolidButton from "../components/solid-button/solid-button";

function UserPage() {
  const [search, setSearch] = useState("");

  function handleClick() {
    console.log("Clicked");
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <p>{search}</p>
      <InputBox
        type="text"
        placeholder="Type something.."
        onChange={handleChange}
      ></InputBox>
      <SolidButton onShow={handleClick}></SolidButton>
    </>
  );
}

export default UserPage;
