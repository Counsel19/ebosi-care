"use client";

import Footer from "@/components/home/Footer";
import Navbar from "@/components/shared/Navbar";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

const BookingSuccess = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const paymentStatus = searchParams.get("payment_status");

        if (paymentStatus === "success") {
          setLoadingError(false);
        } else {
          setLoadingError(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [searchParams]);

  return (
    <>
      <Navbar />
      <div className="w__frame my-[8rem]">
        {isLoading ? (
          <div className="bg-gray-400 min-h-[500px] w-full grid place-content-center">
            <Loader2 width={100} height={100} />
          </div>
        ) : loadingError ? (
          <ErrorUI title="Something went wrong" />
        ) : (
          <Success />
        )}
      </div>
      <Footer />
    </>
  );
};

export default BookingSuccess;

const Success = () => {
  return (
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
            All the details about your ride have been sent to your email. Please
            check your inbox (and spam folder, just in case) for important
            information, including:
          </p>
          <ul className="list-disc list-inside">
            <li>Pickup and drop-off locations</li>
            <li>Driver&apos;s name and contact information</li>
            <li>Estimated fare and ride time</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

interface ErrorUIProps {
  title: string;
}
const ErrorUI: FC<ErrorUIProps> = ({ title }) => {
  return (
    <div className="lg:w-[40%] lg:mx-auto  ">
      <div className="space-y-12 flex flex-col items-center">
        <h3 className="text-[2.8rem]  text-rose-500  lg:text-[3.8rem] leading-[4.2rem]">
          {title}
        </h3>

        <div className=" w-fit rounded-full bg-rose-50 ">
          <Image
            src="/images/failed.gif"
            alt="Success"
            className="w-[200px] h-[200px]"
            width={300}
            height={300}
          />
        </div>

        <div className="space-y-8">
          <h5 className="uppercase text-center text-base font-semibold">
            Please Contact Support
          </h5>
        </div>
      </div>
    </div>
  );
};
