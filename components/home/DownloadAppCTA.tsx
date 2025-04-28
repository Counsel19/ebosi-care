"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { useTranslation } from "react-i18next";

const DownloadAppCTA = () => {
  const { t } = useTranslation("home");

  return (
    <div className="w__frame ">
      <div className=" grid lg:grid-cols-2 gap-[4rem] items-center">
        <div className=" space-y-[2rem]">
          <h3 className="font-bold text-[3rem] leading-[4rem] lg:text-[5rem] uppercase lg:leading-[4.5rem] text-[#506BA5]">
            {t("download_app")}
          </h3>
          <p>{t("download_app_desc")}</p>
          <ul>
            <li> {t("special_off")} </li>
            <li> {t("driver_bonus")}</li>
            <li> {t("rider_discount")} </li>
            <li> {t("ebosi_bonus")}</li>
            <li> {t("loyalty_programs")}</li>
            <li> {t("pricing_plans")}</li>
          </ul>

          <div className="flex flex-col lg:flex-row gap-[2rem] lg:items-center">
            <Link
              href={"/"}
              className={cn(
                buttonVariants({
                  className:
                    "  justify-start gap-2 rounded-2xl w-[19.57rem] p-4 h-fit  bg-black hover:bg-gray-900 text-white hover:text-white ",
                })
              )}
            >
              <Image
                src={"/icons/googleplay_logo.png"}
                alt="googleplay_logo"
                height={100}
                width={100}
                className="w-[2.9rem] h-[3.2rem]"
              />
              <div className="flex flex-col">
                <span className="uppercase font-light text-[1rem]">
                  {t("avialable_on")}
                </span>
                <span> {t("google_play")}</span>
              </div>
            </Link>
            <Link
              href={"/"}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  className:
                    "  justify-start gap-2 rounded-2xl w-[19.57rem] p-4 h-fit  bg-black hover:bg-gray-900 text-white hover:text-white ",
                })
              )}
            >
              <Image
                src={"/icons/apple_logo_white.png"}
                alt="apple_logo_white"
                height={100}
                width={100}
                className="w-[2.9rem] h-[3.2rem]"
              />
              <div className="flex flex-col">
                <span className="uppercase font-light text-[1rem]">
                  {t("avialable_on")}
                </span>
                <span> {t("apple_store")}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid order-2 lg:order-1 justify-start lg:place-content-center">
          <Image
            alt="Ebosicare app"
            src={"/images/ebosi_app_show.png"}
            width={700}
            height={400}
            className="h-[30rem] w-[40rem] lg:w-[70rem] lg:h-[60rem] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppCTA;
