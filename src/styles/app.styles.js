import { makeStyles } from "@mui/styles";
import { green, indigo, grey, deepPurple } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    backgroundColor: theme.palette.mode === "light" && deepPurple[50],
  },
  text: {
    color: green[400],
  },
}));
export default useStyles;
