import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "smart-classroom-polling",
    title: "Smart Classroom Interactive Polling System",
    subtitle: "Sistem Polling Interaktif Berbasis ESP32 dan ROS 2 untuk Ruang Kelas Pintar",
    category: "IoT & Hardware",
    year: "2025 - 2026",
    role: "Data Engineer / IoT Developer (Capstone Project)",
    description:
      "Perangkat embedded berbasis mikrokontroler ESP32 dan ekosistem robotika ROS 2 untuk memfasilitasi polling interaktif secara real-time di lingkungan smart classroom. Menggabungkan hardware prototyping, protokol komunikasi TCP sockets, dan integrasi backend.",
    highlights: [
      "Hardware 4 tombol input (A/B/C/D) dengan proteksi anti-double input dan indikator visual LED dwi-warna (hijau ACK, merah NACK).",
      "Konektivitas WiFi multi-SSID cerdas dengan algoritma pemilihan access point berdasarkan kekuatan sinyal RSSI tertinggi.",
      "Protokol komunikasi TCP client berkecepatan tinggi mengirim paket JSON (device_id, opsi jawaban, timestamp) ke server ROS 2.",
      "Penyimpanan konfigurasi identitas mahasiswa (nama & NIM) secara non-volatile ke memori Preferences/EEPROM.",
      "Integrasi server Python penangan socket TCP simultan multi-perangkat yang mempublikasikan data langsung ke topic ROS 2.",
      "Perancangan casing balok remote ergonomis siap pakai dengan akrilik / 3D printing.",
    ],
    technologies: [
      "ESP32",
      "ROS 2",
      "Python",
      "C/C++",
      "TCP/IP Sockets",
      "WiFi RSSI",
      "EEPROM",
      "3D Printing",
    ],
    githubUrl: "https://github.com/Ziddann",
    featured: true,
    status: "Completed",
    detail: {
      overview:
        "Proyek capstone teknik informatika Universitas Trisakti yang bertujuan mengatasi rendahnya interaksi dua arah antara dosen dan mahasiswa di ruang kuliah besar. Sistem ini menyediakan perangkat remote polling fisik nirkabel yang hemat daya, berlatensi sangat rendah, dan terintegrasi langsung dengan ekosistem robotika ROS 2 kampus.",
      problemStatement:
        "Metode polling konvensional melalui smartphone sering terhambat oleh distraksi notifikasi, koneksi seluler tidak stabil, serta keengganan mahasiswa membuka aplikasi tambahan. Diperlukan perangkat keras fisik mandiri yang instan, tahan banting, dan terverifikasi identitas mahasiswanya.",
      objectives: [
        "Membangun perangkat fisik berukuran genggam dengan 4 tombol jawaban dan umpan balik instan.",
        "Mencapai latensi transmisi jawaban di bawah 50 milidetik ke visualizer kelas.",
        "Mendukung mobilitas ruang kelas melalui pemilihan access point WiFi terkuat (RSSI).",
        "Menyimpan identitas mahasiswa (NIM & Nama) secara permanen di memori mikrokontroler.",
        "Mengalirkan data secara simultan ke topik ROS 2 untuk integrasi visualisasi data kelas.",
      ],
      architecture:
        "Arsitektur terbagi menjadi tiga lapis: (1) Perangkat Keras: Mikrokontroler ESP32, rangkaian input tombol dengan pull-up internal & debouncing, indikator LED status; (2) Lapisan Jaringan: Modul WiFi multi-SSID dengan algoritma scanning RSSI dan TCP socket client JSON; (3) Lapisan Server & Middleware: Server Python multithreaded yang menerima stream soket TCP simultan, memvalidasi paket, lalu mempublikasikannya ke topic ROS 2 (`/smart_classroom/polling_stream`).",
      developmentProcess: [
        "Tahap 1: Analisis kebutuhan sirkuit dan pembuatan skema wiring kelistrikan.",
        "Tahap 2: Pemrograman firmware ESP32 untuk pembacaan tombol dan LED state machine.",
        "Tahap 3: Implementasi modul koneksi nirkabel WiFi RSSI dan soket TCP client.",
        "Tahap 4: Pembuatan server backend Python pemroses TCP dan node ROS 2 publisher.",
        "Tahap 5: Perancangan casing fisik 3D printing dan uji coba performa multi-device.",
      ],
      challengesAndSolutions: [
        {
          challenge:
            "Fenomena bouncing pada tombol mekanis yang menyebabkan pengiriman jawaban ganda dalam satu klik.",
          solution:
            "Menerapkan algoritma software debouncing berbasis interval waktu non-blocking (millis) dan mekanisme state lockout sebelum sinyal ACK diterima.",
        },
        {
          challenge:
            "Jaringan WiFi ruang kelas yang memiliki multiple access point dengan nama SSID berbeda di tiap lantai.",
          solution:
            "Mengembangkan logika pemindaian berkala kekuatan sinyal (RSSI) untuk secara otomatis menghubungkan ESP32 ke router dengan sinyal paling prima.",
        },
        {
          challenge:
            "Penanganan puluhan perangkat polling yang mengirim paket JSON pada detik yang bersamaan.",
          solution:
            "Menggunakan arsitektur non-blocking TCP Socket Server di Python dengan thread worker pool terisolasi agar tidak terjadi hambatan antrean transmisi.",
        },
      ],
      finalOutcome:
        "Prototipe perangkat berhasil diuji dalam simulasi kelas pintar Universitas Trisakti dengan tingkat keberhasilan transmisi data 99.4%, latensi rata-rata 32ms, serta integrasi mulus dengan node ROS 2.",
    },
  },
  {
    id: "news-portal-winnicode",
    title: "News Portal Web Application",
    subtitle: "Aplikasi Portal Berita & Manajemen Publikasi Berbasis Laravel & React.js",
    category: "Fullstack Web",
    year: "2025",
    role: "Intern Fullstack Developer (PT. Winnicode Garuda Teknologi)",
    description:
      "Aplikasi web portal berita modern berskala produksi yang dikembangkan untuk mendukung distribusi konten jurnalistik dan publikasi digital di PT. Winnicode Garuda Teknologi Indonesia.",
    highlights: [
      "Arsitektur backend berbasis MVC menggunakan framework Laravel dengan manajemen RESTful API yang rapi.",
      "Antarmuka pengguna interaktif dan responsif dibangun menggunakan React.js dan Tailwind CSS.",
      "Sistem manajemen konten komprehensif: modul CRUD berita, kategori, media, dan manajemen redaksi.",
      "Implementasi otentikasi aman berbasis sesi/token, fitur komentar pembaca, dan bookmark artikel favorit.",
      "Mekanisme keamanan web teruji untuk mencegah kerentanan XSS, CSRF, dan SQL Injection.",
      "Pengembangan terintegrasi dengan Git version control, branch workflow, dan code review kolaboratif.",
    ],
    technologies: [
      "Laravel",
      "React.js",
      "Tailwind CSS",
      "MySQL",
      "RESTful API",
      "PHP",
      "Git",
    ],
    githubUrl: "https://github.com/Ziddann",
    featured: true,
    status: "Completed",
    detail: {
      overview:
        "Portal berita digital skala produksi yang dibangun selama magang di PT. Winnicode Garuda Teknologi Indonesia (Bandung) untuk melayani ribuan pembaca berita harian dengan kinerja loading cepat dan antarmuka yang bersih.",
      problemStatement:
        "Sistem lama perusahaan membutuhkan pembaruan arsitektural untuk memisahkan logika penyajian (frontend) dengan manajemen data (backend), serta mempercepat proses publikasi konten oleh tim jurnalis.",
      objectives: [
        "Membangun RESTful API performa tinggi berbasis Laravel untuk mengelola artikel dan media.",
        "Menerapkan frontend React.js responsif dengan Tailwind CSS yang ramah perangkat seluler.",
        "Menyediakan sistem otentikasi bertingkat (Admin, Editor, Pembaca).",
        "Mengamankan seluruh alur transaksi data dari ancaman keamanan siber standar OWASP.",
      ],
      architecture:
        "Arsitektur decoupled: Backend Laravel menyediakan antarmuka REST API terlindungi JWT/Sanctum yang terhubung ke database relasional MySQL. Frontend React.js berkomunikasi via HTTP client terenkripsi, merender antarmuka berita dengan Tailwind CSS, dan menyimpan state pengguna secara lokal.",
      developmentProcess: [
        "Minggu 1-2: Analisis kebutuhan bisnis redaksi, perancangan ERD database MySQL, dan setup Laravel MVC.",
        "Minggu 3-6: Pembangunan endpoint RESTful API: CRUD berita, kategori, tag, dan manajemen autentikasi.",
        "Minggu 7-10: Pembangunan antarmuka React.js, integrasi state, pagination artikel, dan fitur bookmark.",
        "Minggu 11-14: Audit keamanan aplikasi, optimasi indeks database, pengujian cross-device, dan dokumentasi.",
      ],
      challengesAndSolutions: [
        {
          challenge:
            "Kecepatan muat halaman artikel berita yang memuat banyak media gambar dan teks panjang.",
          solution:
            "Menerapkan optimasi query eager loading pada Eloquent ORM untuk mengeliminasi masalah N+1 queries, serta lazy loading pada elemen gambar frontend.",
        },
        {
          challenge:
            "Resiko keamanan input artikel dari celah Cross-Site Scripting (XSS) dan injeksi SQL.",
          solution:
            "Menerapkan sanitasi input menyeluruh dengan HTML Purifier pada backend Laravel, parameter binding PDO bawaan, serta perlindungan token CSRF di setiap mutasi data.",
        },
      ],
      finalOutcome:
        "Portal berita berhasil diluncurkan tepat waktu, menghasilkan penurunan waktu muat halaman hingga 40% dan kemudahan kerja bagi tim redaksi.",
    },
  },
  {
    id: "django-web-deployment",
    title: "Django Web Application Deployment",
    subtitle: "Pengembangan & Deployment Aplikasi Web Menggunakan Django Framework",
    category: "Fullstack Web",
    year: "2023",
    role: "Backend & Deployment Developer",
    description:
      "Implementasi dan konfigurasi deployment aplikasi web berbasis framework Django (Python), mencakup pengelolaan basis data PostgreSQL, routing URL, dan optimasi runtime aplikasi di environment server.",
    highlights: [
      "Implementasi arsitektur Model-Template-View (MTV) khas Django untuk modularitas komponen bisnis.",
      "Konfigurasi database relasional dan migrasi skema tabel yang aman.",
      "Setup environment deployment server, manajemen secret key, dan optimasi static assets.",
    ],
    technologies: ["Django", "Python", "PostgreSQL", "Linux", "Web Deployment"],
    githubUrl: "https://github.com/Ziddann",
    featured: false,
    status: "Completed",
    detail: {
      overview:
        "Proyek eksplorasi deployment aplikasi web dengan kerangka kerja Django, berfokus pada transisi dari server development lokal ke server produksi berbasis Linux.",
      problemStatement:
        "Pengembang sering kali menghadapi tantangan saat memindahkan proyek Django lokal ke server nyata, terutama terkait pengelolaan secret keys, file statis, dan koneksi database produksi.",
      objectives: [
        "Menyiapkan lingkungan server Linux yang aman dan terisolasi menggunakan virtualenv.",
        "Mengonfigurasi database produksi PostgreSQL dan migrasi skema.",
        "Mengotomatiskan pengumpulan aset statis (Collectstatic).",
      ],
      architecture:
        "Aplikasi Django berjalan di atas WSGI/ASGI server dengan PostgreSQL sebagai pengelola penyimpanan data relasional, dilindungi oleh environment variable aman.",
      developmentProcess: [
        "Penyusunan model data dan views berbasis Django MTV.",
        "Konfigurasi settings terpisah antara development dan production.",
        "Setup database PostgreSQL dan pengujian migrasi data.",
        "Pengujian fungsionalitas route dan performa server.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Penyajian file statis (CSS/JS/Images) yang sering gagal di environment produksi.",
          solution: "Menerapkan konfigurasi WhiteNoise dan manajemen direktori static root secara tepat.",
        },
      ],
      finalOutcome:
        "Aplikasi web Django berhasil dideploy dengan stabil, aman, dan siap menangani request produksi.",
    },
  },
  {
    id: "data-processing-analytics",
    title: "Data Processing & Analytics Pipeline",
    subtitle: "Pipeline Pemrosesan, Pembersihan, dan Analisis Data Terstruktur",
    category: "Data & AI",
    year: "2023",
    role: "Data Analyst / Developer",
    description:
      "Proyek eksplorasi pengolahan data terstruktur untuk mentransformasi dataset mentah menjadi insight analitis yang dapat ditindaklanjuti menggunakan ekosistem komputasi Python.",
    highlights: [
      "Pembersihan data (data cleansing) dari nilai anomali, missing values, dan format inkonsisten.",
      "Transformasi dan agregasi data terstruktur menggunakan pustaka Pandas dan manipulasi array NumPy.",
      "Visualisasi ringkasan tren metrik utama untuk membantu interpretasi temuan data.",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Data Cleansing", "Data Analysis"],
    githubUrl: "https://github.com/Ziddann",
    featured: false,
    status: "Completed",
    detail: {
      overview:
        "Pipeline komputasi data terstruktur yang memproses dataset tabular mentah untuk menghasilkan laporan statistik yang bersih dan siap untuk pemodelan analitik lanjutan.",
      problemStatement:
        "Dataset di dunia nyata seringkali tercemar oleh nilai kosong, tipe data keliru, dan inkonsistensi penamaan yang menghalangi ekstraksi wawasan akurat.",
      objectives: [
        "Mendeteksi dan menangani missing values secara statistik (imputasi/drop).",
        "Melakukan normalisasi dan transformasi kolom data kuantitatif dan kualitatif.",
        "Menghasilkan ringkasan korelasi dan distribusi metrik penting.",
      ],
      architecture:
        "Pipeline modular Python: Input CSV/JSON -> Modul Cleaning -> Modul Transformasi & Agregasi -> Output DataFrame bersih dan grafik visualisasi.",
      developmentProcess: [
        "Eksplorasi data awal (Exploratory Data Analysis).",
        "Penyusunan fungsi pembersih data otomatis.",
        "Agregasi metrik berdasarkan kelompok variabel.",
        "Penyajian kesimpulan dan interpretasi temuan.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Adanya outlier ekstrem yang merusak rata-rata data secara drastis.",
          solution: "Menggunakan metode Interquartile Range (IQR) untuk memfilter dan membatasi nilai pencilan.",
        },
      ],
      finalOutcome:
        "Dataset berhasil dibersihkan dengan efisiensi tinggi, menyajikan gambaran statistik yang valid dan dapat diandalkan.",
    },
  },
  {
    id: "rpl-system-implementation",
    title: "Software Engineering System Implementation",
    subtitle: "Implementasi Sistem Berbasis Metodologi Rekayasa Perangkat Lunak (RPL)",
    category: "Software Engineering",
    year: "2023",
    role: "Software Engineering Student Developer",
    description:
      "Penerapan prinsip-prinsip Rekayasa Perangkat Lunak (Software Engineering) dalam perancangan dan implementasi sistem komputasi berorientasi objek yang terdokumentasi rapi.",
    highlights: [
      "Penyusunan analisis kebutuhan fungsional dan non-fungsional sistem perangkat lunak.",
      "Pemodelan diagram perancangan sistem berbasis Unified Modeling Language (UML): Use Case, Activity, & Class Diagram.",
      "Pengujian fungsional modul sistem secara sistematis untuk memastikan kepatuhan alur logika program.",
    ],
    technologies: [
      "Software Engineering",
      "System Design",
      "UML Modeling",
      "SDLC",
      "Software Testing",
    ],
    githubUrl: "https://github.com/Ziddann",
    featured: false,
    status: "Completed",
    detail: {
      overview:
        "Proyek komprehensif mata kuliah Rekayasa Perangkat Lunak Universitas Trisakti yang mempraktikkan siklus hidup pengembangan perangkat lunak (SDLC) dari tahap konseptual hingga pengujian fungsional.",
      problemStatement:
        "Banyak proyek gagal karena kurangnya dokumentasi perancangan, ketidakjelasan batas fungsionalitas sistem, dan ketiadaan metode pengujian terstruktur.",
      objectives: [
        "Menyusun Software Requirements Specification (SRS) yang terstruktur.",
        "Memodelkan sistem dengan standar UML baku (Use Case, Activity, Sequence, Class Diagram).",
        "Mengimplementasikan kode modular dengan prinsip Object-Oriented Programming (OOP).",
        "Melakukan pengujian black-box untuk memverifikasi setiap skenario use case.",
      ],
      architecture:
        "Perancangan berbasis objek modular yang memisahkan antara layer Presentasi, Bisnis/Logika, dan Data Access Layer (DAL).",
      developmentProcess: [
        "Tahap Elisitasi Kebutuhan dan Pembuatan Dokumen Spesifikasi.",
        "Tahap Pemodelan Visual Diagram UML.",
        "Tahap Pengkodean Modul Perangkat Lunak.",
        "Tahap Pengujian Black-Box dan Penyusunan Laporan Evaluasi.",
      ],
      challengesAndSolutions: [
        {
          challenge: "Perubahan kebutuhan fitur di tengah proses implementasi kode.",
          solution: "Menerapkan prinsip perancangan loosely coupled dan pemisahan interface agar dampak perubahan kode tetap terisolasi.",
        },
      ],
      finalOutcome:
        "Sistem berhasil diimplementasikan sesuai dengan seluruh spesifikasi kebutuhan yang telah disepakati dan lolos uji fungsional 100%.",
    },
  },
];
