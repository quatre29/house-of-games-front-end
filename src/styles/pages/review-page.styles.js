import { makeStyles } from "@mui/styles";
import { deepPurple, grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    height: "300px",
    borderRadius: "10px",
    objectFit: "cover",
    border: theme.palette.mode === "light" && `1px solid ${deepPurple[200]}`,
  },
  //--------------- IconButton---------------
  voteIcon: {
    color: theme.palette.mode === "light" ? deepPurple[400] : grey[400],
  },
  voteText: {
    color: theme.palette.mode === "light" ? deepPurple[400] : grey[400],
  },
  //-------------------------- review
  votesContainer: {
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titleContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    color: theme.palette.mode === "light" ? deepPurple[600] : grey[100],
  },
  dateContainer: {
    paddingTop: theme.spacing(2),
  },
  date: {
    color: grey[700],
  },
  ownerContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    display: "flex",
    alignItems: "center",
  },
  ownerAvatar: {
    marginRight: theme.spacing(1),
  },
  ownerLink: {
    textDecoration: "none",
  },
  owner: {
    color: theme.palette.mode === "light" ? deepPurple[700] : grey[100],
    "&:hover": {
      color: theme.palette.mode === "light" ? deepPurple[300] : grey[600],
    },
  },

  designerContainer: {
    paddingBottom: theme.spacing(2),
  },
  designerText: {
    color: theme.palette.mode === "light" ? deepPurple[700] : grey[100],
  },

  bodyContainer: {},
  bodyText: {
    lineHeight: "2",
    color: theme.palette.mode === "light" ? deepPurple[900] : grey[100],
    fontWeight: 400,
  },

  //-------------------------comments-----------
  commentsContainer: {
    paddingTop: theme.spacing(4),
  },
  commentsSecondContainer: {
    paddingTop: theme.spacing(4),
  },
  commentsContent: {
    paddingTop: theme.spacing(2),
  },
  showCommentsContainer: {
    paddingTop: theme.spacing(4),
  },
  commentTextArea: {
    color: theme.palette.mode === "light" ? deepPurple[700] : grey[900],
    fontFamily: "monospace",
    borderColor: theme.palette.mode === "light" ? deepPurple[200] : grey[900],
    padding: theme.spacing(2),
    lineHeight: "1",
    borderRadius: "5px",
    width: "100%",
    resize: "none",
    "&:focus": {
      outline: "none",
      border: `2px solid ${
        theme.palette.mode === "light" ? deepPurple[400] : grey[100]
      }`,
    },
  },
}));

export default useStyles;
