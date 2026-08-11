import {
  ArrowUpRight,
  Download,
  MapPin,
  Moon,
  Sun,
} from "lucide-react";
import { useState } from "react";

const links = {
  email: "mailto:iamishagoyal@gmail.com",
  linkedin: "https://www.linkedin.com/in/isha-goyal-34b419b7",
  github: "https://github.com/Ishagoyal",
  resume: "/Isha Resume.pdf",
};

type JourneyItem = {
  company: string;
  role: string;
  date: string;
  link?: string;
  eyebrow?: string;
  intro?: string;
  bullets: React.ReactNode[];
  value?: React.ReactNode;
  image?: string;
  tags?: string[];
};

const productJourney: JourneyItem[] = [
  {
    company: "CookBridge",
    role: "Product Builder",
    date: "Mar 2026 — Present",
    link: "https://cookbridge.onrender.com/",
    image: "/images/cookbridge-project.jpg",
    tags: ["Problem discovery", "Focused MVPs", "Understanding user behaviour"],
    eyebrow: "“Aaj khaane mein kya banaye?” / “What should we cook today?”",
    intro:
      "A small question that can show up twice a day, every day — and quietly becomes recurring mental load.",
    bullets: [
      <>Started with my own household, then spoke to others with cooks to understand <strong>who owns the decision, when it becomes frustrating, and how they solve it today.</strong></>,
      <><strong>Key learning:</strong> recipes were never the real problem. The harder part was remembering context, deciding, and getting that decision to the cook.</>,
      <>Narrowed CookBridge to one outcome: <strong>decide what to cook and get it to the cook in under 2 minutes.</strong></>,
      <>Iterated around meal history, preferences, ingredients, grocery gaps, and cook communication — removing anything that created more effort.</>,
      <>Chose <strong>WhatsApp + LLMs + household memory</strong> so the product fits an existing habit and improves with context instead of becoming another app to manage.</>,
    ],
    value: <>less decision fatigue, less back-and-forth, and a faster path from <strong>“what should we eat?” → “this is what we’re cooking.”</strong></>,
  },
  {
    company: "AI Fashion Stylist",
    role: "Product Builder",
    date: "Dec 2025 — Feb 2026",
    image: "/images/ai-fashion-stylist-project.jpg",
    tags: ["Research-led product insights", "Problem decomposition", "Value–cost trade-offs"],
    eyebrow: "“Full wardrobe, but nothing to wear?”",
    bullets: [
      <>Started from my own frustration, researched <strong>Acloset and Indyx</strong>, spoke with the Indyx founder, and studied how people organise wardrobes and choose outfits.</>,
      <>Broke the problem into two parts: <strong>understand what the user owns</strong>, then help decide what works for their occasion, mood, weather, and comfort.</>,
      <>Built a digital wardrobe from photos and designed the system to <strong>mix-and-match 3 relevant outfit options</strong> from the user’s own clothes.</>,
      <>Planned recommendations to improve from user choices over time rather than repeatedly asking the same preferences.</>,
      <>Stopped before expanding after learning that <strong>AI inference cost matters even during validation</strong> — changing how I now evaluate the cost of an input against the value of its output.</>,
    ],
  },
];

type EngineeringStep = {
  role: string;
  period: string;
  focus: string;
  description: string;
  tags: string[];
};

const engineeringJourney: EngineeringStep[] = [
  { role: "Intern", period: "Where it began", focus: "Learning by building", description: "My first experience turning designs and requirements into real web experiences. I learned how a production codebase works, how to ask better questions, and why the details matter to the person using the product.", tags: ["Web foundations", "Production code", "Curiosity"] },
  { role: "Junior Engineer", period: "Building confidence", focus: "Shipping with care", description: "Started owning features end to end—reading unfamiliar code, collaborating closely with others, and learning to balance speed with quality. This is where building for the user became a habit, not just a requirement.", tags: ["Frontend development", "Collaboration", "User empathy"] },
  { role: "Software Engineer", period: "Owning the whole feature", focus: "From problem to shipped product", description: "Expanded from interfaces into the systems behind them: APIs, data, workflows, and reliability. I learned to turn an ambiguous problem into a useful product flow, then ship it with the right level of technical rigour.", tags: ["End-to-end delivery", "System design", "Product thinking"] },
  { role: "Senior Software Engineer", period: "Product-minded leadership", focus: "Leading people and product outcomes", description: "Began understanding products in depth—not only how to build them, but what is worth building and why. I led a team, guided technical decisions, and partnered on product direction to make complex work clearer for both the team and the user.", tags: ["Team leadership", "Product strategy", "Technical direction"] },
];

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

