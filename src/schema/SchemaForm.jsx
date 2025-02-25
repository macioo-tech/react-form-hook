import { z } from "zod";

export const SchemaForm = z.object({
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
  courseTechnology: z
    .array(z.string())
    .min(1, { message: "Wybierz conajmniej jednś technologię" }),
  cvFile: z
    .any()
    .refine(
      (files) =>
        files &&
        files.length > 0 &&
        files instanceof File &&
        ["image/jpeg", "image/png"].includes(files.type),
      {
        message:
          "Niepoprawny typ załącznika. Dozwolone rozszerzenie JPEG lub PNG",
      }
    ),
});
