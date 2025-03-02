import { useFormContext } from "react-hook-form";
import { ErrorText } from "../styles/StyledCourseRegistrationForm";
import styled from "styled-components";

const StyledLabel = styled.span`
    font-size: 1em;
    color: white;
`

const Radio = ({ label, options, name, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message;

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      {options.map((item) => (
        <label key={item}>
          <input {...register(name)} {...rest} type="radio" value={item} />
          <span>{item}</span>
        </label>
      ))}
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </div>
  );
};

export default Radio;
