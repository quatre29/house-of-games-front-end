import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    padding: "20px",
  },
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
}));

export default useStyles;
