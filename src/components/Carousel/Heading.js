import React from "react";
import "./Carousel.css"

function Heading({ title }) {
  return (
    <div className="m-head">
      <h2 className="m-title">{title}</h2>
      <hr className="m-border" />
    </div>
  );
}

export default Heading;
