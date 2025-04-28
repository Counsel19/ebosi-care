"use client";

import React, { FC, useEffect, useState } from "react";
import BookRideWindow from "./BookRideWindow";
import { cn } from "@/lib/utils";
import EditCancelRide from "./EditCancelRide";
import TrackVehicle from "./TrackVehicle";
import { useTranslation } from "react-i18next";

const carouselSlides = [
  "bg-[url('/images/weelchair-car-transaport.jpg')]",
  "bg-[url('/images/customer-entering-car.jpg')]",
  "bg-[url('/images/driver-with-customer.jpg')]",
];

interface HomeBannerProps {
  editCancelRide?: boolean;
  trackVehicle?: boolean;
}

const HomeBanner: FC<HomeBannerProps> = ({ editCancelRide, trackVehicle }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { t } = useTranslation("home");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % carouselSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className={cn(
          "bg-no-repeat bg-cover h-[45rem]  relative  lg:p-[6rem] transition-all duration-500",
          carouselSlides[currentSlide]
        )}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />

        <div className=" relative  w-full  md:w-[80%] mx-auto">
          <h3 className="font-semibold  text-white text-[2.7rem] leading-[4rem] lg:text-[4.5rem] lg:leading-[5rem] text-center">
            {t(`tagline`)}
          </h3>
        </div>
      </div>
      <div className="-translate-y-[60%] mx-auto p-[2rem] md:w-[75%]">
        {editCancelRide ? (
          <EditCancelRide />
        ) : trackVehicle ? (
          <TrackVehicle />
        ) : (
          <BookRideWindow />
        )}
      </div>
    </div>
  );
};

export default HomeBanner;
