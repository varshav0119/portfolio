import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BlogsImg from "./BlogsImg";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";
import { style } from "glamor";

const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <>
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="about">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blogsite-btn-div">
                <a {...styles} className="general-btn" href={blogSection.link}>
                  My Twitter Profile
                </a>
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </>
  );
}

export default Contact;
