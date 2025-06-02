import React from "react";
import Content from "./Content";

const Footer = () => {
  return (
    <div className="h-[30rem] relative"
    style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"
    }}>
      <div className="h-[30rem] fixed bottom-0 w-full">
        <Content />
      </div>
    </div>
  );
};

export default Footer;
