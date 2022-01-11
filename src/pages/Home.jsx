import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";

import useAuth from "../hooks/useAuth";
import { getAllReviews, getCategories } from "../utils/apiRequests";
import { Container, Box, Button } from "@mui/material";
import useStyles from "../styles/pages/home.styles";
import FilterReviews from "../components/FilterReviews";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [categories, setCategories] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    getAllReviews().then((data) => setReviews(data));
    getCategories().then((data) => setCategories(data));
  }, []);

  const goToCategory = (category) => {
    navigate(`/categories/${category.slug}`, { state: { category } });
  };

  return (
    <Container maxWidth="md" className={classes.homeContainer}>
      <FilterReviews />
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
      {reviews.map((review, i) => (
        <ReviewCard key={`${review.review_id}${i}`} review={review} />
      ))}
    </Container>
  );
};

export default Home;
