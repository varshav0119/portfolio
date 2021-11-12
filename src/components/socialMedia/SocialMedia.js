import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import { Divider } from "@mui/material";

export default function socialMedia() {
  return (
    <>
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        
      </a>
      <Divider orientation="vertical" variant="middle" flexItem 
        sx = {{
          width: 2,
          backgroundColor: '#868e96'
        }}
      />
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <Divider orientation="vertical" variant="middle" flexItem 
        sx = {{
          width: 2,
          backgroundColor: '#868e96'
        }}
      />
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="far fa-envelope"></i>
      </a>
    </>
  );
}
