import { allServices } from "@/lib/data";
import React from "react";
import ServiceItem from "./molecules/ServiceItem";

const ServicesWeOffer = () => {
  return (
    <div className="w__frame mt-[10rem]">
      <div>
        <h3 className="font-semibold text-[5rem]">Services that we offer</h3>
        <p className="text-[1.4rem] text-[#5B5B5B] leading-[1.6rem]">Non Emergency Medical Transportation “NEMT” at your service</p>
      </div>

      <div className="grid grid-cols-3 gap-[4rem]">
        {allServices.map((service) => (
          <div key={service.id}>
            <ServiceItem {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesWeOffer;
