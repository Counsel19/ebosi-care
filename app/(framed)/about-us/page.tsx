import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="grid gap-[6rem]">
      <div className="bg-[url('/images/female_helping_aman.jpg')] bg-no-repeat bg-cover bg-center h-[55rem] grid place-content-center relative ">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />

        <div className=" relative flex flex-col gap-[4rem] items-center justify-center max-w-[80%] mx-auto">
          <h3 className="font-medium  text-white text-[5.4rem] leading-[6rem] text-center">
            Welcome to Ebosicare
          </h3>
          <p className="text-center font-light text-white">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,
          </p>
          <Link
            href={"/book-a-ride"}
            className={cn(
              buttonVariants({
                className: "bg-[#CC1815]",
              })
            )}
          >
            Book Now
          </Link>
        </div>
      </div>

      <div className="space-y-[4rem] w__frame">
        <h4 className="font-medium  text-[5.4rem] leading-[6rem] text-center">
          About Us
        </h4>
        <div className="grid gap-[2rem] text-gray-600  md:text-[1.4rem] leading-[1.8rem]">
          <p>
            Ebosi was founded by Oathen Group LLC, a company existing since
            2019. We have been in the NEMT business since our inception and have
            provided excellent service within the Houston Area. Our traditional
            model of business brought about the founding of Ebosi which is today
            a leading NEMT rideshare solution ready to change &apos;the status
            quo&apos;
          </p>
        </div>
      </div>

      <div className="bg-[url('/images/female_helping_aman.jpg')] bg-no-repeat bg-cover h-[35rem] grid place-content-center relative ">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />
      </div>

      <div className="space-y-[4rem] w__frame mb-[6rem]">
        <h4 className="font-medium  text-[5.4rem] leading-[6rem] text-center">
          Mission and Vision
        </h4>
        <div className="grid gap-[2rem] text-gray-600 text-[1.4rem] leading-[1.8rem]">
          <p>
            Our focus is to improve the quality and effectiveness of the
            healthcare service industry with technology while maintaining
            industry and security standards. by 2030 We will be the world&apos;s
            leading healthcare service solutio provider
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
