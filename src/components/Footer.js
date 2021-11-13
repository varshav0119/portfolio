import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { GitHub, LinkedIn, Mail } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  footerBox: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
  },
  footerMainText: {
    color: '#7f8daa',
    fontFamily: 'Raleway',
    fontSize: '20px',
    flexGrow: '0.03',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '100%',
      width: '100%',
      textAlign: 'center'
    },
  },
  footerText: {
    color: '#7f8daa',
    fontFamily: 'Raleway',
    fontSize: '20px',
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0px'
    },
  },
  socialMediaButton: {
    '&:hover': {
      'background': 'none'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '2%'
    }
  },
  icon: {
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '120%'
    }
  }
}))

const socialMediaLinks = {
  github: "https://github.com/varshav0119",
  linkedin: "https://www.linkedin.com/in/varsha-venkatasubramanian-717913157/",
  gmail: "varshav0119@gmail.com"
};

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footerBox}>
      <p className={classes.footerMainText}>
          Made with <span role="img" aria-label="love">❤️</span> by Varsha
      </p>
      <p className={classes.footerText}> | </p>
      <Button
        className={classes.socialMediaButton}
        variant="text"
        href={socialMediaLinks.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub className={classes.icon}/>  
      </Button>
      <p className={classes.footerText}> | </p>
      <Button
        className={classes.socialMediaButton}
        href={socialMediaLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn className={classes.icon}/>  
      </Button>
      <p className={classes.footerText}> | </p>
      <Button
        className={classes.socialMediaButton}
        href={socialMediaLinks.gmail}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mail className={classes.icon}/>  
      </Button>
    </Box>
  );
};
export default Footer;
