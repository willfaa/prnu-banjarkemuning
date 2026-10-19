/**
 * Data Resmi Organisasi PRNU Desa Banjarkemuning
 * Kecamatan Sedati, Kabupaten Sidoarjo, Jawa Timur
 */

export const organizationMeta = {
  name: "Pengurus Ranting Nahdlatul Ulama Desa Banjarkemuning",
  shortName: "PRNU Banjarkemuning",
  level: "Ranting (Desa / Kelurahan)",
  mwc: "MWCNU Kecamatan Sedati",
  cabang: "PCNU Kabupaten Sidoarjo",
  wilayah: "PWNU Jawa Timur",
  address: "Jl. Pemuda / Balai RT/RW Desa Banjarkemuning, Kec. Sedati, Kab. Sidoarjo, Jawa Timur 61253",
  motto: "Merawat Tradisi, Menjaga Jam'iyyah, Melayani Umat",
  contact: {
    whatsapp: "6281234567890", // Placeholder nomor sekretariat
    email: "prnu.banjarkemuning@gmail.com",
    serviceHours: "Setiap Hari (08.00 - 21.00 WIB)"
  }
};

export const syuriyahStructure = [
  {
    role: "Rais Syuriyah",
    name: "K.H. [Nama Rais Syuriyah]",
    note: "Penuntun spiritual, amaliyah Aswaja, dan fatwa hukum syar'i di tingkat desa",
    status: "Aktif"
  },
  {
    role: "Wakil Rais Syuriyah",
    name: "Ust. [Nama Wakil Rais]",
    note: "Pendamping Rais Syuriyah dalam pembinaan keagamaan jamaah",
    status: "Aktif"
  },
  {
    role: "Katib Syuriyah",
    name: "Ust. [Nama Katib]",
    note: "Pencatat putusan syariah dan risalah majelis alim ulama ranting",
    status: "Aktif"
  },
  {
    role: "A'wan Syuriyah",
    name: "H. [Nama Tokoh Sepuh 1], H. [Nama Tokoh Sepuh 2]",
    note: "Para sesepuh dan tokoh panutan masyarakat desa",
    status: "Aktif"
  }
];

export const tanfidziyahStructure = [
  {
    role: "Ketua Tanfidziyah",
    name: "H. [Nama Ketua Tanfidziyah]",
    responsibility: "Memimpin pelaksanaan program kerja organisasi, koordinasi kemasyarakatan dan keumatan",
    division: "Pimpinan Harian"
  },
  {
    role: "Wakil Ketua Tanfidziyah",
    name: "Ust. [Nama Wakil Ketua]",
    responsibility: "Membidangi penguatan kelembagaan, dakwah, dan hubungan antar-musholla/masjid",
    division: "Pimpinan Harian"
  },
  {
    role: "Sekretaris",
    name: "[Nama Sekretaris]",
    responsibility: "Tata kelola administrasi persuratan, database jamaah, dan publikasi warta",
    division: "Kesekretariatan"
  },
  {
    role: "Wakil Sekretaris",
    name: "[Nama Wakil Sekretaris]",
    responsibility: "Pengarsipan data kegiatan ranting dan operasional teknologi informasi",
    division: "Kesekretariatan"
  },
  {
    role: "Bendahara",
    name: "H. [Nama Bendahara]",
    responsibility: "Pengelolaan kas jam'iyyah, akuntabilitas keuangan dan pembukuan transparan",
    division: "Kebendaharaan"
  },
  {
    role: "Wakil Bendahara",
    name: "[Nama Wakil Bendahara]",
    responsibility: "Pencatatan dan inventarisasi aset wakaf dan logistik ranting",
    division: "Kebendaharaan"
  }
];

