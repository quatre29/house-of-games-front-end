import React, { createContext, useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import {
  grey,
  deepOrange,
  yellow,
  orange,
  lime,
  green,
  lightGreen,
  deepPurple,
  blueGrey,
  indigo,
  cyan,
} from "@mui/material/colors";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? deepPurple[400] : grey[300],
            light: mode === "light" ? deepPurple[200] : grey[100],
            dark: mode === "light" ? deepPurple[600] : grey[600],
          },
          secondary: {
            main: blueGrey[400],
            light: blueGrey[200],
            dark: blueGrey[600],
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
