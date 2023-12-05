import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="CodeBucks" />
        <h3>CodeBucks</h3>
      </div>
      <nav>
        <a href='#home'>Home</a>
        <a href='#about'>About Us</a>
        <a href='#services'>Services</a>
        <a href='#contact'>
          <button>Contact Us</button>
        </a>
        <a href='#home'>Home</a>
        <a href='#home'>Home</a>
      </nav>
    </header>
  );
}
