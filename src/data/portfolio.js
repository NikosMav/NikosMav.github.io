export const profile = {
  name: "Nikos Mavrapidis",
  legalName: "Nikolaos Mavrapidis",
  title: "Software Engineer · Applied AI & Retrieval",
  location: "Athens, Greece",
  email: "mavrapidisnikolaos@gmail.com",
  website: "https://nikosmav.github.io",
  github: "https://github.com/NikosMav",
  linkedin: "https://www.linkedin.com/in/nikolaos-mavrapidis",
  cv: "/assets/cv/Nikos-Mavrapidis-CV.pdf",
  summary:
    "Software engineer with production experience across embedded telecom (C/C++), Java product development, and test automation, and co-founder of Lope, an applied-AI recruiting product. Now focused on retrieval, evaluation, and LLM/RAG systems, with security as the edge. Known for owning work end-to-end: investigation, delivery, evidence, and handover.",
};

export const projects = [
  {
    id: "01",
    title: "Lope",
    eyebrow: "Startup · Co-founder · 2025—2026",
    description:
      "A recruiter-first AI workspace that turns role briefs and candidate evidence into ranked, explainable shortlists — run in production with recruiting agencies, with 1,500+ interviews and ~800 AI-sourced candidates flowing through it.",
    contribution:
      "Worked across the whole platform — product, front end, back end, AI search, and infrastructure — as the most active contributor in both code repositories: the recruiter workspace, the row-level-security access model, quote-verified LLM skill matching in the ranking engine, and immutable releases on two production VMs.",
    tags: ["Applied AI", "Retrieval", "Product engineering"],
    href: "https://nikosmav.github.io/lope-case-study/",
    linkLabel: "Read case study",
    image: "/assets/projects/lope-logo.svg",
    imageAlt: "Lope logo",
    theme: "lope",
  },
  {
    id: "02",
    title: "Camelia Wellness",
    eyebrow: "Client platform · Full-stack · 2025",
    description:
      "A bilingual service and booking experience rebuilt around clearer journeys, discoverability, and operationally safe releases.",
    contribution:
      "Led UX and implementation across booking, SEO, responsive delivery, and versioned GCP/Cloudflare deployment with rollback.",
    tags: ["React", "Node.js", "GCP / Cloudflare"],
    href: "https://github.com/NikosMav/camelia-wellness-case-study",
    linkLabel: "Read case study",
    image: "/assets/projects/camelia.webp",
    imageAlt: "Camelia Wellness homepage",
    theme: "camelia",
  },
  {
    id: "03",
    title: "Worthify",
    eyebrow: "Team AI prototype · Machine learning",
    description:
      "A used-car valuation product trained on more than 100,000 listings and designed to make model output useful to everyday buyers.",
    contribution:
      "Worked across data, modelling, evaluation, and the product surface. The final model reached R² 0.97 and roughly 6% median absolute percentage error.",
    tags: ["Python", "scikit-learn", "Product analytics"],
    href: "https://github.com/NikosMav/worthify-case-study",
    linkLabel: "Read case study",
    image: "/assets/projects/worthify.webp",
    imageAlt: "Worthify vehicle valuation form",
    theme: "worthify",
  },
  {
    id: "04",
    title: "Adaptive Museum Experience",
    eyebrow: "BSc thesis · Browser computer vision",
    description:
      "A context-aware museum prototype that adapted content using browser-based visual interaction and was evaluated with 13 participants.",
    contribution:
      "Designed and built the experience end-to-end; 84.6% of participants reported feeling more knowledgeable after using it.",
    tags: ["Computer vision", "Research", "Web"],
    href: "https://nikosmav.github.io/ubiquitous-computing.github.io/",
    linkLabel: "Open experience",
    image: "/assets/projects/ubiquitous.webp",
    imageAlt: "Adaptive museum introduction quiz",
    theme: "ubiquitous",
  },
];

