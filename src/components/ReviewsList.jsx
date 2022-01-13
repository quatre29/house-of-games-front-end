import React from "react";
import { Paper, Pagination, Stack, Box, CircularProgress } from "@mui/material";
import useStyles from "../styles/components/reviews-list.styles";
import ReviewCard from "./ReviewCard";
import { deepPurple } from "@mui/material/colors";
import CustomPaper from "./CustomPaper";

const ReviewsList = ({ page, setPage, reviews, reviewsCount = 0 }) => {
  const classes = useStyles();

  const handlePagination = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <CustomPaper>
      {reviews.length > 0 ? (
        reviews.map((review, i) => (
          <ReviewCard key={`${review.review_id}${i}`} review={review} />
        ))
      ) : (
        <CircularProgress color="primary" />
      )}
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
    </CustomPaper>
  );
};

export default ReviewsList;
