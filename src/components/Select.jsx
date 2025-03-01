import { useFormContext } from "react-hook-form";
import { ErrorText } from "../styles/App";
import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 14px;
  width: 100%;
  padding: 10px;
  background:rgb(70, 75, 84);
  border: 1px solid #666;
  color: white;
  border-radius: 6px;
  height: auto;
  display: block;
  overflow: hidden;
  outline: none;
  border-radius: 6px;
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
