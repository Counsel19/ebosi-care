import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "../ui/input";

const PaymentInformation = () => {
  return (
    <div className="p-[1rem] lg:p-[4rem] shadow-lg h-fit"> 
      <form className="space-y-[2rem]">
        <h4 className="font-bold text-[2.6rem]">Your Payment Details</h4>

        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Name on card</label>
          <Input placeholder="John Doe" className="rounded-none" />
        </div>
        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Card number</label>
          <Input className="rounded-none" />
        </div>

        <div className="grid grid-cols-2 gap-4 items-end">
          <div className="space-y-2 text-gray-500">
            <label htmlFor="" className="grid">
              <span>Expiration date</span>
              <span>MM/YYYY</span>
            </label>
            <Input placeholder="MM/YYYY" className="rounded-none" />
          </div>
          <div className="space-y-2 text-gray-500">
            <label htmlFor="">Security code</label>
            <Input className="rounded-none" />
          </div>
        </div>

        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Billing Address</label>
          <Input className="rounded-none" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 text-gray-500">
            <label htmlFor="" className="grid">
            City
            </label>
            <Input placeholder="" className="rounded-none" />
          </div>
          <div className="space-y-2 text-gray-500">
            <label htmlFor="">State</label>
            <Input placeholder="Choose one" className="rounded-none" />
          </div>
        </div>

        <div className="space-y-2 text-gray-500">
          <label htmlFor="">Zip</label>
          <Input className="rounded-none" />
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
};

export default PaymentInformation;
