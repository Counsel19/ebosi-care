import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const StartEarningToday = () => {
  return (
    <div className="h-[50rem] bg-[#8F8F8F] grid place-content-center mt-[8rem] ">
      <div className="w__frame py-[8rem] h-fit space-y-[2rem] flex flex-col justify-center items-center text-white">
        <p className="w-[80%] text-xl text-center mx-auto  font-semibold">
          Become a member of the growing EBOSICARE community and experience a
          work day that revolves entirely around your daily schedule
        </p>

        <h3 className=" text-[4.4rem] font-medium">START EARNING TODAY!</h3>
        <hr className="w-full h-2" />
        <p className="text-xl font-semibold">Start Driving with Ebosicare by downloading the app now!</p>

        <div className="flex gap-4 mt-[2rem]">
          <Button className="bg-white p-2 gap-4 h-fit text-black hover:bg-white hover:text-black">
            <Image
              width={42}
              height={42}
              alt="google Play"
              src={"/icons/googleplay_logo.png"}
              className="w-[3rem] h-[3rem]"
            />
            <div className=" flex flex-col gap-0 items-start">
              <span className="text-sm  uppercase">Avialable on</span>
              <p className="text-[1.6rem] ">Google Play</p>
            </div>
          </Button>
          <Button className="bg-white p-2 gap-4 h-fit text-black hover:bg-white hover:text-black">
            <Image
              width={42}
              height={42}
              alt="apple_logo"
              src={"/icons/apple_logo.png"}
              className="w-[3rem] h-[3rem]"
            />
            <div className=" flex flex-col gap-0 items-start">
              <span className="text-sm  uppercase">Avialable on</span>
              <p className="text-[1.6rem] ">Apple Store</p>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartEarningToday;
