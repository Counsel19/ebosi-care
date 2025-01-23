import DownloadAppSection from "@/components/trackBooking/DownloadAppSection";
import DriverDetails from "@/components/trackBooking/DriverDetails";
import ReservationDetails from "@/components/trackBooking/ReservationDetails";
import TrackingMap from "@/components/trackBooking/TrackingMap";
import { testRide } from "@/lib/data";
import Link from "next/link";
import React from "react";

const TrackedVechiclePage = () => {
  return (
    <div className="w__frame py-[6rem]">
      <h2 className="mb-[3rem] font-bold text-[3rem] text-center">
        Booking ID 1222224
      </h2>
      <div className="grid  grid-cols-[2.8fr_1fr] gap-[2rem] ">
        <div className="grid gap-[2rem] grid-rows-[60rem_1fr]">
          <TrackingMap />
          <DriverDetails />
        </div>
        <div className="grid gap-[2rem] grid-rows-[2.8fr_1fr]">
          <ReservationDetails reservationDetails={testRide} />
          <DownloadAppSection />
        </div>
      </div>

      <div className="flex justify-end">
        <Link href="/" className="text-[#CC1815]" >Return to homepage</Link>
      </div>
    </div>
  );
};

export default TrackedVechiclePage;
