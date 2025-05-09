"use client";

import BookingSummary from "@/components/services/BookingSummary";
// import PaymentInformation from "@/components/services/PaymentInformation";
import PersonalInformation from "@/components/services/PersonalInformation";
import PreviewInfo from "@/components/services/PreviewInfo";
import RideDetails from "@/components/services/RideDetails";
import SelectService from "@/components/services/SelectService";
import ServiceTab from "@/components/services/ServiceTab";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import i18next from "i18next";

const languageOptions = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
];
const currencyOptions = [{ value: "usd", label: "$(USD)" }];

const ServicePage: FC = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [language, setLanguage] = useState(
  (typeof window !== "undefined" && localStorage.getItem("lang")) || "en"
  );

  const { bookingDetails } = useSelector((store: RootState) => store.rides);

  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < 3) {
      setCurrentIndex((curr) => curr + 1);
    }
  };
  const handlPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((curr) => curr - 1);
    }
  };

  const handleValidate = (nextIndex: number, func: VoidFunction) => {
    if (nextIndex === 2) {
      if (
        !bookingDetails?.pickup_location ||
        !bookingDetails.dropoff_location
      ) {
        toast({
          title: "Mising Fields",
          description: "Please provide a destination location and address",
          variant: "destructive",
        });
        return router.push("/");
      }

      if (
        bookingDetails?.ride_date &&
        bookingDetails?.ride_time &&
        bookingDetails?.passengers &&
        bookingDetails.service_id
        // bookingDetails.luggage &&
      ) {
        func();
      }
    } else if (nextIndex === 3) {
      if (
        bookingDetails?.user_details.email &&
        bookingDetails?.user_details.name &&
        bookingDetails?.user_details.mobile_number
      ) {
        func();
      }
    } else {
      func();
    }
  };

  const changeLanguage = (lng: unknown) => {
    const lang = lng as string;
    localStorage.setItem("lang", lang);
    setLanguage(lang);
    i18next.changeLanguage(lang);
  };

  return (
    <div className="py-[4rem] grid gap-[5rem] w__frame">
      <div className="">
        <div className="flex justify-end ">
          <div className="flex gap-[1rem] w-fit">
            <Select
              value={language}
              onValueChange={(value) => changeLanguage(value)}
            >
              <SelectTrigger className="lg:w-[180px]">
                <SelectValue placeholder={"Select Language"} />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent>
                {currencyOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid place-content-center">
          <Link href={"/"}>
            <Image
              alt="ebosi_logo"
              src={"/images/ebosi_logo.svg"}
              className="w-[11rem] lg:w-[13.4rem] "
              width={234}
              height={93}
            />
          </Link>
        </div>
      </div>

      <ServiceTab
        handleValidate={handleValidate}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />

      {currentIndex == 1 ? (
        <>
          <RideDetails />
          <SelectService />

          <div className="flex justify-between items-center ">
            <Button
              onClick={handlPrev}
              className="border-[#395BA6] text-[#395BA6]"
              variant={"outline"}
            >
              <ChevronLeft />
              <span>Prev</span>
            </Button>
            <Button
              onClick={() => handleValidate(currentIndex + 1, handleNext)}
              className="bg-[#395BA6] text-white"
            >
              <span>Continue</span>
              <ChevronRight />
            </Button>
          </div>
        </>
      ) : currentIndex == 2 ? (
        <div className="grid gap-[2rem] lg:grid-cols-[3fr_2.5fr]">
          <PersonalInformation
            handlPrev={handlPrev}
            handleNext={handleNext}
            setCurrentIndex={setCurrentIndex}
          />

          <BookingSummary />
        </div>
      ) : (
        <div className="grid gap-[2rem] lg:grid-cols-[3fr_2.5fr]">
          {/* <PaymentInformation /> */}
          <BookingSummary />
          <PreviewInfo />
        </div>
      )}
    </div>
  );
};

export default ServicePage;
