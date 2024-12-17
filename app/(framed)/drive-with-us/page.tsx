"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryOptions } from "@/lib/countryData";

import Link from "next/link";
import React, { useState } from "react";

const DriveWithUs = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <div className="w__frame">
      <div className="h-[14rem] lg:h-[20rem] grid place-content-center">
        <div className=" mx-auto ">
          <h3 className="text-primary text-center font-bold text-[3rem] lg:text-[5rem]">
            Drive with Ebosi today!
          </h3>
          <p className="text-center text-gray-600">
            Welcome to Ebosicare You’re on the road to success.
          </p>
        </div>
      </div>

      <form className="space-y-[2rem] my-[6rem]">
        <h4 className="font-bold text-[2.6rem]">Your Information</h4>

        <div className="space-y-2 text-gray-500">
          <label htmlFor="">First Name</label>
          <Input placeholder="John Doe " className="rounded-none" />
        </div>

        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Last Name</label>
          <Input placeholder="John Doe " className="rounded-none" />
        </div>

        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Email</label>
          <Input placeholder="name@gmail.com " className="rounded-none" />
        </div>
        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Phone Number</label>
          <Input placeholder="" className="rounded-none" />
        </div>
        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Mobile Number</label>
          <div className="flex items-center">
            <div className="flex gap-2 items-center px-6 py-4  h-[4.5rem]  w-full rounded-none border border-input ">
              <Select
                onValueChange={(value) => {
                  setSelectedCountry(
                    countryOptions.find((item) => item.value === value)?.code ||
                      ""
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
                className="border-0 p-0 rounded-none "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-gray-500">I would like to drive in?</h5>
          <Select>
            <SelectTrigger className=" h-full rounded-none ">
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              {[].map((item, index) => (
                <SelectItem className="" key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid place-content-center">
          <div className="flex gap-2 items-center w-fit">
            <Checkbox
              className="h-[1.3rem] w-[1.3rem] border-gray-500"
              id="agree"
            />
            <p className="text-[1.4rem]">
              I Agree with all the{" "}
              <Link className="text-primary font-semibold" href={"/"}>
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>

        <div className="grid place-content-center  ">
          <Button className="bg-primary text-white">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default DriveWithUs;
