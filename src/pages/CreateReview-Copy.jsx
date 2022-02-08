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

const CreatePost = () => {
  const [title, setTitle] = useState({
    inputError: false,
    input: "",
  });
  const [body, setBody] = useState({
    inputError: false,
    input: "",
  });
  const [designer, setDesigner] = useState({
    inputError: false,
    input: "",
  });
  const [category, setCategory] = useState({
    inputError: false,
    input: "",
  });
  const [categories, setCategories] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  const classes = useStyles();
  const { user } = useAuth();

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  const submitReview = () => {
    const reviewBody = {
      owner: user.username,
      title: title.input,
      review_body: body.input,
      designer: designer.input,
      category: category.input,
    };

    if (title.input.length < 0)
      setTitle((prevState) => ({ ...prevState, errorInput: true }));

    if (body.input.length < 0)
      setBody((prevState) => ({ ...prevState, errorInput: true }));

    if (designer.input.length < 0)
      setDesigner((prevState) => ({ ...prevState, errorInput: true }));

    if (category.input.length < 0)
      setCategory((prevState) => ({ ...prevState, errorInput: true }));

    if (
      !title.errorInput &&
      !body.errorInput &&
      !designer.errorInput &&
      !category.errorInput
    ) {
      setErrorInput(false);
      // postReview(reviewBody);
    } else {
      console.log("error");
      setErrorInput(true);
    }
  };

  const onChangeCategory = (e) => {
    setCategory((prevState) => ({
      ...prevState,
      input: e.target.value,
    }));
  };

  const onChangeTitle = (e) => {
    setTitle((prevState) => ({
      ...prevState,
      input: e.target.value,
    }));
  };

  const onChangeDesigner = (e) => {
    setDesigner((prevState) => ({
      ...prevState,
      input: e.target.value,
    }));
  };

  const onChangeBody = (e) => {
    setBody((prevState) => ({
      ...prevState,
      input: e.target.value,
    }));
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
              value={title.input}
              onChange={(e) => onChangeTitle(e)}
              required
              label="Title"
              name="title"
              fullWidth
              autoFocus
              // multiline
              sx={(theme) => ({
                fontWeight: "bold",
                color: theme.palette.primary.main,
              })}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                error={true}
                value={category.input}
                label="Select category"
                onChange={(e) => onChangeCategory(e)}
                sx={(theme) => ({ color: theme.palette.primary.main })}
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
              sx={(theme) => ({ color: theme.palette.primary.main })}
              value={designer.input}
              onChange={(e) => onChangeDesigner(e)}
            />
            <InputBase
              className={classes.inputBody}
              variant="outlined"
              placeholder="Write a review"
              fullWidth
              sx={(theme) => ({ color: theme.palette.primary.main })}
              value={body.input}
              multiline
              onChange={(e) => onChangeBody(e)}
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
