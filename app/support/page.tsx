"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const languageOptions = [{ value: "english", label: "English" }];
const currencyOptions = [{ value: "usd", label: "$(USD)" }];

const MyLearning = () => {
  return (
    <div className="py-[6rem] w__frame ">
      <div className="mb-[4rem]">
        <div className="flex justify-end ">
          <div className="flex gap-[1rem] w-fit">
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
        <div className="grid place-content-center">
          <Link href={"/"}>
            <Image
              alt="ebosi_logo"
              src={"/images/ebosi_logo.svg"}
              className="w-[20.4rem] h-[9.3rem]"
              width={234}
              height={93}
            />
          </Link>
        </div>
      </div>

      <div className=" md:w-[60%] mx-auto space-y-[4rem]">
        <div>
          <h3 className="  text-[3.4rem] font-medium">Support</h3>
          <p>
            For any enquiries and support, send an email to{" "}
            <span className="text-primary">info@ebosicare.com</span>
          </p>
        </div>
        <form className="space-y-[2rem]">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 ">
              <label htmlFor="">First Name</label>
              <Input
                placeholder="John Doe "
                className="border-none bg-[#F5F5F5]"
              />
            </div>
            <div className="space-y-2 ">
              <label htmlFor="">Last Name</label>
              <Input
                placeholder="John Doe "
                className="border-none bg-[#F5F5F5]"
              />
            </div>
          </div>

          <div className="space-y-2 ">
            <label htmlFor="">Email</label>
            <Input
              placeholder="name@gmail.com "
              className="border-none bg-[#F5F5F5]"
            />
          </div>
          <div className="space-y-2 ">
            <label htmlFor="">Message</label>
            <Textarea
              placeholder="Type your message here..."
              className="border-none bg-[#F5F5F5] h-[100px]"
            />
          </div>

          <Button className="bg-primary w-full text-white">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default MyLearning;
