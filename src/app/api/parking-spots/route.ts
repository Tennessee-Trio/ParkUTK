import clientPromise from "@/lib/mongodb";
import { NextRequest } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const data = body.request;
  try {
    const client = await clientPromise;
    const db = client.db("ParkUTK");
    const reports = db.collection("reports");

    reports.insertOne({
      parkingGarage: data.parkingGarage,
      date: data.date,
      range: data.range,
      latitude: data.latitude,
      longitude: data.longitude,
    });

    return Response.json({ success: true, payload: data });
  } catch (e) {
    return Response.json({ success: false, payload: e });
    console.log(e);
  }
}

interface Report {
  parkingGarage: string;
  date: string;
  range: string;
}

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("ParkUTK");
    const reports = db.collection("reports");

    const searchParams = request.nextUrl.searchParams;
    const garageQuery = searchParams.get("garage");
    const mostRecentQuery = searchParams.get("mostRecent");

    let response;
    if (mostRecentQuery && garageQuery) {
      response = await reports.findOne(
        { parkingGarage: garageQuery },
        { sort: { date: -1 } }
      );
    } else if (garageQuery) {
      response = await reports.find({ parkingGarage: garageQuery }).toArray();
    } else {
      response = await reports.find().toArray();
    }

    return Response.json({ success: true, payload: response });
  } catch (e) {
    return Response.json({ success: false, payload: e });
  }
}