// Hands-on retrieval and applied-AI R&D — the practical work behind the move
// into AI engineering. Metrics are the reported evaluation figures from each
// project's own reproducible harness.
export const retrieval = [
  {
    id: "R1",
    title: "Netflix Catalog Search",
    eyebrow: "Retrieval R&D · Lexical → semantic → hybrid → rerank",
    description:
      "An offline catalog search that puts lexical, dense, hybrid, and two-stage retrieval side by side over the same corpus and measures each one.",
    detail:
      "BM25 and TF-IDF for exact titles, a MiniLM bi-encoder for paraphrase, Reciprocal Rank Fusion to combine them, and an MS MARCO cross-encoder to rerank the top candidates.",
    metrics: [
      ["nDCG@10", "0.72"],
      ["Recall@10", "0.78"],
      ["MRR", "0.76"],
    ],
    note: "Best config (hybrid + rerank) vs. 0.56 Recall@10 for BM25 alone.",
    tags: ["BM25", "Dense · MiniLM", "RRF", "Cross-encoder"],
    href: "https://github.com/NikosMav/netflix-catalog-search",
    linkLabel: "View repository",
  },
  {
    id: "R2",
    title: "News Evidence Retrieval",
    eyebrow: "Retrieval R&D · Passage retrieval & reproducible eval",
    description:
      "Hybrid passage retrieval that surfaces supporting evidence for a claim over a news corpus — an evidence finder, deliberately not a fact-checker.",
    detail:
      "Sparse TF-IDF and a MiniLM dense retriever fused with RRF over ~4k articles chunked into overlapping passages, evaluated on 300 title-to-body queries.",
    metrics: [
      ["MRR", "0.84"],
      ["Hit@1", "0.78"],
      ["nDCG@5", "0.63"],
    ],
    note: "Hybrid retriever; documented classification baseline kept separate.",
    tags: ["TF-IDF", "Dense · MiniLM", "RRF", "Passage retrieval"],
    href: "https://github.com/NikosMav/news-evidence-retrieval",
    linkLabel: "View repository",
  },
];

// Smaller applied ML / optimization explorations shown as compact links.
export const explorations = [
  {
    title: "Maritime Fuel-Mix Optimization",
    blurb: "FuelEU & EU ETS scenario optimization prototype (operations research, SciPy).",
    href: "https://github.com/NikosMav/maritime-optimization-case-study",
  },
  {
    title: "Image Analysis with PCA",
    blurb: "Dimensionality reduction and classification — PCA, k-NN, and NMF on image data.",
    href: "https://github.com/NikosMav/Image-Analysis-with-PCA",
  },
];

export const experience = [
  {
    period: "Oct 2025—Sep 2026",
    role: "Co-founder",
    context: "Lope · concurrent startup work",
    points: [
      "Built an AI product for recruiter search, candidate enrichment, evidence-backed ranking, and shortlist workflows, used in production by recruiting agencies.",
      "Worked across product decisions, application engineering, retrieval systems, and production delivery; 98.7% enrichment success over ~3,000 profiles and 1,272 passing tests at handover.",
    ],
  },
  {
    period: "Nov 2025—Present",
    role: "Test Automation Engineer",
    context: "SoftCom International · industrial software client",
    points: [
      "Own and modernise UI and REST automation across Python, Robot Framework, reusable keyword libraries, dashboards, and result publishing.",
      "Stabilise nightly CI and own high-impact defects — including memory leaks — from reproduction through validation and regression coverage.",
      "Collaborate on-site with client developers and align defect evidence and delivery with release schedules.",
    ],
  },
  {
    period: "Jun 2025—Nov 2025",
    role: "Software Engineer · Java",
    context: "SoftCom International · industrial software client",
    points: [
      "Delivered a product extension end-to-end across Java/Spring backend and UI, then modernised legacy modules through careful reverse-engineering.",
      "Resolved high-priority defects and maintained delivery tooling across Jenkins and Artifactory.",
    ],
  },
  {
    period: "Dec 2023—Jun 2025",
    role: "Software Engineer · Embedded C/C++",
    context: "SoftCom International · telecom client",
    points: [
      "Shipped a hitless software upgrade path that reduced planned service interruption from hundreds of milliseconds to zero.",
      "Developed and hardened Linux-based network software across the full lifecycle—requirements, features, defect fixing, test planning, and maintenance—in C/C++, Scala, Bash, and Python.",
      "Reverse-engineered third-party code to close compatibility gaps and add features; used networking tools for performance testing and protocol analysis.",
      "Closed high-priority defects and completed the documentation, knowledge transfer, and handover for the work.",
    ],
  },
];

