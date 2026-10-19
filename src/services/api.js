import { supabase } from './supabaseClient';
import {
  organizationMeta as defaultMeta,
  syuriyahStructure as defaultSyuriyah,
  tanfidziyahStructure as defaultTanfidziyah,
  banomList as defaultBanom,
  lembagaList as defaultLembaga,
  agendaRutinan as defaultAgenda
} from '../data/organizationData';

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

    if (error || !data || data.length === 0) {
      return {
        tanfidziyah: defaultTanfidziyah,
        syuriyah: defaultSyuriyah
      };
    }

    const tanfidziyah = data
      .filter((p) => p.category === 'tanfidziyah')
      .map((p) => ({
        role: p.role,
        name: p.name,
        responsibility: p.responsibility,
        division: p.division,
        status: p.status
      }));

    const syuriyah = data
      .filter((p) => p.category === 'syuriyah')
      .map((p) => ({
        role: p.role,
        name: p.name,
        note: p.responsibility,
        status: p.status
      }));

    return {
      tanfidziyah: tanfidziyah.length ? tanfidziyah : defaultTanfidziyah,
      syuriyah: syuriyah.length ? syuriyah : defaultSyuriyah
    };
  } catch {
    return {
      tanfidziyah: defaultTanfidziyah,
      syuriyah: defaultSyuriyah
    };
  }
}

export async function getBanomAndLembaga() {
  try {
    const [banomRes, lembagaRes] = await Promise.all([
      supabase.from('banom').select('*').order('sort_order', { ascending: true }),
      supabase.from('lembaga').select('*').order('sort_order', { ascending: true })
    ]);

    const banom = (banomRes.data && banomRes.data.length > 0)
      ? banomRes.data.map(b => ({
          id: b.id,
          name: b.name,
          fullName: b.full_name,
          leader: b.leader,
          focus: b.focus,
          badge: b.badge,
          iconSymbol: b.icon_symbol
        }))
      : defaultBanom;

    const lembaga = (lembagaRes.data && lembagaRes.data.length > 0)
      ? lembagaRes.data.map(l => ({
          code: l.code,
          name: l.name,
          role: l.role,
          highlight: l.highlight
        }))
      : defaultLembaga;

    return { banom, lembaga };
  } catch {
    return { banom: defaultBanom, lembaga: defaultLembaga };
  }
}

export async function getKegiatanList() {
  try {
    const { data, error } = await supabase
      .from('kegiatan')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) return defaultAgenda;
    return data.map(k => ({
      title: k.title,
      time: k.time_info,
      location: k.location,
      desc: k.description,
      category: k.category
    }));
  } catch {
    return defaultAgenda;
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
        period: "Triwulan Terakhir (Oktober 2026)",
        totalIncome: 12850000,
        totalSpent: 9400000,
        balance: 3450000,
        beneficiaries: 42,
        notes: "Disalurkan untuk santunan anak yatim, bantuan pengobatan dhuafa, dan operasional layanan umat."
      };
    }

    return {
      period: data.period,
      totalIncome: Number(data.total_income) || 0,
      totalSpent: Number(data.total_spent) || 0,
      balance: Number(data.balance) || 0,
      beneficiaries: data.beneficiaries_count || 0,
      notes: data.notes || ""
    };
  } catch {
    return {
      period: "Triwulan Terakhir (Oktober 2026)",
      totalIncome: 12850000,
      totalSpent: 9400000,
      balance: 3450000,
      beneficiaries: 42,
      notes: "Disalurkan untuk santunan anak yatim, bantuan pengobatan dhuafa, dan operasional layanan umat."
    };
  }
}

export async function getWartaBerita() {
  try {
    const { data, error } = await supabase
      .from('warta_berita')
      .select('*')
      .order('published_at', { ascending: false })
      .limit(6);

    if (error || !data || data.length === 0) {
      return [
        {
          id: '1',
          title: "Semarak Peringatan Hari Santri di Desa Banjarkemuning",
          slug: "peringatan-hari-santri-banjarkemuning",
          excerpt: "Ratusan jamaah dan santri memadati halaman Balai Desa Banjarkemuning dalam rangka apel akbar dan pawai obor Hari Santri Nasional.",
          date: "Oktober 2026",
          category: "Warta Ranting",
          author: "Tim Media PRNU"
        }
      ];
    }

    return data.map(item => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt,
      content: item.content,
      date: new Date(item.published_at).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }),
      category: item.category,
      author: item.author
    }));
  } catch {
    return [
      {
        id: '1',
        title: "Semarak Peringatan Hari Santri di Desa Banjarkemuning",
        slug: "peringatan-hari-santri-banjarkemuning",
        excerpt: "Ratusan jamaah dan santri memadati halaman Balai Desa Banjarkemuning dalam rangka apel akbar dan pawai obor Hari Santri Nasional.",
        date: "Oktober 2026",
        category: "Warta Ranting",
        author: "Tim Media PRNU"
      }
    ];
  }
}
