import { ArrowRight, Check, HardDrive, Laptop, LockKeyhole, MonitorUp, Server, TerminalSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { compatibility, faq, featureGroups, release } from "../data/content";
import { ProductWindow, Reveal, SectionHeading } from "../components/Primitives";
import { Workflow } from "../components/Workflow";
import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <>
      <SEO title="Minecraft Server Panel for Windows and Linux" description="Create and manage Minecraft Java servers with live console control, IDE-style files, backups, diagnostics, resource monitoring, and guided public access."
        jsonLd={{"@context":"https://schema.org","@type":"SoftwareApplication",name:"MinePanel Local",applicationCategory:"UtilitiesApplication",operatingSystem:"Windows 10, Windows 11, Debian Linux, Ubuntu Linux, Kali Linux"}} />
      <section className="home-hero">
        <div className="hero-grid-lines" aria-hidden="true"/>
        <div className="hero-orbit orbit-one" aria-hidden="true"/>
        <div className="hero-orbit orbit-two" aria-hidden="true"/>
        <div className="container hero-layout">
          <div className="hero-copy">
            <Reveal>
              <h1>Your Minecraft server panel, running on your PC.</h1>
              <p>Build, run, configure, back up, diagnose, and share Minecraft Java servers through one polished desktop workspace.</p>
              <div className="hero-actions">
                <Link className="button button-primary button-large" to="/download">Download MinePanel <ArrowRight size={18}/></Link>
                <Link className="button button-secondary button-large" to="/docs">Read the docs</Link>
              </div>
              <div className="hero-trust">
                <span><Check/>Windows 10/11</span><span><Check/>Debian Linux</span><span><Check/>Local-first data</span>
              </div>
            </Reveal>
          </div>
          <motion.div className="hero-product" initial={{ opacity: 0, rotateY: -8, y: 40 }} animate={{ opacity: 1, rotateY: -3, y: 0 }}
            transition={{ duration: 1, ease: [.22,1,.36,1] }}>
            <ProductWindow />
            <motion.div className="floating-card card-runtime" animate={{ y: [0,-8,0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <span className="live-dot"/><div><b>Runtime protected</b><small>Preflight checks passed</small></div>
            </motion.div>
            <motion.div className="floating-card card-storage" animate={{ y: [0,7,0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <HardDrive/><div><b>Your files stay local</b><small>Worlds, plugins, backups</small></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="trust-rail">
        <div className="container trust-rail-inner">
          <span>MinePanel Local 1.0.0</span>
          <span>Paper, Vanilla, custom jar</span>
          <span>One active server at a time</span>
          <span>No MinePanel account required</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><SectionHeading align="center" title="Professional control, without renting a panel." text="MinePanel turns a desktop computer into an organized server workspace while keeping ownership where it belongs: with you." /></Reveal>
          <div className="feature-preview-grid">
            {featureGroups.slice(0, 6).map((feature, index) => {
              const Icon = feature.icon;
              return <Reveal key={feature.title} className={`feature-preview feature-preview-${index + 1}`} delay={(index % 3) * .07}>
                <div className="feature-icon"><Icon/></div><h3>{feature.title}</h3><p>{feature.text}</p>
                {index === 0 && <div className="server-line"><Server/><span>Paper 1.21.1</span><b>Stopped</b></div>}
                {index === 1 && <div className="mini-terminal"><i>[Server thread/INFO]</i> Done (4.812s)!<br/><em>&gt; say Welcome home</em></div>}
                {index === 2 && <div className="file-tabs"><span>server.properties</span><span>paper-global.yml</span></div>}
              </Reveal>;
            })}
          </div>
          <div className="center-action"><Link className="button button-secondary" to="/features">Explore all features <ArrowRight size={16}/></Link></div>
        </div>
      </section>

      <section className="section section-tinted operational-section">
        <div className="container split-section">
          <Reveal className="split-copy">
            <span className="section-label">A real operational workspace</span>
            <h2>From server.jar to a public join address.</h2>
            <p>Start with an isolated instance, install a trusted server jar, operate it from a searchable console, edit files in Monaco, and protect the entire folder with named backups.</p>
            <ul className="check-list">
              <li><Check/>Serialized start, stop, restart, and force-kill controls</li>
              <li><Check/>Java compatibility, EULA, port, and memory preflight</li>
              <li><Check/>Optional bounded crash restart with exponential backoff</li>
            </ul>
            <Link className="text-link" to="/docs/create-server">Follow the creation guide <ArrowRight size={15}/></Link>
          </Reveal>
          <Reveal className="operation-visual" delay={.12}>
            <div className="operation-top"><span>Dev SMP</span><b>Running</b></div>
            <div className="metric-row"><Metric label="CPU" value="12.4%"/><Metric label="RAM" value="2.31 GB"/><Metric label="Port" value="25565"/></div>
            <div className="terminal-panel"><span>12:04:11</span> [Server thread/INFO]: Preparing spawn area<br/><span>12:04:15</span> [Server thread/INFO]: Done (4.812s)! For help, type "help"<br/><i>&gt; whitelist add Alex</i></div>
          </Reveal>
        </div>
      </section>
      <Workflow />

      <section className="section">
        <div className="container">
          <SectionHeading title="Compatible with the machine you already use." text="Official installers are available for Windows and x64 Debian-based Linux desktops." />
          <div className="compatibility-grid">
            {compatibility.map(({icon: Icon,name,detail,support}) => <Reveal className="compat-card" key={name}><Icon/><div><h3>{name}</h3><p>{detail}</p></div><span>{support}</span></Reveal>)}
          </div>
          <p className="compat-note">Java is installed separately. Fedora, Arch, ARM64, Flatpak, Snap, AppImage, Bedrock Edition, Forge, and Fabric are not first-class supported releases.</p>
        </div>
      </section>

      <section className="section security-band">
        <div className="container security-layout">
          <Reveal className="security-symbol"><LockKeyhole/><span className="security-ring"/></Reveal>
          <Reveal className="security-copy" delay={.1}>
            <span className="section-label">Local-first by architecture</span>
            <h2>Your worlds stay on your machine.</h2>
            <p>MinePanel separates its Electron renderer, validates the IPC bridge, confines file operations to each server root, uses atomic writes, and guards destructive process and restore actions.</p>
            <Link className="button button-secondary" to="/security">Explore security</Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading align="center" title="Running in three clear steps." text="The app guides the workflow while keeping setup decisions explicit." />
          <div className="steps-grid">
            <Step number="01" icon={Laptop} title="Install MinePanel" text="Choose the Windows setup wizard or the Debian package for your desktop."/>
            <Step number="02" icon={MonitorUp} title="Create a server" text="Select Paper, Vanilla, or a custom jar, then choose version, port, and RAM."/>
            <Step number="03" icon={TerminalSquare} title="Start and operate" text="Use the live console, files, metrics, backups, diagnostics, and public access tools."/>
          </div>
        </div>
      </section>

      <section className="section section-tinted faq-preview">
        <div className="container faq-layout">
          <SectionHeading title="Straight answers before you install." text="MinePanel improves how you manage a local server. It does not provide cloud compute or keep a server online when your computer is off." />
          <div>{faq.slice(0,4).map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-shape" aria-hidden="true"/>
        <div className="container final-cta-inner">
          <Reveal><h2>Build your next server from a better workspace.</h2><p>MinePanel Local 1.0.0 is available for Windows x64 and Debian-based Linux x64.</p>
          <div className="hero-actions"><Link className="button button-primary button-large" to="/download">Choose your platform <ArrowRight/></Link><Link className="button button-secondary button-large" to="/docs/install/windows">Installation guide</Link></div>
          <small>Windows {release.windows.size} · Linux {release.linux.size} · Released {release.releasedAt}</small></Reveal>
        </div>
      </section>
    </>
  );
}

function Metric({label,value}:{label:string;value:string}) { return <div><small>{label}</small><b>{value}</b><span><i style={{width: label === "CPU" ? "28%" : label === "RAM" ? "56%" : "76%"}}/></span></div>; }
function Step({number,icon:Icon,title,text}:{number:string;icon:typeof Laptop;title:string;text:string}) { return <Reveal className="step-card"><span>{number}</span><Icon/><h3>{title}</h3><p>{text}</p></Reveal>; }
