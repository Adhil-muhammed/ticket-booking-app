import React from "react";
import { TicketCard } from "./(components)";
import { connection } from "./(dbConfig)/ticket.db";

const DashBoard = () => {
  connection();
  return (
    <div className=" flex justify-between px-5 flex-wrap">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default DashBoard;
