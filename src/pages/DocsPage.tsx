import { ArrowRight, BookOpen, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CopyButton, PageHero, Reveal } from "../components/Primitives";
import { docs } from "../data/content";
import { SEO } from "../components/SEO";

export function DocsPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => docs.filter(d => `${d.title} ${d.summary} ${d.category}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const groups = [...new Set(filtered.map(d=>d.category))];
  return <>
    <SEO title="Documentation" description="Installation, configuration, operation, backup, networking, and diagnostics guides for MinePanel Local." />
    <PageHero title="Documentation built around the real workflow." text="Install the app, create a server, operate it safely, and troubleshoot from platform-specific guides.">
      <label className="docs-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search guides, features, or errors..." /></label>
    </PageHero>
    <section className="section docs-section"><div className="container docs-home-layout">
      <aside className="docs-index"><strong>Browse documentation</strong>{[...new Set(docs.map(d=>d.category))].map(group=><a key={group} href={`#${group.toLowerCase().replaceAll(" ","-")}`}>{group}</a>)}</aside>
      <div className="docs-results">
        {groups.map(group=><div className="docs-group" id={group.toLowerCase().replaceAll(" ","-")} key={group}><h2>{group}</h2><div className="docs-card-grid">
          {filtered.filter(d=>d.category===group).map(({icon:Icon,...doc})=><Reveal key={doc.slug} className="doc-card"><Icon/><h3>{doc.title}</h3><p>{doc.summary}</p><Link to={`/docs/${doc.slug}`}>Read guide <ArrowRight/></Link></Reveal>)}
        </div></div>)}
        {!filtered.length && <div className="empty-search"><BookOpen/><h2>No matching guide</h2><p>Try Java, backups, console, files, or installation.</p></div>}
      </div>
    </div></section>
  </>;
}

export function DocArticlePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/docs\//, "");
  const article = docs.find(d=>d.slug===slug);
  if (!article) return <div className="container article-not-found"><h1>Guide not found</h1><Link to="/docs">Return to documentation</Link></div>;
  const Icon = article.icon;
  return <section className="article-page"><div className="container article-layout">
    <aside className="article-sidebar"><Link to="/docs">Documentation</Link>{docs.map(d=><Link className={d.slug===slug?"active":""} key={d.slug} to={`/docs/${d.slug}`}>{d.title}</Link>)}</aside>
    <article className="article-content"><SEO title={article.title} description={article.summary} jsonLd={{"@context":"https://schema.org","@type":"HowTo",name:article.title,description:article.summary,step:article.steps.map(text=>({"@type":"HowToStep",text}))}}/><div className="article-icon"><Icon/></div><span>{article.category}</span><h1>{article.title}</h1><p className="article-summary">{article.summary}</p>
      {article.prerequisites && <section className="article-section"><h2>Prerequisites</h2><ul>{article.prerequisites.map(item=><li key={item}>{item}</li>)}</ul></section>}
      <section className="article-section"><h2>Steps</h2>
      <ol>{article.steps.map((step,index)=><li key={step}><b>{index+1}</b><p>{step}</p></li>)}</ol>
      </section>
      {article.command && <div className="code-block"><div><span>Terminal</span><CopyButton value={article.command}/></div><code>{article.command}</code></div>}
      {article.expected && <section className="article-callout success"><strong>Expected result</strong><p>{article.expected}</p></section>}
      {article.troubleshooting && <section className="article-section"><h2>Troubleshooting</h2><ul>{article.troubleshooting.map(item=><li key={item}>{item}</li>)}</ul></section>}
      <div className="article-callout"><strong>Before a risky change</strong><p>Create a named backup and stop the relevant server when the guide requires it.</p></div>
    </article>
  </div></section>;
}
