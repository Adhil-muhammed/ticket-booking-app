import { NextResponse } from "next/server";
import { Ticket } from "@/app/(models)/ticketModal";
import { connection } from "@/app/(dbConfig)/ticket.db";

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
    const ticketData = await new Ticket(reqBody);
    const savedTicket = await ticketData?.save();

    return NextResponse.json(
      { message: "Ticket created", savedTicket },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
