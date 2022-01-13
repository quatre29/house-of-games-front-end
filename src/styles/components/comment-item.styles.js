import { makeStyles } from "@mui/styles";
import { grey, deepPurple } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  commentContainer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  commentGridContainer: {
    display: "flex",
  },
  commentContentContainer: {},
  commentTitle: {},
  deleteButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: theme.spacing(1.5),
  },
  ownerLink: {
    textDecoration: "none",
  },
  owner: {
    color: theme.palette.mode === "light" ? deepPurple[700] : grey[400],
    "&:hover": {
      color: theme.palette.mode === "light" ? deepPurple[300] : grey[600],
    },
  },
  commentDate: {
    color: theme.palette.mode === "light" ? grey[600] : grey[700],
  },
  commentBodyText: {
    paddingTop: theme.spacing(2),
    color: theme.palette.mode === "light" ? deepPurple[700] : grey[100],
  },
  voteButton: {
    marginTop: theme.spacing(2),
  },
  voteCommentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  voteCommentIcon: {
    color: theme.palette.mode === "light" ? deepPurple[400] : grey[400],
  },

  voteCommentText: {
    color: theme.palette.mode === "light" ? deepPurple[400] : grey[400],
  },
}));

export default useStyles;
