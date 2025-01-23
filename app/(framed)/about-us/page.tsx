import AboutEbosi from "@/components/aboutUs/AboutEbosi";
import EbosiFairPrices from "@/components/aboutUs/EbosiFairPrices";
import MissonAndVision from "@/components/aboutUs/MissonAndVision";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#FFEAEA] space-y-[10rem]">
      <div className="bg-[url('/images/woman-showing-app.png')] bg-no-repeat bg-cover bg-center h-[47rem] grid place-content-center relative ">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />

        <div className=" relative flex flex-col gap-[4rem] items-start justify-center  mx-auto">
          <h3 className="font-medium  text-white text-[5.4rem] leading-[5.5rem] lg:text-[6rem] lg:leading-[7rem] ">
            Welcome to Ebosicare
          </h3>

          <Link
            href={"/book-a-ride"}
            className={cn(
              buttonVariants({
                className: "bg-[#CC1815] mx-auto",
              })
            )}
          >
            Book Now
          </Link>
        </div>
      </div>

      <AboutEbosi />

      <EbosiFairPrices />

      <MissonAndVision />

      <div className="bg-[url('/images/man-wheelchair-lift.png')] bg-no-repeat bg-cover h-[35rem] grid place-content-center relative ">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />

        <h3 className="flex gap-[1rem] text-white relative w-[90%] md:w-[60%] mx-auto font-semibold text-[4rem] lg:text-[5rem]">
          Quality and Effectiveness of the Healthcare Service
        </h3>
      </div>
    </div>
  );
};

export default AboutPage;
