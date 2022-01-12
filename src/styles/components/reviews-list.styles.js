import { makeStyles } from "@mui/styles";
import { green, indigo, grey } from "@mui/material/colors";
import { lighten } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  reviewsContainer: {
    padding: theme.spacing(4, 10, 4, 10),
    marginTop: theme.spacing(2),
  },
  paginationContainer: {
    paddingTop: theme.spacing(4),
    width: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
