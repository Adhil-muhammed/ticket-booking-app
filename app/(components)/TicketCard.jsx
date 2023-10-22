import React from "react";
import {
  Card,
  Grid,
  IconButton,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import AdsClickIcon from "@mui/icons-material/AdsClick";

import { PriorityDisplay, ProgressDisplay, StatusDIsplay } from ".";

export const TicketCard = (ticketData) => {
  return (
    <Card
      sx={{
        mt: 5,
        borderRadius: 3,
        backgroundColor: "#f7f9f7",
      }}
      variant="outlined"
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <>
            <IconButton color="success">
              <AdsClickIcon />
            </IconButton>
            <IconButton color="error">
              <CloseIcon fontSize="medium" />
            </IconButton>
          </>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="black"
          sx={{ display: "inline-block" }}
        >
          {ticketData?.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ProgressDisplay progress={ticketData?.progress} />
        <StatusDIsplay />
      </CardActions>
    </Card>
  );
};
