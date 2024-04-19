import React from "react";

function Title({title, sub}) {
  return (
    <div>
      <h1 className="header mb-2">{title}</h1>
      <p className="sub_title mb-0">{sub}</p>
    </div>
  );
}

export default Title;
