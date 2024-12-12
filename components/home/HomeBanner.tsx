import React from "react";
import BookRideWindow from "./BookRideWindow";

const HomeBanner = () => {
  return (
    <div className="bg-[url('/images/weelchair-car-transaport.jpg')] bg-no-repeat bg-cover h-[55rem] relative ">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#000000B2]" />

      <div className=" relative max-w-[80%] mx-auto"> 
        <h3 className="font-bold py-[6rem] text-white text-[5.4rem] leading-[6rem] text-center">Ebosicare: Your trusted Healthcare ride and health services</h3>

        <BookRideWindow />
      </div>
    </div>
  );
};

export default HomeBanner;
