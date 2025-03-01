import { z } from "zod";

export const SchemaCourseRegistrationForm = z.object({
  firstName: z
    .string()
    .min(3, { message: "Imię musi się składać z conajmniej 3 znaków" }),
  lastName: z
    .string()
    .min(3, { message: "Nazwisko musi się składać z conajmniej 3 znaków" }),
  email: z
    .string()
    .min(3, { message: "Niepoprawny adres e-mail" })
    .email("Niepoprawny adres e-mail"),
  phone: z
    .string()
    .regex(/^\d{9}$/, "Numer telefonu musi składać się z 9 cyfr"),
  courseType: z.string().min(1, { message: "Wybierz formę nauki" }),
  courseTech: z
    .array(z.string())
    .min(1, { message: "Wybierz conajmniej jednś technologię" }),
   cvFile: z
     .any()
     .refine(
       (files) =>
         ["image/jpeg", "imaghe/jpg" , "image/png"].includes(files[0]?.type),
       {
         message:
           "Niepoprawny typ pliku.",
       }
     ),
});
