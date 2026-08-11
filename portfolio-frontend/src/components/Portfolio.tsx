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
    tags: ["Decision in under 2 minutes", "Household memory", "WhatsApp + LLMs"],
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
    tags: ["Digital wardrobe", "3 relevant outfits", "Learns from choices"],
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

const engineeringJourney: JourneyItem[] = [
  {
    company: "Alpha Nodus",
    role: "Senior Software Developer",
    date: "Jun 2025 — Aug 2025",
    bullets: [
      <>Shipped <strong>Greeter/Kiosk</strong>, a healthcare check-in product, across frontend, integrations, infrastructure, and deployment.</>,
      <>Expanded beyond frontend implementation into broader ownership of <strong>getting the product into production.</strong></>,
    ],
  },
  {
    company: "JediSwap & Hackathons",
    role: "Frontend Engineer",
    date: "Jul 2023 — Oct 2024",
    bullets: [
      <>Moved into <strong>Web3 and blockchain</strong> to deliberately explore a new technology space.</>,
      <>Built Starknet experiences at JediSwap, including <strong>JediSwap Missions</strong>, simplifying wallets, NFTs, and transactions into usable product flows.</>,
      <>Extended the learning through <strong>ETHIndia and Starknet Hacker House</strong>, building GlassChain and TailTales from idea → working product under tight timelines.</>,
    ],
  },
  {
    company: "Playment / TELUS International AI Data Solutions",
    role: "Senior Frontend Developer",
    date: "Dec 2019 — Feb 2023",
    link: "https://jarvis.playment.io/",
    intro: "Grew from frontend engineer to senior ownership across products, architecture, and product decisions.",
    bullets: [
      <>Took ownership of <strong>GT Studio</strong>, a core platform for annotation projects, workflows, organisations, and annotator performance.</>,
      <>Moved beyond implementation into <strong>product discussions and workflow decisions.</strong></>,
      <>Consolidated <strong>5 frontend repositories into a monorepo</strong>, reducing duplicated development and improving shared code reuse.</>,
      <>Built <strong>Pixel</strong>, a reusable React component library, and worked on complex annotation interfaces using KonvaJS and Three.js.</>,
    ],
  },
];

const JourneyCard = ({ item, index }: { item: JourneyItem; index: number }) => (
  <article className="journey-card">
    <div className="timeline-marker" aria-hidden="true">
      {String(index + 1).padStart(2, "0")}
    </div>
    <div className="journey-heading">
      <div>
        <h3>
          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.company}<ArrowUpRight size={17} />
            </a>
          ) : item.company}
        </h3>
        <p className="role">{item.role}</p>
      </div>
      <time>{item.date}</time>
    </div>
    {item.eyebrow && <p className="project-question">{item.eyebrow}</p>}
    {item.intro && <p className="journey-intro">{item.intro}</p>}
    <ul>
      {item.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}
    </ul>
    {item.value && <p className="value"><span>Value</span>{item.value}</p>}
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
            <p className="hero-title">Product Builder — 6+ years in engineering — building AI & 0→1 products people actually keep open.</p>
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
            <p>Product builder with <strong>6+ years of software engineering experience</strong>, focused on taking products from <mark>problem discovery → product decisions → MVP → shipped experience.</mark></p>
            <p>I approach product decisions from both sides — <strong>what the user actually needs and what technology can make possible</strong> — then simplify the problem and build the right solution.</p>
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
          <div className="timeline">
            {engineeringJourney.map((item, index) => <JourneyCard key={item.company} item={item} index={index} />)}
          </div>
          <div className="earlier-experience">
            <span>Earlier experience</span>
            <div>
              <a href="https://portal.clearglass.com/auth/login" target="_blank" rel="noreferrer"><strong>ClearGlass Analytics</strong><ArrowUpRight size={15} /></a>
              <p>Frontend Developer · Investment analytics dashboards and data-heavy interfaces.</p>
            </div>
            <div>
              <strong>Unifize Solutions</strong>
              <p>Frontend Developer Intern · Started my engineering career building web product experiences.</p>
            </div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <SectionTitle number="04">Skills</SectionTitle>
          <div className="skill-grid">
            <div>
              <h3>Product</h3>
              <p>Product Discovery · User Research · Problem Definition · MVP Scoping · User Flows · Experimentation · 0→1 Product Development</p>
            </div>
            <div>
              <h3>AI & Engineering</h3>
              <p>LLM Product Design · Prompt Design · AI Agents · Context & Memory · JavaScript · TypeScript · React · Next.js · Redux · Node.js · GraphQL · MongoDB · AWS</p>
            </div>
          </div>
        </section>

        <section className="education section-wrap">
          <SectionTitle number="05">Education</SectionTitle>
          <div className="education-card">
            <div className="education-icon">B.</div>
            <div><h3>B.Tech, Computer Science & Engineering</h3><p>Rajasthan Technical University</p><p>Poornima College of Engineering, Jaipur</p></div>
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
