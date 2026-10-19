# Panduan Desain (Design Direction) — PRNU Banjarkemuning

Website Resmi Pengurus Ranting Nahdlatul Ulama Desa Banjarkemuning.

---

## 1. Identitas & Karakter (Brand Identity)
- **Nama Organisasi**: Pengurus Ranting Nahdlatul Ulama (PRNU) Desa Banjarkemuning
- **Karakter**: Islami Nusantara modern, megah dan berwibawa, penuh gambar (*full picture*), beranimasi halus, responsif (*mobile & laptop*), dan terhubung ke backend Supabase.
- **Nilai Utama**: Tawasuth (moderat), Tawazun (seimbang), Tasamuh (toleran), dan I'tidal (adil).
- **Tone & Rasa**: Jam'iyyah khidmat umat yang berwibawa, dinamis, hidup, dan transparan dalam pelaporan.

---

## 2. Palet Warna (Color Palette)
- **Hijau Utama NU (`--color-nu-green`)**: `#007a3d`
- **Hijau Tua Emerald (`--color-nu-deep`)**: `#004d26`
- **Hijau Gelap Latar (`--color-nu-darker`)**: `#002613`
- **Aksen Emas Nusantara (`--color-nu-gold`)**: `#c59b27`
- **Emas Terang (`--color-nu-gold-light`)**: `#f1cf65`
- **Latar Belakang Bersih (`--color-bg-light`)**: `#f8faf8`
- **Glassmorphism / Glass Card (`--glass-surface`)**: `rgba(255, 255, 255, 0.92)`
- **Glass Dark (`--glass-dark`)**: `rgba(0, 38, 19, 0.85)`
- **Teks Utama (`--color-text-main`)**: `#112216` (Kontras tinggi WCAG AAA/AA)

---

## 3. Tipografi (Typography)
- **Font Utama**: `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`
- **Font Aksen Judul**: `'Merriweather', 'Amiri', serif`

---

## 4. Dials Antislop & Efek Visual (User Directed)
- **ENERGY: 3 / 5** — Berenergi, megah dengan latar fotografi arsitektur Islam Nusantara (*full picture*).
- **RHYTHM: 3 / 5** — Ritme dinamis: Hero Imersif, Mukadimah, Statistik Capaian, Struktur Tab, Banom, Transparansi Koin NU Parallax, Warta Berita, Agenda, dan Kontak.
- **MOTION: 3 / 5** — Efek parallax pada backdrop gambar hero dan banner laporan koin, transisi lembut pada hover kartu, animasi counter angka statistik, dan modal interaktif.

---

## 5. Integrasi Backend & Deployment
- **Backend Database**: Supabase (Project ID: `ojywgvmgyabnaulldfxn`, Region: `ap-southeast-1`).
- **Kelola Data Dinamis**: Menghindari data hardcoded agar pengurus dapat memperbarui data pengurus, agenda, warta, dan laporan koin via Supabase Studio dashboard.
- **Deployment**: Siap dideploy ke Vercel via `vercel.json` dan variabel lingkungan `.env`.
