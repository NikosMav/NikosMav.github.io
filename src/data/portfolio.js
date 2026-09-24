export const profile = {
  name: "Nikos Mavrapidis",
  legalName: "Nikolaos Mavrapidis",
  title: "Software Engineer · Systems & Applied AI",
  location: "Athens, Greece",
  email: "mavrapidisnikolaos@gmail.com",
  website: "https://nikosmav.github.io",
  github: "https://github.com/NikosMav",
  linkedin: "https://www.linkedin.com/in/nikolaos-mavrapidis",
  availability: "EU citizen · open to relocation to Germany · Military service completed",
  cv: "/assets/cv/Nikos-Mavrapidis-CV.pdf",
  summary:
    "Software engineer with nearly three years of professional experience across three domains: embedded C/C++ on a carrier-grade Linux routing platform, Java and Python engineering on a large industrial printing suite, and satellite Earth Observation software for a European space-sector project—plus co-founder of Lope, an AI-native recruitment platform. Systems-level background in networking protocols, high availability, third-party integration, verification, and root-cause analysis. Core strength: understanding how components interact across protocol, operating-system, application, and third-party boundaries, and making them work together as one reliable system.",
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
    eyebrow: "1st Greek AI Hackathon · ACEin–AUEB · 2023—2024",
    description:
      "A used-car valuation product trained on more than 100,000 listings and designed to make model output useful to everyday buyers.",
    contribution:
      "Co-created the platform across data, modelling, evaluation, and the product surface: validated at R² 0.97 and roughly 6% median absolute percentage error, served through a REST API in a full-stack web app.",
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
    period: "Aug 2026—Present",
    role: "Software Engineer · Space & Earth Observation",
    context: "SoftCom International · European space-sector project",
    points: [
      "Work on satellite data discovery systems built on Earth Observation metadata, STAC catalogues, and cloud-hosted imagery archives, including the retrieval architecture behind them.",
      "Built Earth Observation grounding through NASA ARSET training: sensing principles, spatial and spectral resolution, sensor and orbit trade-offs, and processing levels.",
    ],
  },
  {
    period: "Oct 2025—Sep 2026",
    role: "Co-founder",
    context: "Lope · three-person founding team, alongside SoftCom",
    points: [
      "Built the retrieval architecture end to end: hybrid semantic search on a self-hosted Milvus vector database with domain-adapted embeddings and rank fusion, grounded RAG with server-verified citations, and LLM-based document extraction.",
      "Owned the production architecture—Next.js, TypeScript, and PostgreSQL with row-level-security multi-tenancy, event-driven pipelines, and unit and end-to-end CI—and replaced a model-driven agent loop with a deterministic orchestrator that validates every output.",
      "Used in production by recruiting agencies; 98.7% enrichment success over ~3,000 profiles and 1,272 passing tests at handover.",
    ],
  },
  {
    period: "Jun 2025—Jul 2026",
    role: "Software Engineer · Industrial Printing",
    context: "SoftCom International · industrial printing client · Java developer, then test automation engineer",
    points: [
      "Delivered a backend and front-end module extension for a large distributed industrial printing suite; modernised legacy modules by reverse-engineering undocumented behaviour and resolved high-impact defects through peer-reviewed pull requests.",
      "Owned a critical memory-leak investigation end to end: VisualVM profiling, heap, log, and resource-trend evidence, analysis presented to the developers, fix validation, and automated regression coverage.",
      "Designed test-suite architecture and standards, built reusable keyword libraries—including custom Java keywords for Robot Framework—and added UI and REST automation across four product modules.",
      "Debugged failures across SUSE Linux Enterprise Server and Windows, managed the VMs and containerised environments used to validate releases, maintained Jenkins jobs and Gradle/Maven builds, and worked on site at the client's offices abroad.",
    ],
  },
  {
    period: "Dec 2023—Jun 2025",
    role: "Software Engineer · Embedded Linux & Networking",
    context: "SoftCom International · telecom networking client",
    points: [
      "Developed carrier-grade embedded Linux networking software in C/C++ across the full lifecycle on a high-availability IP/MPLS routing platform built with Yocto.",
      "Delivered Hitless Software Upgrades end to end with the HITSU team—design, implementation, integration, validation, deployment, and documentation—carrying live service state across versions and cutting upgrade interruption from hundreds of milliseconds to zero.",
      "Integrated and adapted a third-party carrier-grade routing stack, resolving interface and compatibility problems around software the team did not own.",
      "Validated control-plane and data-plane behaviour with Wireshark and Spirent TestCenter, root-causing issues across protocol, software, and platform boundaries; automated regression checks in Python.",
    ],
  },
];

