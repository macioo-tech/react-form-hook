import { useFormContext } from "react-hook-form";

const Select = ({ options, name, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message;

  return (
    <div>
      <select {...register(name)} {...rest} multiple>
        <optgroup>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </optgroup>
      </select>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Select;
