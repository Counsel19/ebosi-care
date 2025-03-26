import { NextRequest } from "next/server";

const baseDistance = 9;

const basePrice = [
  { id: 7, basePrice: 40, extraMile: 2.5 },
  { id: 8, basePrice: 138, extraMile: 3 },
  { id: 9, basePrice: 18, extraMile: 1.5 },
  { id: 10, basePrice: 15, extraMile: 1.25 },
  { id: 11, basePrice: 13, extraMile: 1.2 },
  { id: 12, basePrice: 35, extraMile: 1.2 },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const distance = Number(searchParams.get("distance"));

    const service = basePrice.find((item) => item.id == Number(id));

    if (!service) {
      return Response.json("Service Not Found", { status: 400 });
    }

    let price = 0;

    if (distance <= baseDistance) {
      price = service.basePrice;
    } else {
      price = service.basePrice + service.extraMile * distance;
    }

    return Response.json(price, { status: 200 });
  } catch (error) {
    const err = error as Error;
    console.error(err, "error");
    return Response.json({ error: err.message }, { status: 500 });
  }
}
