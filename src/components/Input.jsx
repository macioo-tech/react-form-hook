import { useFormContext } from "react-hook-form";
import { ErrorText } from "../styles/App";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 12px;
  width: 100%;
  padding: 10px;
  background:#464646;
  border: 1px solid #5c5c5c;
  color: white;
  border-radius: 6px;
  height: auto;
  display: block;
  overflow: hidden;
  outline: none;
  border-radius: 6px;
`

const Input = ({ name, label, type = "text", ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message;

  return (
    <div>
      <StyledInput {...register(name)} {...rest} type={type} placeholder={label} />
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </div>
  );
};

export default Input;
