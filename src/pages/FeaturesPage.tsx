import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { featureGroups } from "../data/content";
import { PageHero, ProductWindow, Reveal, SectionHeading } from "../components/Primitives";
import { SEO } from "../components/SEO";

export function FeaturesPage() {
  return <>
    <SEO title="Features" description="Explore MinePanel Local server fleet, console, file editor, versions, resources, plugins, backups, public access, diagnostics, and security." />
    <PageHero title="Everything required to run a local Minecraft server." text="MinePanel brings process control, files, versions, backups, networking, and diagnostics into one structured desktop application.">
      <Link className="button button-primary" to="/download">Download MinePanel <ArrowRight/></Link>
    </PageHero>
    <section className="section"><div className="container">
      <ProductWindow className="features-window"/>
      <div className="feature-catalog">
        {featureGroups.map(({icon:Icon,title,text}, index) => <Reveal className="catalog-item" key={title} delay={(index%3)*.04}><span className="catalog-number">{String(index+1).padStart(2,"0")}</span><div className="feature-icon"><Icon/></div><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}
      </div>
    </div></section>
    <section className="section section-tinted"><div className="container split-section limitations">
      <div><SectionHeading title="Clear operating boundaries." text="The website describes the product as it ships today, without turning roadmap ideas into promises." /></div>
      <ul className="check-list">
        <li><Check/>Create and configure multiple isolated servers</li>
        <li><Check/>Run one Minecraft server process at a time</li>
        <li><Check/>Keep the PC powered, connected, and awake while hosting</li>
        <li><Check/>Install Java separately and let MinePanel validate it</li>
        <li><Check/>Use official playit.gg software or manual port forwarding for internet access</li>
      </ul>
    </div></section>
  </>;
}