export const banomList = [
  {
    id: "muslimat",
    name: "Muslimat NU",
    fullName: "Pimpinan Ranting Muslimat NU Banjarkemuning",
    leader: "Hj. [Nama Pimpinan Muslimat]",
    focus: "Pembinaan keagamaan ibu-ibu, pengajian manaqib, santunan dhuafa, dan pendidikan anak keluarga nahdliyin.",
    badge: "Ibu-ibu Jam'iyyah",
    iconSymbol: "M"
  },
  {
    id: "fatayat",
    name: "Fatayat NU",
    fullName: "Pimpinan Ranting Fatayat NU Banjarkemuning",
    leader: "Sahabat [Nama Pimpinan Fatayat]",
    focus: "Pemberdayaan perempuan muda, kesehatan keluarga, kajian fiqih wanita, dan posyandu binaan.",
    badge: "Pemudi Nahdliyin",
    iconSymbol: "F"
  },
  {
    id: "ansor",
    name: "GP Ansor & Banser",
    fullName: "Pimpinan Ranting GP Ansor & Satkorkel Banser Banjarkemuning",
    leader: "Sahabat [Nama Ketua Ansor] / Komandan [Nama Kasatkorkel]",
    focus: "Garda terdepan pengawalan ulama, pengamanan majelis dan kegiatan desa, kepemudaan, serta tanggap bencana.",
    badge: "Garda Pemuda & Banser",
    iconSymbol: "A"
  },
  {
    id: "ipnu",
    name: "IPNU",
    fullName: "Pimpinan Ranting IPNU Desa Banjarkemuning",
    leader: "Rekan [Nama Ketua IPNU]",
    focus: "Wadah pelajar, santri, dan remaja putra Nahdlatul Ulama dalam kaderisasi intelektual, kepemimpinan, dan shalawat.",
    badge: "Pelajar Putra",
    iconSymbol: "IP"
  },
  {
    id: "ippnu",
    name: "IPPNU",
    fullName: "Pimpinan Ranting IPPNU Desa Banjarkemuning",
    leader: "Rekanita [Nama Ketua IPPNU]",
    focus: "Wadah pelajar putri dan remaja putri untuk pengembangan wawasan Islam rahmatan lil 'alamin dan literasi kreatif.",
    badge: "Pelajar Putri",
    iconSymbol: "IPP"
  }
];

export const lembagaList = [
  {
    code: "LAZISNU",
    name: "UPZIS LAZISNU Banjarkemuning",
    role: "Lembaga Amil Zakat, Infaq & Shadaqah",
    highlight: "Gerakan Koin NU Peduli Umat: Pengumpulan kaleng infaq warga untuk santunan anak yatim dan pengobatan darurat jamaah."
  },
  {
    code: "LTM-NU",
    name: "Lembaga Takmir Masjid NU",
    role: "Kemakmuran Masjid & Musholla",
    highlight: "Koordinasi amaliyah Ahlussunnah wal Jama'ah an-Nahdliyah di seluruh musholla dan masjid se-Desa Banjarkemuning."
  },
  {
    code: "LDNU",
    name: "Lembaga Dakwah NU",
    role: "Majelis & Kajian Rutin",
    highlight: "Jadwal penceramah, khutbah Jum'at, pengajian selapanan, dan Lailatul Ijtima' berkala."
  }
];

export const agendaRutinan = [
  {
    title: "Lailatul Ijtima' Ranting",
    time: "Setiap Malam Jum'at Legi",
    location: "Bergilir di Masjid/Musholla se-Banjarkemuning",
    desc: "Istighotsah qubro, tahlil akbar, dan koordinasi antar-pengurus serta jamaah warga."
  },
  {
    title: "Diba'an & Tahlil Keliling Ansor-IPNU",
    time: "Setiap Malam Jum'at (Bada Isya)",
    location: "Rumah anggota & warga nahdliyin",
    desc: "Pembacaan Maulid Diba'i dan silaturahmi kader pemuda desa."
  },
  {
    title: "Pengajian Ahad Pagi Muslimat-Fatayat",
    time: "Setiap Ahad Pon (Pukul 06.00 WIB)",
    location: "Masjid Jami' Desa Banjarkemuning",
    desc: "Kajian kitab kuning tematik seputar fiqih ibadah dan pembinaan keluarga sakinah."
  }
];
