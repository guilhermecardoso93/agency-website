import Logo from "../../assets/logo.svg";
import { Headers, LogoDiv } from "./styles";

export function Header() {
  return (
    <Headers>
      <LogoDiv>
        <img src={Logo} alt="CodeBucks" />
        <h3>CodeBucks</h3>
      </LogoDiv>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">
          <button>Contact Us</button>
        </a>
      </nav>
    </Headers>
  );
}
