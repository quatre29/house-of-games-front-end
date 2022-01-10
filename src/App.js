import React, { useContext } from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import { ColorModeContext } from "./styles/Theme";
import useStyles from "./styles/app.styles";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const classes = useStyles();

  console.log(classes);

  return (
    <div>
      <NavBar />
      <Box>
        <Paper>
          <Typography className={classes.text} variant="h1">
            This is some text
          </Typography>
        </Paper>
      </Box>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
