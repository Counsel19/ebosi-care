import { allServices } from "@/lib/data";
import React from "react";
import SelectServiceItem from "./molecules/SelectServiceItem";

const SelectService = () => {
  return (
    <div className="p-[1rem] lg:p-[4rem] shadow-lg grid gap-[4rem] border">
      <h3 className="font-semibold text-[2rem] ">2. Select A Service </h3>

      <div className="bg-[#F4F4F4] rounded-lg grid gap-[4rem] p-[1rem] lg:p-[2rem] ">
        {allServices.map((service) => (
          <SelectServiceItem key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SelectService;
