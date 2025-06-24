import React from "react";

interface DotProps {
  color?: string;
  size?: string;
}

const Dot: React.FC<DotProps> = ({ color = "purple", size = "50px" }) => {
  const style = {
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: "50%", 
  };

  return <div style={style}></div>;
};

export default Dot;