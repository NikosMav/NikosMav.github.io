import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  EnvelopeSimple,
  FileText,
  GithubLogo,
  LinkedinLogo,
  List,
  X,
} from "@phosphor-icons/react";
import {
  capabilities,
  certifications,
  community,
  education,
  experience,
  explorations,
  languages,
  profile,
  projects,
  retrieval,
} from "./data/portfolio";

const navItems = [
  ["Work", "work"],
  ["Research", "research"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Education", "education"],
];

function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}

// Tracks which section is currently in view so the navigation can mark it.
function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return undefined;

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));
        setActive(ids.find((id) => visible.get(id)) ?? "");
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navItems.map(([, id]) => id);

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const closeOnResize = () => window.innerWidth > 760 && setMenuOpen(false);
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButton.current?.focus();
    };

    document.body.classList.add("menu-open");
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="monogram" href="#top" aria-label="Back to top">
        NM<span>.</span>
      </a>
      <button
        ref={menuButton}
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
          <a
            key={id}
            href={`#${id}`}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a className="nav-contact" href={`mailto:${profile.email}`}>
          Contact <ArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

function SectionHeading({ number, id, title, light = false, children }) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`}>
      <p className="section-number">{number}</p>
      <h2 id={id}>{title}</h2>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero page-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="kicker">{profile.title}</p>
        <h1 id="hero-title">
          Nikos
          <br />
          Mavrapidis<span>.</span>
        </h1>
        <p className="hero-statement">
          I build reliable systems and <em>AI products</em>, from embedded networking to satellite data and
          retrieval.
        </p>
        <div className="hero-roles" aria-label="Recent roles">
          {experience.slice(0, 2).map((item) => (
            <div key={item.role}>
              <strong>{item.role.replace("Software Engineer · ", "")}</strong>
              <span>{item.context.split(" · ")[0]} · {item.period}</span>
            </div>
          ))}
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            View work <ArrowDown aria-hidden="true" />
          </a>
          <ExternalLink className="text-link" href={profile.cv}>
            Download CV <FileText aria-hidden="true" />
          </ExternalLink>
        </div>
        <div className="hero-meta">
          <span>{profile.location}</span>
          <ExternalLink href={profile.github}><GithubLogo aria-hidden="true" /> GitHub</ExternalLink>
          <ExternalLink href={profile.linkedin}><LinkedinLogo aria-hidden="true" /> LinkedIn</ExternalLink>
        </div>
      </div>
      <figure className="portrait-wrap">
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
      </figure>
    </section>
  );
}

function Tags({ items, label }) {
  return (
    <ul className="tag-list" aria-label={label}>
      {items.map((tag) => <li key={tag}>{tag}</li>)}
    </ul>
  );
}

function Work() {
  return (
    <section className="section page-shell" id="work" aria-labelledby="work-title">
      <SectionHeading number="01" id="work-title" title="Selected work" />
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.id}>
            <div className={`project-visual project-${project.theme}`}>
              <img src={project.image} alt={project.imageAlt} width="1200" height="675" loading="lazy" />
            </div>
            <div className="project-copy">
              <p className="eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <Tags items={project.tags} label={`${project.title} technologies`} />
              <ExternalLink className="project-link" href={project.href}>
                {project.linkLabel} <ArrowUpRight aria-hidden="true" />
              </ExternalLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="section research page-shell" id="research" aria-labelledby="research-title">
      <SectionHeading number="02" id="research-title" title="Retrieval research" />
      <div className="rnd-list">
        {retrieval.map((item) => (
          <article className="rnd-card" key={item.id}>
            <p className="eyebrow">{item.eyebrow}</p>
            <h3>{item.title}</h3>
            <p className="rnd-description">{item.description}</p>
            <dl className="rnd-metrics" aria-label={`${item.title} evaluation metrics`}>
              {item.metrics.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <Tags items={item.tags} label={`${item.title} methods`} />
            <ExternalLink className="project-link" href={item.href}>
              Repository <ArrowUpRight aria-hidden="true" />
            </ExternalLink>
          </article>
        ))}
      </div>
      <ul className="more-list" aria-label="More projects">
        {explorations.map((item) => (
          <li key={item.title}>
            <ExternalLink href={item.href}>
              <strong>{item.title}</strong>
              <span>{item.blurb}</span>
              <ArrowUpRight aria-hidden="true" />
            </ExternalLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section-ink" id="experience" aria-labelledby="experience-title">
      <div className="page-shell">
        <SectionHeading number="03" id="experience-title" title="Experience" light />
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

function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="page-shell">
        <SectionHeading number="04" id="skills-title" title="Skills" light />
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
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section page-shell" id="education" aria-labelledby="education-title">
      <SectionHeading number="05" id="education-title" title="Education & certifications">
        <ExternalLink className="button button-primary heading-action" href={profile.cv}>
          Download CV <FileText aria-hidden="true" />
        </ExternalLink>
      </SectionHeading>
      <div className="credentials-grid">
        <div className="credentials-column">
          {education.map((item) => (
            <article className="education-card" key={item.degree}>
              <p className="eyebrow">{item.period}</p>
              <h3>{item.degree}</h3>
              <span>{item.school}</span>
              <p>{item.detail}</p>
              <ExternalLink className="project-link" href={item.href}>
                {item.linkLabel} <ArrowUpRight aria-hidden="true" />
              </ExternalLink>
            </article>
          ))}
          <div className="credential-block">
            <h3>Languages</h3>
            <dl className="credential-rows">
              {languages.map(([language, level]) => (
                <div key={language}>
                  <dt>{language}</dt>
                  <dd>{level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="credentials-column">
          <div className="credential-block">
            <h3>Certifications</h3>
            <ul className="credential-list">
              {certifications.map((item) => (
                <li key={item.title}>
                  {item.href ? (
                    <ExternalLink href={item.href}>
                      <strong>{item.title}</strong> <ArrowUpRight aria-hidden="true" />
                    </ExternalLink>
                  ) : (
                    <strong>{item.title}</strong>
                  )}
                  <span>{item.issuer} · {item.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="credential-block">
            <h3>Competitions</h3>
            <ul className="credential-list">
              {community.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.org} · {item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <div className="page-shell footer-grid">
        <h2>Get in touch.</h2>
        <a className="footer-email" href={`mailto:${profile.email}`}>
          <EnvelopeSimple aria-hidden="true" />
          {profile.email}
          <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="footer-bottom">
          <span suppressHydrationWarning>© {new Date().getFullYear()} {profile.name}</span>
          <div>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={profile.cv}>CV</ExternalLink>
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
        <Research />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
    </>
  );
}
