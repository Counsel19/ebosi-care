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

// interface TrackVehicleProps {

// }

const languageOptions = [{ value: "english", label: "English" }];
const currencyOptions = [{ value: "usd", label: "$(USD)" }];

const TrackVehicle: FC = ({}) => {
  const router = useRouter();
  const handleContinue = () => {};
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

      <h3 className="text-[3rem] leading-[3.8rem] ">Track Your Vehicle</h3>

      <div className="space-y-[2rem]">
        <label htmlFor="">
          Please enter the following information to proceed:
        </label>
        <div className="flex flex-col gap-[1rem] lg:flex-row lg:gap-[2rem] ">
          <Input
            className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Reservation Number"
          />

          <Input
            className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="First Name"
          />

          <Input
            className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="flex lg:justify-end">
        <div className="flex gap-[2rem]  items-center ">
          <Button
            onClick={() => {
              router.back();
            }}
            className="border-[#395BA6] bg-gray-200 text-[#395BA6] min-w-[13.5rem]"
            variant={"outline"}
          >
            <span>Cancel</span>
          </Button>
          <Button
            onClick={handleContinue}
            className="bg-[#395BA6] text-white min-w-[13.5rem]"
          >
            <span>Continue</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrackVehicle;
