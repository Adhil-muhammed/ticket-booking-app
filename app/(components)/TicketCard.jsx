import React from "react";
import { red } from "@mui/material/colors";
import { ProgressDisplay, StatusDIsplay } from ".";
import {
  Card,
  Avatar,
  IconButton,
  CardHeader,
  CardContent,
  CardActions,
  CloseIcon,
  Typography,
} from "@mui/material";

export const TicketCard = () => {
  return (
    <Card
      sx={{ maxWidth: 400, mt: 5, borderRadius: 3, backgroundColor: "#f7f9f7" }}
      variant="outlined"
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton color="error">
            <CloseIcon fontSize="medium" />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="black">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ProgressDisplay />
        <StatusDIsplay />
      </CardActions>
    </Card>
  );
};
