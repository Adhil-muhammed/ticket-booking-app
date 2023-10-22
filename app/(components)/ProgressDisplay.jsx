"use client";

import * as React from "react";
import { Box, styled, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useImmer } from "use-immer";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: "100%",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

// Inspired by the former Facebook spinners.

export const ProgressDisplay = () => {
  const [progreeValue, setProgress] = useImmer(50);
  return (
    <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 2 }}>
      <BorderLinearProgress
        variant="determinate"
        value={progreeValue}
        valueLabelDisplay="auto"
      />
      <Typography variant="body2" color="textSecondary">
        {`${progreeValue}%`}
      </Typography>
    </Box>
  );
};
