"use client";

import { updateRideStateValues } from "@/lib/redux/slices/ride/rideSlice";
import { AppDispatch } from "@/lib/redux/store";
import Script from "next/script";
import React from "react";
import { useDispatch } from "react-redux";

const LoadGoogleMap = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Script
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
      strategy="lazyOnload"
      onLoad={() => {
        console.log("Google Maps script loaded!");
        dispatch(updateRideStateValues({ name: "loadedGoogleMap", value: true }));
      }}
    />
  );
};

export default LoadGoogleMap;
