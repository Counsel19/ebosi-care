"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { countryOptions } from "@/lib/countryData";
import { Button } from "../ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

function PersonalInformation() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  return (
    <div className="p-[1rem] lg:p-[4rem] shadow-lg h-fit">
      <div className="flex justify-end mb-[4rem]">
        <div className="flex gap-4">
          <p>
            Already have an account?{" "}
            <Link href={"/sign-up"} className="text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <form className="space-y-[2rem]">
        <h4 className="font-bold text-[2.6rem]">Your Information</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 text-gray-500">
            <label htmlFor="">First Name</label>
            <Input placeholder="John Doe " className="rounded-none" />
          </div>
          <div className="space-y-2 text-gray-500">
            <label htmlFor="">Last Name</label>
            <Input placeholder="John Doe " className="rounded-none" />
          </div>
        </div>

        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Email</label>
          <Input placeholder="name@gmail.com " className="rounded-none" />
        </div>
        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Confirm Email</label>
          <Input placeholder="name@gmail.com  " className="rounded-none" />
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
            <Button type="button" className="bg-[#D9D9D9] h-[4.5rem] m-0 rounded-none hover:bg-500-600 text-primary">
              Verify <ChevronDown />
            </Button>
          </div>
        </div>

        <div className="space-y-2 text-gray-500">
          <div className="flex gap-2 items-center">
            <Checkbox className="h-[1.3rem] w-[1.3rem] border-gray-500" id="bookingForSomeone" />
            <p className="text-[1.4rem]">
              I&apos;m not the passenger. I&apos;m booking this for someone
              else.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Checkbox className="h-[1.3rem] w-[1.3rem] border-gray-500" id="createMeAnAccount" />
            <p className="text-[1.4rem]">
              Create me an account so I don&apos;t have to repeat this next
              time.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center  ">
          <Button className="bg-[#D9D9D9] text-primary ">
            <ChevronLeft /> Back
          </Button>
          <Button className="bg-primary text-white">
            Continue <ChevronRight />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInformation;
