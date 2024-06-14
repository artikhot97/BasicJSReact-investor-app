import Logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="Logo showing money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
