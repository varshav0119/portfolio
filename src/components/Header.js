import React from "react"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
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
      </div>
    </div>
  )
}

export default Header
