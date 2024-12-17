import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FilePenLine, MapPinned } from "lucide-react";
import Link from "next/link";

const languageOptions = [{ value: "english", label: "English" }];
const currencyOptions = [{ value: "usd", label: "$(USD)" }];

const BookRideWindow = () => {
  return (
    <div className="p-[2rem] rounded-lg bg-white shadow-lg grid gap-[4rem]">
      <div className="space-y-[2rem]">
        <div className="flex justify-end">
          <div className="flex  gap-[1rem] ">
            <Select>
              <SelectTrigger className="w-[180px]">
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
              <SelectTrigger className="w-[180px]">
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

        <h4 className="text-center font-bold text-xl">Book a Ride</h4>
      </div>

      <div className="flex flex-col lg:flex-row gap-[2rem] ">
        <div className="w-full space-y-4">
          <label htmlFor="">Enter your pickup Location:</label>
          <Input className="w-full" placeholder="E.g Airport, Hotel" />
        </div>
        <div className="w-full  space-y-4">
          <label htmlFor="">Enter your dropoff Location:</label>
          <Input className="w-full" placeholder="E.g Airport, Hotel" />
        </div>
      </div>

      <div className="w-full space-y-[3rem] text-[1.4rem] lg:text-base">
        <div className=" mx-auto lg:w-[50%] grid gap-[2rem]">
          <Button className="bg-[#CC1815] lg:w-full  text-white">
            Get a Qoute
          </Button>

          <div className="flex items-center gap-[2rem]">
            <Button variant={"ghost"}>
              <FilePenLine />
              <span>Edit/Cancel your ride</span>
            </Button>
            <Button variant={"ghost"}>
              <MapPinned />
              <span>Track your vehicle</span>
            </Button>
          </div>
        </div>

        <div className=" mx-auto md:w-[60%] text-[1.4rem] lg:text-base">
          <div className=" before:flex before:w-full before:h-1 before:bg-[#00000040] italic text-[2rem] flex items-center gap-4  after:flex after:w-full after:h-1 after:bg-[#00000040] ">
            or
          </div>
          <p className="text-slate-500 text-[1.6rem] text-center">
            Do you have a coperate account?{" "}
            <Link href={"/"} className="text-blue-500">
              Login/Signup here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookRideWindow;
