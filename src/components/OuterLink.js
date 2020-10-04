import React from "react";

const OuterLink = props => (
  <a
    href={props.to}
    className="navbar__link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.children}
  </a>
);

export default OuterLink;
