import styled from "styled-components";

const StyledButton = styled.button`
  color: blue;
`;

const Button = ({ label, onClick, ...rest }) => {
  return (
    <StyledButton {...rest} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
