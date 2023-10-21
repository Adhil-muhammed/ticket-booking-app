import React from "react";
import { TicketCard } from "./(components)";

const DashBoard = () => {
  return (
    <div className=" flex justify-between px-5">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default DashBoard;
