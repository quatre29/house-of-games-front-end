import { makeStyles } from "@mui/styles";
import { green, indigo, grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    // backgroundColor: grey[100],
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
  },
  reviewsContainer: {
    padding: theme.spacing(4, 10, 4, 10),
    marginTop: theme.spacing(2),
  },
  backToTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
