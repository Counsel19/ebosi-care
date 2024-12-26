"use client"

import React, { useEffect, useState } from "react";
import BookRideWindow from "./BookRideWindow";
import { cn } from "@/lib/utils";

const carouselSlides = [
  "bg-[url('/images/weelchair-car-transaport.jpg')]",
  "bg-[url('/images/customer-entering-car.jpg')]",
  "bg-[url('/images/driver-with-customer.jpg')]",
];

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
          "bg-no-repeat bg-cover h-[55rem]  relative  lg:p-[6rem] transition-all duration-500",
          carouselSlides[currentSlide]
        )}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />

        <div className=" relative  w-full  md:w-[80%] mx-auto">
          <h3 className="font-bold py-[6rem] text-white text-[3rem] leading-[4rem] lg:text-[5.4rem] lg:leading-[6rem] text-center">
            Ebosicare: Your trusted Healthcare ride and health services
          </h3>
        </div>
      </div>
      <div className="-translate-y-[50%] mx-auto p-[2rem] md:w-[80%]">
        <BookRideWindow />
      </div>
    </div>
  );
};

export default HomeBanner;
