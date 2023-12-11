import Logo from "../../assets/logo.svg";
import { Headers, LogoDiv, Nav, Button } from "./styles";

export function Header() {
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
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">
          <Button>Contact Us</Button>
        </a>
      </Nav>
    </Headers>
  );
}
