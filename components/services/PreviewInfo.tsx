import { AppDispatch, RootState } from "@/lib/redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { bookARide } from "@/lib/redux/slices/ride/rideThunk";
import { useRouter } from "next/navigation";

const testTime = "14:30";

const PreviewInfo = () => {
  const { bookingDetails } = useSelector((store: RootState) => store.rides);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleBookRide = async () => {
    if (!bookingDetails) return;
    try {
      setIsLoading(true);
      const res = await dispatch(
        bookARide({
          ...bookingDetails,
          ride_date: bookingDetails.ride_date.split("/").reverse().join("-"),
          ride_time: testTime ?? bookingDetails.ride_time.slice(0, -3),
          service_id: "1",
        })
      );
      if (res.type.includes("rejected"))
        return toast({
          title: "An Error Occurred",
          description: res.payload as string,
          variant: "destructive",
        });
      router.push("/services/success");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400 || error.response?.status === 401) {
          toast({
            title: "Error in Booking",
            description: error.response?.data,
            variant: "destructive",
          });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return bookingDetails ? (
    <div className="p-[1rem] lg:p-[4rem] shadow-lg h-fit space-y-[4rem]">
      <div className="space-y-[3rem]">
        <h4 className="font-bold text-[2.6rem]">Preview your Information</h4>
        {bookingDetails && (
          <div className="space-y-[2rem]">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 text-gray-500">
                <label htmlFor="">First Name</label>
                <p className="text-black ">
                  {bookingDetails?.user_details.name.split(" ")[0]}
                </p>
              </div>
              <div className="space-y-2 text-gray-500">
                <label htmlFor="">Last Name</label>
                <p className="text-black ">
                  {bookingDetails?.user_details.name.split(" ")[1]}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-gray-500">
              <label htmlFor="">Email</label>
              <p className="text-black ">
                {bookingDetails?.user_details.email}
              </p>
            </div>
            <div className="space-y-2 text-gray-500">
              <label htmlFor="">Mobile Number</label>
              <p className="text-black ">
                {bookingDetails?.user_details.mobile_number}
              </p>
            </div>
          </div>
        )}
      </div>
      <hr />

      <Button
        isLoading={isLoading}
        onClick={handleBookRide}
        className=" w-full"
      >
        Proceed to Book
      </Button>
    </div>
  ) : (
    <div className="grid place-content-center">
      <div className="space-y-[1.5rem]">
        <h4 className="font-bold text-[2.6rem]">Nothing to display</h4>
        <p>No Booking Details</p>
      </div>
    </div>
  );
};

export default PreviewInfo;
