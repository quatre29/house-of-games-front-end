import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import { FavoriteBorderOutlined, ChatBubbleOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useStyles from "../styles/components/review-card.styles";
import useAuth from "../hooks/useAuth";
import { getUser } from "../utils/apiRequests";

const ReviewCard = ({ review }) => {
  const [userReview, setUserReview] = useState(null);
  const { user } = useAuth();
  const classes = useStyles();

  useEffect(() => {
    getUser(review.owner).then((data) => setUserReview(data));
    return setUserReview(null);
  }, []);

  return (
    <Card className={classes.cardContainer} variant="outlined">
      {userReview ? (
        <Grid container>
          <Grid item>
            <Avatar src={userReview.avatar_url} />
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={12}>
                <Link to={`/users/${userReview.username}`}>
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
                <Typography variant="body2">2 days ago</Typography>
              </Grid>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <Typography>#{review.category}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.socialContainer}>
                <Grid container>
                  <Grid item xs={3} className={classes.socialItem}>
                    <FavoriteBorderOutlined />
                    <Typography>4</Typography>
                  </Grid>
                  <Grid item xs={3} className={classes.socialItem}>
                    <ChatBubbleOutline />
                    <Typography>3</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <p>Loading...</p>
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
