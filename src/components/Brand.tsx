import { Link } from "react-router-dom";

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="MinePanel home">
      <img className="brand-icon" src="/assets/minepanel-app-icon.png" alt="" aria-hidden="true" />
      <span>MinePanel</span>
    </Link>
  );
}
