import { NavItem, SectionId, SectionInfo } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Timeline" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const SECTION_METADATA: Record<SectionId, SectionInfo> = {
  home: {
    title: "About This Overview",
    badge: "Developer Identity",
    summary:
      "A personal snapshot highlighting engineering focus, background, core stack, and immediate availability.",
    purpose:
      "To provide an authentic, fast overview of who I am, where I am based, and my technical specialization at the intersection of IoT and Software Engineering.",
    details: [
      "Terminal-inspired technical identity indicator ($ whoami).",
      "Immediate open-to-work status with real contact channels.",
      "Direct shortcuts to explore featured projects and obtain my resume.",
    ],
    tips: [
      "Press Ctrl+K (or ⌘K) to open the interactive Command Palette for rapid navigation.",
    ],
  },
  about: {
    title: "About This Section",
    badge: "Personal Storytelling",
    summary:
      "An authentic narrative covering personal background, technical philosophy, and current learning directions.",
    purpose:
      "Inspired by Diogo Correia's personal storytelling approach, this section communicates motivation, work values, and development mindset beyond code syntax.",
    details: [
      "Contextual metadata: location, university, and core focus pillars.",
      "Practical approach to problem solving and systems thinking.",
      "Clear articulation of short and long-term engineering interests.",
    ],
  },
  skills: {
    title: "About Skill Indicators",
    badge: "Technical Directory",
    summary:
      "A structured visual directory of technologies, libraries, and tools organized into calibrated technical categories.",
    purpose:
      "Inspired by Tim Gesemann's structured presentation and Squidward Codes' icon language, providing a clear map of daily tools with restrained horizontal proficiency bars.",
    details: [
      "Grouped by technical domain: Programming Languages, Frontend, Backend, Databases, IoT & Tools.",
      "Horizontal indicators display calibrated comfort levels (Familiar, Comfortable, Proficient, Advanced).",
      "Filter by category to explore specific tooling depths.",
    ],
  },
  experience: {
    title: "About Work Experience",
    badge: "Editorial Timeline",
    summary:
      "A chronological track record covering professional internships, capstone engineering, and student organization leadership.",
    purpose:
      "Combines Diogo Correia's chronological storytelling with Tim Gesemann's structured professional layout to showcase real responsibilities and measurable outcomes.",
    details: [
      "Internship at PT. Winnicode Garuda Teknologi Indonesia (Fullstack Laravel & React).",
      "Capstone engineering at Universitas Trisakti (ESP32 & ROS 2 Smart Classroom).",
      "Student union leadership roles within BPHMJTIF & Google Developer Student Clubs.",
    ],
  },
  projects: {
    title: "About Project Showcases",
    badge: "Editorial Showcase",
    summary:
      "An editorial case study showcase with distinct visual weights, deep technical details, and verifiable source code.",
    purpose:
      "Inspired by Tim Gesemann's project presentation and Squidward Codes' impact storytelling, moving beyond simple cards into full case studies with interactive detail dialogs.",
    details: [
      "Click 'Detail Proyek' on any card to view deep technical architecture, challenges, and solutions.",
      "Alternating visual weights highlighting primary capstone work.",
      "Direct links to GitHub repositories and live demos.",
    ],
    tips: [
      "Select 'Detail Proyek' on any card to view architectural diagrams, challenges, and implementation notes.",
    ],
  },
  timeline: {
    title: "About Project Timeline",
    badge: "Build Evolution",
    summary:
      "An interactive development timeline documenting how key systems evolved over time through progressive milestones.",
    purpose:
      "Inspired by Squidward Codes' build timeline, this section reveals the authentic engineering journey—from circuit prototyping and protocol design to testing and final integration.",
    details: [
      "Interactive project switcher to toggle between Smart Classroom and News Portal timelines.",
      "Chronological milestones detailing technical improvements and development notes.",
      "Highlights iterative engineering rather than just a final static result.",
    ],
  },
  education: {
    title: "About Academic History",
    badge: "Academic Foundation",
    summary:
      "Formal degree milestones, fundamental coursework, and active participation in technological seminars.",
    purpose:
      "Documents academic foundations at Universitas Trisakti (Teknik Informatika, IPK 3.24) and continuous learning through guest lectures and technical study excursions.",
    details: [
      "Bachelor of Computer Science curriculum spanning software engineering, networks, and distributed systems.",
      "Comprehensive list of guest lectures, seminars, and study excursions.",
    ],
  },
  certifications: {
    title: "About Certifications",
    badge: "Credentials",
    summary:
      "Verified technical certifications and skill accreditations grounded in practical web development fundamentals.",
    purpose:
      "Presents validated third-party credentials with issuance authorities, credential IDs, and relevant competencies.",
    details: [
      "Web Development Fundamentals certification accreditation.",
      "Clear issuer, year, and associated technical skills.",
    ],
  },
  contact: {
    title: "About Contact & Integration",
    badge: "Direct Communication",
    summary:
      "A clean, approachable communication channel powered by a Next.js server route, n8n webhook, and direct WhatsApp / Email access.",
    purpose:
      "Inspired by Tim Gesemann's straightforward contact presentation, allowing recruiters and engineering peers to connect seamlessly with real-time dispatch to the owner's phone.",
    details: [
      "Server-side Zod validation and spam honeypot protection.",
      "Direct WhatsApp and Email fallbacks for immediate conversation.",
    ],
  },
};
