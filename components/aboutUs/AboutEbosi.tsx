import Image from "next/image";
import React from "react";

const AboutEbosi = () => {
  return (
    <div className="w__frame grid lg:grid-cols-[1.6fr_2fr] gap-[4rem]">
      <div className="flex flex-col items-end order-2 lg:order-none">
        <Image
          alt="about_ebosi_passengers"
          src={"/images/about_ebosi_passengers.png"}
          width={400}
          height={400}
          className="h-[30rem] object-contain"
        />
        <Image
          alt="about_ebosi_car"
          src={"/images/about_ebosi_car.png"}
          width={300}
          height={300}
          className="h-[18rem] object-contain -translate-x-[50%] -translate-y-[50%]"
        />
      </div>
      <div className="space-y-[3rem]">
        <h3 className="font-semibold text-[4rem] lg:text-[5rem]">About Us</h3>

        <div className="space-y-[2rem]">
          <p className="text-[1.8rem] leading-[2.2rem] lg:text-[2.3rem] lg:leading-[3.2rem]">
            Ebosi was founded by Oathen Group LLC, a company existing since
            2019. We have been in the NEMT business since our inception and have
            provided excellent service within the Houston Area.
          </p>
          <p className="text-[1.8rem] leading-[2.2rem] lg:text-[2.3rem] lg:leading-[3.2rem]">
            Our traditional model of business brought about the founding of
            Ebosi which is today a leading NEMT rideshare solution ready to
            change &apos;the status quo&apos;
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutEbosi;
