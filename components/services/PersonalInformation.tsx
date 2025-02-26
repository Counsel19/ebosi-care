"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Input } from "../ui/input";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import LoginForm from "../auth/LoginForm";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { ridePersonalDetailsValidator } from "@/lib/validators";
import { updateRideStateValues } from "@/lib/redux/slices/ride/rideSlice";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { register } from "@/lib/redux/slices/auth/authThunk";
import axios, { AxiosError } from "axios";

// import PhoneInput from 'react-phone-number-input
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function PersonalInformation({
  handleNext,
  handlPrev,
  setCurrentIndex,
}: {
  handleNext: VoidFunction;
  handlPrev: VoidFunction;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}) {
  const { bookingDetails } = useSelector((store: RootState) => store.rides);
  const { userProfile } = useSelector((store: RootState) => store.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [requestOTPLoading, setRequestOTPLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userProfile && Object.keys(userProfile).length > 0) {
      setCurrentIndex(3);
    }
  }, [setCurrentIndex, userProfile]);

  const { handleChange, handleSubmit, setFieldValue, values, errors, touched } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        mobile_number: "",
        password: "",
        confirm_password: "",
        otp: "",
      },
      validationSchema: ridePersonalDetailsValidator,
      onSubmit(
        values: {
          first_name: string;
          last_name: string;
          email: string;
          mobile_number: string;
          password: string;
          confirm_password: string;
          otp: string;
        },
        { setFieldError }
      ) {
        handleStoreUser(values, setFieldError);
      },
    });

  const handleVerifyOTP = async ({
    phone,
    otp,
    setFieldError,
  }: {
    phone: string;
    otp: string;
    setFieldError: (field: string, message: string | undefined) => void;
  }) => {
    try {
      setFieldError("otp", "");
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/verify-otp`, {
        phone,
        otp,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        setFieldError(
          "otp",
          error?.response?.data?.error?.opt ||
            error?.response?.data?.error ||
            "Error Verifying OTP"
        );
      } else {
        setFieldError("otp", "Error Verifying OTP");
      }

      throw new Error("Error Verifying OTP");
    }
  };

  const requestOTP = async (phone: string) => {
    try {
      setRequestOTPLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/send-otp`, {
        phone,
      });

      setShowOTPForm(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          title: "Error Requesting OTP",
          description: error.response?.data,
          variant: "destructive",
        });
      }
      toast({
        title: "Error Requesting OTP",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setRequestOTPLoading(false);
    }
  };

  const handleStoreUser = async (
    userInfo: {
      first_name: string;
      last_name: string;
      email: string;
      mobile_number: string;
      password: string;
      confirm_password: string;
      otp: string;
    },
    setFieldError: (field: string, message: string | undefined) => void
  ) => {
    try {
      setIsLoading(true);

      await handleVerifyOTP({
        phone: values.mobile_number,
        otp: values.otp,
        setFieldError,
      });

      const res = await dispatch(register(userInfo));

      if (res.type.includes("rejected"))
        return toast({
          title: "An Error Occurred",
          description: res.payload as string,
          variant: "destructive",
        });

      dispatch(
        updateRideStateValues({
          name: "bookingDetails",
          value: {
            ...bookingDetails,
            user_details: {
              name: `${userInfo.first_name} ${userInfo.last_name}`,
              email: userInfo.email,
              mobile_number: userInfo.mobile_number,
            },
          },
        })
      );

      handleNext();
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
    <div className="p-[1rem] lg:p-[4rem] shadow-lg h-fit">
      <div className="flex justify-end mb-[4rem]">
        <div className="flex gap-4">
          <p>
            Already have an account? <RideLoginDialog handleNext={handleNext} />
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-[2rem]">
        <h4 className="font-bold text-[2.6rem]">Your Information</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 text-gray-500">
            <label htmlFor="">First Name</label>
            <Input
              placeholder="John "
              name="first_name"
              value={values.first_name}
              error={errors["first_name"]}
              touched={touched["first_name"]}
              onChange={handleChange}
              className="rounded-none"
            />
            <p
              className={cn(
                "text-[1.2rem] mt-1 text-rose-500",
                !(errors["first_name"] && touched["first_name"]) && "hidden"
              )}
            >
              {errors["first_name"]}
            </p>
          </div>
          <div className="space-y-2 text-gray-500">
            <label htmlFor="">Last Name</label>
            <Input
              placeholder="Doe "
              name="last_name"
              value={values.last_name}
              error={errors["last_name"]}
              touched={touched["last_name"]}
              onChange={handleChange}
              className="rounded-none"
            />
            <p
              className={cn(
                "text-[1.2rem] mt-1 text-rose-500",
                !(errors["last_name"] && touched["last_name"]) && "hidden"
              )}
            >
              {errors["last_name"]}
            </p>
          </div>
        </div>

        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Email</label>
          <Input
            placeholder="name@gmail.com "
            name="email"
            value={values.email}
            error={errors["email"]}
            touched={touched["email"]}
            onChange={handleChange}
            className="rounded-none"
          />
          <p
            className={cn(
              "text-[1.2rem] mt-1 text-rose-500",
              !(errors["email"] && touched["email"]) && "hidden"
            )}
          >
            {errors["email"]}
          </p>
        </div>

        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Mobile Number</label>
          <div className="flex items-center">
            <div
              className={cn(
                "flex gap-2 items-center px-2 h-[4.5rem]  w-full rounded-none border",
                errors.mobile_number && touched.mobile_number
                  ? " border-rose-500"
                  : "border-input"
              )}
            >
              <PhoneInput
                defaultCountry="us"
                className="w-full"
                onChange={(phone) => {
                  setFieldValue("mobile_number", phone);
                }}
                value={values.mobile_number}
              />
            </div>

            <Button
              isLoading={requestOTPLoading}
              onClick={() => requestOTP(values.mobile_number)}
              type="button"
              className="bg-[#D9D9D9] h-[4.5rem] m-0 rounded-none hover:bg-500-600 text-primary"
            >
              Request OTP <ChevronDown />
            </Button>
          </div>
        </div>

        {showOTPForm && (
          <div className="space-y-2 text-gray-500">
            <label htmlFor="">Enter OTP</label>
            <Input
              placeholder=" "
              name="otp"
              value={values.otp}
              error={errors["otp"]}
              touched={touched["otp"]}
              onChange={handleChange}
              className="rounded-none"
            />
            <p
              className={cn(
                "text-[1.2rem] mt-1 text-rose-500",
                !(errors["otp"] && touched["otp"]) && "hidden"
              )}
            >
              {errors["otp"]}
            </p>
          </div>
        )}

        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Password</label>
          <Input
            type="password"
            className="w-full shadow-inner rounded-sm outline-none "
            placeholder="Password"
            value={values.password}
            error={errors["password"]}
            touched={touched["password"]}
            name="password"
            onChange={handleChange}
          />
          <p
            className={cn(
              "text-[1.2rem] mt-1 text-rose-500",
              !(errors["password"] && touched["password"]) && "hidden"
            )}
          >
            {errors["password"]}
          </p>
        </div>
        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Confirm Password</label>
          <Input
            type="password"
            className="w-full shadow-inner rounded-sm outline-none "
            placeholder="Confirm Password"
            name="confirm_password"
            value={values.confirm_password}
            error={errors["confirm_password"]}
            touched={touched["confirm_password"]}
            onChange={handleChange}
          />
          <p
            className={cn(
              "text-[1.2rem] mt-1 text-rose-500",
              !(errors["confirm_password"] && touched["confirm_password"]) &&
                "hidden"
            )}
          >
            {errors["confirm_password"]}
          </p>
        </div>

        <div className="space-y-2 text-gray-500">
          <div className="flex gap-2 items-center">
            <Checkbox
              className="h-[1.3rem] w-[1.3rem] border-gray-500"
              id="bookingForSomeone"
            />
            <p className="text-[1.4rem]">
              I&apos;m not the passenger. I&apos;m booking this for someone
              else.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Checkbox
              className="h-[1.3rem] w-[1.3rem] border-gray-500"
              id="createMeAnAccount"
            />
            <p className="text-[1.4rem]">
              Create me an account so I don&apos;t have to repeat this next
              time.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center  ">
          <Button
            onClick={handlPrev}
            type="button"
            className="bg-[#D9D9D9] text-primary hover:bg-slate-300 "
          >
            <ChevronLeft /> Back
          </Button>
          <Button
            isLoading={isLoading}
            disabled={!showOTPForm}
            type="submit"
            className="bg-primary text-white"
          >
            Continue <ChevronRight />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInformation;

const RideLoginDialog = ({ handleNext }: { handleNext: VoidFunction }) => {
  const [shoDialog, setShowDialog] = useState(false);
  return (
    <Dialog open={shoDialog} onOpenChange={setShowDialog}>
      <DialogTrigger className="text-primary">Sign in</DialogTrigger>
      <DialogContent className=" p-[4rem] min-w-[60%]">
        <DialogTitle className="hidden">Auth Form</DialogTitle>

        <div>
          <h4 className="mb-[2rem] text-[3rem]">Login Here</h4>
          <LoginForm
            afterLoginFunc={() => {
              handleNext();
              setShowDialog(false);
            }}
            setUserToRide
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
