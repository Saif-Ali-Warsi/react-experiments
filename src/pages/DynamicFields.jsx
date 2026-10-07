import { useForm, useFieldArray } from "react-hook-form";
import InputBox from "../components/input-box/input-box";
import SolidButton from "../components/solid-button/solid-button";

function DynamicFields() {
  const { control, register } = useForm({
    defaultValues: {
      requirements: [{ sills: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "requirements",
  });

  return (
    <>
      <h4>Dynamic Fields</h4>

      <div>
        {fields.map((field, index) => (
          <div key={field.id} className="d-flex gap-20">
            <InputBox
              placeholder="Enter Skill"
              {...register(`requirements.${index}.skills`)}
            />

            <SolidButton onClick={() => remove(index)} text={"Remove"} />
          </div>
        ))}

        <SolidButton
          onClick={() => append({ skill: "" })}
          text={"Add Requirements"}
        />
      </div>
    </>
  );
}

export default DynamicFields;
