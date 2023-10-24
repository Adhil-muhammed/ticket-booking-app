"use client";

import React from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { TicketCard, CreateTicketModal } from "./(components)";
import { useCreateTicket } from "./(components)/(hooks)";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/app/(components)/Loader";

const uniqTicketCategory = ["hardware damage", "physical damage"];

const DashBoard = () => {
  const { open, onToggleTicketCreateModal } = useCreateTicket();
  console.log("open:DashBoard ", open);
  const { data, isLoading } = useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const { data } = await axios.get("/api/ticket");
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-20  px-5">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data?.tikets?.map((tickets) => {
          return (
            <Grid item xs={12} md={6} xl={3} lg={4}>
              <TicketCard key={tickets?._id} {...tickets} />
            </Grid>
          );
        })}
      </Grid>
      <CreateTicketModal open={open} setOpen={onToggleTicketCreateModal} />
    </div>
  );
};

export default DashBoard;
