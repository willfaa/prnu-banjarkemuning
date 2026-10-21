<script>
  export let data;

  function formatRupiah(num) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num || 0);
  }
</script>

<svelte:head>
  <title>Masjid & Laporan Kas Sholat Jumat | PRNU Banjarkemuning</title>
  <meta name="description" content="Laporan kas mingguan sholat Jumat, agenda ibadah, dan kemakmuran Masjid Jami' Baitul Muttaqin Desa Banjarkemuning, Kec. Sedati, Kab. Sidoarjo." />
</svelte:head>

<!-- Header Subpage -->
<div class="bg-gradient-to-br from-nu-darker via-nu-deep to-[#013f20] text-white py-14 px-4 text-center border-b-4 border-nu-gold">
  <div class="max-w-4xl mx-auto">
    <div class="flex items-center justify-center gap-2 text-xs font-semibold text-nu-goldLight mb-3">
      <a href="/" class="text-white/70 hover:text-white">Beranda</a>
      <span>›</span>
      <span>Masjid & Kas Jumat</span>
    </div>
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm mb-3">
      Masjid Jami' Baitul Muttaqin
    </h1>
    <p class="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
      Pusat Ibadah, Sholat Jumat, dan Dakwah Ahlussunnah wal Jama'ah Warga Nahdliyin Desa Banjarkemuning.
    </p>
  </div>
</div>

<!-- Full-Bleed Edge-to-Edge Parallax Canvas Container (Style kiri-kanan tidak tersisa) -->
<div class="w-full relative bg-[#012815] overflow-hidden border-b-2 border-nu-gold mb-14">
  <!-- Parallax Background Image -->
  <div
    class="absolute inset-0 bg-cover bg-center opacity-35 scale-105 pointer-events-none"
    style="background-image: url('/assets/hero-bg.jpg'); background-attachment: fixed;"
  ></div>

  <!-- Radial Overlay -->
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,86,43,0.4)_0%,rgba(1,30,15,0.92)_80%)] pointer-events-none"></div>

  <!-- SPACE CONTAINER UNTUK CODING POSITIONING MANUAL GAMBAR -->
  <div
    id="masjid-custom-image-space"
    class="relative z-10 max-w-5xl mx-auto min-h-[380px] sm:min-h-[440px] px-6 py-14 flex flex-col items-center justify-center text-center text-white"
  >
    <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-gray-950 mb-3 shadow-[0_0_12px_rgba(212,175,55,0.4)]">
      🕌 KEMAKMURAN RUMAH ALLAH
    </span>
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg mb-3">
      {data.masjid?.info?.name || "Masjid Jami' Baitul Muttaqin Banjarkemuning"}
    </h2>
    <p class="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
      {data.masjid?.info?.description}
    </p>

    <div class="flex flex-wrap gap-4 justify-center">
      <a href="#kas-jumat" class="px-6 py-3 rounded-xl text-sm font-bold bg-amber-400 hover:bg-amber-300 text-gray-950 shadow-lg shadow-amber-400/25 transition-all">
        Lihat Laporan Kas Jumat Terkini ↓
      </a>
      <a href="#jadwal" class="px-6 py-3 rounded-xl text-sm font-bold bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white transition-all">
        Jadwal Sholat & Takmir
      </a>
    </div>

    <!-- NOTE: Space ini memiliki ID 'masjid-custom-image-space' untuk positioning manual gambar Anda -->
  </div>
</div>

