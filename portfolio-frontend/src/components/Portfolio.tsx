import { ArrowRight, ArrowUpRight, Download, MapPin, Moon, Play, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = { email: "mailto:iamishagoyal@gmail.com", linkedin: "https://www.linkedin.com/in/isha-goyal-34b419b7", github: "https://github.com/Ishagoyal", resume: "/Isha Resume.pdf" };
type CaseStudy = "cookbridge" | "fashion";
type EngineeringStep = { role: string; period: string; focus: string; description: string; tags: string[] };

const engineeringJourney: EngineeringStep[] = [
  { role: "Production ownership", period: "Alpha Nodus", focus: "From interface to operating product", description: "Ownership expanded from frontend into APIs, integrations, infrastructure and AWS deployment for the Greeter/Kiosk healthcare product. It made the operational constraints behind a product decision impossible to ignore.", tags: ["APIs & integrations", "AWS deployment", "Product delivery"] },
  { role: "Architecture leverage", period: "Playment / TELUS", focus: "Shared foundations make teams faster", description: "Consolidated five frontend repositories into one monorepo and helped build shared product foundations, including the Pixel React component library. The work sharpened how I think about leverage, consistency and implementation cost.", tags: ["Monorepo", "Design systems", "Technical strategy"] },
  { role: "Complex technical products", period: "Engineering foundation", focus: "Making complicated systems usable", description: "Worked on data-heavy annotation interfaces as well as Web3/Starknet workflows, wallets, NFTs and transactions. Those experiences taught me to surface the right complexity to users while giving engineers unambiguous product intent.", tags: ["Complex workflows", "System design", "User clarity"] },
];

const SectionTitle = ({ number, children }: { number: string; children: React.ReactNode }) => <div className="section-title"><span>{number}</span><h2>{children}</h2></div>;
const Tags = ({ items }: { items: string[] }) => <div className="project-tags">{items.map((item) => <span key={item}>{item}</span>)}</div>;
const DeepDive = ({ title, children }: { title: string; children: React.ReactNode }) => <details className="deep-dive"><summary><span>Deep dive</span>{title}<b>+</b></summary><div className="deep-dive-content">{children}</div></details>;

const CaseStudyButton = ({ active, controls, onClick }: { active: boolean; controls: string; onClick: () => void }) => <button className="project-link case-study-button" type="button" aria-expanded={active} aria-controls={controls} onClick={onClick}>{active ? "Close case study" : "View case study"} <ArrowRight size={16} /></button>;

const CookBridgePanel = ({ panelRef }: { panelRef: React.RefObject<HTMLElement> }) => <section ref={panelRef} id="cookbridge-case-study" className="inline-case-study" aria-labelledby="cookbridge-case-heading">
  <div className="inline-case-study__intro"><span>Case study / 01</span><h4 id="cookbridge-case-heading">CookBridge</h4><p>Evidence, decisions and iteration from a household meal-decision prototype.</p></div>
  <div className="case-moments">
    <section className="case-moment"><p className="case-label">The problem</p><h5>Taking “Aaj khane mein kya banega?” out of the household’s head.</h5><div className="evidence-row"><div><strong>7/10</strong><span>households experienced the problem</span></div></div></section>
    <section className="case-moment"><p className="case-label">Why it is hard</p><h5>A meal decision needs more than a recipe.</h5><p className="principle">Diet <b>+</b> Preferences <b>+</b> Recent meals <b>+</b> Available ingredients <b>→</b> Meal decision</p></section>
    <section className="case-moment"><p className="case-label">Prototype</p><h5>Make the decision, then make it cook-ready.</h5><p className="case-copy">An interactive prototype made the intended household experience testable before more engineering effort.</p><a className="prototype-link prototype-link--inline" href="https://cookbridge-whats-for-tea.lovable.app" target="_blank" rel="noreferrer">Try prototype <ArrowUpRight size={16} /></a></section>
    <section className="case-moment case-moment--highlight"><p className="case-label">A failed assumption</p><h5>The inventory assumption broke.</h5><div className="assumption-flow"><p><span>Initial assumption</span>CookBridge can maintain accurate inventory.</p><b>→</b><p><span>Observed problem</span>Exact updates created another household chore.</p><b>→</b><p><span>Product decision</span>Inventory becomes a household belief.</p></div><p className="belief-flow">Available <b>→</b> Low <b>→</b> Probably Finished <b>→</b> Unknown</p></section>
    <section className="case-moment"><p className="case-label">Prototype testing</p><h5>45 sec is too long at the moment of decision.</h5><div className="latency-line"><strong>45 sec</strong><p>A cold-start response after inactivity turns a product meant to reduce interruption into a new wait.</p></div></section>
    <section className="case-moment"><p className="case-label">What changed / current direction</p><h5>Testing changed the product, not just the interface.</h5><div className="learning-lines"><p><span>WhatsApp-only flow</span><b>Setup was cumbersome</b><em>Web onboarding + WhatsApp usage</em></p><p><span>Exact inventory</span><b>Too much maintenance effort</b><em>Belief-based inventory</em></p><p><span>Selection treated as final</span><b>Selecting isn’t cooking</b><em>Selected / Rejected / Confirmed</em></p><p><span>One recommendation path</span><b>People start with different knowledge</b><em>Suggest Meals / I Have Ingredients</em></p></div><p className="case-copy"><strong>Only Confirmed</strong> updates meal history and inventory.</p></section>
    <div className="case-deep-dives"><DeepDive title="Research"><p>10 household conversations informed the work. The current self-test measures meal-decision time and whether someone still needs to check the fridge manually.</p></DeepDive><DeepDive title="Scope & trade-offs"><p>A working prototype makes the intended experience tangible; it does not prove repeated use. The next question is whether household context and meal history earn a return visit over time.</p></DeepDive><DeepDive title="What I would validate next"><p>Success metrics, instrumentation, technical risks and implementation detail belong here—not in the recruiter-facing path.</p></DeepDive></div>
  </div>
</section>;

const FashionPanel = ({ panelRef, onWatchDemo }: { panelRef: React.RefObject<HTMLElement>; onWatchDemo: (opener: HTMLElement) => void }) => <section ref={panelRef} id="fashion-case-study" className="inline-case-study" aria-labelledby="fashion-case-heading">
  <div className="inline-case-study__intro"><span>Case study / 02</span><h4 id="fashion-case-heading">AI Fashion Stylist</h4><p>Evidence and product choices behind a wardrobe-grounded AI prototype.</p></div>
  <div className="case-moments">
    <section className="case-moment"><p className="case-label">Product question</p><h5>Can AI style you without inventing clothes you don’t own?</h5><button type="button" className="watch-demo" onClick={(event) => onWatchDemo(event.currentTarget)}><Play size={14} fill="currentColor" /> Watch working demo</button></section>
    <section className="case-moment"><p className="case-label">How it works</p><h5>Structure the wardrobe before reasoning about outfits.</h5><p className="principle">Wardrobe photos <b>→</b> Vision extraction <b>→</b> Structured wardrobe <b>→</b> Outfit reasoning <b>→</b> WhatsApp recommendation</p></section>
    <section className="case-moment"><p className="case-label">AI constraint</p><h5>The hard part was grounding the AI.</h5><div className="grounding-compare"><p><span>Generic AI stylist</span>User asks for an outfit <b>→</b> attractive recommendation <b>→</b> may not own it</p><p><span>Wardrobe-grounded system</span>Known wardrobe <b>→</b> structured context <b>→</b> combinations from actual items</p></div></section>
    <section className="case-moment"><p className="case-label">Key decisions</p><h5>Three choices kept the prototype useful.</h5><div className="key-decisions"><p><strong>Ground the model first</strong> — extraction precedes generation.</p><p><strong>Structured context over raw images</strong> — a cleaner reasoning layer for known items.</p><p><strong>WhatsApp-first prototype</strong> — accessible without another app to install.</p></div></section>
    <div className="case-deep-dives"><DeepDive title="Research & next question"><p>I researched Acloset and Indyx, spoke with the Indyx founder, and studied how people organise wardrobes and decide what to wear. The next validation question is inference cost.</p></DeepDive></div>
  </div>
</section>;

const VideoModal = ({ onClose }: { onClose: () => void }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initialScroll = window.scrollY;
    const bodyStyle = document.body.style;
    const previous = { overflow: bodyStyle.overflow, position: bodyStyle.position, top: bodyStyle.top, width: bodyStyle.width };
    bodyStyle.overflow = "hidden"; bodyStyle.position = "fixed"; bodyStyle.top = `-${initialScroll}px`; bodyStyle.width = "100%";
    const focusable = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button, video, [href], [tabindex]:not([tabindex="-1"])') ?? []).filter((element) => !element.hasAttribute("disabled"));
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") { const items = focusable(); if (!items.length) return; const first = items[0]; const last = items[items.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } }
    };
    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => { window.removeEventListener("keydown", onKeyDown); bodyStyle.overflow = previous.overflow; bodyStyle.position = previous.position; bodyStyle.top = previous.top; bodyStyle.width = previous.width; window.scrollTo(0, initialScroll); };
  }, [onClose]);
  return <div className="video-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="video-modal__dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-label="AI Fashion Stylist working demo"><button className="video-modal__close" type="button" onClick={onClose} aria-label="Close working demo"><X size={18} /></button><video controls playsInline preload="metadata" poster="/images/ai_fashion_stylist_in_action.png"><source src="/videos/ai-fashion-stylist-demo.mp4" type="video/mp4" />Your browser does not support this video.</video></div></div>;
};

