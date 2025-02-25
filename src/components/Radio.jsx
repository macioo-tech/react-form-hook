import { useFormContext } from "react-hook-form";

const Radio = ({ options, name, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message;

  return (
    <div>
      {options.map((item) => (
        <label key={item}>
          <input {...register(name)} {...rest} type="radio" value={item} />
          <span>{item}</span>
        </label>
      ))}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Radio;
