

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SmartForm = ({ schema, defaultValues, children }) => {
  const methods = useForm({ defaultValues, resolver: zodResolver(schema) });
  const {
    handleSubmit,
  } = methods;

  const onSubmit = (data) => console.log(data);

  //console.log(watch());
  //console.log(errors.children?.message)

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
      <button type="submit">Wyślij zgłoszenie</button>
    </FormProvider>
  );
};

export default SmartForm;
