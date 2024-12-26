import React, { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const steps = [
  {
    sn: 1,
    title: "DOWNLOAD THE APP AND REGISTER",
    description:
      "Driving with us is easy! Just a few click after downloading our Driver App",
  },
  {
    sn: 2,
    title: "UPLOAD YOUR DOCUMENTS",
    description:
      "We just need some photos of your basic requirements. Don't worry! It's not that much, just the basics!",
  },
  {
    sn: 3,
    title: "START TO DRIVE WITH US",
    description:
      "Take your first trip as soon as we have approved your registration.",
  },
];

const DriveWithEbosiSteps = () => {
  return (
    <div className="my-[8rem] w__frame">
      <h3 className="mb-[3rem] text-[3.4rem] font-medium">
        Drive with us
        <br />
        with these EASY steps:
      </h3>
      <div className="grid grid-cols-3 gap-[3rem]">
        {steps.map((step) => (
          <DriveWithEbosiStepItem showDownloadBtn={step.sn == 1}  key={step.sn} {...step} />
        ))}
      </div>
    </div>
  );
};

export default DriveWithEbosiSteps;

interface DriveWithEbosiStepItemProps {
  sn: number;
  title: string;
  showDownloadBtn?: boolean;
  description: string;
}

const DriveWithEbosiStepItem: FC<DriveWithEbosiStepItemProps> = ({
  description,
  title,
  sn,
  showDownloadBtn,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-[6.2rem] h-[6.2rem] grid place-content-center text-3xl font-semibold rounded-full bg-primary text-white">
        {sn}
      </div>
      <h6 className="font-semibold text-xl ">{title}</h6>
      <p className="text-[1.4rem]">{description}</p>
      {showDownloadBtn && (
        <div className="flex gap-4">
          <Button className="bg-black p-2 gap-4 h-fit text-white hover:bg-black hover:text-white">
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
          <Button className="bg-black p-2 gap-4 h-fit text-white hover:bg-black hover:text-white">
            <Image
              width={42}
              height={42}
              alt="apple_logo"
              src={"/icons/apple_logo_white.png"}
              className="w-[3rem] h-[3rem]"
            />
            <div className=" flex flex-col gap-0 items-start">
              <span className="text-sm  uppercase">Avialable on</span>
              <p className="text-[1.6rem] ">Apple Store</p>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};
