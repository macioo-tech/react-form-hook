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
          <Container>
            <Title>Dane z formularza</Title>
            <CourseRegistrationSummary formData={formData} />
          </Container>
        </div>
      ) : (
        <div>
          <Container>
            <Title>Fromularz zgłoszeniowy na kurs programowania</Title>
            <CourseRegistrationForm
              setFormSubmitted={setFormSubmitted}
              setFormData={setFormData}
            />
          </Container>
        </div>
      )}
    </>
  );
}

export default App;
