const CourseRegistrationSummary = ({ formData }) => {
  return (
    <div>
      <h2>Dane osobowe</h2>
      <div>
        <p>Imię: {formData.firstName}</p>
        <p>Nazwisko: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Telefon: {formData.phone}</p>
      </div>

      {/* {formData.skills.length > 0 && <h2>Doświadczenie w programowaniu:</h2>}
      <ul>
        {formData.skills.map(({ skill, level }, index) => (
          <li key={index}>
            technologia: {skill} / poziom {level}
          </li>
        ))}
      </ul> */}

      <h2>Preferencje kursu:</h2>
      <div>
        <p>Typ kursu: {formData.courseType}</p>
        <h3>Preferowane technologie:</h3>
        <ul>
          {formData.courseTech.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })}
        </ul>
      </div>
      <h2>Curriculum Vitae:</h2>
      <img src={formData.imgURL}></img>
    </div>
  );
};

export default CourseRegistrationSummary;
