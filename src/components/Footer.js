import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="nav-container">
        <div className="footer-container">
          <span className="footer">
            <span className="footer-item">
              Made With 
              <icon> ❤ </icon> 
              by Varsha
            </span>
            <span className="dash"> - </span>
            <a className="footer-item"
              href="mailto:varshav0119@gmail.com">
                varshav0119@gmail.com
            </a>
            <span className="dash"> - </span>
            <a className="footer-item-half"
              href="https://github.com/varshav0119"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" className="icon"/>
            </a>
            <span className="dash"> - </span>
            <a className="footer-item-half"
              href="https://www.linkedin.com/in/varsha-venkatasubramanian/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="1x" className="icon"/>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
