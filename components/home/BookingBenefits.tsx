"use client";

import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function BookingBenefits() {
  const { t } = useTranslation("home");
  return (
    <div className="w__frame space-y-[8rem] ">
      <h3 className="text-[#757575] text-[3rem] text-center leading-[3.4rem] ">
        {t("booking_benefits_title")}
      </h3>

      <div className="grid lg:grid-cols-2 gap-[4rem]">
        <div className="relative hidden lg:block">
          <div className="w-[47rem] h-[47rem] rounded-full bg-[#3A65C5]" />
          <Image
            src={"/images/app_mockup.png"}
            alt="app_mockup"
            height={500}
            width={500}
            className="absolute top-0 bottom-0 left-0 right-0"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-[2rem]">
          <div>
            <Image
              src={"/icons/location.png"}
              alt="location"
              width={200}
              height={200}
              className="w-[4.4rem] h-[4.4rem]"
            />
            <h5 className=" text-[2rem] leading-[3.4rem] ">
              {t("enter_destination")}
            </h5>
            <p className="text-[1.2rem] ">{t("benefit_desc")}</p>
          </div>
          <div>
            <Image
              src={"/icons/check.png"}
              alt="location"
              width={200}
              height={200}
              className="w-[4.4rem] h-[4.4rem]"
            />
            <h5 className=" text-[2rem] leading-[3.4rem] ">
              {t("choose_vehicle")}
            </h5>
            <p className="text-[1.2rem] ">{t("benefit_desc")}</p>
          </div>
          <div>
            <Image
              src={"/icons/time.png"}
              alt="location"
              width={200}
              height={200}
              className="w-[4.4rem] h-[4.4rem]"
            />
            <h5 className=" text-[2rem] leading-[3.4rem] ">
              {t("choose_now_later")}
            </h5>
            <p className="text-[1.2rem] ">{t("benefit_desc")}</p>
          </div>
          <div>
            <Image
              src={"/icons/record.png"}
              alt="location"
              width={200}
              height={200}
              className="w-[4.4rem] h-[4.4rem]"
            />
            <h5 className=" text-[2rem] leading-[3.4rem] ">
              {t("book_ride")}
            </h5>
            <p className="text-[1.2rem] ">{t("benefit_desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingBenefits;
