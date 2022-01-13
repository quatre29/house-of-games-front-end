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
  Button,
  Link,
} from "@mui/material";
import {
  DarkMode,
  WbSunny,
  Search as SearchIcon,
  Mail as MailIcon,
  HomeRounded,
} from "@mui/icons-material";
import { ColorModeContext } from "../styles/Theme";
import useStyles from "../styles/components/nav-bar.styles";
import AvatarDropMenu from "./AvatarDropMenu";
import { useNavigate } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";

const NavBar = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const classes = useStyles();
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate("/");
  };

  const darkModeButton =
    mode === "light" ? (
      <IconButton onClick={toggleColorMode}>
        <DarkMode fontSize="large" sx={{ color: deepPurple[50] }} />
      </IconButton>
    ) : (
      <IconButton onClick={toggleColorMode}>
        <WbSunny fontSize="large" sx={{ color: "yellow" }} />
      </IconButton>
    );

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton onClick={goBackHome}>
            <HomeRounded fontSize="large" />
          </IconButton>
          <Typography variant="h6">House of Games</Typography>
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
          <Box className={classes.navItem}>
            <Button
              color="secondary"
              onClick={() => navigate("/new")}
              variant="contained"
            >
              new review
            </Button>
          </Box>
          {darkModeButton}
          <Box className={classes.navItem}>
            <AvatarDropMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
