import { AlertTriangle, Laptop, Package, ShieldCheck, TerminalSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { CopyButton, DownloadButton, PageHero, Reveal, SectionHeading } from "../components/Primitives";
import { release } from "../data/content";
import { SEO } from "../components/SEO";

export function DownloadPage({ platform }: { platform?: "windows" | "linux" }) {
  return <>
    <SEO title={platform === "windows" ? "Download for Windows" : platform === "linux" ? "Download for Linux" : "Download"} description="Download MinePanel Local for Windows 10/11 x64 or supported Debian-based Linux x64 desktops, with verified file sizes and SHA-256 checksums." />
    <PageHero title="Download MinePanel Local." text="Choose the installer built for your desktop. Server data remains separate from the application and stays on your machine." />
    <section className="section download-section"><div className="container">
      <div className="download-grid">
        {(!platform || platform === "windows") && <PlatformCard type="windows"/>}
        {(!platform || platform === "linux") && <PlatformCard type="linux"/>}
      </div>
      <div className="signature-notice"><AlertTriangle/><div><b>Code-signing status</b><p>These release artifacts are currently unsigned. Windows or Linux may show a publisher or package trust warning. Verify the SHA-256 checksum before installation.</p></div></div>
    </div></section>
    <section className="section section-tinted"><div className="container">
      <SectionHeading title="System requirements" text="MinePanel manages the computer you provide. Minecraft performance still depends on CPU, memory, storage, Java, plugins, worlds, and network quality."/>
      <div className="requirements-grid">
        <Requirement icon={Laptop} title="Desktop OS" text="Windows 10/11 x64, or an x64 Debian-based graphical Linux desktop."/>
        <Requirement icon={TerminalSquare} title="Java runtime" text="Install a compatible JRE separately. Java 21 is recommended for modern server versions."/>
        <Requirement icon={Package} title="Disk space" text="Allow about 500 MB for the app, plus separate space for servers, worlds, jars, and backups."/>
        <Requirement icon={ShieldCheck} title="Network access" text="Required for server jars, version metadata, public IP checks, and optional playit.gg setup."/>
      </div>
    </div></section>
    <section className="section"><div className="container install-links">
      <SectionHeading align="center" title="Install with a guided checklist." text="Platform-specific documentation keeps Windows and Linux instructions separate and unambiguous."/>
      <div><Link className="button button-secondary" to="/docs/install/windows">Windows installation</Link><Link className="button button-secondary" to="/docs/install/linux">Linux installation</Link></div>
    </div></section>
  </>;
}

function PlatformCard({ type }: { type: "windows" | "linux" }) {
  const item = release[type];
  return <Reveal className="platform-card">
    <div className="platform-icon">{type === "windows" ? <WindowsLogo/> : <LinuxLogo/>}</div>
    <span className="release-chip">Version {release.version}</span>
    <h2>{type === "windows" ? "Windows" : "Linux (.deb)"}</h2>
    <p>{item.platform}</p>
    <DownloadButton href={item.href}>Download {type === "windows" ? ".exe" : ".deb"}</DownloadButton>
    <dl><div><dt>Filename</dt><dd>{item.filename}</dd></div><div><dt>File size</dt><dd>{item.size}</dd></div><div><dt>Released</dt><dd>{release.releasedAt}</dd></div><div><dt>Architecture</dt><dd>x86-64</dd></div></dl>
    <div className="checksum"><span>SHA-256</span><code>{item.sha256}</code><CopyButton value={item.sha256}/></div>
  </Reveal>;
}
function Requirement({icon:Icon,title,text}:{icon:typeof Laptop;title:string;text:string}) { return <Reveal className="requirement"><Icon/><h3>{title}</h3><p>{text}</p></Reveal>; }
function WindowsLogo(){return <svg viewBox="0 0 24 24"><path d="M3 5.2 10.7 4v7.4H3V5.2Zm8.7-1.35L21 2.5v8.9h-9.3V3.85ZM3 12.5h7.7V20L3 18.8v-6.3Zm8.7 0H21v9l-9.3-1.35V12.5Z"/></svg>}
function LinuxLogo(){return <svg viewBox="0 0 24 24"><path d="M12 2c-2.5 0-4 2.2-4 5.2 0 1.5-.5 2.3-1.4 3.7C5.5 12.5 5 14 5 16c0 3.3 2.7 6 7 6s7-2.7 7-6c0-2-.5-3.5-1.6-5.1-.9-1.4-1.4-2.2-1.4-3.7C16 4.2 14.5 2 12 2Zm-1.5 5.2c-.4 0-.8-.4-.8-.9s.4-.9.8-.9.8.4.8.9-.4.9-.8.9Zm3 0c-.4 0-.8-.4-.8-.9s.4-.9.8-.9.8.4.8.9-.4.9-.8.9Z"/></svg>}
