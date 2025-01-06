"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";
import { FilePenLine, MapPinned, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const languageOptions = [{ value: "english", label: "English" }];
const currencyOptions = [{ value: "usd", label: "$(USD)" }];

const BookRideWindow = () => {
  const [addStop, setAddStop] = useState(false);

  return (
    <div className="p-[2rem] w-full  rounded-lg bg-white shadow-lg space-y-[2rem]">
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

        <h4 className="text-center font-bold text-xl">Book a Ride/Service</h4>
      </div>

      <div className="flex flex-col gap-[1rem] lg:flex-row lg:gap-[2rem] ">
        <div className="w-full space-y-4">
          <label htmlFor="">Enter your pickup Location:</label>
          <div className="flex shadow-inner w-full rounded-sm  border border-input bg-transparent p-0  ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accentGreen focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            <Input
              className="w-full flex-1 border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="E.g Airport, Hotel"
            />
            {!addStop ? (
              <Button
                onClick={() => setAddStop(true)}
                className="w-[4rem] h-18 p-0  m-0  border-y-0 border-r-0"
                variant={"outline"}
              >
                <Plus />
              </Button>
            ) : null}
          </div>
        </div>

        {addStop ? (
          <div className="w-full  space-y-4">
            <label htmlFor="">Extra stop:</label>
            <div className="flex shadow-inner w-full rounded-sm  border border-input bg-transparent p-0  ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accentGreen focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <Input
                className="w-full flex-1 border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="E.g Airport, Hotel"
              />

              <Button
                onClick={() => setAddStop(false)}
                className="w-[4rem] h-18 p-0  m-0  border-y-0 border-r-0"
                variant={"outline"}
              >
                <Minus />
              </Button>
            </div>
          </div>
        ) : null}
        <div className="w-full  space-y-4">
          <label htmlFor="">Enter your dropoff Location:</label>
          <Input
            className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="E.g Airport, Hotel"
          />
        </div>
      </div>

      <div className="w-full space-y-[1.5rem] text-[1.4rem] lg:text-base">
        <div className=" mx-auto lg:w-[50%]  space-y-[1rem]">
          <Button className="bg-[#CC1815] hover:bg-[#960d0a] w-full  text-white">
            Book Now/Later
          </Button>

          <div className="grid  items-center grid-cols-2 justify-between">
            <Link
              href={"/edit-cancel-ride"}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                })
              )}
            >
              <FilePenLine />
              <span>Edit/Cancel your ride</span>
            </Link>
            <Link
              href={"/track-vehicle"}
              className={cn(
                buttonVariants({
                  variant: "ghost",
                })
              )}
            >
              <MapPinned />
              <span>Track your vehicle</span>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="mx-auto md:w-[60%] text-[1.4rem] lg:text-base ">
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
