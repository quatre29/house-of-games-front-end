import React from "react";
import { Grid, Container, Box, Link, Typography } from "@mui/material";
import { LinkedIn, Facebook, Twitter, GitHub } from "@mui/icons-material";
import CustomPaper from "./CustomPaper";
import useStyles from "../styles/components/footer.styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footerContainer}>
      <CustomPaper>
        <Container maxWidth="sm" className={classes.footerSecondContainer}>
          <Box className={classes.textContainer}>
            <Typography variant="caption" className={classes.text}>
              This website was made for Front-End project week at Northcoders
              Bootcamp. It was connected with the project from the Back-End
              week.
            </Typography>

            <Typography className={classes.text} variant="caption">
              <strong>Front-End:</strong> React | Mui
            </Typography>
            <Typography className={classes.text} variant="caption">
              <strong>Back-End:</strong> NodeJS | Express | PostgreSQL
            </Typography>
          </Box>
          <Box className={classes.socialsContainer}>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/adrian-balan-5a854622a/"
              className={classes.iconSocialLink}
            >
              <LinkedIn className={classes.iconSocial} fontSize="large" />
            </Link>

            <Link
              target="_blank"
              href="https://twitter.com/@Haxor46913911"
              className={classes.iconSocialLink}
            >
              <Twitter className={classes.iconSocial} fontSize="large" />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/quatre29"
              className={classes.iconSocialLink}
            >
              <GitHub className={classes.iconSocial} fontSize="large" />
            </Link>
          </Box>
        </Container>
      </CustomPaper>
    </Box>
  );
};

export default Footer;
