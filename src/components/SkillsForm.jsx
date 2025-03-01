import { useFieldArray, useFormContext } from "react-hook-form";

const SkillsForm = ({ optionsSkill, optionsLevel }) => {
  const { register, control } = useFormContext({
    defaultValues: {
      skills: [{ skill: "JS", level: 1 }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  return (
    <ul>
      <button
        type="button"
        onClick={() => {
          append({ skill: "React", level: 1 });
        }}
      >
        Dodaj doświadczenie
      </button>

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
  );
};

export default SkillsForm;
