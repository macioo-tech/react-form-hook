import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  first: z
    .string()
    .min(3, { message: "Imię musi się składać z conajmniej 3 znaków" }),
  second: z
    .string()
    .min(3, { message: "Nazwisko musi się składać z conajmniej 3 znaków" }),
  email: z
    .string()
    .min(3, { message: "Niepoprawny adres e-mail" })
    .email("Niepoprawny adres e-mail"),
  phone: z
    .string()
    .regex(/^\d{9}$/, "Numer telefonu musi składać się z 9 cyfr"),
});

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => console.log(data);

  console.log(watch("second"));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="persona">Dane osobowe</label>
        </div>
        <input {...register("first")} placeholder="Imię" />
        {errors.first?.message && <p>{errors.first?.message}</p>}
        <input {...register("second")} placeholder="Nazwisko" />
        {errors.second?.message && <p>{errors.second?.message}</p>}
        <input {...register("email")} placeholder="E-mail" />
        {errors.email?.message && <p>{errors.email?.message}</p>}
        <input {...register("phone")} placeholder="Numer telefonu" />
        {errors.phone?.message && <p>{errors.phone?.message}</p>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormComponent;
