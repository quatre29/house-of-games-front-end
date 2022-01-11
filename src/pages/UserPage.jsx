import React, { useState, useEffect } from "react";
import { Grid, Container, Box, Avatar } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import { getUser } from "../utils/apiRequests";

const UserPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const { username } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    const user = state === null ? username : state.username;

    getUser(user).then((data) => setCurrentUser(data));
  }, []);

  return (
    <Container>
      {currentUser ? (
        <>
          <Avatar src={currentUser.avatar_url} />
          <h1>{currentUser.name}</h1>
          <p>@{currentUser.username}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default UserPage;
