import React from "react";
import { Paper } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

import useStyles from "../styles/components/custom-paper.styles";

const CustomPaper = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper
      className={classes.paperContainer}
      sx={(theme) => ({
        backgroundColor: theme.palette.mode === "light" && deepPurple[100],
      })}
      elevation={3}
    >
      {children}
    </Paper>
  );
};

export default CustomPaper;
