import { supabase } from './supabaseClient';

export const defaultMeta = {
  name: 'Pengurus Ranting Nahdlatul Ulama Desa Banjarkemuning',
  shortName: 'PRNU BANJARKEMUNING',
  level: 'Pengurus Ranting (Desa / Kelurahan)',
  mwc: 'Kecamatan Sedati',
  cabang: 'Kabupaten Sidoarjo',
  wilayah: 'Provinsi Jawa Timur',
  address: 'Jl. Raya Banjarkemuning No. 19, Kec. Sedati, Kab. Sidoarjo, Jawa Timur 61253',
  motto: 'Merawat Tradisi, Meneguhkan Kemandirian Umat',
  contact: {
    whatsapp: '6281234567890',
    email: 'ranting.banjarkemuning@nu.or.id',
    serviceHours: 'Senin - Ahad, 08:00 - 21:00 WIB'
  }
};

export async function getOrganizationInfo() {
  try {
    const { data, error } = await supabase
      .from('organization_info')
      .select('*')
      .eq('id', 'default')
      .maybeSingle();

    if (error || !data) return defaultMeta;
    return {
      name: data.name,
      shortName: data.short_name,
      level: data.level,
      mwc: data.mwc,
      cabang: data.cabang,
      wilayah: data.wilayah,
      address: data.address,
      motto: data.motto,
      contact: {
        whatsapp: data.whatsapp,
        email: data.email,
        serviceHours: data.service_hours
      }
    };
  } catch {
    return defaultMeta;
  }
}

export async function getPengurus() {
  try {
    const { data, error } = await supabase
      .from('pengurus')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) return { tanfidziyah: [], syuriyah: [] };

    return {
      tanfidziyah: data.filter((p) => p.category === 'tanfidziyah'),
      syuriyah: data.filter((p) => p.category === 'syuriyah')
    };
  } catch {
    return { tanfidziyah: [], syuriyah: [] };
  }
}

export async function getBanomAndLembaga() {
  try {
    const [banomRes, lembagaRes] = await Promise.all([
      supabase.from('banom').select('*').order('sort_order', { ascending: true }),
      supabase.from('lembaga').select('*').order('sort_order', { ascending: true })
    ]);

    return {
      banom: banomRes.data || [],
      lembaga: lembagaRes.data || []
    };
  } catch {
    return { banom: [], lembaga: [] };
  }
}

export async function getKegiatanList() {
  try {
    const { data, error } = await supabase
      .from('kegiatan')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data) return [];
    return data;
  } catch {
    return [];
  }
}

export async function getLaporanKoin() {
  try {
    const { data, error } = await supabase
      .from('laporan_koin')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error || !data) {
      return {
        period: 'Triwulan Terakhir (Oktober 2026)',
        total_income: 12850000,
        total_spent: 9400000,
        balance: 3450000,
        beneficiaries_count: 42,
        notes: 'Disalurkan untuk santunan anak yatim dan operasional layanan sosial dhuafa.'
      };
    }
    return data;
  } catch {
    return {
      period: 'Triwulan Terakhir (Oktober 2026)',
      total_income: 12850000,
      total_spent: 9400000,
      balance: 3450000,
      beneficiaries_count: 42,
      notes: 'Disalurkan untuk santunan anak yatim dan operasional layanan sosial dhuafa.'
    };
  }
}

export async function getWartaBerita() {
  try {
    const { data, error } = await supabase
      .from('warta_berita')
      .select('*')
      .order('published_at', { ascending: false });

    if (error || !data || data.length === 0) {
      return [
        {
          id: '1',
          title: 'Semarak Peringatan Hari Santri di Desa Banjarkemuning',
          slug: 'peringatan-hari-santri-banjarkemuning',
          excerpt: 'Ratusan jamaah dan santri memadati Balai Desa Banjarkemuning dalam apel akbar dan pawai obor Hari Santri Nasional.',
          content: 'Peringatan Hari Santri Nasional tahun 2026 dirayakan penuh takzim oleh Pengurus Ranting Nahdlatul Ulama Desa Banjarkemuning. Apel diawali dengan barisan Ansor, Banser, Fatayat, IPNU-IPPNU dan warga nahdliyin.',
          published_at: new Date().toISOString(),
          category: 'Warta Ranting',
          author: 'Tim Media PRNU'
        }
      ];
    }
    return data;
  } catch {
    return [];
  }
}

export async function getMasjidData() {
  try {
    const [infoRes, kasRes] = await Promise.all([
      supabase.from('masjid_info').select('*').eq('id', 'default').maybeSingle(),
      supabase.from('masjid_kas').select('*').order('friday_date', { ascending: false }).limit(6)
    ]);

    return {
      info: infoRes.data || {
        name: 'Masjid Jami\' Baitul Muttaqin Banjarkemuning',
        address: 'Jl. Masjid No. 01, Dusun Kemuning, Desa Banjarkemuning, Kec. Sedati, Sidoarjo',
        description: 'Pusat ibadah rawatib, majelis ta\'lim, serta sentra sholat Jumat warga nahdliyin Desa Banjarkemuning.',
        takmir_head: 'H. Ahmad Fauzi, S.Pd.I',
        imam_rawatib: 'Ust. H. Nur Kholis',
        muadzin_head: 'Bpk. M. Sholeh'
      },
      kasList: kasRes.data || []
    };
  } catch {
    return {
      info: {
        name: 'Masjid Jami\' Baitul Muttaqin Banjarkemuning',
        address: 'Jl. Masjid No. 01, Dusun Kemuning, Desa Banjarkemuning, Kec. Sedati, Sidoarjo',
        description: 'Pusat ibadah rawatib, majelis ta\'lim, serta sentra sholat Jumat warga nahdliyin Desa Banjarkemuning.',
        takmir_head: 'H. Ahmad Fauzi, S.Pd.I',
        imam_rawatib: 'Ust. H. Nur Kholis',
        muadzin_head: 'Bpk. M. Sholeh'
      },
      kasList: []
    };
  }
}