<div class="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
  <!-- Info Takmir & Pelayanan -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
    <div class="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm">
      <span class="text-xs font-black tracking-wider text-nu-deep uppercase block mb-1">Ketua Takmir Masjid</span>
      <h3 class="text-xl font-bold text-gray-900">{data.masjid?.info?.takmir_head || 'H. Ahmad Fauzi, S.Pd.I'}</h3>
      <p class="text-xs text-gray-500 mt-2">Penanggung jawab kemakmuran, peribadatan, dan aset masjid desa.</p>
    </div>

    <div class="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm">
      <span class="text-xs font-black tracking-wider text-nu-deep uppercase block mb-1">Imam Rawatib Utama</span>
      <h3 class="text-xl font-bold text-gray-900">{data.masjid?.info?.imam_rawatib || 'Ust. H. Nur Kholis'}</h3>
      <p class="text-xs text-gray-500 mt-2">Koordinator pelaksanaan sholat lima waktu dan doa jam'iyyah.</p>
    </div>

    <div class="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm">
      <span class="text-xs font-black tracking-wider text-nu-deep uppercase block mb-1">Muadzin & Kebersihan</span>
      <h3 class="text-xl font-bold text-gray-900">{data.masjid?.info?.muadzin_head || 'Bpk. M. Sholeh'}</h3>
      <p class="text-xs text-gray-500 mt-2">Menjaga kesucian tempat ibadah dan panggilan adzan rawatib.</p>
    </div>
  </div>

  <!-- TABEL LAPORAN KAS SHOLAT JUMAT -->
  <div class="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-900/10 shadow-md mb-14" id="kas-jumat">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-emerald-900/10 mb-6">
      <div>
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300 mb-2">
          TRANSPARANSI MINGGUAN
        </span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-nu-deep tracking-tight">
          Laporan Kas Sholat Jumat
        </h2>
        <p class="text-gray-500 text-xs sm:text-sm mt-1">
          Diumumkan secara berkala setiap sholat Jumat untuk keterbukaan amanah jamaah.
        </p>
      </div>

      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-xs font-bold text-emerald-800 border border-emerald-200">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Realtime Supabase Sync</span>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse text-sm">
        <thead>
          <tr class="bg-nu-soft border-b-2 border-emerald-900/10 text-nu-darker font-bold">
            <th class="py-3 px-4">Hari / Tanggal</th>
            <th class="py-3 px-4">Infaq Kotak</th>
            <th class="py-3 px-4">Infaq Transfer</th>
            <th class="py-3 px-4">Operasional</th>
            <th class="py-3 px-4">Perawatan/Listrik</th>
            <th class="py-3 px-4">Saldo Kas Akhir</th>
            <th class="py-3 px-4">Khatib Jumat</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          {#each (data.masjid?.kasList || []) as item}
            <tr class="hover:bg-emerald-50/40 transition-colors">
              <td class="py-3.5 px-4 font-bold text-gray-900 whitespace-nowrap">
                {item.period_label}
              </td>
              <td class="py-3.5 px-4 text-nu-green font-bold">+{formatRupiah(item.income_box)}</td>
              <td class="py-3.5 px-4 text-nu-green font-bold">+{formatRupiah(item.income_transfer)}</td>
              <td class="py-3.5 px-4 text-rose-600 font-semibold">-{formatRupiah(item.expense_operational)}</td>
              <td class="py-3.5 px-4 text-rose-600 font-semibold">-{formatRupiah(item.expense_maintenance)}</td>
              <td class="py-3.5 px-4 text-nu-deep font-black text-base">{formatRupiah(item.balance)}</td>
              <td class="py-3.5 px-4 text-gray-600">{item.khatib || '-'}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div class="mt-6 p-4 rounded-xl bg-nu-soft text-xs text-gray-700 leading-relaxed border border-emerald-900/10">
      <strong class="text-nu-deep block mb-0.5">Keterangan Kas Masjid:</strong>
      Seluruh pemasukan kotak amal sholat Jumat dan transfer donatur digunakan untuk operasional adzan, kebersihan musholla/masjid, pembayaran listrik/air, santunan marbot, dan pemeliharaan sarana ibadah warga Desa Banjarkemuning.
    </div>
  </div>

  <!-- Agenda Rutin di Masjid -->
  <div id="jadwal">
    <div class="text-center max-w-xl mx-auto mb-10">
      <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
        JADWAL PERIBADATAN
      </span>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-nu-deep">Kegiatan Rutin di Masjid</h2>
      <p class="text-gray-500 text-xs sm:text-sm mt-1">Majelis ta'lim dan pembacaan shalawat yang berpusat di Masjid Jami' Desa.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-2xl border-l-4 border-nu-green border-t border-r border-b border-gray-100 shadow-sm">
        <h4 class="text-lg font-bold text-nu-deep mb-1">Sholat Jumat Berjamaah</h4>
        <p class="text-xs text-gray-400 mb-2">Pukul 11:30 WIB - Selesai</p>
        <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">Didahului pembacaan shalawat tarhim, adzan dua kali menurut tradisi Aswaja, dan khutbah keagamaan.</p>
      </div>

      <div class="bg-white p-6 rounded-2xl border-l-4 border-nu-gold border-t border-r border-b border-gray-100 shadow-sm">
        <h4 class="text-lg font-bold text-nu-deep mb-1">Lailatul Ijtima' Ranting</h4>
        <p class="text-xs text-gray-400 mb-2">Malam Ahad Kliwon, Ba'da Isya</p>
        <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">Dzikir bersama, tahlil akbar, dan koordinasi jam'iyyah seluruh pengurus dan warga nahdliyin ranting.</p>
      </div>

      <div class="bg-white p-6 rounded-2xl border-l-4 border-nu-green border-t border-r border-b border-gray-100 shadow-sm">
        <h4 class="text-lg font-bold text-nu-deep mb-1">Kajian Subuh Ahad</h4>
        <p class="text-xs text-gray-400 mb-2">Setiap Ahad Pagi, Ba'da Subuh</p>
        <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">Kajian Fiqih Ibadah sehari-hari oleh Asatidz Syuriyah PRNU untuk jamaah bapak-bapak dan ibu-ibu.</p>
      </div>
    </div>
  </div>
</div>
