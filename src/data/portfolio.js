export const profile = {
  name: "Nikos Mavrapidis",
  title: "Software Engineer · Systems & Applied AI",
  location: "Athens, Greece",
  email: "mavrapidisnikolaos@gmail.com",
  website: "https://nikosmav.github.io",
  github: "https://github.com/NikosMav",
  linkedin: "https://www.linkedin.com/in/nikolaos-mavrapidis",
  availability: "EU citizen · Open to relocation to Germany · Military service completed",
  cv: "/assets/cv/Nikos-Mavrapidis-CV.pdf",
  summary:
    "Software engineer with nearly three years of experience across embedded networking, industrial software, and satellite Earth Observation, and co-founder of an AI recruitment startup. Focused on reliable systems, retrieval, and applied AI.",
};

export const projects = [
  {
    id: "01",
    title: "Lope",
    eyebrow: "AI startup · Co-founder · 2025—2026",
    description:
      "Recruiter-first AI workspace that turns role briefs and candidate evidence into ranked, explainable shortlists. Used in production by recruiting agencies.",
    tags: ["Applied AI", "Retrieval", "Full-stack"],
    href: "https://nikosmav.github.io/lope-case-study/",
    linkLabel: "Case study",
    image: "/assets/projects/lope-logo.svg",
    imageAlt: "Lope logo",
    theme: "lope",
  },
  {
    id: "02",
    title: "Camelia Wellness",
    eyebrow: "Client platform · Full-stack · 2025",
    description:
      "Bilingual service and booking platform with SEO and versioned GCP/Cloudflare releases with rollback.",
    tags: ["React", "Node.js", "GCP / Cloudflare"],
    href: "https://github.com/NikosMav/camelia-wellness-case-study",
    linkLabel: "Case study",
    image: "/assets/projects/camelia.webp",
    imageAlt: "Camelia Wellness homepage",
    theme: "camelia",
  },
  {
    id: "03",
    title: "Worthify",
    eyebrow: "1st Greek AI Hackathon · 2023—2024",
    description:
      "Used-car valuation trained on 100,000+ listings: R² 0.97 and ~6% median error, served through a REST API.",
    tags: ["Python", "scikit-learn", "REST API"],
    href: "https://github.com/NikosMav/worthify-case-study",
    linkLabel: "Case study",
    image: "/assets/projects/worthify.webp",
    imageAlt: "Worthify vehicle valuation form",
    theme: "worthify",
  },
  {
    id: "04",
    title: "Adaptive Museum Experience",
    eyebrow: "BSc thesis · Computer vision",
    description:
      "Context-aware museum prototype driven by browser-based computer vision, evaluated with 13 participants.",
    tags: ["Computer vision", "Research", "Web"],
    href: "https://nikosmav.github.io/ubiquitous-computing.github.io/",
    linkLabel: "Open project",
    image: "/assets/projects/ubiquitous.webp",
    imageAlt: "Adaptive museum introduction quiz",
    theme: "ubiquitous",
  },
];

export const experience = [
  {
    period: "Aug 2026—Present",
    role: "Software Engineer · Space & Earth Observation",
    context: "SoftCom International · European space project",
    points: [
      "Satellite data discovery built on Earth Observation metadata, STAC catalogues, and cloud imagery archives.",
      "Earth Observation training through NASA ARSET.",
    ],
  },
  {
    period: "Oct 2025—Sep 2026",
    role: "Co-founder",
    context: "Lope · AI recruitment startup",
    points: [
      "Built the retrieval stack: hybrid search on Milvus, rank fusion, and RAG with verified citations.",
      "Owned the production architecture: Next.js, TypeScript, PostgreSQL with row-level security, and CI.",
      "In production with recruiting agencies; 98.7% enrichment success across ~3,000 profiles.",
    ],
  },
  {
    period: "Jun 2025—Jul 2026",
    role: "Software Engineer · Industrial Printing",
    context: "SoftCom International · Java developer, then test automation",
    points: [
      "Delivered a backend and front-end module extension and modernised legacy modules.",
      "Led a critical memory-leak investigation from profiling to fix and regression tests.",
      "Built Robot Framework UI and REST automation across four modules; maintained Jenkins and Gradle/Maven builds.",
    ],
  },
  {
    period: "Dec 2023—Jun 2025",
    role: "Software Engineer · Embedded Linux & Networking",
    context: "SoftCom International · telecom client",
    points: [
      "Built carrier-grade embedded Linux networking software in C/C++ on an IP/MPLS routing platform.",
      "Delivered Hitless Software Upgrades, cutting upgrade downtime from hundreds of milliseconds to zero.",
      "Integrated a third-party routing stack; validated control and data planes with Wireshark and Spirent.",
    ],
  },
];

export const capabilities = [
  {
    title: "AI & retrieval",
    items: ["Hybrid search & rank fusion", "Vector databases (Milvus)", "RAG & LLM integration", "Reranking", "STAC / EO metadata"],
  },
  {
    title: "Systems",
    items: ["C/C++ · embedded Linux (Yocto)", "IP/MPLS, TCP/IP", "Java, Python, Bash, SQL", "TypeScript, Next.js, React"],
  },
  {
    title: "Testing",
    items: ["Robot Framework & Selenium", "REST & UI automation", "Playwright", "VisualVM profiling"],
  },
  {
    title: "Delivery",
    items: ["Jenkins / GitLab CI", "Gradle, Maven, Artifactory", "Docker", "PostgreSQL", "AWS & GCP"],
  },
];

export const education = [
  {
    period: "2017—2022",
    degree: "BSc Informatics & Telecommunications",
    school: "National and Kapodistrian University of Athens",
    detail: "240 ECTS · Grade 7.67 / 10",
    href: "https://pergamos.lib.uoa.gr/uoa/dl/object/3362706/file.pdf",
    linkLabel: "Thesis",
  },
];

export const certifications = [
  { title: "AWS Certified AI Practitioner", issuer: "AWS", date: "2026" },
  { title: "Decoding DevOps (60+ hours)", issuer: "Udemy", date: "2026" },
  { title: "Cybersecurity Fundamentals · Cyber Defense Architecture", issuer: "IBM", date: "2026" },
  { title: "Introduction to Cybersecurity · Networking Basics · Networking Devices", issuer: "Cisco", date: "2025" },
  { title: "Networking Basics and Security", issuer: "IBM", date: "2025" },
  { title: "MPLS L3VPN", issuer: "Employer-funded", date: "2024" },
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
];

export const community = [
  { title: "1st Greek AI Hackathon", org: "ACEin · AUEB", date: "2024" },
  { title: "MobileHCI student volunteer", org: "ACM SIGCHI", date: "2023" },
  { title: "Google Hash Code", org: "Athens hub, NTUA", date: "2022" },
];

export const languages = [
  ["Greek", "Native"],
  ["English", "C2 (CPE)"],
  ["German", "B1 (ÖSD)"],
];
