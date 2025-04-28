"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const MissonAndVision = () => {
  const { t } = useTranslation("about");
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
            {t('mission_vission')}
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
            {t(`mission_vission_desc1`)}
          </p>
          <p className="text-[1.8rem] leading-[2.2rem] lg:text-[2.3rem] lg:leading-[3.2rem]">
            {t(`mission_vission_desc2`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissonAndVision;
