import React, { useContext, useState, useRef, useEffect } from "react";

import {
  Box,
  Container,
  Avatar,
  MenuItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from "@mui/material";
import useAuth from "../hooks/useAuth";
import useStyles from "../styles/components/nav-bar.styles";

const AvatarDropMenu = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const { user, signOut } = useAuth();
  const classes = useStyles();

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleCloseMenu = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleToggleMenu = (e) => {
    setOpen((prevOpen) => !prevOpen);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const logout = (event) => {
    handleCloseMenu(event);
    signOut();
  };

  const prevOpen = React.useRef(open);
  return (
    <>
      <Box
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggleMenu}
        className={classes.avatarMenuContainer}
      >
        <Avatar alt="user avatar" src={user.avatar_url} />
      </Box>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "top-left",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseMenu}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                  <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default AvatarDropMenu;
