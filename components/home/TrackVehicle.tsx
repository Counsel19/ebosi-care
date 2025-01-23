"use client";

import React, { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useFormik } from "formik";
import { trackRideValidator } from "@/lib/validators";

// interface TrackVehicleProps {

// }

const languageOptions = [{ value: "english", label: "English" }];
const currencyOptions = [{ value: "usd", label: "$(USD)" }];

interface ISubmitValus {
  first_name: string;
  last_name: string;
  reservation_number: string;
}

const TrackVehicle: FC = ({}) => {
  const router = useRouter();

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      reservation_number: "",
    },
    validationSchema: trackRideValidator,
    onSubmit(values: ISubmitValus) {
      handleContinue(values);
    },
  });

  const handleContinue = (values: ISubmitValus) => {
    console.log(values);
    router.push("/track-vehicle/1");
  };

  return (
    <div className="p-[4rem] mb-[4rem] w-full rounded-lg bg-white shadow-lg space-y-[2rem]">
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
      <form onSubmit={handleSubmit} className="space-y-[2rem]">
        <h3 className="text-[3rem] leading-[3.8rem] ">Track Your Vehicle</h3>

        <div className="space-y-[2rem]">
          <label htmlFor="">
            Please enter the following information to proceed:
          </label>
          <div className="flex flex-col gap-[1rem] lg:flex-row lg:gap-[2rem] ">
            <Input
              className="w-full shadow-inner rounded-sm  "
              placeholder="Reservation Number"
              name="reservation_number"
              value={values.reservation_number}
              error={errors["reservation_number"]}
              touched={touched["reservation_number"]}
              onChange={handleChange}
            />

            <Input
              className="w-full shadow-inner rounded-sm  "
              placeholder="First Name"
              name="first_name"
              value={values.first_name}
              error={errors["first_name"]}
              touched={touched["first_name"]}
              onChange={handleChange}
            />

            <Input
              className="w-full shadow-inner rounded-sm  "
              placeholder="Last Name"
              name="last_name"
              value={values.last_name}
              error={errors["last_name"]}
              touched={touched["last_name"]}
              onChange={handleChange}
            />
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
              type="submit"
              className="bg-[#395BA6] text-white min-w-[13.5rem]"
            >
              <span>Continue</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(TrackVehicle);
