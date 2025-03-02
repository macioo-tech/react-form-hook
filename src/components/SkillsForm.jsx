import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
  Title,
  FormButton,
  ErrorText,
} from "../styles/StyledCourseRegistrationForm";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledLabel = styled.span`
  font-size: 1em;
  color: white;
`;

const StyledSelect = styled.select`
  width: 33%;
  height: 100%;
  padding: 1em;

  background: #4a4f58;
  border: 1px solid #666;
  border-radius: 0.5em;
  outline: none;
  appearance: none;

  font-size: 1em;
  color: white;
`;

const DeleteButton = styled.button`
  width: 33%;
  height: 100%;
  padding: 1em;

  background: #ff0000;
  border-radius: 0.5em;
  border: none;

  flex-shrink: 0;

  font-size: 1em;
  color: white;

  cursor: pointer;
  &:hover {
    background: #cc0000;
  }
`;

const Raw = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
`;

const SkillsForm = ({ optionsSkill, optionsLevel }) => {
  const [showSkillsForm, setShowSkillsForm] = useState(false);

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const toggleSkillsForm = () => {
    if (showSkillsForm) {
      remove();
    } else {
      append({ skill: "React", level: 1 });
    }
    setShowSkillsForm(!showSkillsForm);
  };

  return (
    <Container>
      <Title>Doświadczenie w programowaniu</Title>
      <div>
        <input type="checkbox" onChange={toggleSkillsForm} />
        <StyledLabel>Czy masz doświadczenie w programowaniu ?</StyledLabel>
      </div>

      {showSkillsForm && (
        <FormButton
          type="button"
          onClick={() => {
            append({ skill: "React", level: 1 });
          }}
          color="green"
        >
          Dodaj doświadczenie
        </FormButton>
      )}
      {fields.map((item, index) => {
        return (
          <Raw key={item.id}>
            <StyledSelect {...register(`skills.${index}.skill`)}>
              {optionsSkill.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </StyledSelect>

            <StyledSelect {...register(`skills.${index}.level`)}>
              {optionsLevel.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </StyledSelect>

            <DeleteButton type="button" onClick={() => remove(index)}>
              Usuń
            </DeleteButton>

            <ErrorText>{errors?.skills?.[index]?.skill?.message}</ErrorText>
            <ErrorText>{errors?.skills?.[index]?.level?.message}</ErrorText>
          </Raw>
        );
      })}
    </Container>
  );
};

export default SkillsForm;
