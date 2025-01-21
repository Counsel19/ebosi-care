import React, { FC, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { useFormik } from "formik";
import { userSignInValidation } from "@/lib/validators";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { login } from "@/lib/redux/slices/auth/authThunk";
import { ILogin } from "@/types/users";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { cn } from "@/lib/utils";
import { updateRideStateValues } from "@/lib/redux/slices/ride/rideSlice";

interface LoginFormProps {
  setShowForgotPassword?: React.Dispatch<React.SetStateAction<boolean>>;
  setUserToRide?: boolean;
  afterLoginFunc?: VoidFunction;
}

const LoginForm: FC<LoginFormProps> = ({
  setUserToRide,
  setShowForgotPassword,
  afterLoginFunc,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { bookingDetails } = useSelector((store: RootState) => store.rides);

  const dispatch = useDispatch<AppDispatch>();

  const { handleChange, setFieldValue, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",

        agreeToTerms: false,
        password: "",
      },
      validationSchema: userSignInValidation,
      onSubmit(values: {
        email: string;

        agreeToTerms: boolean;
        password: string;
      }) {
        handleLoginUser(values);
      },
    });

  const handleLoginUser = async (userInfo: ILogin) => {
    try {
      setIsLoading(true);
      const res = await dispatch(login(userInfo));

      if (res.type.includes("rejected"))
        return toast({
          title: "An Error Occurred",
          description: res.payload as string,
          variant: "destructive",
        });

      if (setUserToRide) {
        dispatch(
          updateRideStateValues({
            name: "bookingDetails",
            value: {
              ...bookingDetails,
              user_details: {
                name: `${res.payload.user.first_name} ${res.payload.user.last_name}`,
                email: res.payload.user.email,
                mobile_number: res.payload.user.mobile_number,
              },
            },
          })
        );
      }

      if (afterLoginFunc) {
        afterLoginFunc();
      }

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

  return (
    <form onSubmit={handleSubmit} className="space-y-[2rem]">
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
      <div className="w-full  space-y-4">
        <label htmlFor="">Password:</label>
        <Input
          type="password"
          className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="*********"
          name="password"
          value={values.password}
          error={errors.password}
          touched={touched.password}
          onChange={handleChange}
        />
        <p
          className={cn(
            "text-[1.2rem]  text-rose-500",
            !(errors.password && touched.password) && "hidden"
          )}
        >
          {errors.password}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Checkbox
              className={cn(
                "h-[1.3rem] w-[1.3rem]",
                errors.agreeToTerms && touched.agreeToTerms
                  ? "border-rose-500"
                  : "border-gray-500"
              )}
              id="agreeToTerms"
              checked={values.agreeToTerms}
              name="agreeToTerms"
              onChange={handleChange}
              onCheckedChange={(value) => {
                setFieldValue("agreeToTerms", value);
              }}
            />
            <p className="text-[1.4rem]">
              I Agree with all the{" "}
              <Link href={"/"} className="text-primary">
                Terms & Conditions
              </Link>
            </p>
          </div>
          {setShowForgotPassword && (
            <span
              onClick={() => setShowForgotPassword(true)}
              className="cursor-pointer "
            >
              Forgot Password?
            </span>
          )}
        </div>
      </div>

      <Button
        isLoading={isLoading}
        className="bg-[#CC1815] hover:bg-[#960d0a] w-full  text-white"
      >
        Login
      </Button>
    </form>
  );
};

export default React.memo(LoginForm);
