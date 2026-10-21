-- ========================================================
-- PRNU BANJARKEMUNING - INITIAL SEED DATA
-- ========================================================

-- 1. Organization Metadata
INSERT INTO public.organization_info (id, name, short_name, level, mwc, cabang, wilayah, address, motto, whatsapp, email, service_hours)
VALUES (
  'default',
  'Pengurus Ranting Nahdlatul Ulama Desa Banjarkemuning',
  'PRNU BANJARKEMUNING',
  'Pengurus Ranting (Desa / Kelurahan)',
  'Kecamatan Sedati',
  'Kabupaten Sidoarjo',
  'Provinsi Jawa Timur',
  'Jl. Raya Banjarkemuning No. 19, Kec. Sedati, Kab. Sidoarjo, Jawa Timur 61253',
  'Merawat Tradisi, Meneguhkan Kemandirian Umat',
  '6281234567890',
  'ranting.banjarkemuning@nu.or.id',
  'Senin - Ahad, 08:00 - 21:00 WIB'
)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  short_name = EXCLUDED.short_name,
  address = EXCLUDED.address,
  motto = EXCLUDED.motto;

-- 2. Pengurus Harian
INSERT INTO public.pengurus (category, role, name, responsibility, division, status, sort_order)
VALUES
  ('syuriyah', 'Rais Syuriyah', 'K.H. Mas''ud Ali', 'Pembina & Pengarah Keagamaan', 'Syuriyah', 'Aktif Berkhidmat', 1),
  ('syuriyah', 'Wakil Rais Syuriyah', 'K.H. Nur Kholis', 'Koordinator Fatwa & Ibadah', 'Syuriyah', 'Aktif Berkhidmat', 2),
  ('syuriyah', 'Katib Syuriyah', 'Ust. Ahmad Fauzi, S.Pd.I', 'Sekretaris Hukum & Bahtsul Masail', 'Syuriyah', 'Aktif Berkhidmat', 3),
  ('syuriyah', 'A''wan Syuriyah', 'H. Syamsul Huda', 'Penasehat Kesejahteraan Jamaah', 'Syuriyah', 'Aktif Berkhidmat', 4),
  ('tanfidziyah', 'Ketua Tanfidziyah', 'H. Moch. Hasan Bisri', 'Penanggung Jawab Eksekutif Organisasi', 'Tanfidziyah', 'Aktif Berkhidmat', 5),
  ('tanfidziyah', 'Wakil Ketua Tanfidziyah', 'Ust. M. Ridwan, M.Pd', 'Bidang Organisasi & Kaderisasi', 'Tanfidziyah', 'Aktif Berkhidmat', 6),
  ('tanfidziyah', 'Sekretaris', 'Achmad Zaini, S.Kom', 'Administrasi, IT & Persuratan', 'Tanfidziyah', 'Aktif Berkhidmat', 7),
  ('tanfidziyah', 'Wakil Sekretaris', 'M. Fathur Rozak', 'Dokumentasi & Hubungan Masyarakat', 'Tanfidziyah', 'Aktif Berkhidmat', 8),
  ('tanfidziyah', 'Bendahara', 'H. Abdul Ghofur', 'Pengelolaan Kas & Akuntabilitas Finansial', 'Tanfidziyah', 'Aktif Berkhidmat', 9),
  ('tanfidziyah', 'Wakil Bendahara', 'H. Zainal Abidin', 'Manajemen Aset & Logistik Organisasi', 'Tanfidziyah', 'Aktif Berkhidmat', 10)
ON CONFLICT DO NOTHING;

-- 3. Badan Otonom (Banom)
INSERT INTO public.banom (id, name, full_name, leader, focus, badge, icon_symbol, sort_order)
VALUES
  ('ansor', 'GP Ansor', 'Gerakan Pemuda Ansor Ranting Banjarkemuning', 'Sahabat Muhammad Ilham, S.H', 'Kaderisasi Pemuda, Majelis Rijalul Ansor, & Satkoryon Banser', 'Pemuda Tangguh', '⚡', 1),
  ('fatayat', 'Fatayat NU', 'Pimpinan Ranting Fatayat NU Banjarkemuning', 'Sahabati Hj. Siti Aminah, S.E', 'Pemberdayaan Perempuan Muda, Kesehatan Ibu & Anak, Kajian Aswaja', 'Pemudi Berdaya', '🌸', 2),
  ('ipnu', 'IPNU', 'Ikatan Pelajar Nahdlatul Ulama Banjarkemuning', 'Rekan Fikri Maulana', 'Pengkaderan Pelajar Putra, Literasi Santri, & Kreativitas Digital', 'Pelajar Aswaja', '📚', 3),
  ('ippnu', 'IPPNU', 'Ikatan Pelajar Putri Nahdlatul Ulama Banjarkemuning', 'Rekanita Nabila Zahra', 'Karakter Pelajar Putri, Keputrian, & Gerakan Anti-Narkoba', 'Santriwati Hebat', '🌺', 4),
  ('muslimat', 'Muslimat NU', 'Pimpinan Ranting Muslimat NU Banjarkemuning', 'Hj. Siti Romlah', 'Majelis Ta''lim Yasin-Tahlil, Bakti Sosial, & Pembinaan Keluarga Sakinah', 'Ibu Mandiri', '🌙', 5),
  ('pagar_nusa', 'Pagar Nusa', 'Pencak Silat Nahdlatul Ulama Pagar Nusa', 'Kang Mas Bambang Setiawan', 'Seni Beladiri Tradisi, Benteng Ulama, & Ketahanan Mental Santri', 'Benteng Ulama', '⚔️', 6)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  full_name = EXCLUDED.full_name,
  leader = EXCLUDED.leader,
  focus = EXCLUDED.focus;

