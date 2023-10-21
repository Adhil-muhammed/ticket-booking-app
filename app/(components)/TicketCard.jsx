import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { PriorityDisplay, ProgressDisplay, StatusDIsplay } from ".";

export const TicketCard = () => {
  // const [expanded, setExpanded] = React.useState(false);
  let expanded;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // <div className="p-5 w-96 border-2 border-rose-500 mb-2 mt-3">
  //   <div className="flex items-center justify-between">
  //     <PriorityDisplay />
  //     <IconButton color="error">
  //       <CloseIcon />
  //     </IconButton>
  //   </div>
  //   <h6 className="py-10">Ticket Title</h6>
  //   <div className="flex justify-between items-center ">
  //     <div className=" flex flex-col gap-3 flex-[0.5]">
  //       <span>Date and time</span>
  //       <ProgressDisplay />
  //     </div>
  //     <StatusDIsplay />
  //   </div>
  // </div>
  return (
    <Card sx={{ maxWidth: 345, mt: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
            <IconButton color="error">
              <CloseIcon />
            </IconButton>
          </>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ProgressDisplay />
      </CardActions>
    </Card>
  );
};
