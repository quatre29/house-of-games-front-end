import { makeStyles } from "@mui/styles";
import { green, indigo, grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    backgroundColor: theme.palette.mode === "light" && grey[100],
  },
  text: {
    color: green[400],
  },
}));
export default useStyles;
