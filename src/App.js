import React, { useContext } from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import { ColorModeContext } from "./styles/Theme";
import useStyles from "./styles/app.styles";
import { Routes, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import useAuth from "./hooks/useAuth";

function App() {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const classes = useStyles();

  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
