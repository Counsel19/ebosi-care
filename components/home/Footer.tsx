import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = ({}) => {
  return (
    <div className="py-[8rem] bg-[#051029]">
      <div className="w__frame">
        <div className="grid lg:grid-cols-4 gap-[4rem] text-white">
          <div className="space-y-[2rem]">
            <Image
              alt="ebosi_logo_white"
              src={"/images/ebosi_logo_white.svg"}
              width={300}
              height={300}
              className="w-[11rem] lg:w-[13.4rem] "
            />
            <p className="text-[#9F9F9F] ">
              Non Emergency Medical Transportation “NEMT” at your service
            </p>
          </div>

          <div className="space-y-[1rem]">
            <h5 className="font-bold ">QUICK LINKS</h5>
            <ul className="text-slate-500 space-y-[1.4rem] text-[1.4rem]">
              <li>
                <Link href="/about-us">ABOUT US</Link>
              </li>
              <li>
                <Link href="/careers-and-learning">CAREERS</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-[1rem]">
            <h5 className="font-bold">RESOURCES</h5>
            <ul className="text-slate-500 space-y-[1.4rem] text-[1.4rem]">
              {/* <li>CREDENTIALING</li>
              <li>DOCUMENTATIONS</li> */}
              {/* <li>LEARNING</li> */}
              <li>
                <Link href="/book-a-ride">BOOK A RIDE</Link>
              </li>
              <li>
                <Link href="/drive-with-us"> RIDE WITH EBOSI</Link>
              </li>
              <li>
                <Link href="/services"> SERVICES</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-[1rem]">
            <h5 className="font-bold">CONTACT</h5>
            <p className="text-rose-500 text-[1.4rem]">info@ebosicare.com</p>
          </div>
        </div>

        <hr className="mt-[5rem] mb-[1rem] " />
        <div className="flex flex-col lg:flex-row gap-[4rem] justify-between lg:items-center  text-slate-400">
          <span>Ebosi ©. All rights reserved</span>

          <div className="flex flex-col lg:flex-row lg:items-center text-[1.2rem] gap-[4rem]">
            <Link href={"/"}>PRIVACY POLICY </Link>
            <Link href={"/"}>TERMS OF SRVICE </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
