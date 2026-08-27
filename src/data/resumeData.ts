export interface ProjectData {
  title: string;
  slug: string;
  period: string;
  description: string;
  techStack: string[];
  link?: string;
  repo?: string;
  live?: string;
  image?: string;
  highlight?: string;
}

export interface ExperienceData {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface EducationData {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  coursework: string[];
}

export const personalInfo = {
  name: "Badr Faez Ba Jamil",
  title: "Software & Automation Developer | AI Engineer",
  email: "BadrBajamil1@gmail.com",
  phone: "+60-179373294",
  linkedin: "https://linkedin.com/in/badr-ba-jamil",
  github: "https://github.com/badrfaez1",
  location: "Kuala Lumpur, Malaysia / Riyadh, Saudi Arabia",
  bio: "AI Engineer & Full-Stack Automation Developer pursuing Computer Science in Artificial Intelligence at Universiti Malaya. Specializing in computer vision pipelines, multi-agent LLM systems, Telegram bot architectures, and enterprise workflow automation (n8n/Zipper)."
};

export interface SkillCategory {
  category: string;
  skills: string[];
  description?: string;
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"]
  },
  {
    category: "AI / ML",
    skills: ["PyTorch", "YOLOv8 / YOLO11", "Transformers", "Deep Streaming LDA", "Optical Flow", "Gemma 2 2B / Gemini AI", "Firebase AI SDK"]
  },
  {
    category: "AI-Assisted Development",
    skills: ["Claude Code", "Cursor", "Antigravity", "Prompt Engineering"]
  },
  {
    category: "Frameworks",
    skills: ["Next.js / React", "Flask", "Node.js", "Android SDK / Java", "Telegram Bot API"]
  },
  {
    category: "Databases & Tools",
    skills: ["Firebase Firestore", "Git", "Linux", "GCP", "n8n", "Zipper"]
  }
];

export const projectsData: ProjectData[] = [
  {
    title: "PolyFlow – AI Suspicious Activity Recognition",
    slug: "polyflow",
    period: "Oct 2025 – Present",
    description: "Real-time AI pipeline fusing YOLO11s-Pose skeletal tracking, Lucas-Kanade optical flow, and X3D-XS visual context via a custom Lightweight Temporal Transformer.",
    techStack: ["PyTorch", "YOLOv8", "Flask", "Transformers", "Deep Streaming LDA"],
    link: "https://github.com/badrfaez1",
    highlight: "AUC-ROC 0.9059 on UCF-Crime benchmark; 3 concurrent streams @ >15 FPS on RTX 3060 with 6-page Flask dashboard and 15+ REST APIs."
  },
  {
    title: "VerdantVista – AI Wellbeing Platform",
    slug: "verdantvista",
    period: "Oct 2024",
    description: "Full-stack AI web application featuring an image-based emotion classifier and a journaling chatbot powered by Firebase AI SDK + Gemini.",
    techStack: ["Next.js", "TypeScript", "Gemini AI", "Firebase", "Tailwind CSS"],
    link: "https://github.com/badrfaez1/verdantvista",
    repo: "badrfaez1/verdantvista",
    highlight: "Built in 24-hr hackathon with real-time Firestore sync and Firebase Auth."
  },
  {
    title: "Hungo – Food Bank Finder",
    slug: "hungo",
    period: "May 2024",
    description: "Location-based Android app with Firebase Firestore (NoSQL) for real-time data sync and Firebase Authentication supporting multiple user roles.",
    techStack: ["Java", "Android SDK", "Firebase Firestore", "Google Maps API"],
    link: "https://github.com/badrfaez1/Hungo",
    repo: "badrfaez1/Hungo",
    highlight: "Real-time location matching and role-based access for food donors and beneficiaries."
  },
  {
    title: "FOP Valley – Open-World RPG",
    slug: "fop-valley",
    period: "Feb 2024",
    description: "Team-built Java RPG game integrating a locally-run Gemma 2 2B LLM for intelligent NPC dialogue and dynamic world events.",
    techStack: ["Java (Swing)", "Gemma 2 2B LLM", "Git"],
    link: "https://github.com/badrfaez1",
    highlight: "Led game design & architecture; embedded local LLM inference for rich NPC interactions."
  }
];

export const experienceData: ExperienceData[] = [
  {
    title: "Software & Automation Developer (Industrial Training)",
    company: "Establishment BADHOUR AL-AKHYAR For Trading",
    location: "Riyadh, Saudi Arabia",
    period: "Aug 2025 – Sep 2025",
    points: [
      "Architected and deployed 3 Telegram bots using Python, resolving inquiries autonomously without escalation in >90% of tracked conversations.",
      "Built end-to-end automation workflows using n8n and Zipper, integrating Telegram, internal databases, and business tools to eliminate 5+ hours/week of manual data entry.",
      "Engineered automation scripts cutting processing time by ~40% and accelerating digital transformation roadmap.",
      "Diagnosed and resolved software issues across internal systems, improving operational reliability for 3+ departments."
    ]
  }
];

export const leadershipData: ExperienceData[] = [
  {
    title: "Group Leader & Technical Documentation Lead",
    company: "Universiti Malaya",
    location: "Kuala Lumpur, Malaysia",
    period: "2023 – Present",
    points: [
      "Led teams of 5+ students across Fundamentals of Programming, Data Structures, Mobile Development, and Machine Learning projects.",
      "Managed Git workflows, code reviews, architectural design, and produced comprehensive technical documentation."
    ]
  }
];

export const educationData: EducationData = {
  degree: "Bachelor of Computer Science in Artificial Intelligence",
  institution: "Universiti Malaya",
  location: "Kuala Lumpur, Malaysia",
  period: "Expected Feb 2027",
  cgpa: "3.35 / 4.00",
  coursework: ["Deep Learning", "Machine Learning", "Data Structures & Algorithms", "Database Systems", "Mobile Application Development", "Operating Systems"]
};
