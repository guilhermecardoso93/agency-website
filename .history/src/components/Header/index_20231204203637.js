import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="CodeBucks" />
        <h3>CodeBucks</h3>
      </div>
    </header>
  );
}
