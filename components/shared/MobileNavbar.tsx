"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { IoMdArrowDropdown } from "react-icons/io";

interface MobileNavbarProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const servicesSubMenu = [
  {
    id: 1,
    text: "Wheelchair",
    link: "/services/wheelchair",
  },
  {
    id: 2,
    text: "Stretcher",
    link: "/services/stretcher",
  },
  {
    id: 3,
    text: "Sedan Ambulatory",
    link: "/services/sedan-ambulatory",
  },
  {
    id: 4,
    text: "Medical Courier",
    link: "/services/medical-courier",
  },
  {
    id: 5,
    text: "Regular Delivery",
    link: "/services/regular-delivery",
  },
  {
    id: 6,
    text: "Book Qualified Patient Support",
    link: "/services/book-support",
  },
];

const driveWithUsSubmenu = [
  {
    id: 6,
    text: "Drive with Ebosi",
    link: "/drive-with-us",
  },
  {
    id: 7,
    text: "Careers and Learning",
    link: "/careers-and-learning",
  },
];

const MobileNavbar: FC<MobileNavbarProps> = ({ setIsOpen, isOpen }) => {
  const [showServices, setShowServices] = useState(false);
  const [showDrivewithUsMenu, setShowDrivewithUsMenu] = useState(false);

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex flex-col justify-start gap-[6rem] ">
      <div className="flex justify-between items-center ">
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
      <ul className="flex flex-col justify-start gap-[3rem] font-medium  ">
        <li  className="w-fit">
          <Link
            onClick={() => setIsOpen(false)}
            className={cn(
              isActive("/") ? "border-b-4 border-rose-500 text-[#395BA6]" : "",
              "grid h-full "
            )}
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li >
          <Button
            onClick={() => {
              setShowServices(!showServices);
            }}
            className={cn(
              isActive("/services")
                ? "border-b-4  border-rose-500 text-[#395BA6]"
                : "",
              " h-full flex gap-2 pl-0 justify-center items-center rounded-none bg-transparent hover:bg-transparent text-black text-[1.6rem]"
            )}
          >
            Services
            <IoMdArrowDropdown size={22} />
          </Button>
          <div
            className={cn(
              showServices ? "flex" : "hidden",
              "flex-col  pb-8 bg-white "
            )}
          >
            {servicesSubMenu.map((item) => (
              <Link
                onClick={() => {
                  setShowServices(false);
                  setIsOpen(false);
                }}
                key={item.id}
                href={item.link}
                className="px-[2rem]  py-2 text-[1.4rem] text-black bg-white hover:bg-[#CC1815] hover:text-white"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </li>
        <li >
          <Link
            onClick={() => setIsOpen(false)}
            className={cn(
              isActive("/about-us")
                ? "border-b-4 border-rose-500 text-[#395BA6]"
                : "",
              "grid h-full "
            )}
            href={"/about-us"}
          >
            About Us
          </Link>
        </li>
        <li >
          <Link
            onClick={() => setIsOpen(false)}
            className={cn(
              isActive("/book-a-ride")
                ? "border-b-4 border-rose-500 text-[#395BA6]"
                : "",
              "grid h-full "
            )}
            href={"/book-a-ride"}
          >
            Book a Ride
          </Link>
        </li>
        <li >
          <Button
            onClick={() => setShowDrivewithUsMenu(!showDrivewithUsMenu)}
            className={cn(
              isActive("/drive-with-us")
                ? "border-b-4 border-rose-500 text-[#395BA6]"
                : "",
              " h-full flex pl-0 gap-2 justify-center items-center rounded-none bg-transparent hover:bg-transparent text-black text-[1.6rem]"
            )}
          >
            Drive with us
            <IoMdArrowDropdown size={22} />
          </Button>
          <div
            className={cn(
              showDrivewithUsMenu ? "flex" : "hidden",
              "flex-col w-[17.5rem] pb-8  bg-white "
            )}
          >
            {driveWithUsSubmenu.map((item) => (
              <Link
                onClick={() => {
                  setShowDrivewithUsMenu(false);
                  setIsOpen(false);
                }}
                key={item.id}
                href={item.link}
                className="px-[2rem]  py-2 text-[1.4rem] text-black bg-white hover:bg-[#CC1815] hover:text-white"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </li>
        <li >
          <Link
            onClick={() => setIsOpen(false)}
            className={cn(
              isActive("/contact-us") ? "border-b-4 border-rose-500" : "",
              "grid h-full "
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
