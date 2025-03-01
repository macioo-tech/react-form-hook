import { useState } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaForm } from "../schema/SchemaForm";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Button from "./Button";

const CourseRegistrationForm = ({ setFormSubmitted, setFormData }) => {
  const [showSkills, setShowSkills] = useState(false);

  const methods = useForm({
    resolver: zodResolver(SchemaForm),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: undefined,
      courseType: "Remote",
      courseTech: undefined,
      skills: [],
    },
  });

  const { register, control, watch, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = (data) => {
    setFormSubmitted(true);
    setFormData({...data});
  };

  const initSkills = () => {
    remove();
    setShowSkills(!showSkills);
  };

  const addSkills = () => {
    append({ skill: "dupa", level: "blada" });
    console.log(fields);
  };

  console.log(watch());

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <h2>Dane osobowe</h2>
          <Input name="firstName" label="Imię" />
          <Input name="lastName" label="Nazwisko" />
          <Input name="email" label="E-Mail" />
          <Input name="phone" label="Nr. Telefonu" />
        </section>

        <section>
          <h2>Preferencje kursu</h2>
          <Radio name="courseType" options={["Remote", "On-site"]} />
          <Select
            name="courseTech"
            options={["React", "Node.js", "HTML", "CSS", "Next.js"]}
            multiple
          />
        </section>

        <section>
          <h2>Dodaj swoje CV</h2>
          <Input name="cvFile" label="Dodaj swoje CV" type="file" />
        </section>

        {/* SKILLS under dev */}

        <section>
          <h2>Doświadczenie w programowaniu</h2>
          <label htmlFor="experience">
            Czy masz doświadczenie w programowaniu ?
            <input name="experience" type="checkbox" onChange={initSkills} />
          </label>
          {showSkills && (
            <div>
              <Button label="Dodaj doświadczenie" onClick={addSkills} />
              <ul>
                {fields.map((item, index) => {
                  <li key={item.id}>
                    {item.skill}
                    <button onClick={() => remove(index)}>Usuń</button>
                  </li>;
                })}
              </ul>
            </div>
          )}
        </section>

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default CourseRegistrationForm;
