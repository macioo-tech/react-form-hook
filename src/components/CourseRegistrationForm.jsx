import { useState } from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaForm } from "../schema/SchemaForm";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Button from "./Button";
import SkillsForm from "./SkillsForm";

const CourseRegistrationForm = ({ setFormSubmitted, setFormData }) => {
  const [imgURL, setImgURL] = useState(null);
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
    console.log("Submitted data", data);
    setFormSubmitted(true);
    setFormData({ ...data, imgURL: imgURL });
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImgURL(objectUrl);
    }
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
          <Input
            name="cvFile"
            label="Dodaj swoje CV"
            type="file"
            onChange={onFileChange}
          />
        </section>

        <section>
          <h2>Doświadczenie w programowaniu</h2>
          <label htmlFor="experience">
            Czy masz doświadczenie w programowaniu ?
            <input name="experience" type="checkbox" onChange={initSkills} />
          </label>
          {showSkills && (
            <SkillsForm
              optionsSkill={["React", "Node.js", "HTML", "CSS", "Next.js"]}
              optionsLevel={[1, 2, 3, 4, 5]}
            />
          )}
        </section>

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default CourseRegistrationForm;
