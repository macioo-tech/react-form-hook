
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaCourseRegistrationForm } from "../schema/SchemaCourseRegistrationForm";
import {
  Form,
  Title,
  FormButton,
} from "../styles/StyledCourseRegistrationForm";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import SkillsForm from "./SkillsForm";

const CourseRegistrationForm = ({ setFormSubmitted, setFormData }) => {

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

  const optionsTech = ["React", "Node.js", "HTML", "CSS", "Next.js"];
  const optionsSkills = [...optionsTech, "other"];
  const optionsLevel = [1, 2, 3, 4, 5];

  const onSubmit = (data) => {
    setFormSubmitted(true);
    setFormData({ ...data });
    console.log("Submitted data", data);
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
        <Radio
          label="Wybierz formę nauki:"
          name="courseType"
          options={["Remote", "On-site"]}
        />
        <Select
          name="courseTech"
          options={optionsTech}
          multiple
          size={optionsTech.length}
        />

        <Title>Dodaj swoje CV</Title>
        <Input
          name="cvFile"
          label="Dodaj swoje CV"
          type="file"
        />

        <SkillsForm
          optionsSkill={optionsSkills}
          optionsLevel={optionsLevel}
        />

        <FormButton type="submit">Submit</FormButton>
      </Form>
    </FormProvider>
  );
};

export default CourseRegistrationForm;
