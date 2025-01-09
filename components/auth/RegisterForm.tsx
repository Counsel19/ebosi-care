"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { countryOptions } from "@/lib/countryData";

const RegisterForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <form className="space-y-[2rem]">
      <div className="grid lg:grid-cols-2 gap-[4rem]">
        <Input
          type="text"
          className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Firstname"
        />

        <Input
          type="text"
          className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Lastname"
        />
      </div>

      <Input
        type="email"
        className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Email"
      />

      <div className="flex items-center">
        <div className="flex gap-2 items-center px-6 py-4  h-[4.5rem]  w-full rounded-none border border-input ">
          <Select
            onValueChange={(value) => {
              setSelectedCountry(
                countryOptions.find((item) => item.value === value)?.code || ""
              );
            }}
          >
            <SelectTrigger className="w-[3rem] h-full p-0 border-0 rounded-none ">
              <SelectValue defaultValue={countryOptions[0].value} />
            </SelectTrigger>
            <SelectContent>
              {countryOptions.map((item, index) => (
                <SelectItem className="" key={index} value={item.value}>
                  {item.flag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedCountry}
          <Input
            placeholder="00-000-000"
            className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0  rounded-none "
          />
        </div>
      </div>

      <Input
        type="password"
        className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Password"
      />

      <div className="w-full  space-y-4">
        
        <Input
          type="password"
          className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Confirm Password"
        />
        <div className="flex gap-2 items-center">
          <Checkbox
            className="h-[1.3rem] w-[1.3rem] border-gray-500"
            id="bookingForSomeone"
          />
          <p className="text-[1.4rem]">
            I Agree with all the{" "}
            <Link href={"/"} className="text-primary">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>

      <Button className="bg-[#CC1815] hover:bg-[#960d0a] w-full  text-white">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
