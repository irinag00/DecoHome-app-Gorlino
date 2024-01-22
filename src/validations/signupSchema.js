import { object, ref, string } from "yup";

export const signupSchema = object({
  email: string()
    .required({ empty_email: "Ingrese un email." })
    .email({ invalid_email: "El formato de email ingresado es inválido." }),
  password: string()
    .required({ empty_password: "Ingrese una contraseña" })
    .min(6, {
      invalid_password: "La contraseña debe tener 6 caracteres como mínimo.",
    }),
  confirmPassword: string()
    .required({ empty_confirm_password: "Confirme la contraseña ingresada." })
    .oneOf([ref("password"), null], {
      invalid_match_password: "Las contraseñas no coinciden.",
    }),
});
