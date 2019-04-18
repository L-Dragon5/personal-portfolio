import React from "react"
import { Link } from "react-scroll"

const OuterLink = (props) => (
  <a href={ props.to } className="navbar__link" target="_blank" rel="noopener noreferrer">{ props.children }</a>
)

const Header = () => (
  <header>
    <div className="navbar">
      <Link to="about" offset={-64} spy={true} smooth={true} duration={400} activeClass="navbar__link--active" className="navbar__link">About</Link>
      <Link to="work" offset={-64} spy={true} smooth={true} duration={400} activeClass="navbar__link--active" className="navbar__link">Work</Link>
      <Link to="contact" offset={-64} spy={true} smooth={true} duration={400} activeClass="navbar__link--active" className="navbar__link">Contact</Link>
      <OuterLink to="https://docs.google.com/document/d/1JiHwoCyBUoEWvgm1F1g0zXwt_TSVxhCP1L4yKUVuyAQ/pub">Resume</OuterLink>
      <OuterLink to="https://github.com/L-Dragon5">GitHub</OuterLink>
    </div>
  </header>
)

export default Header
