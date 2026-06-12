import { BookOpen, CheckCircle2, LifeBuoy, Search, ShieldAlert, TerminalSquare } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { docs } from "../data/content";
import { PageHero, Reveal, SectionHeading } from "../components/Primitives";
import { SEO } from "../components/SEO";

export function SupportPage() {
  const [query,setQuery] = useState("");
  const matches = query ? docs.filter(d=>`${d.title} ${d.summary}`.toLowerCase().includes(query.toLowerCase())).slice(0,5) : [];
  return <>
    <SEO title="Support" description="Search MinePanel Local documentation, collect diagnostics, and follow a privacy-conscious troubleshooting workflow." />
    <PageHero title="How can we help you today?" text="Search practical guides, collect the right diagnostics, and troubleshoot without exposing passwords or private server data.">
      <label className="docs-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search documentation, errors, or topics..." /></label>
      {matches.length>0 && <div className="search-popover">{matches.map(d=><Link key={d.slug} to={`/docs/${d.slug}`}>{d.title}<span>{d.category}</span></Link>)}</div>}
    </PageHero>
    <section className="section section-tinted"><div className="container support-grid">
      <Reveal className="support-main"><BookOpen/><h2>Official documentation</h2><p>Follow installation, server setup, operations, networking, backup, and diagnostic guides based on the shipped app.</p><div className="support-links">{docs.slice(0,6).map(d=><Link key={d.slug} to={`/docs/${d.slug}`}>{d.title}</Link>)}</div></Reveal>
      <Reveal className="support-side"><LifeBuoy/><h2>Prepare a support report</h2><p>Include the information that makes diagnosis useful while redacting sensitive details.</p><ul className="check-list"><li><CheckCircle2/>MinePanel and Windows/Linux version</li><li><CheckCircle2/>Minecraft, server type, and Java version</li><li><CheckCircle2/>Sanitized error and relevant console lines</li><li><CheckCircle2/>Diagnostics results and plugin-free test result</li></ul></Reveal>
      <Reveal className="support-main troubleshooting"><ShieldAlert/><h2>Recommended troubleshooting order</h2><ol><li>Restart MinePanel.</li><li>Stop Java and playit processes owned by the test server.</li><li>Run Diagnostics.</li><li>Confirm EULA, jar, Java, memory, and port.</li><li>Test without plugins.</li><li>Review the latest crash report.</li><li>Create a backup before repairs.</li></ol></Reveal>
      <Reveal className="support-side privacy-warning"><TerminalSquare/><h2>Never publish secrets</h2><p>Do not post account passwords, playit secret keys, complete environment variables, private IPs, full world files, or unredacted Windows usernames and paths.</p></Reveal>
    </div></section>
    <section className="section diagnostic-band"><div className="container split-section">
      <div><SectionHeading title="Use the built-in Diagnostics page." text="MinePanel checks Java, EULA, server jars, memory, ports, filesystem access, network state, and known crash patterns from inside the server workspace."/><Link className="button button-secondary" to="/docs/diagnostics">Diagnostics guide</Link></div>
      <div className="terminal-panel large"><i>MinePanel Diagnostics</i><br/>[PASS] Server jar is available<br/>[PASS] EULA accepted<br/>[PASS] Java 21 is compatible<br/>[WARN] Public address not verified<br/>[PASS] Port 25565 is available</div>
    </div></section>
  </>;
}