const EngineeringJourneyStep = ({ item, index }: { item: EngineeringStep; index: number }) => <article className={`engineering-step${index % 2 ? " engineering-step--right" : ""}`}><div className="engineering-content"><p className="engineering-period">{item.period}</p><h3>{item.role}</h3><p className="engineering-focus">{item.focus}</p><p className="engineering-description">{item.description}</p><div className="engineering-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><span className="engineering-marker" aria-hidden="true" /></article>;

const Portfolio = () => {
  const [dark, setDark] = useState(false);
  const [openCaseStudy, setOpenCaseStudy] = useState<CaseStudy | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);
  const cookbridgeRef = useRef<HTMLElement>(null!);
  const fashionRef = useRef<HTMLElement>(null!);
  const previousOpenRef = useRef<CaseStudy | null>(null);
  const demoOpenerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (openCaseStudy && openCaseStudy !== previousOpenRef.current) {
      const panel = openCaseStudy === "cookbridge" ? cookbridgeRef.current : fashionRef.current;
      requestAnimationFrame(() => panel?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }));
    }
    previousOpenRef.current = openCaseStudy;
  }, [openCaseStudy]);

  const toggleCaseStudy = (study: CaseStudy) => setOpenCaseStudy((current) => current === study ? null : study);
  const openDemo = (opener: HTMLElement) => { demoOpenerRef.current = opener; setDemoOpen(true); };
  const closeDemo = () => { setDemoOpen(false); requestAnimationFrame(() => demoOpenerRef.current?.focus()); };

  return <div className={`site-shell${dark ? " dark" : ""}`}>
    <header className="topbar"><a className="monogram" href="#top" aria-label="Back to top">IG<span>.</span></a><div className="header-actions"><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button><a className="download-button" href={links.resume} target="_blank" rel="noreferrer"><Download size={16} /> Download PDF</a></div></header>
    <main>
      <section className="hero" id="top"><div className="hero-kicker">Technical Product Manager · 0→1 AI Products · Engineering Foundation</div><h1>Isha<br />Goyal<span>.</span></h1><div className="hero-grid"><p className="hero-title">I work where user problems, product decisions and engineering reality meet.</p><div className="hero-links"><a href={links.email}>Email ↗</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
      <section className="profile section-wrap"><SectionTitle number="01">Profile</SectionTitle><div className="profile-copy"><p><strong>Technical Product Manager and AI product builder with an engineering foundation.</strong> I work from problem discovery to prototype, combining product judgment with the technical depth to make ideas executable.</p><p>The resume tells you what I shipped. <mark>The selected work below shows the evidence.</mark></p></div></section>
      <section className="journey-section section-wrap" id="case-studies"><SectionTitle number="02">Selected work</SectionTitle><div className="project-showcase">
        <article className="project-feature project-teaser"><div className="project-visual"><img src="/images/cookbridge-project.jpg" alt="Indian home-cooked meal planning with a phone assistant" /><span>01</span></div><div className="project-story"><p className="project-meta"><span>Selected work</span><span>01</span></p><h3>CookBridge</h3><p className="project-question">Taking “Aaj khane mein kya banega?” out of the household’s head.</p><p className="project-proof">7/10 households validated the problem · Built & testing the prototype</p><Tags items={["0→1 Product", "User Research", "AI", "Prototype"]} /><div className="project-actions"><CaseStudyButton active={openCaseStudy === "cookbridge"} controls="cookbridge-case-study" onClick={() => toggleCaseStudy("cookbridge")} /></div></div></article>
        {openCaseStudy === "cookbridge" && <CookBridgePanel panelRef={cookbridgeRef} />}
        <article className="project-feature project-teaser project-teaser--fashion"><button className="project-visual project-visual--playable" type="button" onClick={(event) => openDemo(event.currentTarget)} aria-label="Watch AI Fashion Stylist working demo"><img src="/images/ai-fashion-stylist-project.jpg" alt="Personal wardrobe with three digital outfit suggestions" /><span>02</span><span className="play-affordance"><Play size={20} fill="currentColor" /> Watch demo</span></button><div className="project-story"><p className="project-meta"><span>Selected work</span><span>02</span></p><h3>AI Fashion Stylist</h3><p className="project-question">An AI stylist grounded in clothes you actually own.</p><p className="project-proof">Wardrobe photos → structured context → outfit recommendations</p><Tags items={["AI Vision", "Structured Context", "WhatsApp", "Prototype"]} /><div className="project-actions"><CaseStudyButton active={openCaseStudy === "fashion"} controls="fashion-case-study" onClick={() => toggleCaseStudy("fashion")} /></div></div></article>
        {openCaseStudy === "fashion" && <FashionPanel panelRef={fashionRef} onWatchDemo={openDemo} />}
      </div></section>
      <section className="journey-section engineering section-wrap"><SectionTitle number="03">Engineering foundation</SectionTitle><div className="engineering-intro">Why my engineering background makes me a better technical product person.</div><div className="engineering-timeline">{engineeringJourney.map((item, index) => <EngineeringJourneyStep key={item.role} item={item} index={index} />)}</div></section>
      <section className="skills section-wrap" id="skills"><SectionTitle number="04">Skills</SectionTitle><div className="skill-grid"><div><h3>Product</h3><div className="skill-tags"><span>Product Discovery</span><span>User Research</span><span>MVP Scoping</span><span>Product Requirements</span><span>Success Metrics</span><span>0→1 Products</span></div></div><div><h3>AI & Engineering</h3><div className="skill-tags"><span>LLM Product Design</span><span>AI / Vision Workflows</span><span>APIs & Integrations</span><span>System Design</span><span>React / TypeScript</span><span>Node.js</span><span>AWS</span></div></div></div></section>
    </main>
    <footer><div><p>Have an interesting problem?</p><a href={links.email}>Let’s talk.<ArrowUpRight /></a></div><div className="footer-meta"><span><MapPin size={15} /> Bengaluru, India</span><span>© {new Date().getFullYear()} Isha Goyal</span></div></footer>
    {demoOpen && <VideoModal onClose={closeDemo} />}
  </div>;
};

export default Portfolio;
