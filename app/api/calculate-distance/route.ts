import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    const { originLocation, destinationLocation } = body;

    if (!originLocation || !destinationLocation) {
      return Response.json(
        { error: "Missing origin or destination" },
        { status: 400 }
      );
    }

    const url = `https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix`;

    const headers = {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
      "X-Goog-FieldMask":
        "originIndex,destinationIndex,duration,distanceMeters",
    };

    const data = {
      origins: [
        {
          waypoint: {
            location: {
              latLng: {
                latitude: originLocation.lat,
                longitude: originLocation.lng,
              },
            },
          },
        },
      ],
      destinations: [
        {
          waypoint: {
            location: {
              latLng: {
                latitude: destinationLocation.lat,
                longitude: destinationLocation.lng,
              },
            },
          },
        },
      ],
      travelMode: "DRIVE",
    };

    const response = await axios.post(url, data, { headers });

    return Response.json(response.data, { status: 200 });
  } catch (error) {
    const err = error as Error;
    console.error(err, "error");
    return Response.json({ error: err.message }, { status: 500 });
  }
}
