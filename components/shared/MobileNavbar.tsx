"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {  X } from "lucide-react";
import Image from "next/image";

interface MobileNavbarProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean
}

const MobileNavbar: FC<MobileNavbarProps> = ({ setIsOpen, isOpen }) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div>
      <div className="flex justify-between items-center mb-[6rem]">
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          <X />
        </button>
        <Link href={"/"} className="">
          <Image
            alt="ebosi_logo"
            src={"/images/ebosi_logo.svg"}
            className="w-[11rem] lg:w-[20.4rem] h-[5.1rem] lg:h-[9.3rem]"
            width={234}
            height={93}
          />
        </Link>
        <div></div>
      </div>
      <ul className="flex flex-col gap-[3rem] font-medium items-center ">
        <li className="grid uppercase  ">
          <Link
            onClick={() => setIsOpen(false)}
            className={cn(
              isActive("/") ? "border-b-4 border-rose-500 text-[#395BA6]" : "",
              "grid h-full place-content-center"
            )}
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li className="grid uppercase  ">
          <Link
            onClick={() => setIsOpen(false)}
            className={cn(
              isActive("/services")
                ? "border-b-4 border-rose-500 text-[#395BA6]"
                : "",
              "grid h-full place-content-center"
            )}
            href={"/services"}
          >
            Services
          </Link>
        </li>
        <li className="grid uppercase  ">
          <Link
            onClick={() => setIsOpen(false)}
            className={cn(
              isActive("/about-us")
                ? "border-b-4 border-rose-500 text-[#395BA6]"
                : "",
              "grid h-full place-content-center"
            )}
            href={"/about-us"}
          >
            About Us
          </Link>
        </li>
        <li className="grid uppercase  ">
          <Link
            onClick={() => setIsOpen(false)}
            className={cn(
              isActive("/book-a-ride")
                ? "border-b-4 border-rose-500 text-[#395BA6]"
                : "",
              "grid h-full place-content-center"
            )}
            href={"/book-a-ride"}
          >
            Book a Ride
          </Link>
        </li>
        <li className="grid uppercase  ">
          <Link
            onClick={() => setIsOpen(false)}
            className={cn(
              isActive("/drive-with-us")
                ? "border-b-4 border-rose-500 text-[#395BA6]"
                : "",
              "grid h-full place-content-center"
            )}
            href={"/drive-with-us"}
          >
            Drive with us
          </Link>
        </li>
        <li className="grid uppercase  ">
          <Link
            onClick={() => setIsOpen(false)}
            className={cn(
              isActive("/contact-us") ? "border-b-4 border-rose-500" : "",
              "grid h-full place-content-center"
            )}
            href={"/contact-us"}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
