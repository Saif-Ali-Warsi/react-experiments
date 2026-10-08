import { useForm } from "react-hook-form";
import InputBox from "../components/input-box/input-box";
import SolidButton from "../components/solid-button/solid-button";

function DefaultValuesForm() {
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      role: "Frontend Developer",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  function handleResetForm() {
    reset();
  }

  return (
    <>
      <p>Default values Form</p>

      <p>{watch("name")}</p>
      <p>{watch("email")}</p>
      <p>{watch("role")}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputBox placeholder="Enter Name" {...register("name")}></InputBox>
        </div>

        <div>
          <InputBox placeholder="Enter Email" {...register("email")}></InputBox>
        </div>

        <div>
          <InputBox placeholder="Enter Role" {...register("role")}></InputBox>
        </div>

        <SolidButton text="Submit"></SolidButton>
        <SolidButton
        type="button"
          onClick={handleResetForm}
          text={"Reset Form"}
        ></SolidButton>
      </form>
    </>
  );
}

export default DefaultValuesForm;
