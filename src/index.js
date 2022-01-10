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
import { AuthProvider } from "./hooks/useAuth";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ColorModeContextProvider>
          <CssBaseline />
          <App />
        </ColorModeContextProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
