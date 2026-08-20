import { ArrowRight, ArrowUpRight, Download, MapPin, Moon, Sun } from "lucide-react";
import { useState } from "react";

const links = {
  email: "mailto:iamishagoyal@gmail.com",
  linkedin: "https://www.linkedin.com/in/isha-goyal-34b419b7",
  github: "https://github.com/Ishagoyal",
  resume: "/Isha Resume.pdf",
};

type EngineeringStep = { role: string; period: string; focus: string; description: string; tags: string[] };

const engineeringJourney: EngineeringStep[] = [
  { role: "Production ownership", period: "Alpha Nodus", focus: "From interface to operating product", description: "Ownership expanded from frontend into APIs, integrations, infrastructure and AWS deployment for the Greeter/Kiosk healthcare product. It made the operational constraints behind a product decision impossible to ignore.", tags: ["APIs & integrations", "AWS deployment", "Product delivery"] },
  { role: "Architecture leverage", period: "Playment / TELUS", focus: "Shared foundations make teams faster", description: "Consolidated five frontend repositories into one monorepo and helped build shared product foundations, including the Pixel React component library. The work sharpened how I think about leverage, consistency and implementation cost.", tags: ["Monorepo", "Design systems", "Technical strategy"] },
  { role: "Complex technical products", period: "Engineering foundation", focus: "Making complicated systems usable", description: "Worked on data-heavy annotation interfaces as well as Web3/Starknet workflows, wallets, NFTs and transactions. Those experiences taught me to surface the right complexity to users while giving engineers unambiguous product intent.", tags: ["Complex workflows", "System design", "User clarity"] },
];

const SectionTitle = ({ number, children }: { number: string; children: React.ReactNode }) => <div className="section-title"><span>{number}</span><h2>{children}</h2></div>;
const Tags = ({ items }: { items: string[] }) => <div className="project-tags">{items.map((item) => <span key={item}>{item}</span>)}</div>;

const ProjectTeaser = ({ number, title, positioning, proof, tags, image, alt, href, externalHref }: { number: string; title: string; positioning: string; proof: string; tags: string[]; image: string; alt: string; href: string; externalHref?: string }) => (
  <article className="project-feature project-teaser">
    <a className="project-visual" href={href} aria-label={`View ${title} case study`}><img src={image} alt={alt} /><span>{number}</span></a>
    <div className="project-story">
      <p className="project-meta"><span>Selected work</span><span>{number}</span></p>
      <h3>{title}</h3>
      <p className="project-question">{positioning}</p>
      <p className="project-proof">{proof}</p>
      <Tags items={tags} />
      <div className="project-actions"><a className="project-link" href={href}>View case study <ArrowRight size={16} /></a>{externalHref && <a className="project-link project-link--secondary" href={externalHref} target="_blank" rel="noreferrer">Try prototype <ArrowUpRight size={15} /></a>}</div>
    </div>
  </article>
);

const EngineeringJourneyStep = ({ item, index }: { item: EngineeringStep; index: number }) => <article className={`engineering-step${index % 2 ? " engineering-step--right" : ""}`}><div className="engineering-content"><p className="engineering-period">{item.period}</p><h3>{item.role}</h3><p className="engineering-focus">{item.focus}</p><p className="engineering-description">{item.description}</p><div className="engineering-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="engineering-marker" aria-hidden="true" /></article>;

const Portfolio = () => {
  const [dark, setDark] = useState(false);
  return <div className={`site-shell${dark ? " dark" : ""}`}>
    <header className="topbar"><a className="monogram" href="#top" aria-label="Back to top">IG<span>.</span></a><div className="header-actions"><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button><a className="download-button" href={links.resume} target="_blank" rel="noreferrer"><Download size={16} /> Download PDF</a></div></header>
    <main>
      <section className="hero" id="top"><div className="hero-kicker">Technical Product Manager · 0→1 AI Products · Engineering Foundation</div><h1>Isha<br />Goyal<span>.</span></h1><div className="hero-grid"><p className="hero-title">I work where user problems, product decisions and engineering reality meet.</p><div className="hero-links"><a href={links.email}>Email ↗</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
      <section className="profile section-wrap"><SectionTitle number="01">Profile</SectionTitle><div className="profile-copy"><p><strong>Technical Product Manager and AI product builder with an engineering foundation.</strong> I work from problem discovery to prototype, combining product judgment with the technical depth to make ideas executable.</p><p>The resume tells you what I shipped. <mark>The selected work below shows the evidence.</mark></p></div></section>
      <section className="journey-section section-wrap" id="case-studies"><SectionTitle number="02">Selected work</SectionTitle><div className="project-showcase"><ProjectTeaser number="01" title="CookBridge" positioning="Taking “Aaj khane mein kya banega?” out of the household’s head." proof="7/10 households validated the problem · Built & testing the prototype" tags={["0→1 Product", "User Research", "AI", "Prototype"]} image="/images/cookbridge-project.jpg" alt="Indian home-cooked meal planning with a phone assistant" href="/work/cookbridge" externalHref="https://cookbridge-whats-for-tea.lovable.app" /><ProjectTeaser number="02" title="AI Fashion Stylist" positioning="An AI stylist grounded in clothes you actually own." proof="Wardrobe photos → structured context → outfit recommendations" tags={["AI Vision", "Structured Context", "WhatsApp", "Prototype"]} image="/images/ai-fashion-stylist-project.jpg" alt="Personal wardrobe with three digital outfit suggestions" href="/work/ai-fashion-stylist" /></div></section>
      <section className="journey-section engineering section-wrap"><SectionTitle number="03">Engineering foundation</SectionTitle><div className="engineering-intro">Why my engineering background makes me a better technical product person.</div><div className="engineering-timeline">{engineeringJourney.map((item, index) => <EngineeringJourneyStep key={item.role} item={item} index={index} />)}</div></section>
      <section className="skills section-wrap" id="skills"><SectionTitle number="04">Skills</SectionTitle><div className="skill-grid"><div><h3>Product</h3><div className="skill-tags"><span>Product Discovery</span><span>User Research</span><span>MVP Scoping</span><span>Product Requirements</span><span>Success Metrics</span><span>0→1 Products</span></div></div><div><h3>AI & Engineering</h3><div className="skill-tags"><span>LLM Product Design</span><span>AI / Vision Workflows</span><span>APIs & Integrations</span><span>System Design</span><span>React / TypeScript</span><span>Node.js</span><span>AWS</span></div></div></div></section>
    </main>
    <footer><div><p>Have an interesting problem?</p><a href={links.email}>Let’s talk.<ArrowUpRight /></a></div><div className="footer-meta"><span><MapPin size={15} /> Bengaluru, India</span><span>© {new Date().getFullYear()} Isha Goyal</span></div></footer>
  </div>;
};

export default Portfolio;
