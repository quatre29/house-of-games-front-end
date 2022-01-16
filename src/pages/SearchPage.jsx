import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Tabs, Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  searchFilteredReviewsByOwner,
  searchFilteredReviewsByTitle,
} from "../utils/apiRequests";

import ReviewsList from "../components/ReviewsList";

const SearchPage = () => {
  const [reviewsByTitle, setReviewsByTitle] = useState([]);
  const [reviewsByOwner, setReviewsByOwner] = useState([]);
  const [tabValue, setTabValue] = useState("1");
  const [term, setTerm] = useState("");

  const {
    state: { searchTerm },
  } = useLocation();

  useEffect(() => {
    setTerm(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (term.length > 0) {
      searchFilteredReviewsByOwner(term).then((data) => {
        setReviewsByOwner(data.revOwner);
      });
      searchFilteredReviewsByTitle(term).then((data) => {
        setReviewsByTitle(data.revTitle);
      });
    }
  }, [term]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <TabContext value={tabValue}>
        <Box sx={{ width: "100%" }}>
          <TabList indicatorColor="primary" onChange={handleTabChange}>
            <Tab value="1" label="Filtered by title" />
            <Tab value="2" label="Filtered by owner" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ReviewsList reviews={reviewsByTitle} />
        </TabPanel>
        <TabPanel value="2">
          <ReviewsList reviews={reviewsByOwner} />
        </TabPanel>
      </TabContext>
    </Container>
  );
};

export default SearchPage;
