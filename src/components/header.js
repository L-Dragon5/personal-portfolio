import React from "react"

const NavLink = (props) => (
  <li className="navbar__link">
    { props.to != null ? (
      <a href={ props.to }>{ props.children }</a>
    ) : null }

    { props.outerTo != null ? (
      <a href={ props.outerTo } target="_blank" rel="noopener noreferrer">{ props.children }</a>
    ) : null }
  </li>
)

const Header = () => (
  <header>
    <ul className="navbar">
      <NavLink to="#about">About</NavLink>
      <NavLink to="#work">Work</NavLink>
      <NavLink to="#contact">Contact</NavLink>
      <NavLink outerTo="https://docs.google.com/document/d/1JiHwoCyBUoEWvgm1F1g0zXwt_TSVxhCP1L4yKUVuyAQ/pub">Resume</NavLink>
    </ul>
  </header>
)

export default Header
