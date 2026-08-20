import { ArrowLeft, Download, Moon, Sun } from "lucide-react";
import { useState } from "react";

export const Tags = ({ items }: { items: string[] }) => <div className="project-tags">{items.map((item) => <span key={item}>{item}</span>)}</div>;

export const DeepDive = ({ title, children }: { title: string; children: React.ReactNode }) => <details className="deep-dive"><summary><span>Deep dive</span>{title}<b>+</b></summary><div className="deep-dive-content">{children}</div></details>;

export const CaseStudyLayout = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState(false);
  return <div className={`site-shell${dark ? " dark" : ""}`}>
    <header className="topbar"><a className="monogram" href="/" aria-label="Back to homepage">IG<span>.</span></a><div className="header-actions"><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button><a className="download-button" href="/Isha Resume.pdf" target="_blank" rel="noreferrer"><Download size={16} /> Download PDF</a></div></header>
    <main className="case-study-page"><a className="back-link" href="/#case-studies"><ArrowLeft size={16} /> Selected work</a>{children}</main>
  </div>;
};
