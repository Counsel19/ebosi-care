import * as yup from "yup";

const passwordValidation = yup
  .string()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters long");
export const emailValidation = yup
  .string()
  .email("Invalid email")
  .required("Email is required")
  .test("exist", "You need to provide a valid email", (value) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  });

export const userSignupValidation = yup.object({
  last_name: yup.string().required("Last Name is required"),
  first_name: yup.string().required("First Name is required"),
  mobile_number: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  agreeToTerms: yup.boolean().required("Phone Number is required").isTrue(),
  email: emailValidation,
  password: passwordValidation,
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const userSignInValidation = yup.object({
  agreeToTerms: yup.boolean().required("Phone Number is required").isTrue(),
  email: emailValidation,
  password: passwordValidation,
});

export const ridePersonalDetailsValidator = yup.object({
  last_name: yup.string().required("Last Name is required"),
  first_name: yup.string().required("First Name is required"),
  mobile_number: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  email: emailValidation,
  password: passwordValidation,
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});


export const trackRideValidator = yup.object({
  last_name: yup.string().required("Last Name is required"),
  first_name: yup.string().required("First Name is required"),
  reservation_number: yup.string().required("Reservation No. is required"),
  
  
});
