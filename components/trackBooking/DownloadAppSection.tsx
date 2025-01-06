import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";

const DownloadAppSection = () => {
  return (
    <div className="shadow-lg border p-[2rem] flex gap-[2rem] flex-col justify-center">
      <p className="text-gray-600 ">
        To get the best experience, Download the Ebosi mobile app using the
        buttons below.
      </p>

      <div className="flex gap-[1rem]">
        <Link
          className={cn(
            buttonVariants({
              variant: "outline",
              className: "border-[#F2C5C5]",
            })
          )}
          href={""}
        >
          <Image
            src={"/icons/app_store.png"}
            alt="app_store"
            height={50}
            width={50}
            className="w-[3rem]"
          />
          <span className="text-[#CC1815]">App Store</span>
        </Link>
        <Link
          className={cn(
            buttonVariants({
              variant: "outline",
              className: "border-[#F2C5C5]",
            })
          )}
          href={""}
        >
          <Image
            src={"/icons/playstore.png"}
            alt="playstore"
            height={50}
            width={50}
                 className="w-[3rem]"
          />
          <span className="text-[#CC1815]">Playstore</span>
        </Link>
      </div>
    </div>
  );
};

export default DownloadAppSection;
