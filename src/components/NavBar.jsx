import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  InputBase,
  Badge,
  Typography,
  Container,
} from "@mui/material";
import {
  DarkMode,
  WbSunny,
  Search as SearchIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import { ColorModeContext } from "../styles/Theme";
import useStyles from "../styles/components/nav-bar.styles";

const NavBar = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const classes = useStyles();

  const darkModeButton =
    mode === "light" ? (
      <IconButton onClick={toggleColorMode}>
        <DarkMode fontSize="large" sx={{ color: "#000" }} />
      </IconButton>
    ) : (
      <IconButton onClick={toggleColorMode}>
        <WbSunny fontSize="large" sx={{ color: "yellow" }} />
      </IconButton>
    );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">This is the title</Typography>
        <Box sx={{ flexGrow: 1 }} />

        <Box className={classes.searchContainer}>
          <Box className={classes.searchIconWrapper}>
            <SearchIcon />
          </Box>
          <InputBase
            className={classes.inputBase}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />
        {darkModeButton}

        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
