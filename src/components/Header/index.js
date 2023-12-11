import { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Headers, LogoDiv, Nav, Button, HamburgerBtn, MobileMenu } from "./styles";

export function Header() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <Headers>
      <LogoDiv>
        <img src={Logo} alt="CodeBucks" />
        <h3>CodeBucks</h3>
      </LogoDiv>
      <Nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">
          <Button>Contact Us</Button>
        </a>
      </Nav>
      <HamburgerBtn onClick={() => handleClick()} clicked={click}>
        <span />
      </HamburgerBtn>
      <MobileMenu clicked={click}>
        <a href="#home" onClick={() => handleClick()}>Home</a>
        <a href="#about" onClick={() => handleClick()}>About Us</a>
        <a href="#services" onClick={() => handleClick()}>Services</a>
        <a href="#contact" onClick={() => handleClick()}>
          <Button>Contact Us</Button>
        </a>
      </MobileMenu>
    </Headers>
  );
}
