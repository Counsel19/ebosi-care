import Image from "next/image";
import React from "react";

const EbosiFairPrices = () => {
  return (
    <div className="w__frame bg-white  rounded-[3rem] p-[2.5rem] lg:p-[4rem] grid lg:grid-cols-[1.6fr_2fr] gap-[4rem]">
      <div className="hidden lg:block"> 
        <Image
          alt="about_ebosi_driver"
          src={"/images/about_ebosi_driver.png"}
          width={400}
          height={400}
          className="h-[30rem] object-contain"
        />
      </div>
      <div className="">
        <Image
          alt="ebosi_logo"
          src={"/images/ebosi_logo.svg"}
          className="mb-[4rem] w-[11rem] lg:w-[13.4rem] h-[5.1rem] lg:h-[9.3rem]"
          width={234}
          height={93}
        />

        <h3 className="mb-[2rem] flex gap-[1rem] font-semibold text-[4rem] lg:text-[5rem]">
          Fair
          <span className="flex bg-[url('/images/vector_bg.png')] bg-cover bg-no-repeat">prices</span>
          for all
        </h3>

        <p className="text-[1.8rem] leading-[2.2rem] lg:text-[2.3rem] lg:leading-[3.2rem]">
          Ebosi has evolved into a comprehensive platform, extending beyond
          ride-hailing to deliver affordable, honest, and ethical services to
          global communities.
        </p>
      </div>
    </div>
  );
};

export default EbosiFairPrices;