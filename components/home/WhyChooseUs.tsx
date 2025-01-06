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
      <div className="w__frame grid md:grid-cols-2 lg:grid-cols-4 gap-[4rem]">
        <div className="flex gap-[1rem]">
          <SquareLibrary color="#CC1815" />
          No Price Surge
        </div>
        <div className="flex gap-[1rem]">
          <Phone color="#CC1815" />
          24/7 Support
        </div>
        <div className="flex gap-[1rem]">
          <DollarSign color="#CC1815" />
          Drive with Ebosi
        </div>
        <div className="flex gap-[1rem]">
          <BriefcaseBusiness color="#CC1815" />
          Book for now or later
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
