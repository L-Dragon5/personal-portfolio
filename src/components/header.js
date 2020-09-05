import React from "react"
import { Link } from "react-scroll"

const OuterLink = (props) => (
  <a href={ props.to } className="navbar__link" target="_blank" rel="noopener noreferrer">{ props.children }</a>
)

class NavbarIcon extends React.Component {
  onClick = (e) => {
    e.preventDefault();
    let navbar = document.getElementsByClassName("navbar")[0];
    if(navbar.classList.contains("navbar--open")) {
      navbar.classList.remove("navbar--open");
    } else {
      navbar.classList.add("navbar--open");
    }
  }

  render() {
    return(
      <a href="#" className="navbar__icon" onClick={ this.onClick }><span className="hamburger" aria-label="Mobile menu hamburger"></span></a>
    )
  }
}

const Header = () => (
  <header>
    <div className="navbar">
      <Link to="about" offset={-62} spy={true} smooth={true} duration={400} activeClass="navbar__link--active" className="navbar__link">About</Link>
      <Link to="work" offset={-62} spy={true} smooth={true} duration={400} activeClass="navbar__link--active" className="navbar__link">Work</Link>
      <Link to="contact" offset={-62} spy={true} smooth={true} duration={400} activeClass="navbar__link--active" className="navbar__link">Contact</Link>
      <OuterLink to="https://docs.google.com/document/d/e/2PACX-1vQPK-Ejqjmp7Gg1XzSSxUseDzixvzCDLbvHhtiDZVwFAX-sgfC2dacpYRLu4z9rnBLtriB2IyllNPWw/pub">Resume</OuterLink>
      <OuterLink to="https://github.com/L-Dragon5">GitHub</OuterLink>
    </div>

    <NavbarIcon />
  </header>
)

export default Header
