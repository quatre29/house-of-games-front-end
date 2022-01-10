import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  },
  textContainer: {
    padding: "22px",
  },
  backDrop: {
    backdropFilter: "blur(15px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
}));

export default useStyles;
