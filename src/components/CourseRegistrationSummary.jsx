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

  const { firstName, lastName, email, phone, courseType, courseTech, cv } =
    formData;

  const fileToUrl = (file) => {
    if (file) return URL.createObjectURL(file);
  };

  // console.log(fileToUrl(cvFile[0]))

  return (
    <Form>
      <Title>Dane osobowe</Title>
      <StyledText>Imię: {firstName}</StyledText>
      <StyledText>Nazwisko: {lastName}</StyledText>
      <StyledText>Email: {email}</StyledText>
      <StyledText>Telefon: {phone}</StyledText>

      {/* {formData.skills?.length > 0 && <Title>Doświadczenie w programowaniu:</Title>}
      <List>
        {formData.skills.map(({ skill, level }, index) => (
          <ListItem key={index}>
            technologia: {skill} / poziom {level}
          </ListItem>
        ))}
      </List> */}

      <Title>Preferencje kursu:</Title>
      <StyledText>Typ kursu: {courseType}</StyledText>
      <StyledText>Preferowane technologie kursu:</StyledText>
      <List>
        {courseTech.map((tech, index) => {
          return <ListItem key={index}>{tech}</ListItem>;
        })}
      </List>

      <Title>Curriculum Vitae:</Title>
      <ImageContainer>
        {cv && <Image src={fileToUrl(cv[0])} />}
      </ImageContainer>
    </Form>
  );
};

export default CourseRegistrationSummary;
