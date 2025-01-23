import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { useFormik } from "formik";
import { emailValidation } from "@/lib/validators";
import { forgotPassswordHandler } from "@/lib/redux/slices/auth/authThunk";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { cn } from "@/lib/utils";
import EmailSent from "./EmailSent";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailValidation,
    onSubmit(values: { email: string }) {
      handleForgotPassword(values.email);
    },
  });

  const handleForgotPassword = async (email: string) => {
    try {
      setIsLoading(true);
      const res = await dispatch(forgotPassswordHandler(email));

      if (res.type.includes("rejected"))
        return toast({
          title: "An Error Occurred",
          description: res.payload as string,
          variant: "destructive",
        });

      setEmailSent(true);

      return toast({
        title: "Login Successful",
        description: "You have successfully Logged in ",
        variant: "success",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400 || error.response?.status === 401) {
          toast({
            title: "Error in Registration",
            description: error.response?.data,
            variant: "destructive",
          });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return emailSent ? (
    <EmailSent />
  ) : (
    <div className="p-[4rem]">
      <form onSubmit={handleSubmit} className="space-y-[2rem]">
        <div className=" space-y-6">
          <h3 className="font-light  text-[3rem] lg:text-[4rem] leading-[3rem]">
            Forgot Password
          </h3>
          <p className="text-gray-600 text-[1.4rem]">
            Enter your email address below to reset your password.
          </p>
        </div>

        <div className="w-full  space-y-4">
          <label htmlFor="">Email:</label>
          <Input
            type="email"
            className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="name@email.com"
            name="email"
            value={values.email}
            error={errors.email}
            touched={touched.email}
            onChange={handleChange}
          />
          <p
            className={cn(
              "text-[1.2rem]  text-rose-500",
              !(errors.email && touched.email) && "hidden"
            )}
          >
            {errors.email}
          </p>
        </div>

        <Button
          isLoading={isLoading}
          className="bg-[#CC1815] hover:bg-[#960d0a] w-full  text-white"
        >
          Request Reset
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
