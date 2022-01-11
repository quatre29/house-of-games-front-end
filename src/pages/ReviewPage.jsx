import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getCommentsByReview,
  getReview,
  removeComment,
  voteReview,
} from "../utils/apiRequests";
import { Container, Grid, Box, TextField, Button } from "@mui/material";
import CommentItem from "../components/CommentItem";
import { postComment } from "../utils/apiRequests";
import useAuth from "../hooks/useAuth";

const ReviewPage = () => {
  const [review, setReview] = useState(null);
  const [commentBody, setCommentBody] = useState("");
  const [comments, setComments] = useState(null);
  const [showComments, setShowComments] = useState(false);

  const { user } = useAuth();

  const { review_id } = useParams();
  useEffect(() => {
    getReview(review_id).then((data) => setReview(data));
  }, []);

  const voteRev = () => {
    voteReview(review_id);
    setReview((prevState) => ({
      ...prevState,
      votes: prevState["votes"]++,
    }));
  };

  const deleteComment = (id, author) => {
    if (author === user.username) {
      console.log(id, author);
      const newState = comments.filter((com) => com.comment_id !== id);
      setComments(newState);
      removeComment(id);
    }
  };

  const voteCom = (id) => {
    const newState = [...comments];
    newState.forEach((com, i) => {
      if (com.comment_id === id) {
        newState[i].votes = newState[i].votes + 1;
      }
    });
    setComments(newState);
  };

  const submitPost = () => {
    postComment(review_id, commentBody, user.username).then((data) =>
      setComments((prevState) => [data, ...prevState])
    );
  };

  const toggleShowComments = () => {
    setShowComments((prevState) => !prevState);
    getCommentsByReview(review_id).then((data) => setComments(data));
  };

  return (
    <Container maxWidth="md">
      {review ? (
        <>
          <img src={review.review_img_url} width="300px" height="300px" />
          <h1>{review.title}</h1>
          <h4>{review.category}</h4>
          <p>{review.created_at}</p>
          <p>{review.owner}</p>
          <p>Designer of Game: {review.review_body}</p>
          <p>{review.designer}</p>
          <button onClick={voteRev}>Vote</button>
          {review.votes}
          <p>Comments: {review.comment_count}</p>
          <div>
            <button onClick={toggleShowComments}>Show comments</button>
            {showComments && (
              <>
                <Box>
                  <TextField
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
                  />
                  <Button onClick={submitPost}>Post</Button>
                </Box>
                <Box>
                  {comments ? (
                    comments.map((comment, i) => (
                      <CommentItem
                        key={`${comment.comment_id}${i}`}
                        comment={comment}
                        voteCom={voteCom}
                        deleteComment={deleteComment}
                      />
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </Box>
              </>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default ReviewPage;