-- 4. Lembaga Ranting
INSERT INTO public.lembaga (code, name, role, highlight, sort_order)
VALUES
  ('LAZISNU', 'Lembaga Amil Zakat, Infaq & Shadaqah NU', 'Pengelolaan ZIS, Gerakan Koin Sehat, dan Santunan Anak Yatim', 'Pengelola Koin NU', 1),
  ('LDNU', 'Lembaga Dakwah Nahdlatul Ulama', 'Koordinasi Jadwal Khutbah Jumat, Majelis Istighotsah & Bahtsul Masail', 'Pemberdayaan Da''i', 2),
  ('LP_MAARIF', 'Lembaga Pendidikan Ma''arif NU', 'Pendampingan TPQ, Madrasah Diniyah, dan Karakter Pelajar Muslim', 'Pendidikan Santri', 3)
ON CONFLICT (code) DO UPDATE SET
  name = EXCLUDED.name,
  role = EXCLUDED.role;

-- 5. Kegiatan & Agenda
INSERT INTO public.kegiatan (title, time_info, location, description, category, sort_order)
VALUES
  ('Lailatul Ijtima'' Rutin Ranting', 'Malam Ahad Kliwon, Ba''da Isya', 'Masjid Baitul Muttaqin Banjarkemuning', 'Dzikir bersama, pembacaan ratibul haddad, serta laporan berkala perkembangan program ranting bersama para kyai dan sesepuh.', 'Ranting', 1),
  ('Kajian Kitab Kuning & Bahtsul Masail', 'Setiap Malam Rabu, 19:30 WIB', 'Musholla Al-Ikhlas RT 04', 'Kajian Fathul Qorib dan Risalah Ahlussunnah wal Jama''ah karya Hadratussyaikh KH. Hasyim Asy''ari oleh Katib Syuriyah.', 'Syuriyah', 2),
  ('MDS Rijalul Ansor & Diba''iyah', 'Malam Jumat Manis, 19:45 WIB', 'Bergilir antar rumah kader & musholla', 'Pembacaan Maulid Simthudduror, shalawat nabi, serta penguatan wawasan kebangsaan kader muda Ansor dan Banser.', 'GP Ansor', 3),
  ('Gerakan Kaleng Koin Sehat LAZISNU', 'Pekan Ke-4 Setiap Bulan', 'Serentak se-Desa Banjarkemuning', 'Penjemputan kaleng Koin NU oleh petugas UPZIS LAZISNU ke rumah-rumah warga nahdliyin untuk dana sosial umat.', 'LAZISNU', 4)
ON CONFLICT DO NOTHING;

-- 6. Laporan Kas Koin NU
INSERT INTO public.laporan_koin (period, total_income, total_spent, balance, beneficiaries_count, notes)
VALUES (
  'Triwulan Terakhir (Oktober 2026)',
  12850000,
  9400000,
  3450000,
  42,
  'Disalurkan untuk santunan anak yatim desa, bantuan pengobatan dhuafa, dan operasional layanan mobil tanggap darurat.'
)
ON CONFLICT DO NOTHING;

-- 7. Warta Berita
INSERT INTO public.warta_berita (title, slug, excerpt, content, category, author, published_at)
VALUES (
  'Semarak Peringatan Hari Santri di Desa Banjarkemuning',
  'peringatan-hari-santri-banjarkemuning',
  'Ratusan jamaah, santri TPQ, dan keluarga nahdliyin memadati jalanan Desa Banjarkemuning dalam rangka apel akbar dan pawai obor Hari Santri Nasional.',
  'Banjarkemuning, Sedati - Peringatan Hari Santri Nasional tahun 2026 dirayakan penuh takzim dan kegembiraan oleh Pengurus Ranting Nahdlatul Ulama Desa Banjarkemuning. Acara diawali dengan apel akbar Banser dan GP Ansor, dilanjutkan dengan pawai obor santri dari seluruh TPQ se-desa, serta ditutup dengan doa bersama untuk keselamatan bangsa yang dipimpin langsung oleh Rais Syuriyah K.H. Mas''ud Ali.',
  'Warta Ranting',
  'Tim Media PRNU',
  now()
)
ON CONFLICT (slug) DO NOTHING;
