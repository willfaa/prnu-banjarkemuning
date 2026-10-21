-- ========================================================
-- PRNU BANJARKEMUNING - SUPABASE REALTIME CONFIGURATION
-- ========================================================

-- Enable REPLICA IDENTITY FULL for detailed change payloads
ALTER TABLE public.organization_info REPLICA IDENTITY FULL;
ALTER TABLE public.pengurus REPLICA IDENTITY FULL;
ALTER TABLE public.banom REPLICA IDENTITY FULL;
ALTER TABLE public.lembaga REPLICA IDENTITY FULL;
ALTER TABLE public.kegiatan REPLICA IDENTITY FULL;
ALTER TABLE public.laporan_koin REPLICA IDENTITY FULL;
ALTER TABLE public.warta_berita REPLICA IDENTITY FULL;
ALTER TABLE public.masjid_info REPLICA IDENTITY FULL;
ALTER TABLE public.masjid_kas REPLICA IDENTITY FULL;

-- Add all tables to Supabase Realtime publication
DO $$
BEGIN
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE 
      public.organization_info, 
      public.pengurus, 
      public.banom, 
      public.lembaga, 
      public.kegiatan, 
      public.laporan_koin, 
      public.warta_berita,
      public.masjid_info,
      public.masjid_kas;
  EXCEPTION
    WHEN duplicate_object THEN
      RAISE NOTICE 'Table already in publication';
  END;
END $$;
