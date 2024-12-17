"use client";

import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import MobileNavbar from "./MobileNavbar";

// interface NavbarProps {

// }

const Navbar: FC = ({}) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="h-[15rem] bg-white grid items-center border">
        <div className="w__frame flex justify-between items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <AlignJustify />
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
          <div>
            <ul className="hidden  lg:flex lg:gap-[3rem] font-medium items-center ">
              <li className="grid uppercase h-[15rem] ">
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
              <li className="grid uppercase h-[15rem] ">
                <Link
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
              <li className="grid uppercase h-[15rem] ">
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
              <li className="grid uppercase h-[15rem] ">
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
              <li className="grid uppercase h-[15rem] ">
                <Link
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
              <li className="grid uppercase h-[15rem] ">
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
