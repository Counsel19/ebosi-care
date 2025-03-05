import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const origin = searchParams.get("origin");
    const destination = searchParams.get("destination");

    if (!origin || !destination) {
      return Response.json({ error: "Missing origin or destination" }, { status: 400 });
    }

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json`,
      {
        params: {
          origins: origin,
          destinations: destination,
          key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
        },
      }
    );

    const data = response.data;
    if (data.status === "OK") {
      const distanceText = data.rows[0].elements[0].distance.text;
      const distanceValue = data.rows[0].elements[0].distance.value;
      return Response.json({ distanceText, distanceValue });
    } else {
      throw new Error(data.error_message || "Failed to fetch distance");
    }
  } catch (error) {
    const err = error as Error;
    console.log(err, "error");
    return Response.json({ error: err.message }, { status: 500 });
  }
}
