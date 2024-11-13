import logoReact from "../assets/react.svg";

export default function AppHeader() {
  return (
    <header>
      <div className="container">
        <img src={logoReact} alt="" />
        <h2>React Blog</h2>
      </div>
    </header>
  );
}
