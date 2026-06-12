import { Check, Copy, Download, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: .65, delay, ease: [.22, 1, .36, 1] }}>
      {children}
    </motion.div>
  );
}

export function PageHero({ title, text, children }: { title: string; text: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div className="hero-arc" aria-hidden="true" />
      <div className="container page-hero-inner">
        <Reveal><h1>{title}</h1><p>{text}</p>{children}</Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({ title, text, align = "left" }: { title: string; text?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "center" : ""}`}><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }
  return <button className="copy-button" onClick={copy}>{copied ? <Check size={15}/> : <Copy size={15}/>} {copied ? "Copied" : label}</button>;
}

export function DownloadButton({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <a className={`button ${secondary ? "button-secondary" : "button-primary"}`} href={href} download><Download size={17}/>{children}</a>;
}

export function TextLink({ to, children }: { to: string; children: React.ReactNode }) {
  return <Link className="text-link" to={to}>{children}<ExternalLink size={14}/></Link>;
}

export function ProductWindow({ className = "" }: { className?: string }) {
  return (
    <div className={`product-window ${className}`}>
      <div className="window-bar"><span/><span/><span/><b>MinePanel Local</b></div>
      <div className="product-preview" role="img" aria-label="MinePanel Local server dashboard with privacy-safe example data">
        <aside className="preview-sidebar">
          <div className="preview-brand"><span>|||</span> MinePanel</div>
          <nav><b>Dashboard</b><span>Create Server</span><span>Settings</span></nav>
        </aside>
        <div className="preview-main">
          <header><div><b>Workspace</b><small>Local MinePanel data</small></div><span>Ready</span></header>
          <div className="preview-content">
            <div className="preview-title"><h3>Servers</h3><button>Create server</button></div>
            <div className="preview-metrics">
              <div><small>Instances</small><b>1 server</b></div>
              <div><small>Online</small><b>0</b></div>
              <div><small>Stopped</small><b>1</b></div>
              <div><small>Crashed</small><b>0</b></div>
            </div>
            <section className="preview-server-list">
              <div className="preview-list-head"><b>Server instances</b><small>1 configured server</small></div>
              <div className="preview-server">
                <span className="preview-server-icon">▤</span>
                <div><b>Paper SMP</b><small>Paper / 1.21.1 / :25565</small></div>
                <em>Stopped</em>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="window-status"><span className="pulse"/>Local workspace ready</div>
    </div>
  );
}
