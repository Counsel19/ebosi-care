"use client";

import React, { FC, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { getSingleRide } from "@/lib/redux/slices/ride/rideThunk";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "@/hooks/use-toast";

// interface EditCancelRideProps {

// }

const languageOptions = [{ value: "english", label: "English" }];
const currencyOptions = [{ value: "usd", label: "$(USD)" }];

const validationSchema = Yup.object({
  reservationNumber: Yup.string().required("Required"),
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
});

interface IUserInput {
  reservationNumber: string;
  firstname: string;
  lastname: string;
}

const EditCancelRide: FC = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const handleContinue = async (values: IUserInput) => {
    setIsLoading(true);
    const res = await dispatch(
      getSingleRide({
        firstname: values.firstname,
        lastname: values.lastname,
        reservationNumber: values.reservationNumber,
      })
    );

    if (res.type.includes("rejected"))
      return toast({
        title: "An Error Occurred",
        description: res.payload as string,
        variant: "destructive",
      });

    router.push(
      `/track-vehicle/${res.payload.ride.reservation_number}?first_name=${res.payload.user.first_name}&last_name=${res.payload.user.last_name}`
    );

    setIsLoading(false);
  };

  return (
    <Formik
      initialValues={{
        reservationNumber: "",
        firstname: "",
        lastname: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleContinue(values);
      }}
    >
      <Form className="p-[4rem] mb-[4rem] w-full  rounded-lg bg-white shadow-lg space-y-[2rem]">
        <div className="space-y-[2rem] w-full grid">
          <div className="flex justify-end max-w-full">
            <div className="flex  gap-[1rem] ">
              <Select>
                <SelectTrigger className="lg:w-[180px]">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  {languageOptions.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="lg:w-[180px]">
                  <SelectValue placeholder="Select Currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencyOptions.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <h3 className="text-[3rem] leading-[3.8rem] ">
          Edit/Cancel Your Reservation
        </h3>

        <div className="space-y-[2rem]">
          <label htmlFor="">
            Please enter the following information to proceed:
          </label>

          <div className="flex flex-col gap-[1rem] lg:flex-row lg:gap-[2rem]">
            <div className="w-full">
              <Field
                name="reservationNumber"
                as={Input}
                className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Reservation Number"
              />
              <ErrorMessage
                name="reservationNumber"
                component="div"
                className="text-[1.2rem] text-[#D92626]"
              />
            </div>

            <div className="w-full">
              <Field
                name="firstname"
                as={Input}
                className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="First Name"
              />
              <ErrorMessage
                name="firstname"
                component="div"
                className="text-[1.2rem] text-[#D92626]"
              />
            </div>

            <div className="w-full">
              <Field
                name="lastname"
                as={Input}
                className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Last Name"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-[1.2rem] text-[#D92626]"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:justify-end">
          <div className="flex gap-[2rem]  items-center ">
            <Button
              type="button"
              onClick={() => {
                router.back();
              }}
              className="border-[#395BA6] bg-gray-200 text-[#395BA6] min-w-[13.5rem]"
              variant={"outline"}
            >
              <span>Cancel</span>
            </Button>
            <Button
              isLoading={isLoading}
              type="submit"
              className="bg-[#395BA6] text-white min-w-[13.5rem]"
            >
              <span>Continue</span>
            </Button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default EditCancelRide;
