import Logo from "../../assets/logo.svg";
import { Headers } from "./styles";

export function Header() {
  return (
    <Headers>
      <div>
        <img src={Logo} alt="CodeBucks" />
        <h3>CodeBucks</h3>
      </div>
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
