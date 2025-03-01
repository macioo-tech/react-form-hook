import { useFieldArray, useFormContext } from "react-hook-form";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const SelectExperiences = () => {
  const [showExperience, setShowExperience] = useState(false);
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const handleClick = () => {
    append({ technology: "JavaScript" });
  };

  return (
    <div>
      <Input
        name="addExperience"
        type="checkbox"
        onChange={() => setShowExperience(!showExperience)}
      />
      {showExperience && (
        <div>
          <Button value="Dodaj doświadczenie" onClick={handleClick()} />
          {fields.map((item, index) => (
            <div key={item.id}>
              <select {...register(`experience.${index}.technology`)} id="technology">
                <option>JavaScript</option>
                <option>Python</option>
                <option>C++</option>
                <option>Inne</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectExperiences;
