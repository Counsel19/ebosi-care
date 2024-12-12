"use client";

import SelectService from "@/components/services/SelectService";
import ServiceTab from "@/components/services/ServiceTab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC, useState } from "react";

const ServicePage: FC = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    if (currentIndex < 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="py-[4rem] grid gap-[5rem] w__frame">
      <ServiceTab
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      <div className="p-[4rem] shadow-lg grid gap-[4rem] border">
        <h3 className="font-semibold text-[2rem] ">1. Your Ride Details </h3>
        <div className="grid grid-cols-4 gap-[2rem] text-gray-600">
          <div className="w-full space-y-4 ">
            <label htmlFor=" ">When do you need a ride:</label>
            <Input className="w-full" placeholder="Schedule or ASAP" />
          </div>
          <div className="w-full space-y-4">
            <label htmlFor="">Passengers:</label>
            <Input className="w-full" placeholder="Schedule or ASAP" />
          </div>
          <div className="w-full space-y-4">
            <label htmlFor="">Check-in Luggage</label>
            <Input className="w-full" placeholder="Schedule or ASAP" />
          </div>
          <div className="w-full space-y-4">
            <label htmlFor="">Apartment/Gate # (Optional)</label>
            <Input className="w-full" placeholder="Schedule or ASAP" />
          </div>
        </div>

        <p className="text-[#969696] text-[1.3rem] text-center">
          * Arrival Times provided are only estimates based on the current
          traffic data.
        </p>
      </div>

      <SelectService />

      <div className="flex justify-between items-center ">
        <Button
          onClick={handlPrev}
          className="border-[#395BA6] text-[#395BA6]"
          variant={"outline"}
        >
          <ChevronLeft />
          <span>Prev</span>
        </Button>
        <Button onClick={handleNext} className="bg-[#395BA6] text-white">
          <span>Continue</span>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default ServicePage;
