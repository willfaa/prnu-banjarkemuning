# PRNU Banjarkemuning - Backend & Database Hub

Backend PRNU Desa Banjarkemuning dikelola menggunakan **Supabase PostgreSQL** (`ap-southeast-1` Singapore) dengan sistem keamanan Row Level Security (RLS) dan penyiaran data Realtime via WebSocket.

## Struktur Direktori
- `migrations/001_initial_schema.sql`: Definisi tabel (`organization_info`, `pengurus`, `banom`, `lembaga`, `kegiatan`, `laporan_koin`, `warta_berita`, `masjid_info`, `masjid_kas`) dan RLS Policies.
- `migrations/002_realtime_setup.sql`: Konfigurasi `REPLICA IDENTITY FULL` dan pendaftaran ke publikasi `supabase_realtime`.
- `seeds/001_initial_seed.sql`: Data inisialisasi awal pengurus, agenda, banom, berita, dan kas mingguan masjid.

## Kredensial Supabase
- **Project URL**: `https://ojywgvmgyabnaulldfxn.supabase.co`
- **Region**: `ap-southeast-1` (Singapore)
- **Status**: Active / Healthy
