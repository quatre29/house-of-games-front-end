import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";

import useAuth from "../hooks/useAuth";
import { getAllReviews, getCategories } from "../utils/apiRequests";
import {
  Container,
  Box,
  Button,
  Pagination,
  Stack,
  Paper,
} from "@mui/material";
import useStyles from "../styles/pages/home.styles";
import FilterReviews from "../components/FilterReviews";
import { useNavigate } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";
import BackToTop from "../components/BackToTop";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);

  const [sortBy, setSortBy] = useState("");
  const [ascending, setAscending] = useState(false);
  const [toggleFiltering, setToggleFiltering] = useState(false);
  const [openFilterDialog, setOpenFilterDialog] = useState(false);

  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    getAllReviews(page, sortBy, ascending).then((data) => {
      setReviews(data.reviews);
      setReviewsCount(data.totalCount);
    });
  }, [page, toggleFiltering]);

  const goToCategory = (category) => {
    navigate(`/categories/${category.slug}`, { state: { category } });
  };

  return (
    <Container maxWidth="md" className={classes.homeContainer}>
      <Box>
        {categories.map((category, i) => (
          <Button
            key={`${category}${i}`}
            onClick={() => goToCategory(category)}
          >
            {category.slug}
          </Button>
        ))}
      </Box>
      <Button variant="contained" onClick={() => setOpenFilterDialog(true)}>
        Filter options
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
