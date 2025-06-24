import { toPadding } from "chart.js/helpers";
import React from "react";

interface ReactangleProps {
  backgroundColor?: string;
  imageName?: string;
  name?: string;
  value?: number;
  levels?: string;
}

const Rectangle: React.FC<ReactangleProps> = ({
  backgroundColor = "purple",
  imageName = null,
  name = null,
  value = 0,
  levels = null,
}) => {
  const styleBox = {
    backgroundColor: backgroundColor,
    borderRadius: "5%",
    display: "flex",
    flexDirection: "column" as "column",
    minWidth: "32%",

  };
  const contentContainer=  {
    marginTop: "10px",
    marginLeft: "10px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column" as "column",
  };
  const styleImage = {
    width: "100px", 
    height: "100px" 
  };
  const heading=  {
    marginTop: "5px",
    marginBotom: "10px",

  };

  return (
    <div style={styleBox}>
      <div style={contentContainer}>
      <img src={`src/assets/main_icons/${imageName}.svg`} alt="" 
      style={styleImage}
      />
      <span>{name}</span>
      <span><h2 style={heading}>{value} bpm</h2></span>
      <span>{levels}</span>
      </div>
    </div>
  );
};

export default Rectangle;
