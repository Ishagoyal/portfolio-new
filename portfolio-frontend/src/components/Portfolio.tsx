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

const DeepDive = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <details className="deep-dive">
    <summary><span>Deep dive</span>{title}<b>+</b></summary>
    <div className="deep-dive-content">{children}</div>
  </details>
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
      <div className="project-meta"><span>Technical Product Manager / AI Product Builder</span><time>0→1 case study</time></div>
      <div className="cookbridge-heading">
        <h3>CookBridge</h3>
        <p className="project-question">Taking “Aaj khane mein kya banega?” out of the household’s head.</p>
        <a className="prototype-link" href="https://cookbridge-whats-for-tea.lovable.app" target="_blank" rel="noreferrer">Try Prototype <ArrowUpRight size={16} /></a>
      </div>
      <p className="prototype-note">Interactive prototype used to test the intended experience before committing more engineering effort.</p>
      <Tags items={["0→1 Product", "User Research", "AI", "Prototype"]} />

      <div className="evidence-row" aria-label="CookBridge research evidence">
        <div><strong>7/10</strong><span>households experienced the problem</span></div>
        <div><strong>2 modes</strong><span>Suggest Meals / I Have Ingredients</span></div>
        <div><strong>Now</strong><span>prototype → self-testing</span></div>
      </div>
      <p className="case-note">Research changed what I thought CookBridge needed to solve.</p>

      <div className="decision-block">
        <p className="case-label">Research insight</p>
        <h4>The decision depends on more than the meal</h4>
        <p>The recurring friction was combining household context, then communicating a cook-ready decision.</p>
        <div className="context-flow" aria-label="Household context CookBridge considers"><span>Diet</span><span>Preferences</span><span>Recent meals</span><span>Available ingredients</span></div>
        <p className="decision-result"><span>Product decision</span><strong>Context + decision + communication</strong>, not recipe discovery.</p>
      </div>

      <div className="decision-block decision-block--highlight">
        <p className="case-label">Product decision</p>
        <h4>The inventory assumption broke</h4>
        <div className="assumption-flow"><p><span>What I wanted</span>CookBridge always knows what is available.</p><b>→</b><p><span>Reality</span>Exact updates created another chore.</p><b>→</b><p><span>I changed</span>Inventory became a household belief.</p></div>
        <p className="belief-flow">Available <b>→</b> Low <b>→</b> Probably Finished <b>→</b> Unknown</p>
      </div>

      <div className="decision-block">
        <p className="case-label">Observed in prototype testing</p>
        <h4>Testing exposed a 45-second problem</h4>
        <div className="latency-line"><strong>45 sec</strong><p>A cold-start response after inactivity turns a product meant to reduce interruption into a new wait.</p></div>
      </div>

      <div className="decision-block">
        <p className="case-label">Iteration</p>
        <h4>What I built → what I learned → what changed</h4>
        <div className="learning-lines">
          <p><span>WhatsApp recommendation flow</span><b>Setup was cumbersome</b><em>Web onboarding + WhatsApp continuation</em></p>
          <p><span>Ingredient-aware recommendations</span><b>Exact inventory asked too much</b><em>Belief-based inventory</em></p>
          <p><span>Selection as a decision</span><b>Selecting isn’t cooking</b><em>Selected / Rejected / Confirmed states</em></p>
          <p><span>One recommendation path</span><b>Users start with different knowledge</b><em>Suggest Meals / I Have Ingredients</em></p>
        </div>
      </div>

      <div className="decision-block">
        <p className="case-label">Product judgment</p>
        <h4>Key product decisions</h4>
        <div className="key-decisions"><p><strong>Structured onboarding, lightweight usage</strong> — household setup needs form; meal decisions should stay conversational.</p><p><strong>Selected ≠ Confirmed</strong> — only confirmed meals update history and inventory.</p><p><strong>Two entry modes</strong> — recommendations work whether users know their ingredients or not.</p></div>
      </div>

      <DeepDive title="Problem, research & validation">
        <p>10 households were researched. The current self-test measures meal-decision time and whether someone still needs to check the fridge manually.</p>
      </DeepDive>
      <DeepDive title="Scope, trade-offs & next validation">
        <p>A working prototype proves the intended experience can be made tangible, not that it earns repeated use. The next question is whether household context and meal history make it worth returning to over time.</p>
      </DeepDive>
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
      <div className="project-meta"><span>AI Product Builder</span><time>Working prototype</time></div>
      <h3>AI Fashion Stylist</h3>
      <p className="project-question">Can AI style you without inventing clothes you don’t own?</p>
      <Tags items={["AI Vision", "Structured Context", "WhatsApp", "Prototype"]} />

      <div className="demo-intro"><p className="case-label">Working demo</p><p>Wardrobe photos become outfit recommendations using only known items.</p></div>
      <div className="video-wrap">
        <video controls playsInline preload="metadata" poster="/images/ai_fashion_stylist_in_action.png" aria-label="AI Fashion Stylist prototype demo">
          <source src="/videos/ai-fashion-stylist-demo.mp4" type="video/mp4" />
          Your browser does not support the embedded AI Fashion Stylist demo video.
        </video>
      </div>

      <div className="case-block">
        <h4 className="story-heading">Photos → extraction → structured wardrobe → reasoning → WhatsApp</h4>
        <p className="principle">Wardrobe photos <b>→</b> vision extraction <b>→</b> structured wardrobe <b>→</b> outfit reasoning <b>→</b> WhatsApp recommendation</p>
      </div>

      <div className="decision-block grounding-block">
        <p className="case-label">AI constraint</p>
        <h4>The hard part was grounding the AI</h4>
        <div className="grounding-compare"><p><span>Generic AI stylist</span>User asks for an outfit <b>→</b> attractive recommendations <b>→</b> may not own them</p><p><span>This system</span>Known wardrobe <b>→</b> structured context <b>→</b> combinations from actual items</p></div>
      </div>

      <div className="decision-block"><p className="case-label">Product / technical judgment</p><h4>Three key decisions</h4><div className="key-decisions"><p><strong>Ground the model first</strong> — extraction precedes generation so recommendations stay tied to owned clothes.</p><p><strong>WhatsApp-first interaction</strong> — accessible without another app to install.</p><p><strong>Structured context over raw images</strong> — extracted wardrobe data creates a cleaner reasoning layer.</p></div></div>
      <DeepDive title="Research, prototype proof & next question"><p>I researched Acloset and Indyx, spoke with the Indyx founder, and studied how people organise wardrobes and decide what to wear. The prototype showed the flow could work; inference cost became the next validation question.</p></DeepDive>
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
          <div className="profile-copy"><p><strong>Technical Product Manager and AI product builder with an engineering foundation.</strong> I work from problem discovery to prototype, combining product judgment with the technical depth to make ideas executable.</p><p>The resume tells you what I shipped. <mark>The selected work below shows how I think.</mark></p></div>
        </section>

        <section className="journey-section section-wrap" id="case-studies"><SectionTitle number="02">Selected work</SectionTitle><div className="project-showcase"><CookBridgeCaseStudy /><FashionStylistCaseStudy /></div></section>

        <section className="how-i-work section-wrap"><SectionTitle number="03">How I think</SectionTitle><div className="work-flow">{thinkingPrinciples.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

        <section className="journey-section engineering section-wrap"><SectionTitle number="04">Engineering foundation</SectionTitle><div className="engineering-intro">Why my engineering background makes me a better technical product person.</div><div className="engineering-timeline">{engineeringJourney.map((item, index) => <EngineeringJourneyStep key={item.role} item={item} index={index} />)}</div></section>

        <section className="skills section-wrap" id="skills"><SectionTitle number="05">Skills</SectionTitle><div className="skill-grid"><div><h3>Product</h3><div className="skill-tags"><span>Product Discovery</span><span>User Research</span><span>MVP Scoping</span><span>Product Requirements</span><span>Success Metrics</span><span>0→1 Products</span></div></div><div><h3>AI & Engineering</h3><div className="skill-tags"><span>LLM Product Design</span><span>AI / Vision Workflows</span><span>APIs & Integrations</span><span>System Design</span><span>React / TypeScript</span><span>Node.js</span><span>AWS</span></div></div></div></section>
      </main>

      <footer><div><p>Have an interesting problem?</p><a href={links.email}>Let’s talk.<ArrowUpRight /></a></div><div className="footer-meta"><span><MapPin size={15} /> Bengaluru, India</span><span>© {new Date().getFullYear()} Isha Goyal</span></div></footer>
    </div>
  );
};

export default Portfolio;
