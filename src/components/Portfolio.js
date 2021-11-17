import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  outerBox: {
    margin: '2% 0%'
  },
  arrow: {
    cursor: 'pointer',
    color: '#e3405f'
  },
  arrowDisabled: {
    color: '#ffffff'
  },
  projectBox: {
    width: '100%'
  },
  projectCard: {
    width: '100%',
    background: 'none',
    boxShadow: 'none'
  },
  projectCardContent: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center'
  },
  projectAbout: {
    width: '45%',
    marginRight: '5%'
  },
  projectTitle: {
    fontFamily: 'Raleway',
    fontSize: '200%'
  },
  projectText: {
    fontFamily: 'Open Sans',
    textAlign: 'justify'
  },
  projectImageLink: {
    width: '50%'
  },
  projectImage: {
    width: '100%'
  }
}));

const Portfolio = () => {
  const classes = useStyles();
  const projects = [
    {
      title: "AryaBota",
      description: <div className={classes.projectText}>
          AryaBota is a <b>tolerant gradual programming environment</b> designed to 
          teach programming basics to children of ages 10-15. Drawing from latest research, and other successful
          applications in this area, the team developed this prototype to make use of
          <ul>
            <li>
              a visual component: AryaBota is a robot in a grid that responds to textual commands, and children attempt to
              solve challenges to learn programming concepts
            </li>
            <li>
              gradual programming: At first, children can use commands resembling English, so the cognitive load of
              memorizing opaque syntax is reduced; after understanding a concept, they can be taught the 
              corresponding <b>Python</b> syntax and this PYthon syntax can then be used to control the robot
            </li>
          </ul>
          The prototype is being tested through workshops conducted for school children, and the team is collecting feedback 
          and usage metrics, based on which we hope to improve our application.<br/>
          Our research and initial findings have been submitted to a global conference, and the abstract was approved. The
          paper is currently under review for publication.
        </div>,
      image: 
        <a
          className={classes.projectImageLink}
          href="https://aryabota-docs.notion.site/AryaBota-316098bf36fc4cef9aeb8ef884a8c2d3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={classes.projectImage}
            src={require("../images/aryabota-home.png")}
            alt={"AryaBota Report"}
          />  
        </a>    
    }
  ]
  const cardContent = (project) => {
    return (
      <Card className={classes.projectCard}>
        <CardContent className={classes.projectCardContent}>
          <div className={classes.projectAbout}>
            <div className={classes.projectTitle}>
              {project.title}
            </div>
            {project.description}
          </div>
          {project.image}
        </CardContent>
      </Card>
    )
  }
  return (
    <Box component="div" className={classes.outerBox}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map(project => {
          return (
            cardContent(project)
          )}
        )}
      </Grid>
    </Box>
  );
};

export default Portfolio;


// ,
//   {
//     "title": "Content Management System, Intuit",
//     "description": "During my time as a software engineer at Intuit, I worked with the CMS team to develop, maintain and enhance the content management platform of the company."
//   },
//   {
//     "title": "Cafeteria Food Waste Optimization, Mu Sigma",
//     "description": "I worked with a group of fellow interns to solve the problem of excess food wastage at the Mu Sigma Cafeteria.",
//   },
//   {
//     "title": "Timetable Automation Tool, PES University",
//     "description": "To aid the CSE department in the cumbersome process of creating and distributing semester timetables, I helped create a tool to automate most of the process, and generate all the different timetable views required by the department."
//   }

// "description": [
//   {
//     "content": 
//     <CardContent className={classes.projectCardContent}>
//     <div className={classes.columnDescription}>
//       I undertook a research project to teach <i>introduction to programming</i> to children 
//       in the age group 10-15 in an intuitive way. I worked with a team to develop AryaBota, a programming environment
//       that makes the process of learning to code visual and concept-oriented, rather than syntax-oriented. This 
//       application, over a series of levels and challenges, aims to teach children Python.
//     </div>
//     <img className={classes.projectImageHalf}
//         src={require("../images/aryabota-home.png")}
//     />
//     </CardContent>
//   },
//   {
//     "content": 
//     <CardContent className={classes.projectCardContent}>
//     <div className={classes.rowDescription}>
//       AryaBota is a robot in a grid that responds to simple commands resembling plain English. For example, on 
//       receiving the command <b>move 2</b> the robot moves two steps ahead. Eventually, when children learn what a 
//       'function' is in Python, they can use <b>move(2)</b> instead and the robot will do the same thing! Our research
//       revolves around this kind of a <b> gradual programming language</b>, and its value in teaching programming.
//     </div>
//     <img className={classes.projectImageFull}
//         src={require("../images/aryabota-video.gif")}
//     />
//     </CardContent>
//   },
//   {
//     "content": <div>
//       It was in the preliminary research that we came across <a href="https://www.hedycode.com/">Hedy</a> and 
//       <a href="https://stanford.edu/~cpiech/karel/ide.html"> Karel</a>, from which AryaBota is inspired. From the
//       former, we learnt about gradual programming languages, and from the latter, about the effectiveness of visual
//       output while teaching coding.
//     </div>
//   }
// ]