const ProjectFeature = ({ item, index }: { item: JourneyItem; index: number }) => (
  <article className="project-feature">
    <div className="project-visual">
      <img src={item.image} alt={item.company === "CookBridge" ? "Indian home-cooked meal planning with a phone assistant" : "Personal wardrobe with three digital outfit suggestions"} />
      <span>{String(index + 1).padStart(2, "0")}</span>
    </div>
    <div className="project-story">
      <div className="project-meta">
        <span>{item.role}</span>
        <time>{item.date}</time>
      </div>
      <h3>{item.company}</h3>
      {item.eyebrow && <p className="project-question">{item.eyebrow}</p>}
      {item.intro && <p className="journey-intro">{item.intro}</p>}
      <ul>
        {item.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}
      </ul>
      {item.value && <p className="value"><span>Value</span>{item.value}</p>}
      <div className="project-actions">
        <div className="project-tags">
          {item.tags?.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        {item.link && <a className="project-link" href={item.link} target="_blank" rel="noreferrer">Visit product <ArrowUpRight size={16} /></a>}
      </div>
    </div>
  </article>
);

const SectionTitle = ({ number, children }: { number: string; children: React.ReactNode }) => (
  <div className="section-title">
    <span>{number}</span>
    <h2>{children}</h2>
  </div>
);

const Portfolio = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={`site-shell${dark ? " dark" : ""}`}>
      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Back to top">IG<span>.</span></a>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? "Use light theme" : "Use dark theme"}>
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="download-button" href={links.resume} target="_blank" rel="noreferrer"><Download size={16} /> Download PDF</a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-kicker">Product builder — 0→1 & AI products</div>
          <h1>Isha<br />Goyal<span>.</span></h1>
          <div className="hero-grid">
            <p className="hero-title">Product builder with 6+ years in engineering, turning ideas into user-first products people come back to.</p>
            <div className="hero-links">
              <a href={links.email}>Email ↗</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </section>

        <section className="profile section-wrap" id="profile">
          <SectionTitle number="01">Profile</SectionTitle>
          <div className="profile-copy">
            <p>I’m a product builder with <strong>6+ years of software engineering experience</strong>. I take products from <mark>problem discovery and product decisions to an MVP and a launched experience.</mark></p>
          </div>
        </section>

        <section className="journey-section section-wrap" id="journey">
          <SectionTitle number="02">Product journey</SectionTitle>
          <div className="project-showcase">
            {productJourney.map((item, index) => <ProjectFeature key={item.company} item={item} index={index} />)}
          </div>
        </section>

        <section className="journey-section engineering section-wrap">
          <SectionTitle number="03">Engineering journey</SectionTitle>
          <div className="engineering-timeline">
            {engineeringJourney.map((item, index) => <EngineeringJourneyStep key={item.role} item={item} index={index} />)}
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <SectionTitle number="04">Skills</SectionTitle>
          <div className="skill-grid">
            <div>
              <h3>Product</h3>
              <div className="skill-tags"><span>0→1 Products</span><span>Product Discovery</span><span>User Research</span><span>Problem Definition</span><span>MVP Scoping</span><span>User Flows</span><span>Experimentation</span><span>Product Strategy</span></div>
            </div>
            <div>
              <h3>AI & Engineering</h3>
              <div className="skill-tags"><span>React / TypeScript</span><span>JavaScript</span><span>Node.js</span><span>System Design</span><span>Design Systems</span><span>APIs & Integrations</span><span>LLM Product Design</span><span>AI Agents</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <p>Have an interesting problem?</p>
          <a href={links.email}>Let’s talk.<ArrowUpRight /></a>
        </div>
        <div className="footer-meta">
          <span><MapPin size={15} /> Bengaluru, India</span>
          <span>© {new Date().getFullYear()} Isha Goyal</span>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