export const capabilities = [
  {
    title: "Applied AI & retrieval",
    items: [
      "Hybrid search & rank fusion",
      "Vector databases (Milvus) & embeddings",
      "RAG & LLM integration",
      "Cross-encoder reranking",
      "STAC & Earth Observation metadata",
    ],
  },
  {
    title: "Systems & networking",
    items: [
      "C/C++ · embedded Linux (Yocto)",
      "IP/MPLS, TCP/IP, control & data plane",
      "Wireshark & Spirent TestCenter",
      "Java, Python, Bash, SQL",
      "TypeScript, Next.js & React",
    ],
  },
  {
    title: "Test & verification",
    items: [
      "Robot Framework & Selenium",
      "REST API & UI automation",
      "VisualVM profiling & root-cause analysis",
      "Playwright",
      "Containerised test environments",
    ],
  },
  {
    title: "Delivery & data",
    items: [
      "Jenkins / GitLab CI",
      "Gradle, Maven & Artifactory",
      "Docker",
      "PostgreSQL (row-level security)",
      "AWS & GCP",
    ],
  },
];

export const learning = [
  ["AWS Certified AI Practitioner", "Certified · 2026"],
  ["Earth Observation fundamentals · NASA ARSET", "2026"],
  ["Decoding DevOps · Linux, IaC, CI/CD, AWS & GCP", "Completed · 2026"],
  ["IBM Cybersecurity Fundamentals & Cyber Defense Architecture", "Completed · 2026"],
  ["LLMs, embeddings, vector search & RAG", "Ongoing practice"],
];

export const education = [
  {
    period: "2017—2022",
    degree: "BSc in Informatics & Telecommunications",
    school: "National and Kapodistrian University of Athens",
    detail:
      "240 ECTS · Grade 7.67 / 10. Thesis: a web experience exploring ubiquitous computing, built for the department's Museum of IT & Telecommunications.",
    href: "https://pergamos.lib.uoa.gr/uoa/dl/object/3362706/file.pdf",
    linkLabel: "Read thesis",
  },
];

export const certifications = [
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2026",
  },
  {
    title: "Decoding DevOps: Linux, networking, containers, IaC, CI/CD, AWS & GCP (60+ hours)",
    issuer: "Udemy",
    date: "2026",
  },
  {
    title: "Cybersecurity Fundamentals (multi-course program) · Cyber Defense Architecture",
    issuer: "IBM",
    date: "2026",
  },
  {
    title: "Introduction to Cybersecurity · Networking Basics · Networking Devices and Initial Configuration",
    issuer: "Cisco",
    date: "2025",
  },
  {
    title: "Networking Basics and Security",
    issuer: "IBM",
    date: "2025",
  },
  {
    title: "MPLS L3VPN",
    issuer: "Employer-funded",
    date: "2024",
  },
  {
    title: "Software Engineering Basics for Everyone",
    issuer: "IBM · edX",
    date: "2023",
    href: "https://courses.edx.org/certificates/b9780090bc0d42a38eab8b2781834dff",
  },
  {
    title: "High-Dimensional Data Analysis",
    issuer: "HarvardX · edX",
    date: "2023",
    href: "https://courses.edx.org/certificates/702a001c324b47549d7ef5bf39f5266a",
  },
  {
    title: "Data Visualization",
    issuer: "Coursera",
    date: "2021",
    href: "https://www.coursera.org/account/accomplishments/certificate/3Y5SP5UWTK67",
  },
];

export const community = [
  {
    date: "Feb 2024",
    title: "1st Greek AI Hackathon",
    org: "Athens Center for Entrepreneurship and Innovation · AUEB",
    detail: "Co-created Worthify, an AI car-valuation platform, and kept developing it through May 2024.",
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
  ["English", "C2, CPE"],
  ["German", "B1, ÖSD"],
];
