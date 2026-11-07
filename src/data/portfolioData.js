export const PERSONAL_INFO = {
  name: "Akhand Shukla",
  title: "Software Developer | AI & Full-Stack Engineer",
  location: "Kanpur, Uttar Pradesh, India",
  phone: "+91 9129933535",
  email: "akhandshukla784@gmail.com",
  linkedin: "https://linkedin.com/in/akhand-shukla-42913b361",
  github: "https://github.com/Akhand-shukla",
  portfolio: "https://akhands-animated-art.vercel.app",
  summary: `Computer Science undergraduate specializing in AI engineering, GenAI, and full-stack development, with hands-on expertise building production-grade web applications, Agentic AI systems (LangChain, LangGraph), and containerized microservices. Proficient in Python, JavaScript, React.js, FastAPI, Docker, and Firebase, with AWS deployment experience and real-world multi-model orchestration. 4th-place finisher at GDG Indore Hackathon 2026 and Smart India Hackathon (SIH) 2026 shortlisted developer passionate about solving real-world civic, environmental, and financial challenges with scalable, intelligent software.`
};

export const METRICS = [
  { label: "Production AI Platforms", value: "5+" },
  { label: "GDG Indore Hackathon 2026", value: "4th Place" },
  { label: "Smart India Hackathon", value: "Shortlisted" },
  { label: "Canvas Frame Rate", value: "60 FPS Locked" }
];

export const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: ["Python", "Java", "JavaScript (ES6+)", "C", "SQL", "HTML5", "CSS3"]
  },
  {
    title: "GenAI & Agentic AI",
    icon: "Cpu",
    skills: ["Agentic AI (LangChain, LangGraph)", "Multi-Agent Systems", "GenAI", "RAG Pipelines", "Google Gemini API", "Groq API", "Prompt Engineering"]
  },
  {
    title: "Backend & APIs",
    icon: "Server",
    skills: ["FastAPI", "Uvicorn", "Pydantic", "REST APIs", "WebSockets", "HTTPX", "PyJWT"]
  },
  {
    title: "Frontend Technologies",
    icon: "Layout",
    skills: ["React.js", "Next.js", "GSAP Animation", "Tailwind CSS", "Vite", "Redux", "Context API"]
  },
  {
    title: "Cloud, DevOps & Databases",
    icon: "Cloud",
    skills: ["Firebase (Auth, Firestore, Storage)", "Docker", "AWS (EC2, S3)", "Git", "GitHub", "Linux / Bash"]
  },
  {
    title: "Core Computer Science",
    icon: "Terminal",
    skills: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "DBMS", "System Design Basics"]
  }
];

