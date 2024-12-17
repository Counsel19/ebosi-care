import React from "react";
import BookRideWindow from "../home/BookRideWindow";

const BookARideBanner = () => {
  return (
    <div className="bg-[url('/images/weelchair-car-transaport.jpg')] bg-no-repeat bg-cover p-[2rem] lg:p-[4rem]  relative ">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />

      <div className="relative space-y-[4rem] w-full lg:w-[90%] mx-auto ">
        <h3 className="font-bold  text-white text-[3rem] lg:text-[3.4rem] leading-[4rem] text-center">
          Book your stress-free care ride today
        </h3>

        <BookRideWindow />
      </div>
    </div>
  );
};

export default BookARideBanner;
