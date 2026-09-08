export const site = {
  name: "Preetam",
  mark: "pn",
  city: "Hyderabad",
  title: "Preetam — AI engineer, Hyderabad",
  email: "pritam.exe2k4@gmail.com",
  github: "https://github.com/pritamexe2k4-cmyk",
  linkedin: "https://www.linkedin.com/in/preetam-naik2k4",
  resume: "https://github.com/pritamexe2k4-cmyk/resume",
  hero: {
    before: "I'm Preetam, an AI engineer & systems builder based in Hyderabad. ",
    available: "Available",
    after: " for internships & full-time.",
  },
  incluhubLive: "https://inclu-pilot-three.vercel.app",
  aboutPhotos: ["/media/about-a.png", "/media/about-b.png"] as const,
};

export const projects = [
  {
    slug: "student-dashboard",
    n: "01",
    title: "Student Dashboard",
    image: "/media/p1.png",
    image2: "/media/work-1.png",
    blurb:
      "Role-based education ops — Admin, Educator, Student. Supabase Auth and RLS, QR check-in, admin broadcast.",
    live: "https://incluhub-dashboard-rho.vercel.app",
    repo: "https://github.com/contact561/incluhub-dashboard",
    stack: "Next.js · TypeScript · Supabase · Vercel",
    problem:
      "Founders were creating accounts by hand and monitoring students across scattered chats and sheets.",
    body: [
      "Three portals with admin-only account creation. Auth and row-level security sit in Supabase so each role only sees its slice.",
      "QR check-in and an admin broadcast cut the daily ops loop. The live app is the proof, not a mock.",
    ],
  },
  {
    slug: "production-rag",
    n: "02",
    title: "Production RAG",
    image: "/media/p2.png",
    image2: "/media/work-2.png",
    blurb:
      "Grounded document Q&A. Chunk, retrieve, generate with citations. LangGraph routes retrieve vs refuse.",
    live: null,
    repo: "https://github.com/pritamexe2k4-cmyk/production-rag",
    stack: "Python · FastAPI · LangGraph · Chroma · LangSmith",
    problem:
      "Most RAG demos answer anyway. Ops notes and personal files need a system that stays silent when the corpus does not support the claim.",
    body: [
      "Ingest, embed, store. Online graph: retrieve, then generate with citations — or refuse.",
      "Built to run on any markdown/PDF set, including a personal dual-write from Notion.",
    ],
  },
  {
    slug: "agentic-ops",
    n: "03",
    title: "Agentic Ops",
    image: "/media/p3.png",
    image2: "/media/work-3.png",
    blurb:
      "Multi-agent backend: ingest an event, call tools or APIs, return structured output on one POST.",
    live: null,
    repo: "https://github.com/pritamexe2k4-cmyk/agentic-ops",
    stack: "Python · FastAPI · LangGraph · Pydantic · REST",
    problem:
      "Ad-hoc agent scripts do not survive a hiring screen. The work has to look like a service: one endpoint, typed output, tools behind it.",
    body: [
      "An event hits POST. Agents decide whether to call a tool or an API, then return a Pydantic payload.",
      "Same shape as the IncluHub orchestration work — smaller, public, and readable in a repo.",
    ],
  },
] as const;

export const skillsTicker = [
  "Python",
  "TypeScript",
  "SQL",
  "FastAPI",
  "LangGraph",
  "LangChain",
  "RAG",
  "Next.js",
  "React Native",
  "Supabase",
  "Firebase",
  "Docker",
  "GitHub Actions",
];

export const aboutAccordion = [
  {
    t: "①   RAG / agents",
    d: "LangGraph routes retrieve vs refuse. Citations when the files support it. One POST for multi-agent ops.",
  },
  {
    t: "②   FastAPI backends",
    d: "Typed services: ingest, tools, structured output. Python, Pydantic, REST. Built to be read in a hiring screen.",
  },
  {
    t: "③   Product systems",
    d: "Next.js, React Native, Supabase, Firebase, GitHub Actions. RBAC, CRM, live users — not just notebooks.",
  },
] as const;

export const notes = [
  {
    title: "Brum — voice over a knowledge base",
    date: "09.2026",
    href: "https://github.com/pritamexe2k4-cmyk/brum-voice-assistant",
  },
  {
    title: "Grounded RAG that refuses",
    date: "08.2026",
    href: "https://github.com/pritamexe2k4-cmyk/production-rag",
  },
  {
    title: "Role-based ops dashboard",
    date: "2026",
    href: "https://incluhub-dashboard-rho.vercel.app",
  },
];

export const quotes = [
  {
    text: "Grew a campus NGO chapter from 9 to 30+ volunteers and left a repeatable onboarding loop for events that reached 300+ people.",
    name: "Street Cause",
    role: "HR Head, 2024",
  },
  {
    text: "Replaced 8–9 campaign Google Sheets with a CRM path, then shipped a three-role student dashboard so founders stopped onboarding by hand.",
    name: "IncluHub",
    role: "AI Intern → Orchestrator, 2026",
  },
];

export const inquiries = ["Internship / full-time", "Project collab", "Referral", "Other"] as const;
