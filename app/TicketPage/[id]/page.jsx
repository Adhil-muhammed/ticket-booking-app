import React from "react";

const TicketById = ({ params }) => {
  return <div>{`TicketById${params?.id}`}</div>;
};

export default TicketById;
