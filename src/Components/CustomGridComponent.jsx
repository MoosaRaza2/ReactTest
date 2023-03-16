import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
const CustomGridComponent = ({ color, text, props }) => {
  return (
    <Grid
      container
      sx={{
        ...props,
        backgroundColor: `${color}`,
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <Typography> {text}</Typography>
    </Grid>
  );
};

export default CustomGridComponent;
