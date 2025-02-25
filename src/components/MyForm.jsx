import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaForm } from "../schema/SchemaForm";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";

const MyForm = ({ onSubmit }) => {
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

  const { watch, handleSubmit } = methods;
  console.log(watch())

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="firstName" label="Imię" />
        <Input name="lastName" label="Nazwisko" />
        <Input name="email" label="E-Mail" />
        <Input name="phone" label="Nr. Telefonu" />
        <Radio name="courseType" options={["Remote", "On-site"]} />
        <Select
          name="courseTechnology"
          options={["React", "Node.js", "HTML", "CSS", "Next.js"]}
        />
        <Input name="cvFile" label="Dodaj swoje CV" type="file" />
        <Input name="addExperience" label="Doświadczenie" type="checkbox" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default MyForm;
