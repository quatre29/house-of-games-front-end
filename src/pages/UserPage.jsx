import React, { useState, useEffect } from "react";
import { Grid, Container, Box, Avatar, CircularProgress } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import { getUser } from "../utils/apiRequests";
import useStyles from "../styles/pages/user-page.styles";
import CustomPaper from "../components/CustomPaper";

const UserPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const { username } = useParams();
  const { state } = useLocation();

  const classes = useStyles();

  useEffect(() => {
    const user = state === null ? username : state.username;

    getUser(user).then((data) => setCurrentUser(data));
  }, []);

  return (
    <Container maxWidth="xs">
      <CustomPaper>
        <Box className={classes.userContainer}>
          {currentUser ? (
            <>
              <Avatar
                sx={{ width: "300px", height: "300px" }}
                className={classes.avatar}
                src={currentUser.avatar_url}
              />
              <h1>{currentUser.name}</h1>
              <p>@{currentUser.username}</p>
            </>
          ) : (
            <CircularProgress color="primary" />
          )}
        </Box>
      </CustomPaper>
    </Container>
  );
};

export default UserPage;
