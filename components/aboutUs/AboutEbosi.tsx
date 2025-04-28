"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutEbosi = () => {
  const { t } = useTranslation("about");
  return (
    <div className="w__frame grid lg:grid-cols-[1.6fr_2fr] gap-[4rem]">
      <div className="flex flex-col items-end order-2 lg:order-none">
        <Image
          alt="about_ebosi_passengers"
          src={"/images/about_ebosi_passengers.png"}
          width={400}
          height={400}
          className="h-[30rem] object-contain"
        />
        <Image
          alt="about_ebosi_car"
          src={"/images/about_ebosi_car.png"}
          width={300}
          height={300}
          className="h-[18rem] object-contain -translate-x-[50%] -translate-y-[50%]"
        />
      </div>
      <div className="space-y-[3rem]">
        <h3 className="font-semibold text-[4rem] lg:text-[5rem]">
          {t(`about_us`)}
        </h3>

        <div className="space-y-[2rem]">
          <p className="text-[1.8rem] leading-[2.2rem] lg:text-[2.3rem] lg:leading-[3.2rem]">
            {t(`about_info1`)}
          </p>
          <p className="text-[1.8rem] leading-[2.2rem] lg:text-[2.3rem] lg:leading-[3.2rem]">
            {t(`about_info2`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEbosi;
