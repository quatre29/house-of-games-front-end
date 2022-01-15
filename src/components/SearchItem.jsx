import React, { useState } from "react";
import useStyles from "../styles/components/search-item.styles";
import { Box, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchItem = () => {
  const [input, setInput] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();

  const search = (e) => {
    if (e.keyCode === 13) {
      setInput("");
      navigate("/search", {
        state: { searchTerm: input },
      });
    }
  };

  return (
    <Box className={classes.searchContainer}>
      <Box className={classes.searchIconWrapper}>
        <SearchIcon />
      </Box>
      <InputBase
        onKeyDown={search}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={classes.inputBase}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
};

export default SearchItem;
