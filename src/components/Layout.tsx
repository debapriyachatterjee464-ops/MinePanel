import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Brand } from "./Brand";

const nav = [
  ["/features", "Features"],
  ["/docs", "Documentation"],
  ["/security", "Security"],
  ["/support", "Support"]
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="container nav-inner">
          <Brand />
          <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => isActive ? "active" : ""}>{label}</NavLink>
            ))}
            <Link className="button button-primary nav-download" to="/download">Download</Link>
          </nav>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>A local-first desktop control panel for Minecraft Java servers.</p>
          <small>MinePanel Local is independent and is not affiliated with Mojang Studios or Microsoft.</small>
        </div>
        <FooterColumn title="Product" links={[["/features","Features"],["/download","Download"],["/changelog","Changelog"],["/faq","FAQ"]]} />
        <FooterColumn title="Documentation" links={[["/docs","Docs home"],["/docs/install/windows","Install on Windows"],["/docs/install/linux","Install on Linux"],["/docs/diagnostics","Diagnostics"]]} />
        <FooterColumn title="Trust" links={[["/security","Security"],["/privacy","Privacy"],["/support","Support"],["/legal","Legal"]]} />
      </div>
      <div className="container footer-bottom">
        <span>MinePanel Local 1.0.0</span>
        <span>Windows and Debian-based Linux</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return <div className="footer-column"><strong>{title}</strong>{links.map(([to,label]) => <Link key={to} to={to}>{label}</Link>)}</div>;
}
