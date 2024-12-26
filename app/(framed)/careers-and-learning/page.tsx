import Categories from "@/components/careersAndLearning/Categories";
import AppShowCase from "@/components/driveWithEbosi/AppShowCase";
import StartEarningToday from "@/components/driveWithEbosi/StartEarningToday";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CareersAndLearning = () => {
  return (
    <div className="space-y-[8rem]">
      <div className="bg-[url('/images/driver-banner.jpg')] bg-no-repeat bg-cover bg-center h-[55rem] grid place-content-center relative ">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />

        <div className=" relative flex flex-col gap-[1rem] items-center justify-center  mx-auto">
          <h3 className="font-medium  text-white text-[5.4rem] leading-[6rem] text-center">
            Careers and Learning
          </h3>
          <p className="text-center font-light text-white">
            Start Driving with Ebosi by downloading the app now!
          </p>
          <div className="flex gap-4 mt-[2rem]">
            <Button className="bg-white p-2 gap-4 h-fit text-black hover:bg-white hover:text-black">
              <Image
                width={42}
                height={42}
                alt="google Play"
                src={"/icons/googleplay_logo.png"}
                className="w-[3rem] h-[3rem]"
              />
              <div className=" flex flex-col gap-0 items-start">
                <span className="text-sm  uppercase">Avialable on</span>
                <p className="text-[1.6rem] ">Google Play</p>
              </div>
            </Button>
            <Button className="bg-white p-2 gap-4 h-fit text-black hover:bg-white hover:text-black">
              <Image
                width={42}
                height={42}
                alt="apple_logo"
                src={"/icons/apple_logo.png"}
                className="w-[3rem] h-[3rem]"
              />
              <div className=" flex flex-col gap-0 items-start">
                <span className="text-sm  uppercase">Avialable on</span>
                <p className="text-[1.6rem] ">Apple Store</p>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <Categories />
      <AppShowCase />
      <StartEarningToday />
    </div>
  );
};

export default CareersAndLearning;
