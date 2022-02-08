import React, { useState, useEffect } from "react";
import { getCategories, postReview } from "../utils/apiRequests";
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  CircularProgress,
  Typography,
  InputBase,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import useAuth from "../hooks/useAuth";
import CustomPaper from "../components/CustomPaper";
import useStyles from "../styles/pages/create-review.styles";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [designer, setDesigner] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  const classes = useStyles();
  const { user } = useAuth();
  const navigation = useNavigate();

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  const submitReview = () => {
    const reviewBody = {
      owner: user.username,
      title,
      review_body: body,
      designer,
      category,
    };
    if (
      title.length > 0 &&
      body.length > "" &&
      designer.length > 0 &&
      category.length > 0
    ) {
      setErrorInput(false);
      postReview(reviewBody).then((data) => {
        navigation(`/reviews/${data.review_id}`);
      });
    } else {
      console.log("error");
      setErrorInput(true);
    }
  };
  return (
    <CustomPaper>
      <Box className={classes.container}>
        {categories.length > 0 ? (
          <>
            <Typography
              variant="h2"
              component={InputBase}
              placeholder="Add title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              label="Title"
              name="title"
              fullWidth
              autoFocus
              // multiline
              sx={(theme) => ({
                fontWeight: "bold",
                color:
                  errorInput && title.length < 1
                    ? "red"
                    : theme.palette.primary.main,
              })}
            />
            <FormControl fullWidth>
              <InputLabel
                sx={(theme) => ({ color: theme.palette.primary.main })}
                id="demo-simple-select-label"
              >
                Category
              </InputLabel>
              <Select
                error={errorInput && category.length < 1 && true}
                value={category}
                label="Select category"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat, i) => (
                  <MenuItem
                    key={`${cat.slug}${i}`}
                    value={cat.slug}
                    sx={(theme) => ({ color: theme.palette.primary.main })}
                  >
                    {cat.slug}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <InputBase
              className={classes.inputBody}
              variant="outlined"
              placeholder="Add Designer"
              fullWidth
              sx={(theme) => ({
                color:
                  errorInput && designer.length < 1
                    ? "red"
                    : theme.palette.primary.main,
              })}
              value={designer}
              onChange={(e) => setDesigner(e.target.value)}
            />
            <InputBase
              className={classes.inputBody}
              variant="outlined"
              placeholder="Write a review"
              fullWidth
              sx={(theme) => ({
                color:
                  errorInput && body.length < 1
                    ? "red"
                    : theme.palette.primary.main,
              })}
              value={body}
              multiline
              onChange={(e) => setBody(e.target.value)}
            />
            {/* body
            <TextField value={body} onChange={(e) => setBody(e.target.value)} /> */}
            {/* designer
            <TextField
              value={designer}
              onChange={(e) => setDesigner(e.target.value)}
            /> */}
            {/* category */}
            {/* <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" defaultValue disabled>
                Select Category
              </option>
              {categories.map((cat, i) => (
                <option key={`${cat.slug}${i}`} value={cat.slug}>
                  {cat.slug}
                </option>
              ))}
            </select> */}
            {errorInput && (
              <Box className={classes.errorContainer}>
                <Typography variant="h5">Input fields missing...</Typography>
              </Box>
            )}
            <Box className={classes.submitButtonContainer}>
              <Button onClick={submitReview}>Post Review</Button>
            </Box>
          </>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </CustomPaper>
  );
};

export default CreatePost;
