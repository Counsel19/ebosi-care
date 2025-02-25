"use client";

import DownloadAppSection from "@/components/trackBooking/DownloadAppSection";
import DriverDetails from "@/components/trackBooking/DriverDetails";
import ReservationDetails from "@/components/trackBooking/ReservationDetails";
import TrackingMap from "@/components/trackBooking/TrackingMap";
import { testRide } from "@/lib/data";
import { getSingleRide } from "@/lib/redux/slices/ride/rideThunk";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { IRide } from "@/types/rides";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TrackedVechiclePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [rideDetails, setRideDetails] = useState<IRide | null>(null);
  const params = useParams<{ bookingId: string }>();
  const { singleRide } = useSelector((state: RootState) => state.rides);

  useEffect(() => {
    const getData = async () => {
      if (!params.bookingId) return;
      try {
        await dispatch(getSingleRide(params.bookingId));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [dispatch, params.bookingId]);

  const setRide = () => {
    if (singleRide) {
      setRideDetails(singleRide);
    } else {
      setRideDetails(testRide);
    }
  };

  setRide();
  return (
    <div className="w__frame py-[6rem]">
      <h2 className="mb-[3rem] font-bold text-[3rem] text-center">
        Booking ID 1222224
      </h2>
      {rideDetails ? (
        <div className="grid  grid-cols-[2.8fr_1fr] gap-[2rem] ">
          <div className="grid gap-[2rem] grid-rows-[60rem_1fr]">
            <TrackingMap />
            <DriverDetails />
          </div>
          <div className="grid gap-[2rem] grid-rows-[2.8fr_1fr]">
            <ReservationDetails reservationDetails={rideDetails} />
            <DownloadAppSection />
          </div>
        </div>
      ) : (
        <div className="p-[4rem] grid place-content-center">
          <Loader2 className=" h-10 w-10 animate-spin" />
        </div>
      )}

      <div className="flex justify-end">
        <Link href="/" className="text-[#CC1815]">
          Return to homepage
        </Link>
      </div>
    </div>
  );
};

export default TrackedVechiclePage;
