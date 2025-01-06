import Image from "next/image";
import React from "react";

const DriverDetails = () => {
  return (
    <div className="shadow-lg border p-[3rem]">
      <h3 className="text-[3rem] text-[#242424] mb-[1rem] ">Your Driver</h3>
      <div className=" flex flex-col justify-center gap-[1rem] items-center">
        <Image
          className="w-[10rem] h-[10rem] object-cover object-center"
          height={140}
          width={140}
          src="/icons/person.png"
          alt="Person"
        />
        <h5 className="text-[2.6rem] text-[#242424]">
          Seems you don’t have driver yet.
        </h5>
        <p className="text-gray-500 text-[1.4rem]">
          Please check it again one (1) hour before your pickup time.
        </p>
      </div>
    </div>
  );
};

export default DriverDetails;
