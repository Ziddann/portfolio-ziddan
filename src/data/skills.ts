import { SkillCategoryGroup } from "@/types";

export const skillCategoriesData: SkillCategoryGroup[] = [
  {
    category: "Programming Languages",
    description: "Bahasa pemrograman utama untuk rekayasa perangkat lunak, sistem embedded, dan komputasi data.",
    skills: [
      { name: "C / C++ (Embedded)", category: "Programming Languages", level: "Proficient", percentage: 80 },
      { name: "PHP", category: "Programming Languages", level: "Proficient", percentage: 82 },
      { name: "JavaScript (ES6+)", category: "Programming Languages", level: "Proficient", percentage: 85 },
      { name: "TypeScript", category: "Programming Languages", level: "Comfortable", percentage: 75 },
      { name: "Python", category: "Programming Languages", level: "Proficient", percentage: 80 },
      { name: "SQL", category: "Programming Languages", level: "Proficient", percentage: 82 },
      { name: "HTML5 & CSS3", category: "Programming Languages", level: "Advanced", percentage: 90 },
    ],
  },
  {
    category: "Frontend Development",
    description: "Pembangunan antarmuka web modern, responsif, aksesibel, dan berkinerja tinggi.",
    skills: [
      { name: "React.js", category: "Frontend Development", level: "Proficient", percentage: 85 },
      { name: "Next.js (App Router)", category: "Frontend Development", level: "Comfortable", percentage: 78 },
      { name: "Tailwind CSS", category: "Frontend Development", level: "Advanced", percentage: 90 },
      { name: "Responsive UI Design", category: "Frontend Development", level: "Advanced", percentage: 88 },
      { name: "Component State Management", category: "Frontend Development", level: "Proficient", percentage: 80 },
    ],
  },
  {
    category: "Backend Development",
    description: "Pengembangan server, arsitektur MVC, RESTful API, dan integritas transaksi data.",
    skills: [
      { name: "Laravel (PHP)", category: "Backend Development", level: "Proficient", percentage: 85 },
      { name: "Django (Python)", category: "Backend Development", level: "Comfortable", percentage: 72 },
      { name: "RESTful API Engineering", category: "Backend Development", level: "Proficient", percentage: 85 },
      { name: "MVC Architecture", category: "Backend Development", level: "Proficient", percentage: 85 },
      { name: "Web Security (XSS/CSRF/SQLi)", category: "Backend Development", level: "Comfortable", percentage: 78 },
    ],
  },
  {
    category: "Database Management",
    description: "Pemodelan basis data relasional, pengindeksan, optimasi kueri, dan integritas data.",
    skills: [
      { name: "MySQL", category: "Database Management", level: "Proficient", percentage: 84 },
      { name: "PostgreSQL", category: "Database Management", level: "Comfortable", percentage: 74 },
      { name: "Database Normalization & ERD", category: "Database Management", level: "Proficient", percentage: 82 },
      { name: "Eloquent & Query Builders", category: "Database Management", level: "Proficient", percentage: 80 },
    ],
  },
  {
    category: "Development Tools & IoT",
    description: "Hardware interfacing, mikrokontroler, robotika ROS 2, dan perkakas kolaborasi tim.",
    skills: [
      { name: "ESP32 & Arduino", category: "Development Tools & IoT", level: "Advanced", percentage: 88 },
      { name: "ROS 2 (Robot Operating System)", category: "Development Tools & IoT", level: "Comfortable", percentage: 75 },
      { name: "TCP/IP Sockets Communication", category: "Development Tools & IoT", level: "Proficient", percentage: 82 },
      { name: "WiFi RSSI Signal Management", category: "Development Tools & IoT", level: "Proficient", percentage: 82 },
      { name: "EEPROM / Preferences Memory", category: "Development Tools & IoT", level: "Proficient", percentage: 80 },
      { name: "Git & GitHub Collaboration", category: "Development Tools & IoT", level: "Proficient", percentage: 85 },
      { name: "Postman & API Testing", category: "Development Tools & IoT", level: "Proficient", percentage: 82 },
      { name: "Linux / Bash Environment", category: "Development Tools & IoT", level: "Comfortable", percentage: 76 },
    ],
  },
  {
    category: "Soft Skills & Methodologies",
    description: "Kecakapan interpersonal, berpikir analitis, dan metodologi rekayasa sistem.",
    skills: [
      { name: "Pemecahan Masalah Sistematis", category: "Soft Skills & Methodologies", level: "Advanced", percentage: 90 },
      { name: "Komunikasi & Kolaborasi Tim", category: "Soft Skills & Methodologies", level: "Advanced", percentage: 90 },
      { name: "Berpikir Analitis", category: "Soft Skills & Methodologies", level: "Advanced", percentage: 88 },
      { name: "Adaptabilitas Teknologi Cepat", category: "Soft Skills & Methodologies", level: "Advanced", percentage: 92 },
      { name: "SDLC & UML Modeling", category: "Soft Skills & Methodologies", level: "Proficient", percentage: 82 },
      { name: "Manajemen Waktu & Prioritas", category: "Soft Skills & Methodologies", level: "Proficient", percentage: 85 },
    ],
  },
];
