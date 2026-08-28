export const projects = [
  {
    id: "01",
    title: "Lope",
    eyebrow: "Startup · Founding Engineer · 2025—Present",
    description:
      "A recruiter-first AI workspace that turns role briefs and candidate evidence into ranked, explainable shortlists.",
    contribution:
      "Building the product and the systems behind search, enrichment, shortlists, and reliable delivery.",
    tags: ["Applied AI", "Retrieval", "Product engineering"],
    href: "https://www.withlope.com/",
    linkLabel: "Visit Lope",
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
    eyebrow: "MSc thesis · Browser computer vision",
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

export const experience = [
  {
    period: "Oct 2025—Present",
    role: "Founding Engineer",
    context: "Lope · concurrent startup work",
    points: [
      "Building an AI product for recruiter search, candidate enrichment, evidence-backed ranking, and shortlist workflows.",
      "Working across product decisions, application engineering, retrieval systems, and production delivery.",
    ],
  },
  {
    period: "Nov 2025—Present",
    role: "Test Automation Engineer",
    context: "Industrial software",
    points: [
      "Own and modernise UI and REST automation across Python, Robot Framework, reusable test libraries, dashboards, and result publishing.",
      "Stabilise nightly CI and investigate high-impact memory and resource regressions from reproduction through validation and regression coverage.",
    ],
  },
  {
    period: "Jun 2025—Nov 2025",
    role: "Software Engineer · Java",
    context: "Industrial software",
    points: [
      "Delivered a product extension end-to-end across backend and UI, then modernised legacy modules through careful reverse-engineering.",
      "Resolved high-priority defects and maintained delivery tooling across Jenkins and Artifactory.",
    ],
  },
  {
    period: "Dec 2023—Jun 2025",
    role: "Software Engineer · Embedded C/C++",
    context: "Telecom systems",
    points: [
      "Shipped a hitless software upgrade path that reduced planned service interruption from hundreds of milliseconds to zero.",
      "Closed high-priority defects and completed the documentation, knowledge transfer, and handover for the work.",
    ],
  },
];

export const capabilities = [
  {
    title: "Applied AI",
    items: ["Python", "LLM applications & RAG", "Embeddings", "Vector search", "scikit-learn"],
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
    items: ["Jenkins / GitLab / Azure", "Docker & Kubernetes", "PostgreSQL", "GCP", "AWS"],
  },
];

export const learning = [
  ["AWS Certified AI Practitioner", "In progress"],
  ["LLMs, retrieval, embeddings & recommenders", "Ongoing practice"],
  ["IBM & Cisco cybersecurity pathways", "Ongoing · core modules complete"],
  ["Cloud-native DevOps & GitOps", "Ongoing"],
];
