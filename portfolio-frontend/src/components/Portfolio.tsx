import { ArrowUpRight, Download, MapPin, Moon, Sun } from "lucide-react";
import { useState } from "react";

const links = {
  email: "mailto:iamishagoyal@gmail.com",
  linkedin: "https://www.linkedin.com/in/isha-goyal-34b419b7",
  github: "https://github.com/Ishagoyal",
  resume: "/Isha Resume.pdf",
};

type EngineeringStep = {
  role: string;
  period: string;
  focus: string;
  description: string;
  tags: string[];
};

const engineeringJourney: EngineeringStep[] = [
  {
    role: "Production ownership",
    period: "Alpha Nodus",
    focus: "From interface to operating product",
    description:
      "Ownership expanded from frontend into APIs, integrations, infrastructure and AWS deployment for the Greeter/Kiosk healthcare product. It made the operational constraints behind a product decision impossible to ignore.",
    tags: ["APIs & integrations", "AWS deployment", "Product delivery"],
  },
  {
    role: "Architecture leverage",
    period: "Playment / TELUS",
    focus: "Shared foundations make teams faster",
    description:
      "Consolidated five frontend repositories into one monorepo and helped build shared product foundations, including the Pixel React component library. The work sharpened how I think about leverage, consistency and implementation cost.",
    tags: ["Monorepo", "Design systems", "Technical strategy"],
  },
  {
    role: "Complex technical products",
    period: "Engineering foundation",
    focus: "Making complicated systems usable",
    description:
      "Worked on data-heavy annotation interfaces as well as Web3/Starknet workflows, wallets, NFTs and transactions. Those experiences taught me to surface the right complexity to users while giving engineers unambiguous product intent.",
    tags: ["Complex workflows", "System design", "User clarity"],
  },
];

const thinkingPrinciples = [
  ["Behaviour beats intention", "What users actually do matters more than what I expected them to do."],
  ["User effort is a product constraint", "If people must repeatedly maintain the solution, I may have created another problem."],
  ["A working prototype is not validation", "A prototype can show an experience works. Repeated behaviour shows whether it deserves to exist."],
  ["Engineering constraints belong in product decisions", "Cost, latency, reliability, data quality and implementation complexity can change the right product decision."],
];

const SectionTitle = ({ number, children }: { number: string; children: React.ReactNode }) => (
  <div className="section-title">
    <span>{number}</span>
    <h2>{children}</h2>
  </div>
);

const Tags = ({ items }: { items: string[] }) => (
  <div className="project-tags">
    {items.map((item) => <span key={item}>{item}</span>)}
  </div>
);

