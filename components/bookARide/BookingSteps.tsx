import Image from "next/image";
import React from "react";
import BookingStep from "./molecules/BookingStep";

const BookingSteps = () => {
  return (
    <div className="w__frame py-[8rem]">
      <h3 className="font-bold mb-[4rem]  text-[3.4rem] leading-[4rem] text-center">
        3 steps to book an airport transfer
      </h3>

      <div className="flex items-center flex-col lg:flex-row">
        <BookingStep
          details="Enter your pick-up point, date and time, select your car."
          title="Step 1"
        />
        <Image
          alt="double_arrow"
          width={100}
          height={100}
          className="w-[2.8rem] h-[2.8rem]"
          src={"/icons/double_arrow.svg"}
        />
        <BookingStep
          details="Verify the booking details and select your preferred payment method."
          title="Step 2"
        />
        <Image
          alt="double_arrow"
          width={100}
          height={100}
          className="w-[2.8rem] h-[2.8rem]"
          src={"/icons/double_arrow.svg"}
        />
        <BookingStep
          details="Your driver will pick you up at the given location and time."
          title="Step 3"
        />
      </div>
    </div>
  );
};

export default BookingSteps;
