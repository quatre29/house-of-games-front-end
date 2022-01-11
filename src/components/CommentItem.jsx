import React, { useState, useEffect } from "react";
import { Container, Box, Avatar, Grid } from "@mui/material";
import { getUser, voteComment } from "../utils/apiRequests";
import useAuth from "../hooks/useAuth";

const CommentItem = ({ comment, voteCom, deleteComment }) => {
  const [author, setAuthor] = useState(null);
  const [currentComment, setCurrentComment] = useState(null);
  const { user } = useAuth();

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
    <div style={{ border: "1px solid blue" }}>
      {author && currentComment ? (
        <>
          <Avatar src={author.avatar_url} />
          <p>{author.name}</p>
          <p>{currentComment.body}</p>
          <p>{currentComment.created_at}</p>
          <button onClick={vote}>Vote</button> {currentComment.votes}
          {comment.author === user.username && (
            <button
              onClick={() => deleteComment(comment.comment_id, comment.author)}
            >
              Delete Comment
            </button>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CommentItem;
