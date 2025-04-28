"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button, buttonVariants } from "../ui/button";
import { FilePenLine, MapPinned, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AuthDialog from "../auth/AuthDialog";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { usePathname, useRouter } from "next/navigation";
import { updateRideStateValues } from "@/lib/redux/slices/ride/rideSlice";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { calculateDistance } from "@/lib/calculateDistance";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "@/hooks/use-toast";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const languageOptions = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
];
const currencyOptions = [{ value: "usd", label: "$(USD)" }];

type PlaceOption = {
  label: string;
  value: {
    description: string;
    place_id: string;
    structured_formatting: {
      main_text: string;
      secondary_text: string;
    };
  };
};

const BookRideWindow = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [addStop, setAddStop] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en"
  );
  const [distanceInMiles, setDistanceInMiles] = useState(0);

  const [pickupLocation, setPickUpLocation] = useState<PlaceOption | null>(
    null
  );
  const [stopLocation, setStopLocation] = useState<PlaceOption | null>(null);
  const [dropOffLocation, setDropOffLocation] = useState<PlaceOption | null>(
    null
  );

  const [boxTitle, setBoxTitle] = useState("Book a Ride/Service");
  const { selectedServices } = useSelector(
    (store: RootState) => store.services
  );

  const pathname = usePathname();
  const { t } = useTranslation("home");

  const { bookingDetails } = useSelector((store: RootState) => store.rides);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  function metersToMiles(meters: number) {
    return Number((meters / 1609.34).toFixed(2));
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (selectedServices && selectedServices.id == pathname.split("/")[1]) {
      setBoxTitle(`${t(`book_a`)} ${selectedServices.name}`);
    } else {
      setBoxTitle(t(`book_a_ride`));
    }
  }, [pathname, selectedServices]);

  useEffect(() => {
    const getData = async () => {
      try {
        if (pickupLocation && dropOffLocation) {
          setIsLoading(true);
          const distanceValue = await calculateDistance(
            pickupLocation.value.place_id as string,
            dropOffLocation.value.place_id as string
          );
          setDistanceInMiles(metersToMiles(distanceValue));
        }
      } catch (error) {
        const err = error as Error;
        toast({
          title: "An Error Occurred",
          description: err.message,
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [dropOffLocation, pickupLocation]);

  const changeLanguage = (lng: unknown) => {
    const lang = lng as string;
    localStorage.setItem("lang", lang);
    setLanguage(lang);
    i18next.changeLanguage(lang);
  };

  return (
    <div className="p-[2rem] w-full  rounded-lg bg-white shadow-lg space-y-[2rem]">
      <div className="space-y-[2rem] w-full grid">
        <div className="flex justify-end max-w-full">
          <div className="flex  gap-[1rem] ">
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
              <SelectTrigger className="lg:w-[180px]">
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

        <h4 className="text-center font-bold text-xl">{boxTitle}</h4>
      </div>

      {!isClient ? (
        <div className="grid gap-[1rem] lg:grid-cols-2 ">
          <Skeleton baseColor="#FFFFFF" width={"100%"} height={50} />
          <Skeleton baseColor="#FFFFFF" width={"100%"} height={50} />
        </div>
      ) : (
        <div className="flex flex-col gap-[1rem] lg:flex-row lg:gap-[2rem] ">
          <div className="w-full space-y-4">
            <label htmlFor="">{t(`pickup_input_label`)}</label>

            <div className="flex shadow-inner w-full rounded-sm  border border-input bg-transparent p-0  ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accentGreen focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <GooglePlacesAutocomplete
                selectProps={{
                  value: pickupLocation,
                  onChange: setPickUpLocation,
                  placeholder: "E.g Home, Pharmacy, Hospital",
                  className:
                    "google-input w-full flex-1 border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                }}
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
              />

              {!addStop ? (
                <Button
                  onClick={() => setAddStop(true)}
                  className="w-[4rem] h-18 p-0  m-0  border-y-0 border-r-0"
                  variant={"outline"}
                >
                  <Plus />
                </Button>
              ) : null}
            </div>
          </div>

          {addStop ? (
            <div className="w-full  space-y-4">
              <label htmlFor="">{t(`extra_label`)}</label>
              <div className="flex shadow-inner w-full rounded-sm  border border-input bg-transparent p-0  ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accentGreen focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <GooglePlacesAutocomplete
                  selectProps={{
                    value: stopLocation,
                    onChange: setStopLocation,
                    placeholder: "E.g Home, Pharmacy, Hospital",
                    className:
                      "google-input w-full flex-1 border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                  }}
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                />

                <Button
                  onClick={() => setAddStop(false)}
                  className="w-[4rem] h-18 p-0  m-0  border-y-0 border-r-0"
                  variant={"outline"}
                >
                  <Minus />
                </Button>
              </div>
            </div>
          ) : null}
          <div className="w-full  space-y-4">
            <label htmlFor="">{t(`dropoff_input_label`)}</label>
            <div className="flex shadow-inner w-full rounded-sm  border border-input bg-transparent p-0  ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accentGreen focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <GooglePlacesAutocomplete
                selectProps={{
                  value: dropOffLocation,
                  onChange: setDropOffLocation,
                  placeholder: "E.g Home, Pharmacy, Hospital",
                  className:
                    "google-input w-full flex-1 border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                }}
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
              />
            </div>
          </div>
        </div>
      )}

      <div className="w-full space-y-[1.5rem] text-[1.4rem] lg:text-base">
        <div className=" mx-auto lg:w-[50%]  space-y-[1rem]">
          <Button
            disabled={!pickupLocation || !dropOffLocation || isLoading}
            isLoading={isLoading}
            onClick={() => {
              dispatch(
                updateRideStateValues({
                  name: "bookingDetails",
                  value: {
                    ...bookingDetails,
                    pickup_location: pickupLocation?.label,
                    dropoff_location: dropOffLocation?.label,
                  },
                })
              );
              dispatch(
                updateRideStateValues({
                  name: "distanceInMiles",
                  value: distanceInMiles,
                })
              );
              router.push("/services");
            }}
            className="bg-[#CC1815] disabled:bg-blue-500 hover:bg-[#960d0a] w-full  text-white"
          >
            {t(`book_now_btn`)}
          </Button>

          <div className="grid  items-center grid-cols-2 justify-between">
            <Link
              href={"/edit-cancel-ride"}
              className={cn(
                buttonVariants({
                  className: "text-blue-500 hover:text-black",
                  variant: "ghost",
                })
              )}
            >
              <FilePenLine />
              <span className="">{t(`edit_cancel_ride_btn`)}</span>
            </Link>
            <Link
              href={"/track-vehicle"}
              className={cn(
                buttonVariants({
                  className: "text-blue-500 hover:text-black",
                  variant: "ghost",
                })
              )}
            >
              <MapPinned />
              <span>{t(`track_btn`)}</span>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="mx-auto md:w-[60%] text-[1.4rem] lg:text-base ">
          <div className=" before:flex before:w-full before:h-1 before:bg-[#00000040] italic text-[2rem] flex items-center gap-4  after:flex after:w-full after:h-1 after:bg-[#00000040] ">
            {t(`or`)}
          </div>
          <p className="text-slate-500 text-[1.6rem] text-center">
            {t(`signup_txt`)} <AuthDialog />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookRideWindow;
