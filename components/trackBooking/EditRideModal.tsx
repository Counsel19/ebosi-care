"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import RideDetails from "../services/RideDetails";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { updateRideStateValues } from "@/lib/redux/slices/ride/rideSlice";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import axios, { AxiosError } from "axios";
import { toast } from "@/hooks/use-toast";

const EditRideModal = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { singleRide, bookingDetails } = useSelector(
    (store: RootState) => store.rides
  );
  const { token } = useSelector((store: RootState) => store.auth);

  useEffect(() => {
    console.log(singleRide);
    if (!singleRide) return;
    dispatch(
      updateRideStateValues({
        name: "bookingDetails",
        value: {
          ...singleRide.ride,
          user_details: {
            ...singleRide.user,
          },
        },
      })
    );
  }, []);

  const handleUpdateField = (value: string, name: string) => {
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

  const handleUpdateRide = async () => {
    try {
      setIsLoading(true);

      console.log({
        reservation_number: singleRide?.ride.reservation_number,

        pickup_location: bookingDetails?.pickup_location,
        dropoff_location: bookingDetails?.dropoff_location,
        schedule_type: bookingDetails?.schedule_type,
        ride_date: bookingDetails?.ride_date,
        ride_time: bookingDetails?.ride_time,
        service_id: bookingDetails?.service_id,
        passengers: bookingDetails?.passengers,
        luggage: bookingDetails?.luggage,
      });
      await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/rides/update`,
        {
          reservation_number: singleRide?.ride.reservation_number,

          pickup_location: bookingDetails?.pickup_location,
          dropoff_location: bookingDetails?.dropoff_location,
          schedule_type: bookingDetails?.schedule_type,
          ride_date: bookingDetails?.ride_date,
          ride_time: bookingDetails?.ride_time,
          service_id: bookingDetails?.service_id,
          passengers: bookingDetails?.passengers,
          luggage: bookingDetails?.luggage,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      toast({
        title: "Ride Update Successfully",
        description: "Your ride has been Updated",
        variant: "success",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          title: "Error in Performing Action",
          description: error.response?.data.message,
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogTrigger
        className={cn(
          buttonVariants({
            className: "bg-[#395BA6] text-white min-w-[13.5rem]",
          })
        )}
      >
        <span>Edit Ride</span>
      </DialogTrigger>
      <DialogContent className=" p-0 min-w-[60%]">
        <DialogTitle className="hidden">Edit Ride</DialogTitle>
        {bookingDetails ? (
          <div className="p-12 space-y-[2rem]">
            <div className="flex flex-col gap-[1rem] lg:flex-row lg:gap-[2rem] ">
              <div className="w-full space-y-4">
                <label htmlFor="">Enter your pickup Location:</label>
                <div className="flex shadow-inner w-full rounded-sm  border border-input bg-transparent p-0  ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accentGreen focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <Input
                    value={bookingDetails?.pickup_location}
                    onChange={(e) =>
                      handleUpdateField(e.target.value, "pickup_location")
                    }
                    className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="E.g Home, Pharmacy, Hospital"
                  />
                </div>
              </div>

              <div className="w-full  space-y-4">
                <label htmlFor="">Enter your dropoff Location:</label>
                <Input
                  value={bookingDetails?.dropoff_location}
                  onChange={(e) =>
                    handleUpdateField(e.target.value, "dropoff_location")
                  }
                  className="w-full shadow-inner rounded-sm outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="E.g Home, Pharmacy, Hospital"
                />
              </div>
            </div>
            <RideDetails fromEditRide />

            <div className="flex gap-[2rem] justify-end  items-center ">
              <Button
                type="button"
                onClick={() => {
                  setShow(false);
                }}
                className="border-[#395BA6] bg-gray-200 text-[#395BA6] min-w-[13.5rem]"
                variant={"outline"}
              >
                <span>Cancel</span>
              </Button>
              <Button
                onClick={handleUpdateRide}
                isLoading={isLoading}
                type="button"
                className="bg-[#395BA6] text-white min-w-[13.5rem]"
              >
                <span>Update</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-[4rem] grid place-content-center">
            <Loader2 className=" h-24 w-24 animate-spin" />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditRideModal;
