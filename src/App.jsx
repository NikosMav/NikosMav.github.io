import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  List,
  MapPin,
  X,
} from "@phosphor-icons/react";
import { capabilities, experience, explorations, learning, projects, retrieval } from "./data/portfolio";

const navItems = [
  ["Work", "work"],
  ["AI R&D", "ai-rnd"],
  ["Experience", "experience"],
  ["Direction", "direction"],
  ["About", "about"],
];

function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => window.innerWidth > 760 && setMenuOpen(false);
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="site-header">
      <a className="monogram" href="#top" aria-label="Back to top">
        NM<span>.</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        {menuOpen ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
      </button>
      <nav id="site-navigation" className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-contact" href="mailto:mavrapidisnikolaos@gmail.com">
          Contact <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero page-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="kicker">Software engineer · Moving into applied AI</p>
        <h1 id="hero-title">
          Nikos
          <br />
          Mavrapidis<span>.</span>
        </h1>
        <p className="hero-statement">
          I build reliable systems and <em>AI products</em>—from embedded telecom and industrial software to
          <em> retrieval-first</em> engineering, with security as the edge.
        </p>
        <div className="hero-roles" aria-label="Current roles">
          <div>
            <strong>Founding Engineer</strong>
            <span>Lope · Oct 2025—Present</span>
          </div>
          <div>
            <strong>Test Automation Engineer</strong>
            <span>SoftCom International · Nov 2025—Present</span>
          </div>
        </div>
        <p className="hero-transition">
          <span>Since Jul 2026</span> deliberately transitioning into applied AI &amp; retrieval engineering—
          upskilling, certifying, and building it into hands-on projects.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            View selected work <ArrowDown aria-hidden="true" />
          </a>
          <a className="text-link" href="#experience">
            View experience <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="hero-meta">
          <span><MapPin aria-hidden="true" /> Athens, Greece</span>
          <ExternalLink href="https://github.com/NikosMav"><GithubLogo aria-hidden="true" /> GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/nikolaos-mavrapidis"><LinkedinLogo aria-hidden="true" /> LinkedIn</ExternalLink>
        </div>
      </div>
      <figure className="portrait-wrap">
        <span className="portrait-index">01 / 04</span>
        <picture>
          <source media="(max-width: 760px)" srcSet="/assets/images/profile-portrait.webp" />
          <img
            src="/assets/images/profile-hero.webp"
            alt="Nikos Mavrapidis"
            width="1200"
            height="900"
            fetchPriority="high"
          />
        </picture>
        <figcaption>Software &amp; product engineering.</figcaption>
      </figure>
    </section>
  );
}

function Project({ project }) {
  return (
    <article className="project-row">
      <div className={`project-visual project-${project.theme}`}>
        <img src={project.image} alt={project.imageAlt} width="1200" height="675" loading="lazy" />
        <span>{project.id}</span>
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-contribution"><strong>My work:</strong> {project.contribution}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies and focus`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <ExternalLink className="project-link" href={project.href}>
          {project.linkLabel} <ArrowUpRight aria-hidden="true" />
        </ExternalLink>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section className="section page-shell" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="section-number">01</p>
        <div>
          <p className="kicker">Selected work</p>
          <h2 id="work-title">Selected work, with outcomes.</h2>
        </div>
        <p>Four projects that show product ownership, systems depth, and the direction I am moving in.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => <Project key={project.id} project={project} />)}
      </div>
      <div className="more-work">
        <span>More open-source work</span>
        <div>
          <strong>GitHub Scraper</strong>
          <p>A small Python CLI for collecting structured public repository data.</p>
        </div>
        <ExternalLink href="https://github.com/NikosMav/github-scraper">
          View repository <ArrowUpRight aria-hidden="true" />
        </ExternalLink>
      </div>
    </section>
  );
}

