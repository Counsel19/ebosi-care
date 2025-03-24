import axios from "axios";
import { geocodeByPlaceId } from "react-google-places-autocomplete";

export const calculateDistance = async (
  originId: string,
  destinationId: string
) => {
  try {
    const originResult = await geocodeByPlaceId(originId);
    const originLocation = {
      lat: originResult[0].geometry.location.lat(),
      lng: originResult[0].geometry.location.lng(),
    };

    const destinationResult = await geocodeByPlaceId(destinationId);
    const destinationLocation = {
      lat: destinationResult[0].geometry.location.lat(),
      lng: destinationResult[0].geometry.location.lng(),
    };

   
    const { data } = await axios.post(`/api/calculate-distance`, {
      originLocation,
      destinationLocation,
    });

    if (data && data.length > 0) {
      return data[0].distanceMeters;
    } else {
      return 0;
    }
  } catch (error) {
    console.error("Error fetching distance:", error);
    throw new Error("Error fetching distance:");
  }
};

export const getDistanceUsingMapsAPI = (
  origin: string,
  destination: string
) => {
  if (typeof window === "undefined" || !window.google) return;

  const service = new window.google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: window.google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === "OK") {
        console.log("Distance:", response?.rows[0].elements[0].distance.text);
      }
    }
  );
};
