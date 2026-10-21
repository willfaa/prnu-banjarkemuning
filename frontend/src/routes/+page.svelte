<script>
  import Hero from '$lib/components/Hero.svelte';
  import Sambutan from '$lib/components/Sambutan.svelte';

  export let data;

  let activeTab = 'tanfidziyah';
  let selectedArticle = null;

  function formatRupiah(num) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num || 0);
  }

  function getBanomLogo(id) {
    const map = {
      ansor: '/assets/Ansor.png',
      fatayat: '/assets/Fatayat.png',
      ipnu: '/assets/IPNU.png',
      ippnu: '/assets/IPPNU.png',
      banser: '/assets/Banser.png',
      pagar_nusa: '/assets/Pagar-Nusa.png'
    };
    return map[id] || null;
  }
</script>

<Hero meta={data.meta} />
<Sambutan />

<!-- 1. Highlight Masjid Desa (Catchy Section) -->
<section class="py-16 sm:py-20 bg-gradient-to-b from-white to-emerald-50/40" id="masjid-highlight">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300 mb-2">
        🕌 KEMAKMURAN MASJID DESA
      </span>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-nu-deep tracking-tight mb-3">
        {data.masjid?.info?.name || "Masjid Jami' Baitul Muttaqin"}
      </h2>
      <p class="text-gray-600 text-sm sm:text-base">
        Pusat ibadah dan transparansi laporan kas sholat Jumat jamaah Desa Banjarkemuning.
      </p>
    </div>

    <!-- Space Container Siap diisi Positioning Gambar Manual -->
    <div class="relative w-full min-h-[380px] bg-nu-darker rounded-3xl overflow-hidden border border-amber-400/40 shadow-xl flex items-center justify-center mb-10">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,135,68,0.3)_0%,rgba(1,30,15,0.92)_85%)]"></div>
      
      <div class="relative z-10 text-center p-8 max-w-2xl text-white">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-gray-950 mb-3 shadow-md">
          SENTRA IBADAH DESA
        </span>
        <h3 class="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          {data.masjid?.info?.name}
        </h3>
        <p class="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6">
          {data.masjid?.info?.description}
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="/masjid" class="px-6 py-3 rounded-xl text-sm font-bold bg-amber-400 hover:bg-amber-300 text-gray-950 shadow-lg shadow-amber-400/25 transition-all">
            Buka Halaman Lengkap Masjid & Kas Jumat →
          </a>
          {#if data.meta?.contact?.whatsapp}
            <a
              href="https://wa.me/{data.meta.contact.whatsapp}?text=Assalamualaikum%20Takmir%20Masjid%20Banjarkemuning"
              target="_blank"
              rel="noopener noreferrer"
              class="px-6 py-3 rounded-xl text-sm font-bold bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white transition-all"
            >
              Hubungi Takmir
            </a>
          {/if}
        </div>
      </div>
    </div>

    <!-- Cuplikan Kas Jumat Terakhir -->
    {#if data.masjid?.kasList && data.masjid.kasList.length > 0}
      {@const latestKas = data.masjid.kasList[0]}
      <div class="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-md">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-100">
          <div>
            <span class="text-xs font-black tracking-wider text-nu-deep uppercase">Laporan Kas Terakhir</span>
            <h4 class="text-xl font-bold text-gray-900 mt-1">{latestKas.period_label}</h4>
          </div>
          <div class="sm:text-right">
            <span class="text-xs text-gray-500 font-medium">Saldo Akhir Kas Masjid:</span>
            <div class="text-2xl font-black text-nu-deep">
              {formatRupiah(latestKas.balance)}
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div class="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
            <span class="text-xs text-gray-500 font-semibold block">Infaq Kotak Jumat</span>
            <div class="text-base sm:text-lg font-bold text-nu-green mt-1">+{formatRupiah(latestKas.income_box)}</div>
          </div>
          <div class="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
            <span class="text-xs text-gray-500 font-semibold block">Infaq Transfer / Donatur</span>
            <div class="text-base sm:text-lg font-bold text-nu-green mt-1">+{formatRupiah(latestKas.income_transfer)}</div>
          </div>
          <div class="p-4 rounded-xl bg-rose-50/60 border border-rose-100">
            <span class="text-xs text-gray-500 font-semibold block">Operasional & Kebersihan</span>
            <div class="text-base sm:text-lg font-bold text-rose-600 mt-1">-{formatRupiah(latestKas.expense_operational)}</div>
          </div>
          <div class="p-4 rounded-xl bg-rose-50/60 border border-rose-100">
            <span class="text-xs text-gray-500 font-semibold block">Pemeliharaan & Listrik</span>
            <div class="text-base sm:text-lg font-bold text-rose-600 mt-1">-{formatRupiah(latestKas.expense_maintenance)}</div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>

<!-- 2. Kilas Struktur Pengurus Ranting -->
<section class="py-16 sm:py-20 bg-white border-y border-emerald-900/10" id="struktur">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
        SUSUNAN KEPENGURUSAN
      </span>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-nu-deep tracking-tight mb-3">
        Syuriyah dan Tanfidziyah PRNU
      </h2>
      <p class="text-gray-600 text-sm sm:text-base">
        Sinergi ulama dan umara dalam memimpin jalannya jam'iyyah Nahdlatul Ulama di tingkat ranting.
      </p>
    </div>

    <!-- Tabs Button -->
    <div class="flex justify-center mb-8">
      <div class="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200 gap-2">
        <button
          class="px-5 py-2 text-sm font-bold rounded-xl transition-all {activeTab === 'tanfidziyah' ? 'bg-nu-green text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}"
          on:click={() => (activeTab = 'tanfidziyah')}
        >
          Pengurus Tanfidziyah
        </button>
        <button
          class="px-5 py-2 text-sm font-bold rounded-xl transition-all {activeTab === 'syuriyah' ? 'bg-nu-green text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}"
          on:click={() => (activeTab = 'syuriyah')}
        >
          Majelis Syuriyah
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each (activeTab === 'tanfidziyah' ? data.pengurus.tanfidziyah : data.pengurus.syuriyah) as p}
        <div class="p-6 rounded-2xl bg-nu-soft border border-emerald-900/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-white text-nu-deep border border-emerald-200 shadow-2xs">
                {p.role}
              </span>
              <span class="text-xs font-semibold text-emerald-700">● {p.status || 'Aktif'}</span>
            </div>
            <h3 class="text-lg font-black text-gray-900 mb-1">{p.name}</h3>
          </div>
          <p class="text-xs text-gray-500 pt-3 border-t border-emerald-900/10 mt-3">
            {p.responsibility || (p.division ? `Bidang: ${p.division}` : 'Khidmat Organisasi')}
          </p>
        </div>
      {/each}
    </div>

    <div class="text-center mt-10">
      <a href="/struktur" class="px-6 py-2.5 rounded-xl text-sm font-bold bg-white border-2 border-emerald-800/20 text-nu-deep hover:bg-nu-tint hover:border-nu-green transition-all">
        Lihat Bagan Struktur Lengkap →
      </a>
    </div>
  </div>
</section>

<!-- 3. Kilas Badan Otonom & Lembaga -->
<section class="py-16 sm:py-20 bg-nu-soft" id="banom">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
        SAYAP GERAKAN
      </span>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-nu-deep tracking-tight mb-3">
        Badan Otonom PRNU Banjarkemuning
      </h2>
      <p class="text-gray-600 text-sm sm:text-base">
        Wadah pembinaan generasi pemuda, santriwati, pelajar, dan ibu-ibu dalam naungan Nahdlatul Ulama.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each data.banom as b}
        {@const logo = getBanomLogo(b.id)}
        <div class="p-6 rounded-2xl bg-white border border-emerald-900/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div class="flex items-center justify-between mb-4">
              {#if logo}
                <div class="w-14 h-14 p-1.5 rounded-xl bg-nu-soft flex items-center justify-center border border-emerald-100">
                  <img src={logo} alt="Logo {b.name}" class="max-w-full max-h-full object-contain" width="48" height="48" />
                </div>
              {:else}
                <div class="w-14 h-14 rounded-xl bg-nu-soft flex items-center justify-center text-2xl border border-emerald-100">
                  {b.icon_symbol || '🌿'}
                </div>
              {/if}
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-nu-tint text-nu-deep border border-emerald-200">
                {b.badge || 'Banom NU'}
              </span>
            </div>

            <h3 class="text-xl font-black text-gray-900 mb-1">{b.name}</h3>
            <p class="text-xs text-gray-500 mb-3">{b.full_name}</p>

            <div class="p-3 rounded-lg bg-nu-soft/70 text-xs mb-3">
              <span class="text-gray-500 block font-semibold">Ketua / Pimpinan:</span>
              <strong class="text-nu-deep font-bold">{b.leader}</strong>
            </div>

            <p class="text-xs text-gray-600 leading-relaxed">{b.focus}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="text-center mt-10">
      <a href="/banom" class="px-6 py-3 rounded-xl text-sm font-bold bg-nu-green hover:bg-nu-deep text-white shadow-md transition-all">
        Buka Direktori Lengkap Banom & Sub-Divisi →
      </a>
    </div>
  </div>
</section>

<!-- 4. Laporan Koin NU (LAZISNU) -->
<section class="py-16 sm:py-20 bg-white border-y border-emerald-900/10" id="laporan">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300 mb-2">
        AKUNTABILITAS UMAT
      </span>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-nu-deep tracking-tight mb-3">
        Gerakan Koin NU & Dana ZIS
      </h2>
      <p class="text-gray-600 text-sm sm:text-base">
        Transparansi pengumpulan koin sehat dari kaleng warga nahdliyin se-Desa Banjarkemuning.
      </p>
    </div>

    {#if data.laporan}
      <div class="bg-nu-soft rounded-3xl p-6 sm:p-10 border border-emerald-900/10 shadow-md">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-emerald-900/10">
          <div>
            <span class="text-xs font-black tracking-wider text-nu-gold uppercase">PERIODE LAPORAN</span>
            <h3 class="text-2xl font-bold text-gray-900 mt-1">{data.laporan.period}</h3>
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-xs font-bold text-emerald-700 border border-emerald-200">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Realtime Supabase</span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div class="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-2xs">
            <span class="text-xs text-gray-500 font-semibold block mb-1">Total Koin & Infaq</span>
            <div class="text-xl sm:text-2xl font-black text-nu-green">{formatRupiah(data.laporan.total_income)}</div>
            <span class="text-xs text-gray-400 mt-1 block">Dari kaleng warga desa</span>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-2xs">
            <span class="text-xs text-gray-500 font-semibold block mb-1">Dana Tersalurkan</span>
            <div class="text-xl sm:text-2xl font-black text-amber-600">{formatRupiah(data.laporan.total_spent)}</div>
            <span class="text-xs text-gray-400 mt-1 block">Santunan yatim & dhuafa</span>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-2xs">
            <span class="text-xs text-gray-500 font-semibold block mb-1">Saldo Kas LAZISNU</span>
            <div class="text-xl sm:text-2xl font-black text-nu-deep">{formatRupiah(data.laporan.balance)}</div>
            <span class="text-xs text-gray-400 mt-1 block">Kas aman & diaudit</span>
          </div>

          <div class="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-2xs">
            <span class="text-xs text-gray-500 font-semibold block mb-1">Penerima Manfaat</span>
            <div class="text-xl sm:text-2xl font-black text-nu-deep">{data.laporan.beneficiaries_count || 0} Jiwa</div>
            <span class="text-xs text-gray-400 mt-1 block">Yatim, janda, dhuafa</span>
          </div>
        </div>

        {#if data.laporan.notes}
          <div class="mt-6 p-4 rounded-xl bg-white/70 border border-emerald-900/10 text-xs sm:text-sm text-gray-700">
            <strong class="text-nu-deep block mb-1">Catatan Penyaluran Amanah:</strong>
            {data.laporan.notes}
          </div>
        {/if}

        <div class="text-center mt-8">
          <a href="/lembaga/lazisnu" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-amber-400 hover:bg-amber-300 text-gray-950 shadow-md transition-all">
            Detail Program LAZISNU & Layanan Jemput Koin →
          </a>
        </div>
      </div>
    {/if}
  </div>
</section>

<!-- 5. Warta Berita & Artikel -->
<section class="py-16 sm:py-20 bg-nu-soft" id="warta">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
        KABAR RANTING
      </span>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-nu-deep tracking-tight mb-3">
        Warta & Berita Kegiatan
      </h2>
      <p class="text-gray-600 text-sm sm:text-base">
        Dokumentasi aktivitas jam'iyyah, peringatan hari besar Islam, dan kabar dari Banom.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each data.warta as article}
        <article class="p-6 rounded-2xl bg-white border border-emerald-900/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            <div class="flex items-center justify-between text-xs text-gray-500 mb-3">
              <span class="px-2.5 py-0.5 rounded-full font-bold bg-emerald-100 text-nu-deep">
                {article.category}
              </span>
              <time>
                {new Date(article.published_at).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
              </time>
            </div>
            <h3 class="text-lg font-black text-gray-900 mb-2 leading-snug">{article.title}</h3>
            <p class="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">{article.excerpt}</p>
          </div>

          <button
            class="text-xs font-bold text-nu-green hover:text-nu-deep flex items-center gap-1 mt-auto pt-3 border-t border-gray-100"
            on:click={() => (selectedArticle = article)}
          >
            Baca Selengkapnya →
          </button>
        </article>
      {/each}
    </div>

    <div class="text-center mt-10">
      <a href="/berita" class="px-6 py-2.5 rounded-xl text-sm font-bold bg-white border-2 border-emerald-800/20 text-nu-deep hover:bg-nu-tint hover:border-nu-green transition-all">
        Buka Seluruh Arsip Berita →
      </a>
    </div>
  </div>
</section>

<!-- 6. Agenda Rutinan -->
<section class="py-16 sm:py-20 bg-white border-t border-emerald-900/10" id="agenda">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
        JADWAL JAM'IYYAH
      </span>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-nu-deep tracking-tight mb-3">
        Agenda Rutinan Jam'iyyah
      </h2>
      <p class="text-gray-600 text-sm sm:text-base">
        Jadwal pengajian, dzikir bersama, dan majelis shalawat di lingkungan Desa Banjarkemuning.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each data.kegiatan as k}
        <div class="p-6 rounded-2xl bg-nu-soft border border-emerald-900/10 shadow-sm flex flex-col justify-between">
          <div>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white text-nu-deep border border-emerald-200 inline-block mb-3">
              {k.category || 'Ranting'}
            </span>
            <h3 class="text-base font-bold text-gray-900 mb-2">{k.title}</h3>
            <div class="text-xs text-gray-500 space-y-1 mb-3">
              <div class="flex items-center gap-1.5">
                <span>🕒</span>
                <span>{k.time_info}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span>📍</span>
                <span>{k.location}</span>
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-600 leading-relaxed pt-3 border-t border-emerald-900/10">{k.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Modal Reader Berita -->
{#if selectedArticle}
  <div
    class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    role="button"
    tabindex="0"
    on:click={() => (selectedArticle = null)}
    on:keydown={(e) => e.key === 'Escape' && (selectedArticle = null)}
  >
    <div
      class="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
      role="document"
      on:click|stopPropagation
    >
      <div class="flex justify-between items-start gap-4 pb-4 border-b border-gray-100">
        <div>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-nu-deep">
            {selectedArticle.category}
          </span>
          <h2 class="text-xl sm:text-2xl font-black text-gray-900 mt-2">{selectedArticle.title}</h2>
          <div class="flex items-center gap-2 text-xs text-gray-400 mt-1">
            <span>Oleh: {selectedArticle.author || 'Tim Media PRNU'}</span>
            <span>•</span>
            <time>{new Date(selectedArticle.published_at).toLocaleDateString('id-ID', { dateStyle: 'long' })}</time>
          </div>
        </div>
        <button
          class="text-gray-400 hover:text-gray-700 text-xl font-bold p-1"
          on:click={() => (selectedArticle = null)}
        >
          ✕
        </button>
      </div>

      <div class="py-6 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
        <p class="font-semibold text-nu-deep text-base sm:text-lg">{selectedArticle.excerpt}</p>
        <p>{selectedArticle.content || selectedArticle.excerpt}</p>
      </div>

      <div class="pt-4 border-t border-gray-100 flex flex-wrap gap-3 justify-end">
        <a
          href="https://api.whatsapp.com/send?text={encodeURIComponent(selectedArticle.title + ' - Baca di website resmi PRNU Banjarkemuning')}"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-50 text-nu-green hover:bg-emerald-100 transition-colors"
        >
          Bagikan ke WhatsApp
        </a>
        <button
          class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-nu-green text-white hover:bg-nu-deep transition-colors"
          on:click={() => (selectedArticle = null)}
        >
          Tutup Bacaan
        </button>
      </div>
    </div>
  </div>
{/if}
