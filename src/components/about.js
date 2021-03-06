import React from "react"
import data from "../yourdata"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <h1>About Me</h1>
        <div className="about-section">
          <div className="content">
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img className="about-image" src={require("../images/varsha.jpeg")} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
