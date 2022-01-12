import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";
import { grey, deepPurple } from "@mui/material/colors";

const useStyles = makeStyles((theme) => {
  let title = deepPurple[300];
  let titleHover = theme.palette.primary.main;

  let name = deepPurple[700];
  let nameHover = deepPurple[900];

  let date = grey[500];

  if (theme.palette.mode === "dark") {
    title = grey[50];
    titleHover = grey[500];

    name = grey[700];
    nameHover = grey[400];
  }

  return {
    cardContainer: {
      display: "flex",
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
    reviewContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    reviewContent: {
      display: "flex",
      justifyContent: "space-between",
      height: "100%",
    },
    usernameLink: {
      textDecoration: "none",
      color: "inherit",
    },
    reviewDate: {
      color: date,
    },

    username: {
      color: name,
      "&:hover": {
        color: nameHover,
      },
    },
    socialContainer: {
      paddingTop: theme.spacing(2),
    },
    socialItem: {
      padding: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      color: titleHover,
    },

    titleContainer: {
      paddingTop: theme.spacing(2),
    },
    titleLink: {
      textDecoration: "none",
      color: "inherit",
    },
    title: {
      fontWeight: "bold",
      color: title,
      "&:hover": {
        color: titleHover,
      },
    },

    categoryChip: {
      paddingTop: theme.spacing(1),
    },
  };
});

export default useStyles;
