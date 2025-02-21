"use client";

import BecomeAPartner from "@/components/bookARide/BecomeAPartner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import axios, { AxiosError } from "axios";
import React, { useState } from "react";

const initData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};
const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contactData, setContactData] = useState(initData);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setContactData({ ...contactData, [name]: value });
  };

  const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/support`,
        contactData
      );
      setIsSuccess(true);
      setContactData(initData)
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400 || error.response?.status === 401) {
          toast({
            title: "Error in Sending Message",
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
    <div className="grid gap-[4rem]">
      <div className="bg-[url('/images/weelchair-car-transaport.jpg')] bg-no-repeat bg-cover p-[2rem] lg:p-[6rem] relative ">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />
        <div className="relative w-full md:w-[90%]  space-y-[2rem] mx-auto ">
          <h3 className="font-bold  text-white text-[3.4rem] leading-[4rem] text-center">
            Get in touch
          </h3>

          <div className="bg-white rounded-lg p-[4rem] w-[75%] mx-auto ">
            {isSuccess && (
              <div className="bg-emerald-100 mb-6 p-8 text-emerald-800">
                Email Sent Successfully{" "}
              </div>
            )}
            <form onSubmit={handleContact} className="space-y-[2rem]">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 text-gray-500">
                  <label htmlFor="">First Name</label>
                  <Input
                    name="firstName"
                    onChange={handleChange}
                    value={contactData.firstName}
                    placeholder="John Doe "
                    className="rounded-none"
                  />
                </div>
                <div className="space-y-2 text-gray-500">
                  <label htmlFor="">Last Name</label>
                  <Input
                    name="lastName"
                    onChange={handleChange}
                    value={contactData.lastName}
                    placeholder="John Doe "
                    className="rounded-none"
                  />
                </div>
              </div>

              <div className="space-y-2 text-gray-500">
                <label htmlFor="">Email</label>
                <Input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={contactData.email}
                  placeholder="name@gmail.com "
                  className="rounded-none"
                />
              </div>
              <div className="space-y-2 text-gray-500">
                <label htmlFor="">Message</label>
                <Textarea
                  name="message"
                  value={contactData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="rounded-none h-[100px]"
                />
              </div>

              <div className="flex justify-between items-center  ">
                <Button isLoading={isLoading} className="bg-primary text-white">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <BecomeAPartner />
    </div>
  );
};

export default ContactUs;
