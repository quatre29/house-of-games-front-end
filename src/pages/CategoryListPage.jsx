import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { getReviewsByCategory } from "../utils/apiRequests";
import { Container, Box, CircularProgress } from "@mui/material";
import ReviewCard from "../components/ReviewCard";
import ReviewsList from "../components/ReviewsList";
import CategoriesList from "../components/CategoriesList";

const CategoryList = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  const { category } = useParams();
  const navigate = useNavigate();

  // const {
  //   state: { category: categoryState },
  // } = useLocation();

  useEffect(() => {
    getReviewsByCategory(category)
      .then((data) => setReviews(data))
      .catch((err) => {
        navigate("/not-found");
      });
  }, [category]);

  return (
    <Container maxWidth="md">
      {reviews.length > 0 ? (
        <>
          <CategoriesList categoryName={category} />
          <h1>{category.slug}</h1>
          <p>{category.description}</p>

          <ReviewsList reviews={reviews} page={1} />
        </>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default CategoryList;
