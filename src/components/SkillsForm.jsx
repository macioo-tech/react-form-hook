import {
  useFieldArray,
  Controller,
  useWatch,
  useFormContext,
} from "react-hook-form";

const SkillsForm = ({ optionsSkill, optionsLevel }) => {
  const { register, control, reset, watch } = useFormContext({
    defaultValues: {
      skills: [{ skill: "JS", level: 1 }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({
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
                Delete
              </button>
            </li>
          );
        })}
      </ul>
  );
};

export default SkillsForm;
