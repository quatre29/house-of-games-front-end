import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-games-api-project.herokuapp.com",
});

export const getUser = async (username) => {
  const user = await api.get(`/api/users/${username}`);
  return user.data.user;
};

export const getReview = async (review_id) => {
  const review = await api.get(`/api/reviews/${review_id}`);
  return review.data.review;
};

export const getAllReviews = async () => {
  const reviews = await api.get(`/api/reviews`);
  return reviews.data.reviews;
};

export const getCategories = async () => {
  const categories = await api.get(`/api/categories`);
  return categories.data.categories;
};

export const getReviewsByCategory = async (category) => {
  const reviews = await api.get(`/api/reviews?category=${category}`);
  return reviews.data.reviews;
};

export const voteReview = async (comment_id) => {
  try {
    return await api.patch(`/api/reviews/${comment_id}/vote`, {
      inc_votes: 1,
    });
  } catch (error) {
    console.log(error);
  }
};

export const voteComment = async (comment_id) => {
  return await api.patch(`/api/comments/${comment_id}/vote`, { inc_votes: 1 });
};

export const getCommentsByReview = async (review_id) => {
  const comments = await api.get(`/api/reviews/${review_id}/comments`);
  return comments.data.comments;
};

export const postComment = async (review_id, body, username) => {
  try {
    const comment = await api.post(`/api/reviews/${review_id}/comments`, {
      username,
      body,
    });
    return comment.data.comment;
  } catch (error) {
    console.log(error);
  }
};

export const removeComment = async (comment_id) => {
  try {
    return await api.delete(`/api/comments/${comment_id}`);
  } catch (error) {
    console.log(error);
  }
};

export const postReview = async (review) => {
  try {
    const review = await api.post(`/reviews`, review);
    console.log(review);
    return review.data.review;
  } catch (error) {
    console.log(error);
  }
};
