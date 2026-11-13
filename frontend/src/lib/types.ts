export interface OrganizationMeta {
  name: string;
  shortName: string;
  level: string;
  mwc: string;
  cabang: string;
  wilayah: string;
  address: string;
  motto: string;
  contact: {
    whatsapp: string;
    email: string;
    serviceHours: string;
  };
}

export interface PengurusItem {
  id?: string;
  name: string;
  role: string;
  category: 'tanfidziyah' | 'syuriyah' | string;
  status?: string;
  responsibility?: string;
  division?: string;
  sort_order?: number;
}

export interface PengurusGroup {
  tanfidziyah: PengurusItem[];
  syuriyah: PengurusItem[];
}

export interface BanomItem {
  id: string;
  name: string;
  full_name: string;
  leader: string;
  focus: string;
  badge?: string;
  icon_symbol?: string;
  sort_order?: number;
}

export interface LembagaItem {
  id: string;
  name: string;
  full_name?: string;
  description?: string;
  sort_order?: number;
}

export interface KegiatanItem {
  id?: string;
  title: string;
  category?: string;
  time_info: string;
  location: string;
  description: string;
  sort_order?: number;
}

export interface LaporanKoin {
  period: string;
  total_income: number;
  total_spent: number;
  balance: number;
  beneficiaries_count: number;
  notes?: string;
}

export interface WartaArticle {
  id: string;
  title: string;
  slug?: string;
  excerpt: string;
  content?: string;
  published_at: string;
  category: string;
  author?: string;
}

export interface MasjidInfo {
  name: string;
  address: string;
  description: string;
  takmir_head: string;
  imam_rawatib: string;
  muadzin_head: string;
}

export interface MasjidKasItem {
  id?: string;
  period_label: string;
  friday_date?: string;
  income_box: number;
  income_transfer: number;
  expense_operational: number;
  expense_maintenance: number;
  balance: number;
  khatib?: string;
}

export interface MasjidData {
  info: MasjidInfo;
  kasList: MasjidKasItem[];
}

