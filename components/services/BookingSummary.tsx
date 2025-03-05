"use client";

import { Briefcase, User } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddressBox from "../home/molecules/AddressBox";
import { Textarea } from "../ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { format } from "date-fns";
import { formatToCurrency } from "@/lib/utils";
import { updateRideStateValues } from "@/lib/redux/slices/ride/rideSlice";

const BookingSummary = () => {
  const { bookingDetails, distanceInMiles } = useSelector(
    (store: RootState) => store.rides
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const { selectedServices } = useSelector(
    (store: RootState) => store.services
  );
  const { userProfile } = useSelector((store: RootState) => store.auth);

  const dispatch = useDispatch<AppDispatch>();

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1).toString();

  useEffect(() => {
    let total = 0;
    if (selectedServices && distanceInMiles) {
      total =
        Number(selectedServices.base_price) * distanceInMiles -
        Number(selectedServices.discount.amount) +
        Number(selectedServices.fuel_surcharge) +
        Number(selectedServices.rider_fee) +
        Number(selectedServices.rider_fee);
    }

    dispatch(
      updateRideStateValues({
        name: "bookingDetails",
        value: {
          ...bookingDetails,
          amount: total,
          user_details: {
            name: `${userProfile?.first_name} ${userProfile?.last_name}`,
            email: userProfile?.email,
            mobile_number: userProfile?.mobile_number,
          },
        },
      })
    );

    setTotalPrice(total);
  }, []);

  return (
    <div className=" shadow-lg">
      {selectedServices ? (
        <div>
          <div className="p-[1rem] lg:p-[4rem] grid lg:grid-cols-2 gap-4 items-center ">
            <div className="space-y-8">
              <div className="text-gray-500">
                <span className="text-[1.4rem]">Service Type</span>
                <h6 className="font-bold">{selectedServices?.name}</h6>
              </div>
              <div className="text-gray-500">
                <span className="text-[1.4rem]">Pickup Date</span>
                <h6 className="font-bold">{`${bookingDetails?.ride_date} ${bookingDetails?.ride_time}`}</h6>
              </div>
              <div className="flex gap-[4rem]">
                <span className="flex gap-4 font-semibold">
                  <User size={20} /> {bookingDetails?.passengers}
                </span>
                <span className="flex gap-4 font-semibold">
                  <Briefcase size={20} /> {bookingDetails?.luggage}
                </span>
              </div>
            </div>

            <Image
              alt={selectedServices?.name || ""}
              width={300}
              height={300}
              src={selectedServices?.image || ""}
            />
          </div>

          <div className="p-[1rem] lg:p-[4rem] bg-[#F3F3F3] text-[1.4rem] space-y-[2rem]">
            <div className="grid grid-cols-2  items-center">
              <span className="font-semibold">Fare:</span>
              <div className="flex gap-2">
                {selectedServices?.discount?.amount > 0 ? (
                  <>
                    <span className="text-gray-400 line-through">$62.47 </span>
                    <span>
                      {formatToCurrency.format(
                        Number(selectedServices.base_price) -
                          Number(selectedServices.discount.amount)
                      )}
                    </span>
                  </>
                ) : (
                  <span>${selectedServices.base_price}</span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2  items-center">
              <span className="font-semibold">Rider Fee:</span>
              <span>
                {formatToCurrency.format(Number(selectedServices.rider_fee))}
              </span>
            </div>
            <div className="grid grid-cols-2  items-center">
              <span className="font-semibold">Fuel Surcharge:</span>
              <span>
                {formatToCurrency.format(
                  Number(selectedServices.fuel_surcharge)
                )}
              </span>
            </div>
            <div className="grid grid-cols-2  items-center">
              <span className="font-semibold">Tip:</span>
              <span>
                {formatToCurrency.format(Number(selectedServices.tip))}
              </span>
            </div>

            <hr className="my-[2rem]" />

            <div className="grid grid-cols-2 text-[3rem] font-light items-center">
              <b className="">Total: </b>
              <b>{totalPrice}</b>
            </div>
          </div>

          <div className="p-[1rem] lg:p-[4rem] space-y-[2rem]">
            <AddressBox
              address={bookingDetails?.pickup_location || ""}
              boxTitle="Pick Up"
              dateTime={`${bookingDetails?.ride_date} ${bookingDetails?.ride_time}`}
            />
            <AddressBox
              address={bookingDetails?.dropoff_location || ""}
              boxTitle="Drop Off"
              dateTime={format(tomorrow, "MMM dd, yyyy h:m b..bb")}
            />
          </div>

          <div className="p-[1rem] lg:p-[4rem] space-y-[2rem]">
            <h4 className="text-gray-500 font-light text-[2rem]">
              Driver Notes
            </h4>
            <Textarea className="h-[18.8rem]" />
          </div>
        </div>
      ) : (
        <div className="p-[1rem] lg:p-[4rem] grid place-content-center ">
          <h4 className="font-bold text-[3rem]">No Service Selected Yet</h4>
        </div>
      )}
    </div>
  );
};

export default BookingSummary;
