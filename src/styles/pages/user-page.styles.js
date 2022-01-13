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
}));

export default useStyles;
