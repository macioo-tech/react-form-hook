import { useState } from "react";
import CourseRegistrationForm from "./components/CourseRegistrationForm";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      {formSubmitted ? (
        <div>
          <h1>Dane z formularza</h1>
        </div>
      ) : (
        <div>
          <h1>Fromularz zgłoszeniowy na kurs programowania</h1>
          <CourseRegistrationForm setFormSubmitted={setFormSubmitted}/>
        </div>
      )}
    </>
  );
}

export default App;
