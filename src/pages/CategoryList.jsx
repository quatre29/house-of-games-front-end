import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getReviewsByCategory } from "../utils/apiRequests";
import { Container, Box } from "@mui/material";
import ReviewCard from "../components/ReviewCard";
import ReviewsList from "../components/ReviewsList";

const CategoryList = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  const {
    state: { category },
  } = useLocation();

  useEffect(() => {
    getReviewsByCategory(category.slug).then((data) => setReviews(data));
  }, []);

  return (
    <Container maxWidth="md">
      <h1>{category.slug}</h1>
      <p>{category.description}</p>
      {/* <Box>
        {reviews.map((review, i) => (
          <ReviewCard key={`${review.review_id}${i}`} review={review} />
        ))}
      </Box> */}
      <ReviewsList reviews={reviews} page={1} />
    </Container>
  );
};

export default CategoryList;
