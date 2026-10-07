import { useForm } from "react-hook-form";
import InputBox from "../components/input-box/input-box";
import SolidButton from "../components/solid-button/solid-button";

function YupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <h4>Yup Form</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBox {...register("name")}></InputBox>

        <InputBox {...register("email")}></InputBox>

        <SolidButton type="submit" text="Submit"></SolidButton>
      </form>
    </>
  );
}

export default YupForm;
