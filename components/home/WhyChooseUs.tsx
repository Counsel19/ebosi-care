"use client";

import {
  BriefcaseBusiness,
  DollarSign,
  Phone,
  SquareLibrary,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation("home");

  return (
    <div className=" bg-[#F7F7F7] py-[4rem]">
      <div className="w__frame grid md:grid-cols-2 lg:grid-cols-4 gap-[4rem]">
        <div className="flex gap-[1rem]">
          <SquareLibrary color="#CC1815" />
          {t("no_price_surge")}
        </div>
        <div className="flex gap-[1rem]">
          <Phone color="#CC1815" />
          {t("24_7_support")}
        </div>
        <div className="flex gap-[1rem]">
          <DollarSign color="#CC1815" />
          {t("drive_with_ebosi")}
        </div>
        <div className="flex gap-[1rem]">
          <BriefcaseBusiness color="#CC1815" />
          {t("book_for_now_or_later")}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
