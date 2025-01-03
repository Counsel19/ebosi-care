import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            <Link href={""}>
              <Image
                src={"/images/download_appstore.png"}
                alt="download_appstore "
                height={200}
                width={200}
                className="w-[15rem] md:w-[20rem]"
              />
            </Link>
            <Link href={""}>
              <Image
                src={"/images/download_googleplay.png"}
                alt="download_googleplay "
                height={200}
                width={200}
                className="w-[15rem] md:w-[20rem]"
              />
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
