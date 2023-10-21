import React from "react";
import { TicketCard } from "./(components)";

const DashBoard = () => {
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
