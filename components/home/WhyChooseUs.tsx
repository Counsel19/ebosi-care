import {
  BriefcaseBusiness,
  DollarSign,
  Phone,
  SquareLibrary,
} from "lucide-react";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className=" bg-[#F7F7F7] py-[4rem]">
      <div className="w__frame grid grid-cols-4 gap-[4rem]">
        <div className="flex gap-[1rem]">
          <SquareLibrary color="#395BA6" />
          No Price Surge
        </div>
        <div className="flex gap-[1rem]">
          <Phone color="#395BA6" />
          24/7 Support
        </div>
        <div className="flex gap-[1rem]">
          <DollarSign color="#395BA6" />
          Drive with Ebosi
        </div>
        <div className="flex gap-[1rem]">
          <BriefcaseBusiness color="#395BA6" />
          Book for now or later
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
