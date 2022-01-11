import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  username: {
    fontWeight: "bold",
    color: "#606971",
    "&:hover": {
      color: blueGrey[900],
    },
  },
  socialContainer: {},
  socialItem: {
    display: "flex",
  },
  titleLink: {
    textDecoration: "none",
    color: "inherit",
  },
  title: {
    fontWeight: "bold",
    color: blueGrey[900],
    "&:hover": {
      color: "#323ebe",
    },
  },
}));

export default useStyles;