const EngineeringJourneyStep = ({ item, index }: { item: EngineeringStep; index: number }) => (
  <article className={`engineering-step${index % 2 ? " engineering-step--right" : ""}`}>
    <div className="engineering-content">
      <p className="engineering-period">{item.period}</p>
      <h3>{item.role}</h3>
      <p className="engineering-focus">{item.focus}</p>
      <p className="engineering-description">{item.description}</p>
      <div className="engineering-tags">
        {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </div>
    <span className="engineering-marker" aria-hidden="true" />
  </article>
);

const CookBridgeCaseStudy = () => (
  <article className="project-feature case-study" id="cookbridge">
    <div className="project-visual">
      <img src="/images/cookbridge-project.jpg" alt="Indian home-cooked meal planning with a phone assistant" />
      <span>01</span>
    </div>
    <div className="project-story">
      <div className="project-meta"><span>Technical Product Manager / Product Builder</span><time>0→1 case study</time></div>
      <div className="cookbridge-heading">
        <h3>CookBridge</h3>
        <p className="project-question">“Aaj khaane mein kya banaye?” / “What should we cook today?”</p>
        <a className="prototype-link" href="https://cookbridge-whats-for-tea.lovable.app" target="_blank" rel="noreferrer">Try Prototype <ArrowUpRight size={16} /></a>
      </div>
      <p className="prototype-note">Interactive prototype used to test the intended experience before committing more engineering effort.</p>

      <div className="evidence-row" aria-label="CookBridge research evidence">
        <div><strong>10</strong><span>households researched</span></div>
        <div><strong>7/10</strong><span>experienced recurring meal-decision friction</span></div>
      </div>
      <p className="case-note">The research changed what I thought CookBridge needed to solve.</p>

      <div className="decision-block">
        <p className="case-label">Decision 01</p>
        <h4>The problem was not recipes</h4>
        <p><span>Initial assumption</span>I thought the problem was helping people decide what meal to cook.</p>
        <p><span>What research changed</span>The recurring friction was combining recent meals, preferences, diet, available ingredients, health and taste considerations — then communicating the decision to the cook.</p>
        <p className="decision-result"><span>Product decision</span><strong>Context + decision + communication</strong>, not recipe discovery.</p>
      </div>

      <div className="decision-block decision-block--highlight">
        <p className="case-label">Decision 02</p>
        <h4>Perfect inventory could make the product worse</h4>
        <p><span>Initial assumption</span>Useful recommendations require accurate knowledge of what is in the fridge.</p>
        <p><span>What changed</span>Photos, manual inventory updates and repeated fridge checks create recurring work — directly conflicting with the promise of reducing mental load.</p>
        <p className="principle">Passive signals <b>→</b> Simple actions <b>→</b> Existing artifacts <b>→</b> Manual entry</p>
        <p className="decision-result"><span>Product decision</span>Inventory maintenance is an <strong>adoption problem</strong>, not only a data-quality problem. Work with <strong>Available / Low / Probably Finished / Unknown</strong> rather than demanding perfect quantities.</p>
      </div>

      <div className="decision-block">
        <p className="case-label">Decision 03</p>
        <h4>A working prototype is not validation</h4>
        <p>I built an interactive prototype to make the intended experience tangible. The question is no longer “Can this flow work?”</p>
        <p className="decision-result"><span>What I am testing now</span><strong>Would someone — including me — keep using it across repeated days, when meal history and household context matter?</strong></p>
      </div>

      <div className="case-block metrics-block">
        <p className="case-label">Test measurements</p>
        <p className="case-note">These are the measurements I defined for the test, not achieved results.</p>
        <div className="metric-grid">
          <div><h4>Meal-decision time</h4><p>Time from decision-session start to final meal confirmation.</p></div>
          <div><h4>Manual fridge checking</h4><p>Whether the user still needs to physically check the fridge during the decision.</p></div>
        </div>
      </div>

      <Tags items={["0→1 product", "Interactive prototype", "User-effort trade-off", "Success metrics"]} />
    </div>
  </article>
);

const FashionStylistCaseStudy = () => (
  <article className="project-feature case-study fashion-case" id="ai-fashion-stylist">
    <div className="project-visual">
      <img src="/images/ai-fashion-stylist-project.jpg" alt="Personal wardrobe with three digital outfit suggestions" />
      <span>02</span>
    </div>
    <div className="project-story">
      <div className="project-meta"><span>Product Builder</span><time>Working prototype</time></div>
      <h3>AI Fashion Stylist</h3>
      <p className="project-question">“Full wardrobe, but nothing to wear?”</p>

      <div className="case-block">
        <p className="case-label">The question</p>
        <p><strong>Could AI understand someone’s existing wardrobe well enough to suggest useful outfits without asking them to manually catalogue everything?</strong></p>
        <p className="case-muted">I started from my own frustration, researched Acloset and Indyx, spoke with the Indyx founder and studied how people organise wardrobes and decide what to wear.</p>
      </div>
      <div className="case-block">
        <p className="case-label">The smallest working flow</p>
        <p className="principle">Wardrobe photos <b>→</b> item extraction <b>→</b> context / vibe <b>→</b> outfit recommendation <b>→</b> feedback</p>
      </div>

      <div className="proof-flow" aria-label="AI Fashion Stylist prototype proof points"><div><strong>5</strong><span>wardrobe photos</span></div><b>↓</b><div><strong>18</strong><span>clothing / accessory items detected</span></div><b>↓</b><div><strong>3</strong><span>outfit recommendations using only owned items</span></div></div>

      <div className="video-wrap">
        <video controls playsInline preload="metadata" poster="/images/ai_fashion_stylist_in_action.png" aria-label="AI Fashion Stylist prototype demo">
          <source src="/videos/ai-fashion-stylist-demo.mp4" type="video/mp4" />
          Your browser does not support the embedded AI Fashion Stylist demo video.
        </video>
      </div>

      <div className="next-question fashion-learning"><p className="case-label">What changed my thinking</p><p>The prototype showed the technical flow could work, but inference cost became part of the validation question. I stopped adding features and started asking whether the value justified the cost of delivering the experience.</p></div>
      <Tags items={["Working prototype", "Vision workflow", "Value vs cost"]} />
    </div>
  </article>
);

const Portfolio = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={`site-shell${dark ? " dark" : ""}`}>
      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Back to top">IG<span>.</span></a>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="download-button" href={links.resume} target="_blank" rel="noreferrer"><Download size={16} /> Download PDF</a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-kicker">Technical Product Manager · 0→1 AI Products · Engineering Foundation</div>
          <h1>Isha<br />Goyal<span>.</span></h1>
          <div className="hero-grid">
            <p className="hero-title">I work where user problems, product decisions and engineering reality meet.</p>
            <div className="hero-links"><a href={links.email}>Email ↗</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
          </div>
        </section>

        <section className="profile section-wrap" id="profile">
          <SectionTitle number="01">Profile</SectionTitle>
          <div className="profile-copy"><p>I spent <strong>6+ years learning how software gets engineered and shipped.</strong> While building my own products, I became more interested in deciding what should be built and why. My engineering background helps me reason about feasibility, system constraints and implementation cost earlier in the product lifecycle.</p><p>The resume tells you what I shipped. <mark>The case studies below show how I think.</mark></p></div>
        </section>

        <section className="journey-section section-wrap" id="case-studies"><SectionTitle number="02">Case studies</SectionTitle><div className="project-showcase"><CookBridgeCaseStudy /><FashionStylistCaseStudy /></div></section>

        <section className="how-i-work section-wrap"><SectionTitle number="03">How I think</SectionTitle><div className="work-flow">{thinkingPrinciples.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

        <section className="journey-section engineering section-wrap"><SectionTitle number="04">Engineering foundation</SectionTitle><div className="engineering-intro">Why my engineering background makes me a better technical product person.</div><div className="engineering-timeline">{engineeringJourney.map((item, index) => <EngineeringJourneyStep key={item.role} item={item} index={index} />)}</div></section>

        <section className="skills section-wrap" id="skills"><SectionTitle number="05">Skills</SectionTitle><div className="skill-grid"><div><h3>Product</h3><div className="skill-tags"><span>Product Discovery</span><span>User Research</span><span>MVP Scoping</span><span>Product Requirements</span><span>Success Metrics</span><span>0→1 Products</span></div></div><div><h3>AI & Engineering</h3><div className="skill-tags"><span>LLM Product Design</span><span>AI / Vision Workflows</span><span>APIs & Integrations</span><span>System Design</span><span>React / TypeScript</span><span>Node.js</span><span>AWS</span></div></div></div></section>
      </main>

      <footer><div><p>Have an interesting problem?</p><a href={links.email}>Let’s talk.<ArrowUpRight /></a></div><div className="footer-meta"><span><MapPin size={15} /> Bengaluru, India</span><span>© {new Date().getFullYear()} Isha Goyal</span></div></footer>
    </div>
  );
};

export default Portfolio;
