import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

const SkillsForm = ({ optionsSkill, optionsLevel }) => {
  const [showSkillsForm, setShowSkillsForm] = useState(false);

  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const toggleSkillsForm = () => {
    if (showSkillsForm) {
      remove();
    } else {
      append({ skill: "React", level: 1 });
    }
    setShowSkillsForm(!showSkillsForm);
  };

  return (
    <div>
      <h2>Doświadczenie w programowaniu</h2>
      <label htmlFor="experience">
        Czy masz doświadczenie w programowaniu ?
        <input name="experience" type="checkbox" onChange={toggleSkillsForm} />
      </label>
      <ul>
        {showSkillsForm && (
          <button
            type="button"
            onClick={() => {
              append({ skill: "React", level: 1 });
            }}
          >
            Dodaj doświadczenie
          </button>
        )}
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <select {...register(`skills.${index}.skill`)}>
                {optionsSkill.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <select {...register(`skills.${index}.level`)}>
                {optionsLevel.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <button type="button" onClick={() => remove(index)}>
                Usuń
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsForm;
