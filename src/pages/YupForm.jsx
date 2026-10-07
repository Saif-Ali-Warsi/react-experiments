import { useForm } from "react-hook-form";
import InputBox from "../components/input-box/input-box";
import SolidButton from "../components/solid-button/solid-button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),

  email: yup.string().email().required("Email is required"),
});

function YupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <h4>Yup Form</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputBox {...register("name")}></InputBox>
          {errors.name && <p className="error-text">{errors.name.message}</p>}
        </div>
        <div>
          <InputBox {...register("email")}></InputBox>
          {errors.email && <p className="error-text">{errors.email.message}</p>}
        </div>

        <SolidButton type="submit" text="Submit"></SolidButton>
      </form>
    </>
  );
}

export default YupForm;
