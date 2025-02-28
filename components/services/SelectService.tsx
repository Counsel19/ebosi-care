"use client";

import React, { FC } from "react";
import SelectServiceItem from "./molecules/SelectServiceItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { Button } from "../ui/button";
import { updateServicesStateValues } from "@/lib/redux/slices/service/servicesSlice";
import { Hearts } from "react-loader-spinner";

const SelectService: FC = () => {
  const { selectedServices, allServices } = useSelector(
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
        ) : allServices ? (
          allServices.slice(0, -1).map((service) => (
            <SelectServiceItem key={service.id} service={service} />
          ))
        ) : (
          <div className="bg-gray-300 grid place-content-center h-[40rem]">
            <Hearts
              height="150"
              width="150"
              color="#CC1815"
              ariaLabel="hearts-loading"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectService;
