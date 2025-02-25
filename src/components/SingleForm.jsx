import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  firstname: z
    .string()
    .min(3, { message: "Imię musi się składać z conajmniej 3 znaków" }),
  "last name": z
    .string()
    .min(3, { message: "Nazwisko musi się składać z conajmniej 3 znaków" }),
  email: z
    .string()
    .min(3, { message: "Niepoprawny adres e-mail" })
    .email("Niepoprawny adres e-mail"),
  phone: z
    .string()
    .regex(/^\d{9}$/, "Numer telefonu musi składać się z 9 cyfr"),
  coursetype: z.string(),
});

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => console.log(data);

  console.log(watch("first name1"));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Dane osobowe</h4>
        <input {...register("firstname")} placeholder="Imię" />
        {errors.firstname?.message && <p>{errors.firstname?.message}</p>}
        <input {...register("lastname")} placeholder="Nazwisko" />
        {errors.lastname?.message && <p>{errors.lastname?.message}</p>}
        <input {...register("email1")} placeholder="E-mail" />
        {errors.email?.message && <p>{errors.email?.message}</p>}
        <input {...register("phone1")} placeholder="Numer telefonu" />
        {errors.phone?.message && <p>{errors.phone?.message}</p>}
        <h4>Preferencje kursu</h4>
        <input
          {...register("course type1")}
          type="radio"
          id="stationary"
          value="stationary"
        />
        <label htmlFor="stationary">Stacjonarnie</label>
        <input
          {...register("course type1")}
          type="radio"
          id="remote"
          value="remote"
          defaultChecked
        />
        <label htmlFor="stationary">Zdalnie</label>
        <select {...register("course technology1")} multiple size={6}>
          <optgroup>
            <option value="react">React</option>
            <option value="node-js">Node.js</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="next-js">Next.js</option>
          </optgroup>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormComponent;
