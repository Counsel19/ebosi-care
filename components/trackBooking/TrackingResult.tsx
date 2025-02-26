"use client";

import { FC, useEffect, useState } from "react";
import TrackingMap from "./TrackingMap";
import DriverDetails from "./DriverDetails";
import ReservationDetails from "./ReservationDetails";
import DownloadAppSection from "./DownloadAppSection";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "next/navigation";
import { getSingleRide } from "@/lib/redux/slices/ride/rideThunk";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import axios, { AxiosError } from "axios";
import EditRideModal from "./EditRideModal";
import CustomBadge from "../shared/CustomBadge";
import { updateRideStateValues } from "@/lib/redux/slices/ride/rideSlice";

const TrackingResult: FC = () => {
  const [isCanceledLoading, setIsCanceledLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const firstname = searchParams.get("first_name");
  const lastname = searchParams.get("last_name");
  const params = useParams<{ bookingId: string }>();
  const { singleRide, isLoading } = useSelector(
    (state: RootState) => state.rides
  );

  useEffect(() => {
    const getData = async () => {
      if (!params.bookingId || !firstname || !lastname || singleRide) return;
      try {
        await dispatch(
          getSingleRide({
            reservationNumber: params.bookingId,
            firstname,
            lastname,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    getData();

    return () => {
      dispatch(
        updateRideStateValues({
          name: "bookingDetails",
          value: null,
        })
      );
    };
  }, [dispatch, firstname, lastname, params.bookingId, singleRide]);

  const handleCancelRide = async () => {
    try {
      setIsCanceledLoading(true);
      axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/rides/cancel-ride`, {
        reservation_number: singleRide?.ride.reservation_number,
      });

      if (!params.bookingId || !firstname || !lastname) return;

      await dispatch(
        getSingleRide({
          reservationNumber: params.bookingId,
          firstname,
          lastname,
        })
      );

      toast({
        title: "Ride cancelled Successfully",
        description: "Your ride has been cancelled",
        variant: "success",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast({
          title: "Error in Performing Action",
          description: error.response?.data,
          variant: "destructive",
        });
      }
    } finally {
      setIsCanceledLoading(false);
    }
  };

  return singleRide && !isLoading ? (
    <>
      <div className="flex justify-between items-center mb-[3rem] ">
        <h2 className="  text-[3rem] flex gap-2 ">
          Booking ID{" "}
          <span className="font-bold">
            {singleRide.ride.reservation_number}
          </span>
          <CustomBadge status={singleRide.ride.status} />
        </h2>
        <div className="flex gap-[2rem]  items-center ">
          <EditRideModal />
          <Button
            type="button"
            isLoading={isCanceledLoading}
            onClick={handleCancelRide}
            className="bg-rose-500 hover:bg-rose-700 text-white min-w-[13.5rem]"
          >
            <span>Cancel ride</span>
          </Button>
        </div>
      </div>

      <div className="grid  grid-cols-[2.8fr_1fr] gap-[2rem] ">
        <div className="grid gap-[2rem] grid-rows-[60rem_1fr]">
          <TrackingMap />
          <DriverDetails />
        </div>
        <div className="grid gap-[2rem] grid-rows-[2.8fr_1fr]">
          <ReservationDetails reservationDetails={singleRide?.ride} />
          <DownloadAppSection />
        </div>
      </div>
    </>
  ) : (
    <div className="p-[4rem] grid place-content-center">
      <Loader2 className=" h-10 w-10 animate-spin" />
    </div>
  );
};

export default TrackingResult;
