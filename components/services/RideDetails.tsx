import React from "react";
import { Input } from "../ui/input";

const RideDetails = () => {
  return (
    <div className="lg:p-[4rem] p-[1rem] shadow-lg grid gap-[4rem] border">
      <h3 className="font-semibold text-[2rem] ">1. Your Ride Details </h3>
      <div className="grid lg:grid-cols-4 gap-[2rem] text-gray-600">
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
        * Arrival Times provided are only estimates based on the current traffic
        data.
      </p>
    </div>
  );
};

export default RideDetails;
