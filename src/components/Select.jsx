import { useFormContext } from "react-hook-form";
import { ErrorText } from "../styles/StyledCourseRegistrationForm";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  padding: 0.5em;

  background:#464646;
  border-radius: 0.5em;
  border: none;

  font-size: 1em;
  color: white;
`;

const Select = ({ options, name, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message;

  return (
    <div>
      <StyledSelect {...register(name)} {...rest}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </StyledSelect>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </div>
  );
};

export default Select;
