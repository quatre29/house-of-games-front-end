import React, { useState, useEffect } from "react";
import { getCategories, postReview } from "../utils/apiRequests";
import { Container, Grid, Box, TextField, Button } from "@mui/material";
import useAuth from "../hooks/useAuth";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [designer, setDesigner] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  const { user } = useAuth();

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
      console.log(reviewBody);
      setErrorInput(false);
      postReview(reviewBody);
    } else {
      console.log("error");
      setErrorInput(true);
    }
  };
  return (
    <div>
      {categories.length > 0 ? (
        <>
          title
          <TextField value={title} onChange={(e) => setTitle(e.target.value)} />
          body{" "}
          <TextField value={body} onChange={(e) => setBody(e.target.value)} />
          designer
          <TextField
            value={designer}
            onChange={(e) => setDesigner(e.target.value)}
          />
          category
          <select
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
          </select>
          <Button onClick={submitReview}>Post Review</Button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CreatePost;
