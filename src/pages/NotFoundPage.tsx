import { Link } from "react-router-dom";

export function NotFoundPage() {
  return <section className="not-found"><div><span>404</span><h1>Page not found.</h1><p>The requested MinePanel page does not exist.</p><Link className="button button-primary" to="/">Return home</Link></div></section>;
}
