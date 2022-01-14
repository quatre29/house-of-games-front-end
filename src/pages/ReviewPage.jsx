import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ColorModeContext } from "../styles/Theme";
import * as moment from "moment";
import {
  KeyboardArrowDown,
  Favorite,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import {
  getCommentsByReview,
  getReview,
  removeComment,
  removeReview,
  voteReview,
} from "../utils/apiRequests";
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Paper,
  Chip,
  Typography,
  Avatar,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import CommentItem from "../components/CommentItem";
import { postComment } from "../utils/apiRequests";
import useAuth from "../hooks/useAuth";
import CustomPaper from "../components/CustomPaper";
import useStyles from "../styles/pages/review-page.styles";

const ReviewPage = () => {
  const [review, setReview] = useState(null);
  const [commentBody, setCommentBody] = useState("");
  const [comments, setComments] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const [commentError, setCommentError] = useState(false);

  const classes = useStyles();
  const { user } = useAuth();
  const { mode } = useContext(ColorModeContext);
  const navigate = useNavigate();

  const { review_id } = useParams();
  useEffect(() => {
    getReview(review_id)
      .then((data) => setReview(data))
      .catch((err) => {
        navigate("/not-found");
      });
  }, []);

  const voteRev = () => {
    voteReview(review_id);
    setReview((prevState) => ({
      ...prevState,
      votes: prevState["votes"] + 1,
    }));
  };

  const deleteReview = () => {
    removeReview(review_id).then(() => {
      navigate("/");
    });
  };

  const deleteComment = (id, author) => {
    if (author === user.username) {
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

  const submitComment = () => {
    if (commentBody.length > 0) {
      postComment(review_id, commentBody, user.username).then((data) => {
        setComments((prevState) => [data, ...prevState]);
        setCommentBody("");
        setCommentError(false);
      });
    } else {
      setCommentError(true);
    }
  };

  const toggleShowComments = () => {
    setShowComments((prevState) => !prevState);
    getCommentsByReview(review_id).then((data) => setComments(data));
  };

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={1}>
          <Box className={classes.votesContainer}>
            <IconButton onClick={voteRev}>
              <Favorite fontSize="large" className={classes.voteIcon} />
            </IconButton>
            <Typography className={classes.voteText} variant="h4">
              {review && review.votes}
            </Typography>
            {review && user.username === review.owner && (
              <IconButton
                onClick={deleteReview}
                aria-label="delete"
                color="primary"
              >
                <DeleteIcon fontSize="large" />
              </IconButton>
            )}
          </Box>
        </Grid>
        <Grid item xs={10}>
          <CustomPaper>
            {review ? (
              <>
                <Grid container>
                  <Grid item xs={12}>
                    <img
                      src={review.review_img_url}
                      className={classes.banner}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.titleContainer}>
                    <Typography variant="h3" className={classes.title}>
                      {review.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Chip
                      label={review.category}
                      clickable
                      sx={{
                        color: mode === "light" && deepPurple[700],
                        backgroundColor: mode === "light" && "#ddd5ec",
                        border:
                          mode === "light" && `1px solid ${deepPurple[200]}`,
                        "&:hover": {
                          backgroundColor: mode === "light" && deepPurple[100],
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} className={classes.dateContainer}>
                    <Typography className={classes.date}>
                      {moment(
                        review.created_at.toString(),
                        "YYYYMMDD HH:mm:ss"
                      ).fromNow()}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.ownerContainer}>
                    <Avatar
                      src={user.avatar_url}
                      className={classes.ownerAvatar}
                    />
                    <Link
                      to={`/users/${review.owner}`}
                      className={classes.ownerLink}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                        className={classes.owner}
                      >
                        {review.owner}
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={12} className={classes.designerContainer}>
                    <Typography
                      variant="body2"
                      className={classes.designerText}
                    >
                      Game Designer: {review.designer}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.bodyContainer}>
                    <p className={classes.bodyText}>{review.review_body}</p>
                  </Grid>
                  <Grid item xs={12}></Grid>
                </Grid>
                <Grid item xs={12} className={classes.commentsContainer}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      className={classes.showCommentsContainer}
                    >
                      <Button
                        endIcon={<KeyboardArrowDown />}
                        onClick={toggleShowComments}
                      >
                        <Typography variant="body2">
                          {showComments
                            ? `hide comments(${review.comment_count})`
                            : `show comments(${review.comment_count})`}
                        </Typography>
                      </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.commentsContent}>
                      {showComments && (
                        <Box>
                          <Grid container>
                            <Grid item xs={1}>
                              <Avatar alt="user avatar" src={user.avatar_url} />
                            </Grid>
                            <Grid item xs={11}>
                              {/* <TextField
                                value={commentBody}
                                onChange={(e) => setCommentBody(e.target.value)}
                              /> */}
                              <textarea
                                className={
                                  commentError
                                    ? classes.commentTextAreaError
                                    : classes.commentTextArea
                                }
                                name="comment"
                                rows="3"
                                placeholder={
                                  commentError
                                    ? `Comment body cannot be empty`
                                    : `Write a comment`
                                }
                                value={commentBody}
                                onChange={(e) => setCommentBody(e.target.value)}
                              ></textarea>
                              <Button onClick={submitComment}>Post</Button>
                            </Grid>
                          </Grid>
                          <Box className={classes.commentsSecondContainer}>
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
                              <CircularProgress />
                            )}
                          </Box>
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </CustomPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReviewPage;
