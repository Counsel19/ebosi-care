import Image from "next/image";
import React from "react";

const MissonAndVision = () => {
  return (
    <div className="w__frame grid lg:grid-cols-[1.6fr_2fr] gap-[4rem]">
      <div className="hidden lg:block">
        <Image
          alt="driver_app"
          src={"/images/driver_app.png"}
          className="h-[30rem] lg:h-[60rem] object-contain"
          width={700}
          height={400}
        />
      </div>
      <div className=" space-y-[4rem] bg-white  rounded-[3rem] p-[4rem] lg:px-[6rem] lg:py-[8rem] ">
        <div className="grid grid-cols-[2fr_1fr] justify-between items-start gap-[1rem]">
          <h4 className="text-[3.6rem]  lg:text-[5.4rem] lg:leading-[6rem] font-bold">
            Mission & Vision
          </h4>
          <Image
            alt="ebosi_app"
            src={"/icons/admission_outline.svg"}
            className="justify-self-end"
            width={70}
            height={70}
          />
        </div>
        <div className="space-y-[2rem]">
          <p className="text-[1.8rem] leading-[2.2rem] lg:text-[2.3rem] lg:leading-[3.2rem]">
            Our focus is to improve the quality and effectiveness of the
            healthcare service industry with technology while maintaining
            industry and security standards.
          </p>
          <p className="text-[1.8rem] leading-[2.2rem] lg:text-[2.3rem] lg:leading-[3.2rem]">
            By 2030 We will be the world&apos;s leading healthcare service
            solution provider
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissonAndVision;
