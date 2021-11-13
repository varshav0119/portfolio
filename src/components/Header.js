import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  outerBox: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    margin: '2% 0%'
  },
  greeting: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
    paddingRight: '8%',
    [theme.breakpoints.between('xs', 'sm')]: {
      paddingRight: '0%',
      width: '100%'
    }
  },
  mainText: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    /* media-dependent */
    fontSize: '40px',
    height: '3%',
    [theme.breakpoints.between('xs', 'sm')]: {
      textAlign: 'center',
      fontSize: '140%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '30px'
    }
  },
  subText: {
    color: '#7f8daa',
    fontFamily: 'Open Sans',
    /* media-dependent */
    fontSize: '26px',
    height: '50%',
    [theme.breakpoints.between('xs', 'sm')]: {
      textAlign: 'center',
      fontSize: '100%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '112%'
    }
  },
  portfolioImageBox: {
    width: '50%',
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '100%'
    }
  },
  portfolioImage: {
    width: '100%',
    borderRadius: '8%'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.outerBox}>
      <Box className={classes.greeting}>
        <p className={classes.mainText}>
          <span> Hello! I'm </span>
          <span style={{ color: '#e3405f' }}>
                  Varsha
          </span>
          <span>.</span>
        </p>
        <p className={classes.subText}>
          <span> I am excited about tech that is </span>
          <span style={{ color: '#e3405f' }}>
                    inclusive
          </span>
          <span> and </span>
          <span style={{ color: '#e3405f' }}>
                    impactful
          </span>
          <span>.</span>
          <br/>
          <span> I enjoy coffee</span>
          <span role="img" aria-label="">☕</span>
          <span>, rainy weather</span>
          <span role="img" aria-label="">☔</span>
          <span>, and epic fantasy</span>
          <span role="img" aria-label="">📚</span>
          <span>.</span>
        </p>
      </Box>
      <Box className={classes.portfolioImageBox}>
        <img className={classes.portfolioImage}
              alt=""
              src={require("../images/varsha.jpg")}
        />
      </Box>
    </Box>
  );
};

export default Header;
