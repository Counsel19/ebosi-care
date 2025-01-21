import Footer from "@/components/home/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import React from "react";

const BookingSuccess = () => {
  return (
    <>
      <Navbar />
      <div className="w__frame my-[8rem]">
        <div className="p-[4rem] shadow-lg rounded-[2rem] w-[70%] mx-auto  flex flex-col items-center justify-center space-y-8 ">
          <Image
            className=""
            height={100}
            width={100}
            alt="success"
            src={"/icons/success.png"}
          />
          <div className="space-y-8">
            <h4 className="font-semibold text-[3rem] text-center lg:text-[4rem]">
              🎉 Congratulations on Booking Your Ride!
            </h4>
            <p className="text-[1.8rem] leading-[2.2rem] lg:text-[2.3rem] lg:leading-[3.2rem]">
              Thank you for choosing Ebosi Care! Your ride has been successfully
              booked, and we&apos;re excited to have you on board.
            </p>
            <div className="space-y-6 text-[1.8rem] leading-[2.2rem] lg:text-[2.3rem] lg:leading-[3.2rem]">
              <h5 className="text-[2.5rem] font-bold">
                {" "}
                Booking Confirmation Details:
              </h5>
              <p>
                All the details about your ride have been sent to your email.
                Please check your inbox (and spam folder, just in case) for
                important information, including:
              </p>
              <ul className="list-disc list-inside">
                <li>Pickup and drop-off locations</li>
                <li>Driver&apos;s name and contact information</li>
                <li>Estimated fare and ride time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingSuccess;
