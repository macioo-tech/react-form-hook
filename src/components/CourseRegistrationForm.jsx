import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaCourseRegistrationForm } from "../schema/SchemaCourseRegistrationForm";
import { Form, Title, ButtonSubmit } from "../styles/StyledCourseRegistrationForm"
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import SkillsForm from "./SkillsForm";

const CourseRegistrationForm = ({ setFormSubmitted, setFormData }) => {
  const [imgURL, setImgURL] = useState(null);

  const methods = useForm({
    resolver: zodResolver(SchemaCourseRegistrationForm),
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

  const { watch, handleSubmit } = methods;

  const onSubmit = (data) => {
    setFormSubmitted(true);
    setFormData({ ...data, imgURL: imgURL });
    console.log("Submitted data", data);
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImgURL(objectUrl);
    }
  };

  console.log(watch());

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>

          <Title>Dane osobowe</Title>
          <Input name="firstName" label="Imię" />
          <Input name="lastName" label="Nazwisko" />
          <Input name="email" label="E-Mail" />
          <Input name="phone" label="Nr. Telefonu" />

          <Title>Preferencje kursu</Title>
          <Radio label="Wybierz formę nauki:" name="courseType" options={["Remote", "On-site"]} />
          <Select
            name="courseTech"
            options={["React", "Node.js", "HTML", "CSS", "Next.js"]}
            multiple
          />

          <Title>Dodaj swoje CV</Title>
          <Input
            name="cvFile"
            label="Dodaj swoje CV"
            type="file"
            onChange={onFileChange}
          />

          <SkillsForm
            optionsSkill={[
              "React",
              "Node.js",
              "HTML",
              "CSS",
              "Next.js",
              "other",
            ]}
            optionsLevel={[1, 2, 3, 4, 5]}
          />

        <ButtonSubmit type="submit">Submit</ButtonSubmit>
     
      </Form>
    </FormProvider>
  );
};

export default CourseRegistrationForm;
