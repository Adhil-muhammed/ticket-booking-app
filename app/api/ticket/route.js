import { Ticket } from "@/app/(models)/ticketModal";
import { connection } from "@/app/(dbConfig)/ticket.db";
import { NextResponse } from "next/server";

connection();

export async function GET(params) {
  try {
    const tikets = await Ticket?.find();
    return NextResponse.json({ tikets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const reqBody = await request?.json();
    console.log(reqBody);
    const newTiket = await new Ticket(reqBody);
    const savedTicket = await newTiket?.save();
    return NextResponse.json({ savedTicket }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
