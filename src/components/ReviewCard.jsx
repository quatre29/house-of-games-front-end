import React, { useEffect, useState, useContext } from "react";
import * as moment from "moment";

import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Card,
  CardMedia,
  Badge,
  Chip,
  CircularProgress,
} from "@mui/material";
import { Favorite, ChatBubble } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "../styles/components/review-card.styles";
import useAuth from "../hooks/useAuth";
import { getUser } from "../utils/apiRequests";
import { deepPurple } from "@mui/material/colors";
import { ColorModeContext } from "../styles/Theme";

const ReviewCard = ({ review }) => {
  const [userReview, setUserReview] = useState(null);
  const { user } = useAuth();
  const classes = useStyles();
  const navigate = useNavigate();
  const { mode } = useContext(ColorModeContext);

  useEffect(() => {
    getUser(review.owner).then((data) => setUserReview(data));
    return setUserReview(null);
  }, []);

  const handleCategoryChip = () => {
    navigate(`/categories/${review.category}`, {
      state: { category: { slug: review.category } },
    });
  };

  return (
    <Card
      className={classes.cardContainer}
      sx={(theme) => ({
        backgroundColor: theme.palette.mode === "light" && deepPurple[50],
      })}
      variant="outlined"
    >
      {userReview ? (
        <Grid container className={classes.reviewContainer}>
          <Grid item>
            <Avatar src={userReview.avatar_url} />
          </Grid>
          <Grid item xs={10}>
            <Grid container className={classes.reviewContent}>
              <Grid item xs={12}>
                <Link
                  to={`/users/${userReview.username}`}
                  className={classes.usernameLink}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold" }}
                    className={classes.username}
                  >
                    {userReview.name}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12} className={classes.date}>
                <Typography variant="body2" className={classes.reviewDate}>
                  {moment(
                    review.created_at.toString(),
                    "YYYYMMDD HH:mm:ss"
                  ).fromNow()}
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.titleContainer}>
                <Link
                  className={classes.titleLink}
                  to={`/reviews/${review.review_id}`}
                >
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    className={classes.title}
                    variant="h4"
                  >
                    {review.title}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12} className={classes.categoryChip}>
                <Chip
                  label={review.category}
                  onClick={handleCategoryChip}
                  clickable
                  sx={{
                    color: mode === "light" && deepPurple[700],
                    backgroundColor: mode === "light" && "#ddd5ec",
                    border: mode === "light" && `1px solid ${deepPurple[200]}`,
                    "&:hover": {
                      backgroundColor: mode === "light" && deepPurple[100],
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container className={classes.socialContainer}>
                  <Grid item xs={3} className={classes.socialItem}>
                    <Badge color="secondary" badgeContent={review.votes}>
                      <Favorite />
                    </Badge>
                  </Grid>
                  <Grid item xs={3} className={classes.socialItem}>
                    <Badge
                      color="secondary"
                      badgeContent={+review.comment_count}
                    >
                      <ChatBubble />
                    </Badge>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <CircularProgress color="primary" />
      )}
      <CardMedia
        component="img"
        sx={{ width: 151, borderRadius: "5px" }}
        image={review.review_img_url}
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default ReviewCard;
