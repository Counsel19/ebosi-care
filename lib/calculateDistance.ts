import axios from "axios";

export const calculateDistance = async (
  origin: string,
  destination: string
) => {
  try {
    const { data } = await axios.get(
      `/api/calculate-distance?origin=${origin}&destination=${destination}`
    );
    return data;
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
