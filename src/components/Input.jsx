import { useFormContext } from "react-hook-form";
import { ErrorText } from "../styles/StyledCourseRegistrationForm";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 97%;
  height: 30px;
  padding: 0.5em;

  background:#464646;
  border-radius: 0.5em;
  border: none;

  font-size: 1em;
  color: white;
`;

const Input = ({ name, label, type = "text", ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message;

  return (
    <div>
      <StyledInput
        {...register(name)}
        {...rest}
        type={type}
        placeholder={label}
      />
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </div>
  );
};

export default Input;
