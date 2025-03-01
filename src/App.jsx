import { useState } from "react";
import CourseRegistrationForm from "./components/CourseRegistrationForm";
import CourseRegistrationSummary from "./components/CourseRegistrationSummary";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  return (
    <>
      {formSubmitted ? (
        <div>
          <h1>Dane z formularza</h1>
          <CourseRegistrationSummary formData={formData} />
        </div>
      ) : (
        <div>
          <h1>Fromularz zgłoszeniowy na kurs programowania</h1>
          <CourseRegistrationForm setFormSubmitted={setFormSubmitted} setFormData={setFormData}/>
        </div>
      )}
    </>
  );
}

export default App;
