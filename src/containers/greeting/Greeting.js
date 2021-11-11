import React from "react";
import "./Greeting.css";
import { greeting } from "../../portfolio";

export default function Greeting(props) {
  const theme = props.theme;

  return (
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
                {greeting.misc}
              </p>
            </div>
          </div>
          <div className="greeting-image-div">
          <img
            alt=""
            src={require("../../assets/images/varsha.jpg")}
          ></img>
          </div>
        </div>
      </div>
  );
}
