import { useFormContext } from "react-hook-form";

const Input = ({ name, label, type = "text" }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message;

  return (
    <div>
      <input {...register(name)} type={type} placeholder={label} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
