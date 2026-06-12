import { faq, release } from "../data/content";
import { CopyButton, PageHero } from "../components/Primitives";
import { SEO } from "../components/SEO";

type TrustPageType = "security" | "privacy" | "faq" | "changelog" | "legal";

const pageCopy: Record<TrustPageType, { title: string; text: string }> = {
  security: { title: "Security with explicit boundaries.", text: "MinePanel combines local ownership with a sandboxed renderer, validated IPC, guarded processes, confined files, and recovery-oriented writes." },
  privacy: { title: "Local data stays local by default.", text: "Understand what MinePanel stores, which network services it contacts, and how to remove local application data." },
  faq: { title: "Frequently asked questions.", text: "Direct answers about hosting, Java, server support, local ownership, public access, backups, and current limitations." },
  changelog: { title: "MinePanel Local changelog.", text: "Versioned release notes keep shipped features, known limitations, and release artifacts tied to a specific date." },
  legal: { title: "Legal and third-party notices.", text: "MinePanel Local is an independent product that works with Minecraft Java servers and third-party tools." }
};

export function TrustPage({ type }: { type: TrustPageType }) {
  const copy = pageCopy[type];
  return (
    <>
      <SEO title={copy.title.replace(/\.$/,"")} description={copy.text}
        jsonLd={type === "faq" ? {"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))} : undefined} />
      <PageHero title={copy.title} text={copy.text} />
      <section className="section">
        <div className="container prose-page">
          {type === "security" && <SecurityContent />}
          {type === "privacy" && <PrivacyContent />}
          {type === "faq" && <FaqContent />}
          {type === "changelog" && <ChangelogContent />}
          {type === "legal" && <LegalContent />}
        </div>
      </section>
    </>
  );
}

function SecurityContent() {
  return <ContentSections sections={[
    ["Local-first architecture", "Server instances, worlds, plugins, configuration, logs, and backups are stored on the user's computer rather than uploaded by MinePanel."],
    ["Electron isolation", "The renderer remains sandboxed with context isolation. A narrow preload bridge exposes validated operations instead of unrestricted Node access."],
    ["Filesystem confinement", "File operations resolve inside the selected server root and reject path traversal plus symbolic-link or junction escapes."],
    ["Process safety", "Lifecycle operations are serialized. Start runs Java, EULA, jar, port, memory, and one-active-server preflight checks."],
    ["Data integrity", "Important writes use temporary files and atomic replacement. Corrupt configuration can be preserved and recovered from a known-good backup."],
    ["Restore protection", "Full restore requires a stopped server, uses staging, offers a safety backup, and rolls live files back when restore copying fails."],
    ["Release verification", `Version ${release.version} artifacts are currently unsigned. Verify published SHA-256 checksums before installation.`]
  ]}/>;
}

function PrivacyContent() {
  return <>
    <ContentSections sections={[
      ["Local storage", "Windows uses C:\\Users\\<User>\\MinePanel\\ and Linux uses ~/MinePanel for instances, jars, runtimes, backups, cache, logs, tools, and SQLite metadata."],
      ["Network requests", "MinePanel contacts Mojang and Paper sources for metadata and jars, public-IP and DNS services for diagnostics, and official playit.gg surfaces only when that workflow is selected."],
      ["Accounts and telemetry", "MinePanel does not require a MinePanel account, does not collect playit.gg passwords, and the desktop app does not upload telemetry by default."],
      ["Website analytics", "No website analytics or session replay is configured in this build."],
      ["Removal", "Uninstalling the app does not silently delete server data. Remove the MinePanel data folder manually only after verifying backups."]
    ]}/>
    <div className="code-block"><div><span>Windows data path</span><CopyButton value={"C:\\Users\\<User>\\MinePanel\\"}/></div><code>C:\Users\&lt;User&gt;\MinePanel\</code></div>
    <div className="code-block"><div><span>Linux data path</span><CopyButton value="~/MinePanel"/></div><code>~/MinePanel</code></div>
  </>;
}

function FaqContent() {
  return <div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>;
}

function ChangelogContent() {
  return <div className="release-entry"><span>{release.releasedAt}</span><h2>1.0.0</h2><h3>Highlights</h3><p>Initial public Windows and Debian Linux release of the local-first Minecraft Java server control panel.</p><h3>Included</h3><ul><li>Server fleet and isolated instances</li><li>Paper, Vanilla, and custom jar workflows</li><li>Console, Monaco files, plugins, properties, resources, backups, diagnostics, and public access</li></ul><h3>Known limitations</h3><p>One Minecraft server process can run at a time. Java is installed separately. Installers are currently unsigned.</p></div>;
}

function LegalContent() {
  return <ContentSections sections={[
    ["Independent project", "MinePanel Local is an independent project and is not affiliated with, endorsed by, or sponsored by Mojang Studios or Microsoft. Minecraft is a trademark of Microsoft."],
    ["Third-party projects", "PaperMC is a third-party project. playit.gg is a third-party service with its own account, terms, privacy policy, and availability."],
    ["Java", "Java runtimes are distributed and licensed by their respective vendors."],
    ["User responsibility", "Users are responsible for the Minecraft EULA and licenses applying to plugins, worlds, jars, and other imported content."]
  ]}/>;
}

function ContentSections({ sections }: { sections: string[][] }) {
  return <div className="content-sections">{sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}</div>;
}
