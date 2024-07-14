import * as Yup from "yup"

export const Login=Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 6 characters")
      .required("Password is required"),
  });