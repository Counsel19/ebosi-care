import BecomeAPartner from "@/components/bookARide/BecomeAPartner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactUs = () => {
  return (
    <div className="grid gap-[4rem]">
      <div className="bg-[url('/images/weelchair-car-transaport.jpg')] bg-no-repeat bg-cover p-[2rem] lg:p-[6rem] relative ">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />
        <div className="relative w-full md:w-[90%]  space-y-[2rem] mx-auto ">
          <h3 className="font-bold  text-white text-[3.4rem] leading-[4rem] text-center">
            Get in touch
          </h3>

          <div className="bg-white rounded-lg p-[4rem] w-[75%] mx-auto ">
            <form className="space-y-[2rem]">
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
                <label htmlFor="">Message</label>
                <Textarea
                
                  placeholder="Type your message here..."
                  className="rounded-none h-[100px]"
                />
              </div>

              <div className="flex justify-between items-center  ">
                <Button className="bg-primary text-white">Submit</Button>
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
