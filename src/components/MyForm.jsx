import { useState } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaForm } from "../schema/SchemaForm";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Button from "./Button";

const MyForm = ({ onSubmit }) => {
  // SKILLS
  const [showSkills, setShowSkills] = useState(false);

  const methods = useForm({
    resolver: zodResolver(SchemaForm),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: undefined,
      courseType: "Remote",
      courseTechnology: undefined,
    },
  });

  const { register, control, watch, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  // SKILLS
const initSkills = () => {
  remove();
  setShowSkills(!showSkills);
}
  

  const addSkills = () => {
    append({ skill: "JS", level: "2" });
    console.log(fields)
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
            name="courseTechnology"
            options={["React", "Node.js", "HTML", "CSS", "Next.js"]}
          />
        </section>

        <section>
          <h2>Dodaj swoje CV</h2>
          <Input name="cvFile" label="Dodaj swoje CV" type="file" />
        </section>

        {/* SKILLS under dev */}

        <section>
          <h2>Doświadczenie w programowaniu</h2>
          <Input
            name="addExperience"
            type="checkbox"
            onChange={initSkills}
          />
          {showSkills && (
            <div>
              <button onClick={addSkills}>
                Dodaj doświadczenie
              </button>
              {/* {fields.map((item, index) => {
                <li key={item.id}>
                  <p>{item.skill}</p>
                  <p>{item.level}</p>
                  <select {...register(`skills.${index}.skill`)}>
                    <option>Java</option>
                    <option>Js</option>
                    <option>gg</option>
                  </select>

                  <select {...register(`skills.${index}.level`)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <button onClick={remove(index)}>Usuń</button>
                </li>
              })} */}
            </div>
          )}
        </section>

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default MyForm;