export const PROJECTS = [
  {
    id: "jal-sutra",
    number: "01",
    title: "Jal Sutra",
    subtitle: "AI-Powered Groundwater Contamination Platform",
    tagline: "Environmental Intelligence & Geospatial Analytics",
    highlight: "Smart India Hackathon (SIH) 2026 Shortlisted",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    techStack: ["React.js", "FastAPI", "Python", "GenAI", "RAG", "Docker", "Geospatial GIS"],
    bullets: [
      "Engineered an environmental intelligence platform converting raw groundwater quality datasets into real-time contamination insights and automated hazard alerts.",
      "Implemented heavy-metal contamination indexing calculating Heavy Metal Pollution Index (HPI), Heavy Metal Evaluation Index (HEI), and Contamination Degree (Cd).",
      "Architected interactive GIS contamination hotspot maps with location-wise analysis, RAG-driven remediation guidance, and Dockerized microservice deployment."
    ],
    github: "https://github.com/Akhand-shukla"
  },
  {
    id: "civicpulse-ai",
    number: "02",
    title: "CivicPulse AI",
    subtitle: "Civic Demand Intelligence Platform",
    tagline: "Multimodal Voice & Vision for Urban Governance",
    highlight: "4th Place — GDG Indore Hackathon 2026",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    techStack: ["FastAPI", "Python", "Google Gemini Multimodal API", "Firebase", "Leaflet.js", "React.js", "Tailwind CSS"],
    bullets: [
      "Built an intelligent civic demand platform for GDG Indore Hackathon (4th Place) transforming citizen voice audio, photos, and complaints into standardized ward priorities.",
      "Integrated Google Gemini Multimodal GenAI to automatically transcribe Hinglish audio complaints, classify issues, score severity (1–5), and validate photographic damage.",
      "Developed asynchronous FastAPI backend services with Firebase real-time sync and interactive Leaflet.js map clustering for municipal ward hotspot detection."
    ],
    github: "https://github.com/Akhand-shukla"
  },
  {
    id: "tarazu",
    number: "03",
    title: "Tarazu (Vakeel Vision)",
    subtitle: "AI Legal Contract Analysis Platform",
    tagline: "Automated Commercial Contract Liability & Risk Intelligence",
    highlight: "Enterprise Legal Tech Solution",
    badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    techStack: ["FastAPI", "Python", "Firebase", "Docker", "GenAI", "Pydantic", "HTTPX", "Uvicorn"],
    bullets: [
      "Developed an automated legal intelligence platform analyzing uploaded commercial contracts, clauses, and legal agreements for hidden liabilities and compliance risks.",
      "Architected asynchronous REST APIs in FastAPI and Pydantic for multi-part contract ingestion, asynchronous GenAI analysis execution, and structured result extraction.",
      "Containerized backend services with Docker and integrated Firebase cloud persistence for secure contract storage and real-time audit logs."
    ],
    github: "https://github.com/Akhand-shukla"
  },
  {
    id: "surakshaypay",
    number: "04",
    title: "SurakshaPay (Sentinel-Recover)",
    subtitle: "AI Revenue Recovery Engine",
    tagline: "Autonomous Payment Recovery with HMAC Webhooks & GenAI",
    highlight: "Autonomous Fintech Agent",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    techStack: ["React.js", "GSAP", "Lenis", "FastAPI", "Python", "Gemini API", "Agentic AI", "HMAC SHA-256", "Tailwind CSS"],
    bullets: [
      "Engineered an autonomous payment failure recovery platform intercepting failed Razorpay transactions via HMAC-verified webhooks to recover lost merchant revenue.",
      "Built a 5-stage automated recovery pipeline: HMAC Webhook verification → Deterministic triage → TRAI & fraud guardrails → Gemini GenAI agent → SHA-256 chained audit ledger seal.",
      "Implemented an interactive WhatsApp conversational recovery drawer, ROI calculator, and 60fps kinetic micro-interactions leveraging GSAP and Lenis.",
      "Developed a modular FastAPI backend with cryptographic tamper-evident audit logs (ledger.journal) guaranteeing idempotent transaction handling."
    ],
    github: "https://github.com/Akhand-shukla"
  },
  {
    id: "model-wars",
    number: "05",
    title: "Model Wars",
    subtitle: "Dual-LLM Agentic Battle Arena",
    tagline: "Competitive Prompting Duels with LangGraph State Machines",
    highlight: "Agentic State Machine Arena",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    techStack: ["Python", "React.js", "LangChain", "LangGraph", "Agentic AI", "Groq API", "Gemini API", "Tailwind CSS", "Vite"],
    bullets: [
      "Built an interactive agentic arena pitting autonomous LLM models against each other in competitive prompting duels using LangGraph state machines.",
      "Implemented multi-model orchestration with LangChain routing concurrent prompt execution across Groq API (openai/gpt-oss-120b) and Google Gemini 2.5 Flash.",
      "Designed dynamic combat mech cards, arena standings, and live duel streaming telemetry using React.js and Tailwind CSS."
    ],
    github: "https://github.com/Akhand-shukla/Model-wars"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "4th Place — GDG Indore Hackathon 2026",
    team: "Team Prompt Pirates",
    desc: "Awarded 4th place out of hundreds of engineering teams for CivicPulse AI, a multimodal civic intelligence platform integrating Gemini Vision/Audio and GIS clustering."
  },
  {
    title: "Internally Shortlisted — Smart India Hackathon (SIH) 2026",
    team: "Team Prompt Pirates",
    desc: "Shortlisted at the institutional level for Jal Sutra, an AI-powered groundwater contamination platform computing HPI/HEI pollution indices and RAG remediation."
  },
  {
    title: "Adobe University Hackathon 2026 — Round 2 Qualifier",
    team: "National Competitor",
    desc: "Qualified for Round 2 of Adobe University Hackathon competing against elite national student engineers in advanced web and AI architecture."
  },
  {
    title: "National Hackathons Finalist & Participant",
    team: "Competitor",
    desc: "Bharatiya Antariksh Hackathon 2026, ViCoDathon 2026, and Geeks2Code Hackathon (Agentic AI & Developer Tools track)."
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (B.Tech) — Computer Science & Engineering",
    institution: "Pranveer Singh Institute of Technology (PSIT), Kanpur — AKTU",
    period: "2025 – 2029",
    details: "Focus: Artificial Intelligence, Distributed Systems, Data Structures & Algorithms, Modern Web Development."
  },
  {
    degree: "Senior Secondary (Class XII) & High School (Class X)",
    institution: "St. Thomas School, Kanpur",
    period: "Completed",
    details: "Strong academic foundation in Mathematics, Computer Applications, and Sciences."
  }
];

export const CERTIFICATIONS = [
  { name: "Agents and Workflows", issuer: "OpenAI" },
  { name: "AI Fluency: Framework & Foundation", issuer: "Anthropic" },
  { name: "Claude Code 101", issuer: "Anthropic" },
  { name: "Generative AI, Intro to LLM, Responsible AI", issuer: "Google Cloud" },
  { name: "Applying AI Principles", issuer: "Google Cloud" },
  { name: "Tata GenAI Powered Data Analytics", issuer: "Forage" }
];
