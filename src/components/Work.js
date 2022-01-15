import React from "react"
import CardCustom from "./atoms/CardCustom"
import { Divider } from "@mui/material"
import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <div className="work-flex-wrapper">
            <h1 className="section-header">My Work</h1>
            <div className="grid">
                {data.projects.map((project, index) => (
                  <CardCustom
                    key={index}
                    heading={project.title}
                    paragraph={project.para}
                    imgUrl={project.imageSrc}
                    projectLink={project.url}
                  ></CardCustom>
                ))}
            </div>
          </div>
          <Divider className="container-divider"/>
        </div>
      </div>
    </div>
  )
}

export default Work
