<script>
  export let meta = null;
</script>

<section class="relative min-h-[85vh] lg:min-h-[88vh] flex items-center bg-nu-darker overflow-hidden text-white py-16" id="beranda">
  <!-- Parallax Background Layer -->
  <div
    class="absolute inset-0 bg-cover bg-center opacity-40 scale-105 pointer-events-none"
    style="background-image: url('/assets/hero-bg.jpg'); background-attachment: fixed;"
    role="img"
    aria-label="Latar Belakang Arsitektur Masjid Kubah Hijau Tradisi Nusantara"
  ></div>

  <!-- Deep Gradient Overlays -->
  <div class="absolute inset-0 bg-gradient-to-r from-nu-darker via-nu-darker/90 to-nu-deep/75 pointer-events-none"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,46,23,0.85)_100%)] pointer-events-none"></div>

  <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <!-- Left Content (7 cols) -->
      <div class="lg:col-span-7 flex flex-col gap-6">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="text-xs font-extrabold tracking-widest text-emerald-200 uppercase">
            PENGURUS RANTING NAHDLATUL ULAMA
          </span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md">
          DESA BANJARKEMUNING
        </h1>

        <div class="flex items-center gap-2 text-sm sm:text-base font-semibold text-nu-goldLight">
          <span>Kecamatan Sedati</span>
          <span class="text-emerald-400">›</span>
          <span>Kabupaten Sidoarjo</span>
          <span class="text-emerald-400">›</span>
          <span>Jawa Timur</span>
        </div>

        <p class="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-xl">
          Pusat khidmat jam'iyyah Ahlussunnah wal Jama'ah an-Nahdliyah. 
          "{meta?.motto || "Merawat Tradisi, Meneguhkan Kemandirian Umat"}"
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-3 pt-2">
          <a
            href="/struktur"
            class="px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-gray-900 shadow-lg shadow-amber-500/20 hover:-translate-y-0.5 transition-all"
          >
            Struktur Pengurus
          </a>
          <a
            href="/masjid"
            class="px-5 py-2.5 rounded-xl text-sm font-bold bg-white/15 hover:bg-white/25 backdrop-blur-md border border-amber-400/80 text-white shadow-lg hover:-translate-y-0.5 transition-all"
          >
            🕌 Kas Masjid Jumat
          </a>
          <a
            href="/lembaga/lazisnu"
            class="px-5 py-2.5 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white hover:-translate-y-0.5 transition-all"
          >
            💚 Koin LAZISNU
          </a>
          <a
            href="/berita"
            class="px-5 py-2.5 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white hover:-translate-y-0.5 transition-all"
          >
            Warta Kegiatan
          </a>
        </div>

        <!-- Live Stats Row -->
        <div class="flex items-center gap-6 pt-4 border-t border-white/15 w-fit">
          <div class="flex flex-col">
            <span class="text-2xl font-black text-amber-300">10</span>
            <span class="text-xs text-emerald-200/80 uppercase font-semibold">Pengurus Harian</span>
          </div>
          <div class="w-px h-8 bg-white/20"></div>
          <div class="flex flex-col">
            <span class="text-2xl font-black text-amber-300">6</span>
            <span class="text-xs text-emerald-200/80 uppercase font-semibold">Badan Otonom</span>
          </div>
          <div class="w-px h-8 bg-white/20"></div>
          <div class="flex flex-col">
            <span class="text-2xl font-black text-amber-300">1</span>
            <span class="text-xs text-emerald-200/80 uppercase font-semibold">Masjid Jami' Desa</span>
          </div>
        </div>
      </div>

      <!-- Right Emblem Card (5 cols) -->
      <div class="lg:col-span-5 flex justify-center">
        <div class="w-full max-w-sm p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/25 shadow-2xl flex flex-col items-center text-center transform hover:scale-[1.02] transition-transform">
          <div class="w-48 h-32 flex items-center justify-center p-2 mb-4">
            <img
              src="/assets/NU-Green.png"
              alt="Lambang Nahdlatul Ulama PRNU Banjarkemuning"
              class="max-h-full max-w-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
              width="220"
              height="150"
            />
          </div>

          <h2 class="text-xl font-black text-white tracking-wide mb-1">
            {meta?.shortName || 'PRNU BANJARKEMUNING'}
          </h2>
          <p class="text-xs text-emerald-200/90 leading-relaxed mb-4">
            Kecamatan Sedati · Kabupaten Sidoarjo<br />
            Provinsi Jawa Timur
          </p>

          <div class="flex items-center gap-2 pt-3 border-t border-white/20 w-full justify-center text-xs font-semibold">
            <span class="px-2.5 py-1 rounded-full bg-emerald-900/60 text-emerald-200 border border-emerald-500/30">
              Aswaja an-Nahdliyah
            </span>
            <span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
              ● Live Supabase
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
