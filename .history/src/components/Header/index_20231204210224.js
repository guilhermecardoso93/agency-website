import Logo from "../../assets/logo.svg";
import { Headers, LogoDiv } from "./styles";

export function Header() {
  return (
    <Headers>
      <Logo>
        <img src={Logo} alt="CodeBucks" />
        <h3>CodeBucks</h3>
      </Logo>
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
