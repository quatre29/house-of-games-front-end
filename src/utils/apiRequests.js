import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-games-api-project.herokuapp.com",
});

export const getUser = async (username) => {
  const user = await api.get(`/api/users/${username}`);
  return user.data.user;
};

export const getAllReviews = async () => {
  const reviews = await api.get(`/api/reviews`);
  console.log(reviews);
  return reviews.data.reviews;
};
