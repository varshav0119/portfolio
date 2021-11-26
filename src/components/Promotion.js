import React from "react"
import CardCustom from "./atoms/CardCustom"
import data from "../yourdata"

const Promotion = () => {
  return (
    <div className="section" id="hobbyprojects">
      <div className="container">
        <div className="promotion-container">
            <h1>{data.promotionHeading}</h1>
            <div className="grid">
              {data.hobby.map((project, index) => (
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
      </div>
    </div>
  )
}

export default Promotion
