import { deepPurple, grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  userContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "300px",
    height: "300px",
  },
  userTitle: {
    color: theme.palette.mode === "light" ? deepPurple[600] : grey[200],
  },
}));

export default useStyles;
