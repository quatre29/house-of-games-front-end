import React from "react";
import { Paper, Pagination, Stack, Box } from "@mui/material";
import useStyles from "../styles/components/reviews-list.styles";
import ReviewCard from "./ReviewCard";
import { deepPurple } from "@mui/material/colors";

const ReviewsList = ({ page, setPage, reviews, reviewsCount = 0 }) => {
  const classes = useStyles();

  const handlePagination = (event, value) => {
    setPage(value);
  };

  return (
    <Paper
      className={classes.reviewsContainer}
      sx={(theme) => ({
        backgroundColor: theme.palette.mode === "light" && deepPurple[100],
      })}
      elevation={3}
    >
      {reviews.map((review, i) => (
        <ReviewCard key={`${review.review_id}${i}`} review={review} />
      ))}
      <Box className={classes.paginationContainer}>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(reviewsCount / 10)}
            page={page}
            variant="outlined"
            onChange={handlePagination}
          />
        </Stack>
      </Box>
    </Paper>
  );
};

export default ReviewsList;
