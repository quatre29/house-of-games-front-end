import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  userContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "100px",
    height: "100px",
  },
}));

export default useStyles;
