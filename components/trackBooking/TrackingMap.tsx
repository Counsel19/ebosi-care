"use client";

import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { updateRideStateValues } from "@/lib/redux/slices/ride/rideSlice";

const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 6.5244, // Default latitude (Lagos, Nigeria)
  lng: 3.3792, // Default longitude (Lagos, Nigeria)
};

interface Location {
  lat: number;
  lng: number;
}

interface Props {
  origin: string;
  destination: string;
}

export default function TrackingMap({ origin, destination }: Props) {
  const { loadedGoogleMap } = useSelector((store: RootState) => store.rides);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setMap] = useState<google.maps.Map | null>(null);
  const [originCoords, setOriginCoords] = useState<Location | null>(null);
  const [destinationCoords, setDestinationCoords] = useState<Location | null>(
    null
  );
  const [distance, setDistance] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!loadedGoogleMap || !origin || !destination) return;
    const geocoder = new google.maps.Geocoder();

    // Convert addresses to coordinates
    geocoder.geocode({ address: origin }, (results, status) => {
      if (status === "OK" && results && results[0]?.geometry.location) {
        setOriginCoords({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        });
      }
    });

    geocoder.geocode({ address: destination }, (results, status) => {
      if (status === "OK" && results && results[0]?.geometry.location) {
        setDestinationCoords({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        });
      }
    });

    // Calculate distance
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        console.log(response, "response");
        if (status === "OK" && response) {
          setDistance(response.rows[0].elements[0].distance.text);
        }
      }
    );
  }, [origin, destination, loadedGoogleMap]);

  return (
    <div className="map-wrapper">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}
        onLoad={() =>
          dispatch(
            updateRideStateValues({ name: "loadedGoogleMap", value: true })
          )
        }
      >
        <div className="shadow-lg border p-6">
          <h2 className="text-lg font-bold">Distance Calculation</h2>
          <p>
            Distance from <strong>{origin}</strong> to{" "}
            <strong>{destination}</strong>:{" "}
            {distance ? (
              <span className="text-green-500">{distance}</span>
            ) : (
              "Calculating..."
            )}
          </p>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={originCoords || center}
            zoom={12}
            onLoad={(map) => setMap(map)}
          >
            {originCoords && <Marker position={originCoords} label="A" />}
            {destinationCoords && (
              <Marker position={destinationCoords} label="B" />
            )}
          </GoogleMap>
        </div>
      </LoadScript>
    </div>
  );
}
