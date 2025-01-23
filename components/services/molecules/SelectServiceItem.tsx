"use client";

import { Button } from "@/components/ui/button";
import { useTargetBreakpoint } from "@/hooks/useTargetBreakpoint";
import { cn, formatToCurrency } from "@/lib/utils";
import { IServices } from "@/types/services";
import { Briefcase, User } from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { updateServicesStateValues } from "@/lib/redux/slices/service/servicesSlice";
import { updateRideStateValues } from "@/lib/redux/slices/ride/rideSlice";

interface SelectServiceItemProps {
  service: IServices;
  isPatientSupport?: boolean;
}

const SelectServiceItem: FC<SelectServiceItemProps> = ({
  service,
  isPatientSupport,
}) => {
  const {
    id,
    description,
    image,
    base_price,
    additional_mile_price,
    discount,
    distance_lower_limit,
    distance_upper_limit,

    is_one_way,
    luggage,
    name,
    passengers,

    hourly_rate_cna,
    hourly_rate_rn,
  } = service;
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useTargetBreakpoint({ setIsMobile, breakPoint: 640 });

  const { selectedServices } = useSelector(
    (store: RootState) => store.services
  );
  const { bookingDetails } = useSelector((store: RootState) => store.rides);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      onClick={() => {
        dispatch(
          updateServicesStateValues({
            name: "selectedServices",
            value: service,
          })
        );
        dispatch(
          updateRideStateValues({
            name: "bookingDetails",
            value: {
              ...bookingDetails,
              service_id: service.id,
            },
          })
        );
      }}
      className="grid md:grid-cols-[1fr_3fr] rounded-lg border border-[#395BA6] cursor-pointer  "
    >
      <div
        className={cn(
          " grid place-content-center",
          selectedServices?.id == id ? "bg-primary" : "bg-[#D9D9D987]"
        )}
      >
        <Image
          src={image}
          alt={name}
          height={400}
          width={400}
          className="w-fit object-contain"
        />
      </div>
      <div className="grid gap-[2rem] sm:grid-cols-[2fr_1fr] p-[2rem]">
        <div className="grid gap-[3rem] justify-center sm:justify-start">
          <div className="flex gap-[4rem]">
            <span className="flex gap-4 font-semibold">
              <User size={20} /> {passengers}
            </span>
            <span className="flex gap-4 font-semibold">
              <Briefcase size={20} /> {luggage}
            </span>
          </div>

          <div>
            <h4 className="text-[2.5rem] font-bold">{name}</h4>
            <div className={cn(isMobile ? "hidden" : "block")}>
              {showMore ? (
                <p className="text-[1.4rem] text-gray-500 leading-[1.6rem]">
                  {description}
                </p>
              ) : (
                <p className="text-[1.4rem] text-gray-500 leading-[1.6rem]">
                  {description.slice(0, 50)}
                  {description.length > 50 ? "..." : ""}
                </p>
              )}
            </div>
          </div>

          <Button
            onClick={() => setShowMore(!showMore)}
            className={cn(
              "text-[#395BA6] w-fit p-0 m-0 font-semibold",
              isMobile ? "hidden" : "flex"
            )}
            variant={"ghost"}
          >
            {showMore ? "Hide More" : "More Info"}
          </Button>
        </div>

        {isPatientSupport ? (
          <div className="text-[2rem] text-primary">
            <div>{hourly_rate_cna} : CNA</div>
            <div>{hourly_rate_rn} : RN</div>
          </div>
        ) : (
          <div className="text-[1.2rem] text-gray-500  grid gap-[0.6rem] justify-center md:justify-end">
            <h5 className="text-[#395BA6] text-[3rem]">
              {formatToCurrency.format(
                Number(base_price) - Number(discount.amount)
              )}
            </h5>
            <div>
              <span className="text-gray-600 flex italic">
                Plus applicable fees
              </span>
              {is_one_way ? (
                <span className="flex font-semibold">One-way Fare</span>
              ) : null}
            </div>
            <div className="flex gap-2 font-semibold">
              {distance_lower_limit} - {distance_upper_limit} miles
            </div>
            <div className="flex gap-4 items-center">
              <h5 className="text-[1.8rem] line-through">
                {" "}
                {formatToCurrency.format(Number(base_price))}
              </h5>
              <div className="bg-[#CC1815] rounded-md text-[1rem] text-white p-[0.5rem]">
                Save {formatToCurrency.format(Number(discount.amount))}
              </div>
            </div>

            <div className="w-[19.3rem] flex flex-col gap-3 justify-center items-center h-[7.8rem] text-white bg-[url('/images/sales_badge.png')] bg-contain bg-center bg-no-repeat">
              <h5 className=" text-[1.2rem] font-normal uppercase text-center">Additional Miles</h5>
         
              <h4 className="text-center font-bold text-[2rem]">${additional_mile_price}/mile</h4>
            </div>

            <div>
              <p>Discount</p>
              <p>
                {Math.floor(
                  (new Date(discount.end).getTime() -
                    new Date(discount.start).getTime()) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                days left
              </p>
            </div>
            <div>
              <p>*Drop Off: {format(new Date(), "h:m a")}</p>
              {new Date(new Date()).getTime >= new Date().getTime ? (
                <p>Book in advance</p>
              ) : null}
            </div>
          </div>
        )}

        <div className={cn(isMobile ? "block" : "hidden", "space-y-[2rem]")}>
          <p
            className={cn(
              "text-[1.4rem] text-gray-500 leading-[1.6rem] hidden",
              showMore && "block"
            )}
          >
            {description}
          </p>
          <Button
            onClick={() => setShowMore(!showMore)}
            className={cn("w-full  font-semibold")}
          >
            {showMore ? "Hide More" : "More Info"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectServiceItem;