function AiRnd() {
  return (
    <section className="section ai-rnd page-shell" id="ai-rnd" aria-labelledby="ai-rnd-title">
      <div className="section-heading">
        <p className="section-number">02</p>
        <div>
          <p className="kicker">Retrieval &amp; AI R&amp;D</p>
          <h2 id="ai-rnd-title">The retrieval work behind the move.</h2>
        </div>
        <p>Hands-on retrieval systems with reproducible evaluation—lexical, dense, hybrid, and reranking, measured rather than asserted.</p>
      </div>
      <div className="rnd-list">
        {retrieval.map((item) => (
          <article className="rnd-card" key={item.id}>
            <div className="rnd-card-head">
              <p className="eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
            </div>
            <p className="rnd-description">{item.description}</p>
            <p className="rnd-detail">{item.detail}</p>
            <dl className="rnd-metrics" aria-label={`${item.title} evaluation metrics`}>
              {item.metrics.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className="rnd-note">{item.note}</p>
            <ul className="tag-list" aria-label={`${item.title} methods`}>
              {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <ExternalLink className="project-link" href={item.href}>
              {item.linkLabel} <ArrowUpRight aria-hidden="true" />
            </ExternalLink>
          </article>
        ))}
      </div>
      <div className="rnd-more">
        <span>More applied ML &amp; optimization</span>
        <div className="rnd-more-list">
          {explorations.map((item) => (
            <ExternalLink className="rnd-more-item" href={item.href} key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.blurb}</p>
              <span className="rnd-more-link">View repository <ArrowUpRight aria-hidden="true" /></span>
            </ExternalLink>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section-ink" id="experience" aria-labelledby="experience-title">
      <div className="page-shell">
        <div className="section-heading section-heading-light">
          <p className="section-number">03</p>
          <div>
            <p className="kicker">Experience</p>
            <h2 id="experience-title">A stable progression across hard problems.</h2>
          </div>
          <p>Production delivery across embedded systems, product engineering, automation, and a concurrent AI startup.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.role}`}>
              <p>{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <span>{item.context}</span>
              </div>
              <ul>
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Direction() {
  return (
    <section className="section direction" id="direction" aria-labelledby="direction-title">
      <div className="page-shell direction-grid">
        <div className="direction-intro">
          <p className="section-number">04</p>
          <p className="kicker">Direction</p>
          <h2 id="direction-title">Toward secure-AI engineering.</h2>
          <p>
            My goal is a single identity: a secure-AI &amp; retrieval engineer. AI at the core—retrieval, evaluation,
            embeddings, and LLM/RAG systems—with security as the edge: provenance, access control, and safe integration.
            Lope and my retrieval R&amp;D are where that shift is already becoming practical work.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="learning-block">
          <div>
            <p className="kicker">Active learning</p>
            <h3>Focused, ongoing development</h3>
          </div>
          <dl>
            {learning.map(([title, status]) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{status}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about page-shell" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="section-number">05</p>
        <div>
          <p className="kicker">About</p>
          <h2 id="about-title">Ownership from investigation to handover.</h2>
        </div>
        <p>That means clear decisions, measurable outcomes, maintainable systems, and documentation that survives the handover.</p>
      </div>
      <div className="about-grid">
        <p>
          I am a software engineer based in Athens with an MSc in Computer Science. My path has moved from embedded
          telecom to Java product development, test automation, and now applied AI. Across each role, the common thread
          is ownership: understand the system, reduce uncertainty, ship the change, and leave it stronger.
        </p>
        <div className="principles">
          <div><span>01</span><strong>Own the outcome</strong><p>Features, failures, evidence, and handover—not just assigned tickets.</p></div>
          <div><span>02</span><strong>Make reliability visible</strong><p>Use tests, metrics, and reproducible evidence to build confidence.</p></div>
          <div><span>03</span><strong>Keep learning pointed</strong><p>Study what supports the next useful product or system.</p></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <div className="page-shell footer-grid">
        <div>
          <p className="kicker">Let’s talk</p>
          <h2>Building something that needs both product sense and engineering depth?</h2>
        </div>
        <a className="footer-email" href="mailto:mavrapidisnikolaos@gmail.com">
          <EnvelopeSimple aria-hidden="true" />
          mavrapidisnikolaos@gmail.com
          <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nikos Mavrapidis</span>
          <div>
            <ExternalLink href="https://github.com/NikosMav">GitHub</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/nikolaos-mavrapidis">LinkedIn</ExternalLink>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div id="top" />
      <Header />
      <main id="main-content">
        <Hero />
        <Work />
        <AiRnd />
        <Experience />
        <Direction />
        <About />
      </main>
      <Footer />
    </>
  );
}
