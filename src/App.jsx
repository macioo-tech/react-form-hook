import { useState } from "react";
import { Title, Container } from "./styles/App";
import CourseRegistrationForm from "./components/CourseRegistrationForm";
import CourseRegistrationSummary from "./components/CourseRegistrationSummary";


function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  return (
    <>
      {formSubmitted ? (
        <div>
          <Title>Dane z formularza</Title>
          <Container><CourseRegistrationSummary formData={formData} /></Container>
          
        </div>
      ) : (
        <div>
          <Title>Fromularz zgłoszeniowy na kurs programowania</Title>
          <Container><CourseRegistrationForm setFormSubmitted={setFormSubmitted} setFormData={setFormData}/></Container>
          
        </div>
      )}
    </>
  );
}

export default App;
