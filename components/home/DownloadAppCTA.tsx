import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

const DownloadAppCTA = () => {
  return (
    <div className="w__frame ">
      <div className=" grid lg:grid-cols-2 gap-[4rem] items-center">
        <div className=" space-y-[2rem]">
          <h3 className="font-bold text-[3rem] leading-[4rem] lg:text-[5rem] uppercase lg:leading-[4.5rem] text-[#506BA5]">
            Download the app
          </h3>
          <p>
            Download our app and enjoy the best service from EBOSICARE. All you
            have to do to begin using it is to enter your name and mobile phone
            number. You&apos;ll access:
          </p>
          <ul>
            <li> Special offers </li>
            <li>EBOSICARE loyalty program</li>
            <li> More pricing plans</li>
          </ul>

          <div className="flex gap-[2rem] items-center">
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
                  Avialable On
                </span>
                <span >Google Play</span>
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
                  Avialable On
                </span>
                <span >App Store</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid order-2 lg:order-1 place-content-center">
          <Image
            alt="Ebosicare app"
            src={"/images/app_lg.png"}
            width={700}
            height={400}
            className="h-[30rem] lg:h-[60rem] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppCTA;
