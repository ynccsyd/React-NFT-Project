import React from "react";
import "./Heading.css"

function Heading({ title }) {
  return (
    <div className="m-head">
      <h2 className="m-title">{title}</h2>
      <hr className="m-border" />
    </div>
  );
}

export default Heading;