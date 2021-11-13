import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: '2%',
    margin: '5% 20%',
    [theme.breakpoints.between('xs', 'sm')]: {
      margin: '5% 5%'
    }
  }
}))

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.main}>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
