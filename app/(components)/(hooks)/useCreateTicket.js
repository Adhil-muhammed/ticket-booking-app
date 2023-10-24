"use client";
import React from "react";

export const useCreateTicket = () => {
  const [open, setOpen] = React.useState(false);

  const onToggleTicketCreateModal = (isOpen) => {
    console.log("isOpen: ", isOpen);
    setOpen(isOpen);
  };

  return {
    open,
    onToggleTicketCreateModal,
  };
};
