import React, { useEffect, useState } from "react";

import useAuth from "../hooks/useAuth";
import { getAllReviews } from "../utils/apiRequests";
import { Container, Box, Button } from "@mui/material";
import useStyles from "../styles/pages/home.styles";
import FilterReviews from "../components/FilterReviews";
import ReviewsList from "../components/ReviewsList";
import BackToTop from "../components/BackToTop";
import CategoriesList from "../components/CategoriesList";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [page, setPage] = useState(1);

  const [sortBy, setSortBy] = useState("");
  const [ascending, setAscending] = useState(false);
  const [toggleFiltering, setToggleFiltering] = useState(false);
  const [openFilterDialog, setOpenFilterDialog] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    getAllReviews(page, sortBy, ascending).then((data) => {
      setReviews(data.reviews);
      setReviewsCount(data.totalCount);
    });
  }, [page, toggleFiltering]);

  return (
    <Container maxWidth="md" className={classes.homeContainer}>
      <CategoriesList />
      <Button variant="contained" onClick={() => setOpenFilterDialog(true)}>
        Sort options
      </Button>
      <FilterReviews
        ascending={ascending}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setAscending={setAscending}
        setPage={setPage}
        setToggleFiltering={setToggleFiltering}
        setOpenFilterDialog={setOpenFilterDialog}
        openFilterDialog={openFilterDialog}
      />

      <ReviewsList
        page={page}
        setPage={setPage}
        reviews={reviews}
        reviewsCount={reviewsCount}
      />
      <Box className={classes.backToTop}>
        <BackToTop />
      </Box>
    </Container>
  );
};

export default Home;
