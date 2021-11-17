import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material"
import React from "react"

const CardCustom = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <Card
      sx = {{
        boxShadow: 'none'
      }}
    >
      <CardActionArea
        href={projectLink}
        target={"_blank"}
      >
        <CardMedia
          component="img"
          image={require("../../images/" + imgUrl)}
          alt="AryaBota Application"
        />
        <CardContent className="content">
          <h1 className="header">{heading}</h1>
          <p className="text">{paragraph}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardCustom
