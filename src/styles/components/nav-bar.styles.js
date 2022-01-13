import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIconWrapper: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBase: {
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  },
  avatarMenuContainer: {
    border: "4px solid transparent",
    borderRadius: "50%",
    padding: "1px",
    "&:hover": {
      border: `4px solid ${blueGrey[50]}`,
      cursor: "pointer",
    },
  },
  navItem: {},
  menuLink: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default useStyles;
