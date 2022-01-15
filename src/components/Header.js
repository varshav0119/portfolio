import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Divider, IconButton } from "@mui/material"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Header = () => {

  return (
    <div className="section" id="home">
        <div className="container">
          <div className="header-wrapper">
            <div className="text-wrapper">
                <div className="heading-wrapper">
                  <h1>
                    Hello! I'm <span style=
                    {{
                      color: '#e3405f'
                    }}>
                      Varsha
                    </span>.
                  </h1>
                </div>
                <p>
                  I am excited about tech that is 
                  <span style=
                    {{
                      color: '#e3405f'
                    }}> inclusive </span>
                  and 
                  <span style=
                    {{
                      color: '#e3405f'
                    }}> impactful</span>.
                  <br/>
                  I enjoy coffee☕, rainy weather☔, and epic fantasy📚.
                </p>
            </div>
            {/* <div className="image-wrapper">
              <img className="about-image" src={require("../images/varsha.jpg")} alt="about"></img>
            </div> */}
            <a
              className="resume-link"
              href="https://drive.google.com/file/d/1ZgAHKir_uZJaY5flyJXI-_twCYxEe30x/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <span>View Resume</span>
            </a>
            <div className="contact-icons">
              <IconButton
                aria-label="email"
                color="primary"
                href="mailto:varshav0119@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope}/>
              </IconButton>
              <IconButton
                aria-label="github"
                color="primary"
                href="https://github.com/varshav0119"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub}/>
              </IconButton>
              <IconButton
                aria-label="email"
                color="primary"
                href="https://www.linkedin.com/in/varsha-venkatasubramanian/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn}/>
              </IconButton>
            </div>
            <Divider className="container-divider"/>
          </div>
        </div>
    </div>
  )
}

export default Header
