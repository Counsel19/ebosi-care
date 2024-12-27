"use client";

import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useRef, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import { Button } from "../ui/button";
import { IoMdArrowDropdown } from "react-icons/io";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

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

const Navbar: FC = ({}) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showDrivewithUsMenu, setShowDrivewithUsMenu] = useState(false);

  const showServiceRef = useRef(null);
  const showDriveWithUsRef = useRef(null);
  useOnClickOutside(showServiceRef, () => setShowServices(false));
  useOnClickOutside(showDriveWithUsRef, () => setShowDrivewithUsMenu(false));

  return (
    <div>
      <div className="h-[8rem] md:h-[10rem] bg-white grid items-center border text-[1.5rem]">
        <div className="w__frame flex justify-between ">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <AlignJustify />
          </button>
          <Link href={"/"} className="">
            <Image
              alt="ebosi_logo"
              src={"/images/ebosi_logo.svg"}
              className="w-[11rem] lg:w-[13.4rem] h-[5.1rem] lg:h-[9.3rem]"
              width={234}
              height={93}
            />
          </Link>
          <div className="">
            <ul className="hidden  lg:flex lg:gap-[3rem] font-medium items-center ">
              <li className="grid uppercase h-[10rem] ">
                <Link
                  className={cn(
                    isActive("/")
                      ? "border-b-4 border-rose-500 text-[#395BA6]"
                      : "",
                    "grid h-full place-content-center"
                  )}
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li ref={showServiceRef} className="h-[10rem] relative ">
                <Button
                  onClick={() => setShowServices(!showServices)}
                  className={cn(
                    isActive("/services")
                      ? "border-b-4 border-rose-500 text-[#395BA6]"
                      : "",
                    " h-full flex gap-2 justify-center items-center rounded-none bg-transparent hover:bg-transparent text-black text-[1.5rem] uppercase"
                  )}
                >
                  Services
                  <IoMdArrowDropdown size={22} />
                </Button>
                <div
                  className={cn(
                    showServices ? "flex" : "hidden",
                    "flex-col absolute w-[17.5rem] pb-8 top-[80%] z-50 bg-white "
                  )}
                >
                  {servicesSubMenu.map((item) => (
                    <Link
                      onClick={() => setShowServices(false)}
                      key={item.id}
                      href={item.link}
                      className="px-[2rem]  py-2 text-[1.4rem] text-black bg-white hover:bg-[#CC1815] hover:text-white"
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </li>
              <li className="grid uppercase h-[10rem] ">
                <Link
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
              <li className="grid uppercase h-[10rem] ">
                <Link
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

              <li ref={showDriveWithUsRef} className="h-[10rem] relative ">
                <Button
                  onClick={() => setShowDrivewithUsMenu(!showDrivewithUsMenu)}
                  className={cn(
                    isActive("/services")
                      ? "border-b-4 border-rose-500 text-[#395BA6]"
                      : "",
                    " h-full flex gap-2 justify-center items-center rounded-none bg-transparent hover:bg-transparent text-black text-[1.5rem] uppercase"
                  )}
                >
                  Drive with us
                  <IoMdArrowDropdown size={22} />
                </Button>
                <div
                  className={cn(
                    showDrivewithUsMenu ? "flex" : "hidden",
                    "flex-col absolute w-[17.5rem] pb-8 top-[80%] z-50 bg-white "
                  )}
                >
                  {driveWithUsSubmenu.map((item) => (
                    <Link
                      onClick={() => setShowDrivewithUsMenu(false)}
                      key={item.id}
                      href={item.link}
                      className="px-[2rem]  py-2 text-[1.4rem] text-black bg-white hover:bg-[#CC1815] hover:text-white"
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </li>

              <li className="grid uppercase h-[10rem] ">
                <Link
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
        </div>
      </div>
      {isOpen ? (
        <div className=" z-50 fixed w-screen h-screen top-0 right-0 bottom-0 left-0 bg-white p-[4rem]">
          <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
