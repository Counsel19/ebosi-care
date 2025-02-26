import React, { FC } from "react";
import { Input } from "../ui/input";

import DateTimeDialog from "./molecules/DateTimeDialog";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { updateRideStateValues } from "@/lib/redux/slices/ride/rideSlice";
import { cn } from "@/lib/utils";

const RideDetails:FC<{
  fromEditRide?: boolean
}> = ({ fromEditRide }) => {
  const { bookingDetails } = useSelector((store: RootState) => store.rides);

  const dispatch = useDispatch<AppDispatch>();

  const handleFieldChange = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    dispatch(
      updateRideStateValues({
        name: "bookingDetails",
        value: {
          ...bookingDetails,
          [name]: value,
        },
      })
    );
  };

  return (
    <div className="lg:p-[4rem] p-[1rem] shadow-lg grid gap-[4rem] border">
      <h3 className="font-semibold text-[2rem] ">1. Your Ride Details </h3>
      <div className={cn(`grid  gap-[2rem] text-gray-600`, fromEditRide ? "lg:grid-cols-2": "lg:grid-cols-4")}>
        <div className="w-full space-y-4 ">
          <label htmlFor=" ">When do you need a ride:</label>
          <DateTimeDialog />
        </div>
        <div className="w-full space-y-4">
          <label htmlFor="">Passengers:</label>
          <Input
            name="passengers"
            value={bookingDetails?.passengers}
            onChange={(e) =>
              handleFieldChange({
                name: e.target.name,
                value: e.target.value,
              })
            }
            className="w-full rounded-sm"
            placeholder="E.g 1"
          />
        </div>
        <div className="w-full space-y-4">
          <label htmlFor="">Check-in Luggage</label>
          <Input
            name="luggage"
            value={bookingDetails?.luggage}
            onChange={(e) =>
              handleFieldChange({
                name: e.target.name,
                value: e.target.value,
              })
            }
            className="w-full rounded-sm"
           placeholder="E.g 1"
          />
        </div>
        <div className="w-full space-y-4">
          <label htmlFor="">Apartment/Gate # (Optional)</label>
          <Input
            name="apartment"
            value={bookingDetails?.apartment}
            onChange={(e) =>
              handleFieldChange({
                name: e.target.name,
                value: e.target.value,
              })
            }
            className="w-full rounded-sm"
            placeholder="e.g Suite 123"
          />
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
