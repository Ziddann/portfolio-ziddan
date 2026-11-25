import { ProjectMilestone } from "@/types";

export const projectMilestonesData: ProjectMilestone[] = [
  // Milestones for Capstone Smart Classroom
  {
    id: "sc-m1",
    projectId: "smart-classroom-polling",
    projectName: "Smart Classroom Polling System",
    milestone: "Hardware Circuit Design & Multi-Input Logic",
    date: "Aug 2025",
    featureImplemented:
      "Perancangan rangkaian embedded ESP32 dengan 4 tombol jawaban (A/B/C/D) dan indikator LED dwi-warna (hijau ACK, merah NACK).",
    technicalImprovement:
      "Menerapkan mekanisme software debounce dan proteksi anti-double input untuk mencegah pengiriman jawaban ganda yang tidak disengaja.",
    notes:
      "Pengujian awal hardware pada prototipe breadboard untuk memastikan kestabilan tegangan dan respon tombol < 15ms.",
  },
  {
    id: "sc-m2",
    projectId: "smart-classroom-polling",
    projectName: "Smart Classroom Polling System",
    milestone: "Multi-SSID Auto-Connect via WiFi RSSI",
    date: "Sep 2025",
    featureImplemented:
      "Algoritma pemindaian multi-SSID jaringan WiFi ruang kelas dan pemilihan otomatis berdasarkan kekuatan sinyal RSSI tertinggi.",
    technicalImprovement:
      "Menghilangkan ketergantungan pada 1 access point statis, mendukung mobilitas perangkat polling di berbagai sudut ruangan kelas.",
    notes:
      "Menyimpan kredensial WiFi terenkripsi dan menambahkan indikator LED berkedip saat scanning jaringan.",
  },
  {
    id: "sc-m3",
    projectId: "smart-classroom-polling",
    projectName: "Smart Classroom Polling System",
    milestone: "TCP Sockets Communication & Non-Volatile Memory",
    date: "Nov 2025",
    featureImplemented:
      "Pengembangan protokol komunikasi client TCP berkecepatan tinggi dengan serialisasi JSON (device_id, jawaban, timestamp) ke server.",
    technicalImprovement:
      "Integrasi modul Preferences/EEPROM untuk menyimpan identitas user (nama dan NIM) secara permanen pada memori internal ESP32.",
    notes:
      "Perangkat dapat dikonfigurasi sekali saat inisialisasi awal dan tetap mengingat identitas mahasiswa saat reboot atau pergantian baterai.",
  },
  {
    id: "sc-m4",
    projectId: "smart-classroom-polling",
    projectName: "Smart Classroom Polling System",
    milestone: "ROS 2 Python Server Integration & Multi-Client Handler",
    date: "Dec 2025",
    featureImplemented:
      "Pengembangan backend server Python yang menangani koneksi TCP multithreaded simultan dan mempublikasikan data polling ke ROS 2 topic.",
    technicalImprovement:
      "Sistem mampu menerima transmisi data dari puluhan remote polling sekaligus dengan latensi pengiriman < 50ms tanpa paket loss.",
    notes:
      "Pesan yang masuk otomatis diproses dan disalurkan ke node ROS 2 untuk ditampilkan pada visualizer kelas pintar.",
  },
  {
    id: "sc-m5",
    projectId: "smart-classroom-polling",
    projectName: "Smart Classroom Polling System",
    milestone: "Ergonomic 3D Casing & End-to-End System Testing",
    date: "Jan 2026 - Feb 2026",
    featureImplemented:
      "Perancangan casing fisik balok remote ergonomis menggunakan akrilik / 3D printing dengan lubang presisi tombol, LED, dan port daya.",
    technicalImprovement:
      "Integrasi menyeluruh hardware sirkuit, daya baterai, konektivitas nirkabel, dan integrasi dashboard web ruang kelas pintar.",
    notes:
      "Penyusunan dokumentasi teknis lengkap meliputi diagram arsitektur sistem, skema wiring kelistrikan, dan panduan pengoperasian perangkat.",
  },

  // Milestones for News Portal
  {
    id: "np-m1",
    projectId: "news-portal-winnicode",
    projectName: "News Portal Web Application",
    milestone: "Database Schema Design & MVC Backend Setup",
    date: "Mar 2025",
    featureImplemented:
      "Perancangan skema database relasional MySQL untuk portal berita, kategori, media, user roles, dan artikel jurnalistik.",
    technicalImprovement:
      "Penerapan arsitektur MVC berbasis Laravel dengan relasi Eloquent yang efisien serta migrasi tabel terstruktur.",
    notes:
      "Memastikan normalisasi database dan integritas foreign keys antar entitas redaksi.",
  },
  {
    id: "np-m2",
    projectId: "news-portal-winnicode",
    projectName: "News Portal Web Application",
    milestone: "RESTful API Engineering & Authentication Layer",
    date: "Apr 2025",
    featureImplemented:
      "Pembangunan RESTful API lengkap untuk integrasi frontend-backend, mencakup autentikasi sesi, token, dan otorisasi hak akses.",
    technicalImprovement:
      "Menerapkan praktik keamanan penting: pencegahan SQL Injection, validasi form terpusat, dan sanitasi input.",
    notes:
      "Dokumentasi endpoint API menggunakan standar OpenAPI/Postman untuk mempermudah integrasi tim frontend.",
  },
  {
    id: "np-m3",
    projectId: "news-portal-winnicode",
    projectName: "News Portal Web Application",
    milestone: "React.js Frontend & Tailwind CSS Implementation",
    date: "May 2025",
    featureImplemented:
      "Pengembangan antarmuka pengguna responsif berbasis komponen React.js dan styling modern menggunakan Tailwind CSS.",
    technicalImprovement:
      "Antarmuka ramah mobile dengan waktu muat cepat dan pengalaman membaca artikel yang nyaman di smartphone maupun desktop.",
    notes:
      "Mengintegrasikan fitur interaktif: sistem komentar, pencarian berita realtime, dan penyimpanan bookmark artikel pengguna.",
  },
  {
    id: "np-m4",
    projectId: "news-portal-winnicode",
    projectName: "News Portal Web Application",
    milestone: "Security Auditing, Performance Optimization & Delivery",
    date: "Jun 2025 - Jul 2025",
    featureImplemented:
      "Audit keamanan menyeluruh (pencegahan XSS & CSRF token), optimasi query database, dan pengujian performa sistem.",
    technicalImprovement:
      "Penggunaan Git untuk kolaborasi tim, manajemen branch, code review pull request, dan penyusunan dokumentasi teknis.",
    notes:
      "Sistem portal berita berjalan stabil dan siap digunakan oleh tim redaksi PT. Winnicode Garuda Teknologi Indonesia.",
  },
];

