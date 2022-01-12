import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import {
  Dialog,
  DialogTitle,
  Box,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Paper,
  Grow,
} from "@mui/material";
import { blue, orange, deepOrange, deepPurple } from "@mui/material/colors";
import { Person as PersonIcon } from "@mui/icons-material";
import useStyles from "../styles/pages/login-styles";

const Login = () => {
  const [input, setInput] = useState("");
  const { signIn, loading, error } = useAuth();
  const classes = useStyles();

  const submitForm = (e) => {
    e.preventDefault();
    signIn(input);
  };

  const addExistingUser = () => {
    setInput("jessjelly");
  };
  return (
    <Paper className={classes.loginContainer}>
      <Dialog
        open={true}
        sx={{ padding: "20px" }}
        BackdropProps={{
          classes: {
            root: classes.backDrop,
          },
        }}
      >
        <DialogTitle>Please login with valid details</DialogTitle>
        <DialogContent>
          <Box className={classes.textContainer}>
            <List>
              <ListItem
                button
                onClick={addExistingUser}
                sx={{ borderRadius: "5px" }}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{ bgcolor: deepPurple[100], color: deepPurple[600] }}
                  >
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Jess" />
              </ListItem>
            </List>
            <TextField
              error={error}
              label="Username"
              helperText={
                error ? "User not found" : "Please enter a valid username"
              }
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={submitForm}>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default Login;
