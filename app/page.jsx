"use client";
import React from "react";
import { TicketCard } from "./(components)";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DashBoard = () => {
  useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const { data } = await axios.get("/api/ticket");
    },
  });
  return (
    <div className=" flex justify-between px-5 flex-wrap mt-20">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default DashBoard;
