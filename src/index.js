import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ColorModeContextProvider } from "./styles/Theme";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeContextProvider>
        <CssBaseline />
        <App />
      </ColorModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
