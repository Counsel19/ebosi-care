"use client";

import { useEffect, useState } from "react";

type Location = {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
};

const useGetLocation = (): Location => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation((prevState) => ({
            ...prevState,
            error: error.message,
          }));
        }
      );
    } else {
      setLocation((prevState) => ({
        ...prevState,
        error: "Geolocation is not supported by this browser.",
      }));
    }
  }, []);

  return location;
};

export default useGetLocation;