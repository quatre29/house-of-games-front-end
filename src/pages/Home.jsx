import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";

import useAuth from "../hooks/useAuth";
import { getAllReviews } from "../utils/apiRequests";
import { Container, Grow, Fade } from "@mui/material";

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const { signOut } = useAuth();

  useEffect(() => {
    getAllReviews().then((data) => setReviews(data));
  }, []);

  return (
    <Container maxWidth="lg">
      {reviews.map((review, i) => (
        <ReviewCard key={`${review.review_id}${i}`} review={review} />
      ))}
    </Container>
  );
};

export default Home;
