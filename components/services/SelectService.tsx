"use client";

import { allServices } from "@/lib/data";
import React from "react";
import SelectServiceItem from "./molecules/SelectServiceItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { Button } from "../ui/button";
import { updateServicesStateValues } from "@/lib/redux/slices/servicesSlice";
 
const SelectService = () => {
  const { selectedServices } = useSelector(
    (store: RootState) => store.services
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-[1rem] lg:p-[4rem] shadow-lg grid gap-[4rem] border">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-[2rem] ">2. Select A Service </h3>
        {selectedServices != null ? (
          <Button
            onClick={() => {
              dispatch(
                updateServicesStateValues({
                  name: "selectedServices",
                  value: null,
                })
              );
            }}
          >
            See More Service Options
          </Button>
        ) : null}
      </div>

      <div className="bg-[#F4F4F4] rounded-lg grid gap-[4rem] p-[1rem] lg:p-[2rem] ">
        {selectedServices ? (
          <SelectServiceItem
            key={selectedServices.id}
            service={selectedServices}
          />
        ) : (
          allServices.map((service) => (
            <SelectServiceItem key={service.id} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default SelectService;
