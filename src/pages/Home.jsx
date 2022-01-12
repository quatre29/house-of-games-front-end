import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";

import useAuth from "../hooks/useAuth";
import { getAllReviews, getCategories } from "../utils/apiRequests";
import { Container, Box, Button, Pagination, Stack } from "@mui/material";
import useStyles from "../styles/pages/home.styles";
import FilterReviews from "../components/FilterReviews";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);

  const [sortBy, setSortBy] = useState("");
  const [ascending, setAscending] = useState(false);
  const [toggleFiltering, setToggleFiltering] = useState(false);

  const classes = useStyles();
  const navigate = useNavigate();
  console.log(sortBy, ascending, toggleFiltering);

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

  const handlePagination = (event, value) => {
    console.log(value);
    setPage(value);
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
      <FilterReviews
        ascending={ascending}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setAscending={setAscending}
        setPage={setPage}
        setToggleFiltering={setToggleFiltering}
      />

      {reviews.map((review, i) => (
        <ReviewCard key={`${review.review_id}${i}`} review={review} />
      ))}
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(reviewsCount / 10)}
          page={page}
          variant="outlined"
          onChange={handlePagination}
        />
      </Stack>
    </Container>
  );
};

export default Home;
