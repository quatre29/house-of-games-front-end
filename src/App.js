import React, { useContext } from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import { ColorModeContext } from "./styles/Theme";
import useStyles from "./styles/app.styles";
import { Routes, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import useAuth from "./hooks/useAuth";
import Footer from "./components/Footer";
import CategoryList from "./pages/CategoryList";
import UserPage from "./pages/UserPage";
import ReviewPage from "./pages/ReviewPage";
import CreateReview from "./pages/CreateReview";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const classes = useStyles();

  const { user } = useAuth();

  return (
    <div className={classes.appContainer}>
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:category" element={<CategoryList />} />
            <Route path="/users/:username" element={<UserPage />} />
            <Route path="/my-profile" element={<UserPage />} />
            <Route path="/new" element={<CreateReview />} />

            <Route path="/reviews/:review_id" element={<ReviewPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Footer className={classes.footer} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
