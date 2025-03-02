import { z } from "zod";

const skillsSchema = z.object({
  skill: z.string().min(3, {message: 'Nazwa musi mieć conajmniej 2 znaki'}),
  level: z.number().min(1, {message: "Wartość nie moe być mniejsza od 1"}).max(5, {message: 'Wartość nie moze być większa od 5'}),
})

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
    .min(1, { message: "Wybierz conajmniej jedną technologię" }),
  cv: z
    .any()
    .refine(
      (files) =>
        ["image/jpeg", "imaghe/jpg", "image/png"].includes(files[0]?.type),
      {
        message: "Musisz dodać załącznik jako zdjęcie",
      }
    ),
  skills: z.array(skillsSchema).length(1, {
    message:
      "Gdy zaznaczono doświadczenie w programowaniu, lista doświadczeń nie mie być pusta",
  }),
});
