-- ========================================================
-- PRNU BANJARKEMUNING - DATABASE SCHEMA (SUPABASE POSTGRES)
-- ========================================================

-- 1. Metadata Organisasi PRNU
CREATE TABLE IF NOT EXISTS public.organization_info (
  id text PRIMARY KEY DEFAULT 'default',
  name text NOT NULL,
  short_name text NOT NULL,
  level text NOT NULL DEFAULT 'Ranting',
  mwc text NOT NULL DEFAULT 'Sedati',
  cabang text NOT NULL DEFAULT 'Sidoarjo',
  wilayah text NOT NULL DEFAULT 'Jawa Timur',
  address text NOT NULL,
  motto text NOT NULL,
  whatsapp text,
  email text,
  service_hours text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 2. Pengurus Harian & Syuriyah / Tanfidziyah
CREATE TABLE IF NOT EXISTS public.pengurus (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL CHECK (category IN ('syuriyah', 'tanfidziyah')),
  role text NOT NULL,
  name text NOT NULL,
  responsibility text,
  division text,
  status text DEFAULT 'Aktif Berkhidmat',
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 3. Badan Otonom (Banom)
CREATE TABLE IF NOT EXISTS public.banom (
  id text PRIMARY KEY,
  name text NOT NULL,
  full_name text NOT NULL,
  leader text NOT NULL,
  focus text NOT NULL,
  badge text NOT NULL,
  icon_symbol text NOT NULL,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 4. Lembaga Ranting
CREATE TABLE IF NOT EXISTS public.lembaga (
  code text PRIMARY KEY,
  name text NOT NULL,
  role text NOT NULL,
  highlight text NOT NULL,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 5. Kegiatan & Rutinan
CREATE TABLE IF NOT EXISTS public.kegiatan (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  time_info text NOT NULL,
  location text NOT NULL,
  description text NOT NULL,
  category text DEFAULT 'Ranting',
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 6. Laporan Kas Koin NU (LAZISNU)
CREATE TABLE IF NOT EXISTS public.laporan_koin (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  period text NOT NULL,
  total_income numeric NOT NULL DEFAULT 0,
  total_spent numeric NOT NULL DEFAULT 0,
  balance numeric NOT NULL DEFAULT 0,
  beneficiaries_count integer DEFAULT 0,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- 7. Warta & Berita
CREATE TABLE IF NOT EXISTS public.warta_berita (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'Warta Ranting',
  author text NOT NULL DEFAULT 'Tim Media PRNU',
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- 8. Informasi & Kas Masjid
CREATE TABLE IF NOT EXISTS public.masjid_info (
  id text PRIMARY KEY DEFAULT 'default',
  name text NOT NULL DEFAULT 'Masjid Jami'' Baitul Muttaqin Banjarkemuning',
  address text DEFAULT 'Jl. Raya Banjarkemuning, Sedati, Sidoarjo',
  description text DEFAULT 'Pusat ibadah, sholat Jumat, dan pembinaan keagamaan jamaah Nahdlatul Ulama Desa Banjarkemuning.',
  takmir_head text DEFAULT 'H. Ahmad Fauzi, S.Pd.I',
  imam_rawatib text DEFAULT 'Ust. H. Nur Kholis',
  muadzin_head text DEFAULT 'Bpk. M. Sholeh',
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.masjid_kas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  friday_date date NOT NULL,
  period_label text NOT NULL,
  income_box numeric NOT NULL DEFAULT 0,
  income_transfer numeric NOT NULL DEFAULT 0,
  expense_operational numeric NOT NULL DEFAULT 0,
  expense_maintenance numeric NOT NULL DEFAULT 0,
  balance numeric NOT NULL DEFAULT 0,
  khatib text,
  muadzin text,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS across all tables
ALTER TABLE public.organization_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pengurus ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banom ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lembaga ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.kegiatan ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.laporan_koin ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.warta_berita ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.masjid_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.masjid_kas ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'organization_info' AND policyname = 'Public read organization_info') THEN
    CREATE POLICY "Public read organization_info" ON public.organization_info FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'pengurus' AND policyname = 'Public read pengurus') THEN
    CREATE POLICY "Public read pengurus" ON public.pengurus FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'banom' AND policyname = 'Public read banom') THEN
    CREATE POLICY "Public read banom" ON public.banom FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'lembaga' AND policyname = 'Public read lembaga') THEN
    CREATE POLICY "Public read lembaga" ON public.lembaga FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'kegiatan' AND policyname = 'Public read kegiatan') THEN
    CREATE POLICY "Public read kegiatan" ON public.kegiatan FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'laporan_koin' AND policyname = 'Public read laporan_koin') THEN
    CREATE POLICY "Public read laporan_koin" ON public.laporan_koin FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'warta_berita' AND policyname = 'Public read warta_berita') THEN
    CREATE POLICY "Public read warta_berita" ON public.warta_berita FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'masjid_info' AND policyname = 'Public read masjid_info') THEN
    CREATE POLICY "Public read masjid_info" ON public.masjid_info FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tab FORCE ROW LEVEL SECURITY;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'masjid_kas' AND policyname = 'Public read masjid_kas') THEN
    CREATE POLICY "Public read masjid_kas" ON public.masjid_kas FOR SELECT USING (true);
  END IF;
END $$;
