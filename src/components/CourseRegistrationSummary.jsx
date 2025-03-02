import { useState } from "react";
import { Form, Title } from "../styles/StyledCourseRegistrationForm";
import styled from "styled-components";

const StyledText = styled.p`
  padding: 0px;
  margin: 0px;
  font-size: 1em;
  color: white;
`;

const List = styled.ul`
  list-style-position: inside;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-left: 0;
`;

const ImageContainer = styled.div`
  max-width: 400px;
  overflow: auto;
  resize: horizontal;
`;

const Image = styled.img`
  max-width: 100%;
  display: block;
`;

const CourseRegistrationSummary = ({ formData }) => {
  // const [imgURL, setImgURL] = useState(null);

  const renderFromFile = () => {
    if (formData.cvFile && formData.cvFile.length > 0) {
      const file = formData.cvFile[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        console.log(objectUrl);
        return <Image>src={objectUrl}</Image>
      }
    }
  };

  return (
    <Form>
      <Title>Dane osobowe</Title>
      <StyledText>Imię: {formData.firstName}</StyledText>
      <StyledText>Nazwisko: {formData.lastName}</StyledText>
      <StyledText>Email: {formData.email}</StyledText>
      <StyledText>Telefon: {formData.phone}</StyledText>

      {/* {formData.skills?.length > 0 && <Title>Doświadczenie w programowaniu:</Title>}
      <List>
        {formData.skills.map(({ skill, level }, index) => (
          <ListItem key={index}>
            technologia: {skill} / poziom {level}
          </ListItem>
        ))}
      </List> */}

      <Title>Preferencje kursu:</Title>
      <StyledText>Typ kursu: {formData.courseType}</StyledText>
      <StyledText>Preferowane technologie kursu:</StyledText>
      <List>
        {formData.courseTech.map((tech, index) => {
          return <ListItem key={index}>{tech}</ListItem>;
        })}
      </List>

      <Title>Curriculum Vitae:</Title>
      <ImageContainer>
        <Image src={formData.imgURL}></Image>
        {() => renderFromFile()}
      </ImageContainer>
    </Form>
  );
};

export default CourseRegistrationSummary;