export const capabilities = [
  {
    title: "Applied AI & retrieval",
    items: [
      "LLM applications & RAG",
      "Embeddings & vector search",
      "Hybrid retrieval (RRF)",
      "Cross-encoder reranking",
      "Recommenders & scikit-learn",
    ],
  },
  {
    title: "Quality & automation",
    items: ["Robot Framework", "Selenium", "Playwright", "REST testing", "Vitest"],
  },
  {
    title: "Systems & product",
    items: ["C/C++", "Java & Spring", "TypeScript", "React & Vite", "Linux & networking"],
  },
  {
    title: "Delivery & data",
    items: ["Jenkins / GitLab / Azure", "Docker & Kubernetes", "PostgreSQL", "GCP / AWS", "Security foundations"],
  },
];

export const learning = [
  ["AWS Certified AI Practitioner", "In progress"],
  ["LLMs, embeddings, vector search & RAG", "Ongoing practice"],
  ["IBM Cybersecurity Analyst", "In progress · ~halfway"],
  ["Cisco Junior Cybersecurity Analyst", "In progress · core modules complete"],
  ["DevOps with AI (Decoding DevOps)", "In progress"],
];

export const education = [
  {
    period: "Oct 2017—Oct 2023",
    degree: "BSc in Informatics & Telecommunications",
    school: "National and Kapodistrian University of Athens",
    detail:
      "Thesis: a web experience exploring ubiquitous computing, built for the department's Museum of IT & Telecommunications.",
    href: "https://pergamos.lib.uoa.gr/uoa/dl/object/3362706/file.pdf",
    linkLabel: "Read thesis",
  },
];

export const certifications = [
  {
    title: "Software Engineering Basics for Everyone",
    issuer: "IBM · edX",
    date: "Nov 2023",
    href: "https://courses.edx.org/certificates/b9780090bc0d42a38eab8b2781834dff",
  },
  {
    title: "High-Dimensional Data Analysis",
    issuer: "HarvardX · edX",
    date: "Oct 2023",
    href: "https://courses.edx.org/certificates/702a001c324b47549d7ef5bf39f5266a",
  },
  {
    title: "Data Visualization",
    issuer: "Coursera",
    date: "Nov 2021",
    href: "https://www.coursera.org/account/accomplishments/certificate/3Y5SP5UWTK67",
  },
  {
    title: "MPLS All-in-One: fundamentals, L2VPN, L3VPN, traffic engineering",
    issuer: "Arash Deljoo · online course",
  },
  {
    title: "Learn Python · Learn Node.js · Intro to Vite · Advanced JavaScript",
    issuer: "Scrimba",
    date: "May—Jun 2025",
  },
];

export const community = [
  {
    date: "Feb 2024",
    title: "1st Greek AI Hackathon",
    org: "Athens Center for Entrepreneurship and Innovation · AUEB",
    detail: "Three-day AI hackathon: built an AI solution with a team under expert mentoring.",
  },
  {
    date: "Sep 2023",
    title: "Student volunteer, MobileHCI 2023",
    org: "ACM SIGCHI",
    detail: "Supported sessions, presenters, and on-site equipment testing at the international conference.",
  },
  {
    date: "Feb 2022",
    title: "Google Hash Code 2022",
    org: "Athens hub hosted by NTUA",
    detail: "Solved a team optimisation problem under time pressure and met the competition's target goals.",
  },
  {
    date: "Feb 2022",
    title: "Hackathon 2022",
    org: "Team participant",
    detail: "Worked with a team of experts to conceptualise, design, and develop the project idea.",
  },
];

export const languages = [
  ["Greek", "Native"],
  ["English", "Certificate of Proficiency · University of Michigan"],
  ["German", "B1 · ÖSD Zertifikat"],
];
