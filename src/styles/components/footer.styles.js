import { makeStyles } from "@mui/styles";
import { blueGrey, deepPurple, grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    marginTop: theme.spacing(5),
    // position: "absolute",
    // bottom: "0",
    // left: "0",
    // width: "100%",
  },
  footerSecondContainer: {
    padding: theme.spacing(5),
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
  },
  text: {
    textAlign: "center",
    paddingBottom: theme.spacing(1),
    color: theme.palette.mode === "light" ? deepPurple[400] : grey[400],
  },
  socialsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconSocialLink: {},
  iconSocial: {
    cursor: "pointer",

    "&:hover": {
      color: theme.palette.mode === "light" ? deepPurple[700] : grey[600],
    },
  },
}));

export default useStyles;
