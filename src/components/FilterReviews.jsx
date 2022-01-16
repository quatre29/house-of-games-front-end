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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";

import useStyles from "../styles/components/filter-reviews-dialog.styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FilterReviews = ({
  ascending,
  sortBy,
  setSortBy,
  setAscending,
  setPage,
  setToggleFiltering,
  setOpenFilterDialog,
  openFilterDialog,
}) => {
  const classes = useStyles();

  const filterReviews = () => {
    if (!ascending && sortBy.length < 1) return;

    console.log("filtering");
    // setSortBy("");
    // setAscending(false);
    setPage(1);
    setToggleFiltering((prevState) => !prevState);
    handleClose();
  };

  const handleClose = () => {
    setOpenFilterDialog(false);
  };

  return (
    <div>
      <Dialog
        maxWidth="lg"
        open={openFilterDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        PaperProps={{
          style: {
            padding: "30px",
            width: "500px",
          },
        }}
        BackdropProps={{
          classes: {
            root: classes.backDrop,
          },
        }}
      >
        <DialogTitle>Sort Reviews</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort by...</InputLabel>
            <Select
              sx={(theme) => ({ color: theme.palette.primary.main })}
              value={sortBy}
              label="Sort By"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem
                sx={(theme) => ({ color: theme.palette.primary.main })}
                value="votes"
              >
                Votes
              </MenuItem>
              <MenuItem
                sx={(theme) => ({ color: theme.palette.primary.main })}
                value="comments"
              >
                Comments
              </MenuItem>
              <MenuItem
                sx={(theme) => ({ color: theme.palette.primary.main })}
                value="designer"
              >
                Designer
              </MenuItem>
              <MenuItem
                sx={(theme) => ({ color: theme.palette.primary.main })}
                value="title"
              >
                Title
              </MenuItem>
              <MenuItem
                sx={(theme) => ({ color: theme.palette.primary.main })}
                value="owner"
              >
                Owner
              </MenuItem>
              <MenuItem
                sx={(theme) => ({ color: theme.palette.primary.main })}
                value="date"
              >
                Date
              </MenuItem>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={filterReviews}>Filter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FilterReviews;
