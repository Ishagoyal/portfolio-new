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

const workSteps = [
  ["Problem", "Understand the behaviour and friction before discussing features."],
  ["Evidence", "Talk to users, inspect existing behaviour and separate assumptions from signals."],
  ["Scope", "Choose the smallest test that can answer the important product question."],
  ["Prototype", "Make the experience tangible early instead of debating abstractions."],
  ["Measure", "Define success before interpreting usage."],
  ["Iterate", "Use failures to decide whether the problem, context, UX or system assumption is wrong."],
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
      <h3>CookBridge</h3>
      <p className="project-question">“Aaj khaane mein kya banaye?” / “What should we cook today?”</p>

      <div className="case-block">
        <p className="case-label">The problem</p>
        <p>Daily meal decisions in households with cooks require someone to combine what is available at home, recent meals, diet, preferences, health, taste and what the cook needs to hear. The core problem is <strong>context + decision + communication</strong>, not recipes.</p>
      </div>

      <div className="evidence-row" aria-label="CookBridge research evidence">
        <div><strong>10</strong><span>households researched</span></div>
        <div><strong>7/10</strong><span>experienced recurring meal-decision friction</span></div>
      </div>
      <p className="case-note">Research showed different household behaviours, so I narrowed the first version instead of trying to serve everyone.</p>

      <div className="case-block">
        <p className="case-label">The product decision</p>
        <p>V1 focuses on <strong>working professionals who are the primary meal-decider in a family household with a cook.</strong></p>
        <p className="case-muted">Deliberately out of scope: perfect real-time inventory, grocery ordering integrations, cook interaction, WhatsApp groups, detailed nutrition tracking and a full recipe product.</p>
      </div>

      <div className="case-block">
        <p className="case-label">From discovery to engineering</p>
        <div className="process-flow" aria-label="Product development process">
          {['Problem', 'Hypothesis', 'User flow', 'Scope', 'Functional requirements', 'Edge cases', 'Acceptance criteria', 'Measurement'].map((step) => <span key={step}>{step}</span>)}
        </div>
        <p>I defined expected behaviour across household context, recommendations, preference learning, session recovery, meal confirmation and inventory impact so engineering would not have to make hidden product decisions.</p>
      </div>

      <div className="tradeoff-block">
        <p className="case-label">The hard product / technical trade-off</p>
        <h4>Accuracy vs user effort</h4>
        <p>CookBridge is useful when it knows what is at home. But repeatedly checking the fridge or manually maintaining inventory defeats the purpose of reducing mental effort.</p>
        <p className="principle">Passive signals <b>→</b> Simple actions <b>→</b> Existing artifacts <b>→</b> Manual entry</p>
        <p>I treated recurring high-effort inventory maintenance as an <strong>adoption risk</strong>, not only a data-quality problem. Inventory can use uncertainty states — <strong>Available / Low / Probably Finished / Unknown</strong> — rather than requiring perfect quantities.</p>
      </div>

      <div className="prototype-cta">
        <span>Prototype</span>
        <a className="project-link" href="https://cookbridge-whats-for-tea.lovable.app" target="_blank" rel="noreferrer">Try Interactive Prototype <ArrowUpRight size={16} /></a>
        <p>I used prototyping to make the intended experience tangible before committing more engineering effort.</p>
      </div>

      <div className="case-block metrics-block">
        <p className="case-label">What would prove this works?</p>
        <p className="case-note">These are the measurements I defined for the test, not achieved results.</p>
        <div className="metric-grid">
          <div><h4>Meal-decision time</h4><p>Time from decision-session start to final meal confirmation.</p></div>
          <div><h4>Manual fridge checking</h4><p>Whether the user still needs to physically check the fridge during the decision.</p></div>
        </div>
        <p className="case-muted">Supporting diagnostics: completion rate, recommendation acceptance rate, recommendation rounds before confirmation, repeat usage and acceptance change over repeated usage.</p>
      </div>

      <div className="next-question"><p className="case-label">What I am testing next</p><p>Can CookBridge maintain enough household and ingredient context to make useful recommendations without creating high recurring effort for the user?</p></div>
      <Tags items={["7/10 problem validation", "0→1", "Product requirements", "AI / LLM", "Interactive prototype", "Success metrics", "Adoption trade-offs"]} />
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
        <p className="case-label">Problem / discovery</p>
        <p>I started from my own frustration, researched Acloset and Indyx, spoke with the Indyx founder and studied how people organise wardrobes and decide what to wear.</p>
      </div>
      <div className="case-block">
        <p className="case-label">Product decomposition</p>
        <p><strong>1. Understand what the user owns</strong><br />then<br /><strong>2. Decide what works for the user’s context</strong></p>
        <p className="principle">Wardrobe photos <b>→</b> item extraction <b>→</b> context / vibe <b>→</b> outfit recommendation <b>→</b> feedback</p>
      </div>

      <div className="proof-flow" aria-label="AI Fashion Stylist prototype proof points"><div><strong>5</strong><span>wardrobe photos</span></div><b>↓</b><div><strong>18</strong><span>clothing / accessory items detected</span></div><b>↓</b><div><strong>3</strong><span>outfit recommendations using only owned items</span></div></div>

      <div className="video-wrap">
        <video controls playsInline preload="metadata" poster="/images/ai-fashion-stylist-project.jpg" aria-label="AI Fashion Stylist prototype demo">
          <source src="/videos/ai-fashion-stylist-demo.mp4" type="video/mp4" />
          Your browser does not support the embedded AI Fashion Stylist demo video.
        </video>
      </div>

      <div className="next-question fashion-learning"><p className="case-label">What changed my thinking</p><p>AI inference cost became part of the validation problem. Instead of continuing to add features, I stopped expansion and treated <strong>value vs inference cost</strong> as part of the product question.</p></div>
      <Tags items={["Working AI prototype", "5 photos → 18 items", "LLM / vision workflow", "Product decomposition", "Cost trade-off"]} />
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
            <p className="hero-title">I turn ambiguous user problems into validated, scoped and testable products — combining product judgment with 6+ years of engineering depth.</p>
            <div className="hero-links"><a href={links.email}>Email ↗</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
          </div>
        </section>

        <section className="profile section-wrap" id="profile">
          <SectionTitle number="01">Profile</SectionTitle>
          <div className="profile-copy"><p>I spent <strong>6+ years learning how products are actually engineered.</strong> Today I use that depth earlier in the lifecycle — understanding the problem, talking to users, defining what should be built, making technical/product trade-offs, prototyping ideas and giving engineering enough clarity to execute.</p><p>The resume tells you what I shipped. <mark>The case studies below show how I think.</mark></p></div>
        </section>

        <section className="journey-section section-wrap" id="case-studies"><SectionTitle number="02">Case studies</SectionTitle><div className="project-showcase"><CookBridgeCaseStudy /><FashionStylistCaseStudy /></div></section>

        <section className="how-i-work section-wrap"><SectionTitle number="03">How I work</SectionTitle><div className="work-flow">{workSteps.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

        <section className="journey-section engineering section-wrap"><SectionTitle number="04">Engineering foundation</SectionTitle><div className="engineering-intro">Why my engineering background makes me a better technical product person.</div><div className="engineering-timeline">{engineeringJourney.map((item, index) => <EngineeringJourneyStep key={item.role} item={item} index={index} />)}</div></section>

        <section className="skills section-wrap" id="skills"><SectionTitle number="05">Skills</SectionTitle><div className="skill-grid"><div><h3>Product</h3><div className="skill-tags"><span>Technical Product Management</span><span>Product Discovery</span><span>User Research</span><span>Problem Definition</span><span>Product Requirements / PRDs</span><span>MVP Scoping</span><span>Acceptance Criteria</span><span>Success Metrics</span><span>Experimentation</span><span>0→1 Products</span></div></div><div><h3>AI & Engineering</h3><div className="skill-tags"><span>LLM Product Design</span><span>AI Agents</span><span>Prompt Design</span><span>Context & Memory</span><span>APIs & Integrations</span><span>System Design</span><span>React / TypeScript</span><span>Node.js</span><span>MongoDB</span><span>AWS</span></div></div></div></section>
      </main>

      <footer><div><p>Have an interesting problem?</p><a href={links.email}>Let’s talk.<ArrowUpRight /></a></div><div className="footer-meta"><span><MapPin size={15} /> Bengaluru, India</span><span>© {new Date().getFullYear()} Isha Goyal</span></div></footer>
    </div>
  );
};

export default Portfolio;
