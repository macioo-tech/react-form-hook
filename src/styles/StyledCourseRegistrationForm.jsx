import styled, { css } from "styled-components";

export const Form = styled.form`
  width: 450px;
  padding: 10px;
  margin: 10px;
  
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  background: #3b3f47;
  border-radius: 6px;

  font-size: 12px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #ff9800;
`;

export const ErrorText = styled.p`
  font-size: 10px;
  color: #e10b0b;
`;

export const FormButton = styled.button`
  width: 100%;
  height: 30px;
  padding: 0em;
  
  background: #3d34ebe2;
  border-radius: 0.5em;
  border: none;

  font-size: 1em;
  color: white;

  cursor: pointer;

  ${(props) =>
    css`
      background: ${props.color}
    `
  }

`;
