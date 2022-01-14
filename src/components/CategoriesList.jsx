import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { getCategories } from "../utils/apiRequests";
import { useNavigate } from "react-router-dom";

const CategoriesList = ({ categoryName }) => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  const goToCategory = (category) => {
    navigate(`/categories/${category.slug}`, { state: { category } });
  };

  return (
    <Box sx={{ marginTop: "10px" }}>
      {categories.map((category, i) => (
        <Button
          variant={categoryName === category.slug ? "contained" : "text"}
          key={`${category}${i}`}
          onClick={() => goToCategory(category)}
        >
          {category.slug}
        </Button>
      ))}
    </Box>
  );
};

export default CategoriesList;
