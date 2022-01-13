import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Avatar,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import { getUser, voteComment } from "../utils/apiRequests";
import useAuth from "../hooks/useAuth";
import { Delete as DeleteIcon, Favorite } from "@mui/icons-material";
// import { Link } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import * as moment from "moment";
import useStyles from "../styles/components/comment-item.styles";

const CommentItem = ({ comment, voteCom, deleteComment }) => {
  const [author, setAuthor] = useState(null);
  const [currentComment, setCurrentComment] = useState(null);

  const { user } = useAuth();
  const classes = useStyles();

  useEffect(() => {
    setCurrentComment(comment);
    getUser(comment.author).then((data) => {
      setAuthor(data);
    });
  }, []);

  const vote = () => {
    voteComment(comment.comment_id);
    voteCom(comment.comment_id);
  };

  return (
    <Paper
      sx={(theme) => ({
        backgroundColor: theme.palette.mode === "light" && deepPurple[50],
      })}
      className={classes.commentContainer}
    >
      {author && currentComment ? (
        <Grid container className={classes.commentGridContainer}>
          <Grid item xs={1}>
            <Avatar src={author.avatar_url} />
          </Grid>
          <Grid item xs={11}>
            <Box className={classes.commentContentContainer}>
              <Grid container className={classes.commentTitle}>
                <Grid item xs={6}>
                  {/* <Link
                  to={`/users/${author.name}`}
                  className={classes.ownerLink}
                > */}
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold" }}
                    className={classes.owner}
                  >
                    {author.name}
                  </Typography>
                  {/* </Link> */}
                  <span className={classes.commentDate}>
                    {moment(
                      currentComment.created_at.toString(),
                      "YYYYMMDD HH:mm:ss"
                    ).fromNow()}
                  </span>
                </Grid>
                <Grid item xs={6} className={classes.deleteButtonContainer}>
                  {comment.author === user.username && (
                    <IconButton
                      onClick={() =>
                        deleteComment(comment.comment_id, comment.author)
                      }
                      aria-label="delete"
                      color="primary"
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Grid>
              </Grid>
              <Typography className={classes.commentBodyText}>
                {currentComment.body}
              </Typography>
            </Box>
            <Box className={classes.voteCommentContainer}>
              <IconButton onClick={vote} className={classes.voteButton}>
                <Favorite className={classes.voteCommentIcon} />
              </IconButton>
              <Typography className={classes.voteCommentText}>
                {currentComment.votes}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </Paper>
  );
};

export default CommentItem;
{
  /* <p>{author.name}</p>
<p>{currentComment.body}</p>
<p>
  {moment(
    currentComment.created_at.toString(),
    "YYYYMMDD HH:mm:ss"
  ).fromNow()}
</p>
<button onClick={vote}>Vote</button> {currentComment.votes} */
}
