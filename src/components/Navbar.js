import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="nav-container">
        <div className="navbar-wrapper">
          <div
            role="button"
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>My Work</button>
            <button onClick={() => window.open(require("../images/resume.pdf"), "_blank")}>Resume</button>
            <button onClick={() => scrollTo("#about")}>About</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
