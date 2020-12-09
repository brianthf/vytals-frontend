import * as yup from "yup";

export const LoginSchema = yup.object({
  username: yup.string().required("Username is required."),
  password: yup.string().min(6).required("Password is required."),
});

export const RegisterSchema = yup.object({
  firstName: yup.string().required("First name is required."),
  lastName: yup.string().required("Last name is required."),
  username: yup
    .string()
    .required("Username is required.")
    .min(5, "Username cannot be less than 5 characters."),
  password: yup
    .string()
    .required("Password is required.")
    .min(6, "Password cannot be less than 6 characters."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Invalid email format."),
  birthDate: yup
    .date()
    .required("Birthdate is required.")
    .max(new Date(2002, 1, 1), "Date must be before 2002."),
});

export const ReadingSchema = yup.object({
  weight: yup.number().min(1).notRequired(),
  bloodPressure: yup.number().min(1).required("Blood pressure is required."),
  temperature: yup.number().min(1).required("Temperature is required."),
  oxygenLevel: yup.number().min(1).required("Oxygen level is required."),
  pulse: yup.number().min(1).required("Pulse is required."),
  timestamp: yup
    .date()
    .min(new Date(2019, 1, 1))
    .required("Timestamp is required."),
});

export const ActivitySchema = yup.object({
  type: yup.string().required("Type is required."),
  description: yup.string().required("Description is required."),
  startTime: yup
    .date()
    .required("Start time is required.")
    .min(new Date(2019, 1, 1)),
  endTime: yup
    .date()
    .required("Start time is required.")
    .min(new Date(2019, 1, 1)),
});
