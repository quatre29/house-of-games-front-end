import { makeStyles } from "@mui/styles";
import { green, indigo, grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  inputBody: {
    marginTop: theme.spacing(4),
  },
  submitButtonContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  errorContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.error.main,
  },
}));

export default useStyles;
