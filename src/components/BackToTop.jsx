import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const BackToTop = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <IconButton onClick={scrollUp}>
      <KeyboardArrowUp fontSize="large" />
    </IconButton>
  );
};

export default BackToTop;
