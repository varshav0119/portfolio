import React from "react";
import "./Footer.css";
import Divider from '@mui/material/Divider';
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio.js";
import { Box } from "@mui/system";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <Box
      sx = {{
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
      }}
    >
      <p className="footer-text" 
        style={{ 
          color: props.theme.secondaryText,
          padding: 10
        }}
       >
          Made with <span role="img">❤️</span> by {greeting.title2} 
      </p>
      <Divider orientation="vertical" variant="middle" flexItem 
        sx = {{
          width: 2,
          backgroundColor: '#868e96'
        }}
      />
      <SocialMedia />
    </Box>
  );
}
