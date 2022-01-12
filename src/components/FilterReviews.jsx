import React, { useState, useEffect } from "react";
import {
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  Switch,
  Button,
} from "@mui/material";

const FilterReviews = ({
  ascending,
  sortBy,
  setSortBy,
  setAscending,
  setPage,
  setToggleFiltering,
}) => {
  const filterReviews = () => {
    if (!ascending && sortBy.length < 1) return;

    console.log("filtering");
    // setSortBy("");
    // setAscending(false);
    setPage(1);
    setToggleFiltering((prevState) => !prevState);
  };
  return (
    <Container maxWidth="md">
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort by...</InputLabel>
          <Select
            value={sortBy}
            label="Sort By"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <MenuItem value="votes">Votes</MenuItem>
            <MenuItem value="comments">Comments</MenuItem>
            <MenuItem value="designer">Designer</MenuItem>
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="owner">Owner</MenuItem>
            <MenuItem value="date">Date</MenuItem>
          </Select>
        </FormControl>
        <Box>
          <Switch
            checked={ascending}
            onChange={(e) => setAscending(e.target.checked)}
            inputProps={{ "aria-label": "controlled" }}
          />
          Ascending
        </Box>
        <Button onClick={filterReviews}>Filter</Button>
      </Box>
    </Container>
  );
};

export default FilterReviews;
