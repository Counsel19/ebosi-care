"use client";

import AppShowCase from "@/components/driveWithEbosi/AppShowCase";
import DriveWithEbosiSteps from "@/components/driveWithEbosi/DriveWithEbosiSteps";
import StartEarningToday from "@/components/driveWithEbosi/StartEarningToday";
import WhyEbosiCare from "@/components/driveWithEbosi/WhyEbosiCare";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";
import React from "react";

const DriveWithUs = () => {
  return (
    <div className="">
      <div className="bg-[url('/images/female_helping_aman.jpg')] bg-no-repeat bg-cover bg-center h-[55rem] grid place-content-center relative ">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />

        <div className=" relative flex flex-col gap-[1rem] items-center justify-center  mx-auto">
          <h3 className="font-medium  text-white text-[5.4rem] leading-[6rem] text-center">
            Drive with Ebosi today!
          </h3>
          <p className="text-center font-light text-white">
            Welcome to Ebosicare You&apos;re on the road to success.
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
      <div className="w__frame">
        <div className="grid grid-cols-3 gap-8 mt-[4rem]">
          <Link href={"#"}>
            <Image width={400} height={400} alt="" src="/images/ride.png" />
          </Link>
          <Link href={"#"}>
            <Image width={400} height={400} alt="" src="/images/ride.png" />
          </Link>
          <Link href={"#"}>
            <Image width={400} height={400} alt="" src="/images/ride.png" />
          </Link>
        </div>

        <div className="my-[8rem]">
          <h3 className="text-center mb-[3rem] text-[3.4rem] font-medium">
            What is EBOSICARE?
          </h3>

          <div className="space-y-[2rem]">
            <p className="text-[1.4rem]">
              We are inspired by the free market. Here at Ebosicare, we bring
              opportunity and freedom of choice to everyone by creating a
              rideshare service that focuses on customer value, safety, and
              pride.
            </p>

            <p className="text-[1.4rem]">
              We created a reservation system. We eliminated surge pricing. We
              ousted third-party fees by eliminating the middle man. We added a
              touch of class and personality.
            </p>
          </div>
        </div>
      </div>

      <WhyEbosiCare />
      <DriveWithEbosiSteps />
      <AppShowCase />
      <WhyChooseUs />
      <StartEarningToday />
    </div>
  );
};

export default DriveWithUs;
