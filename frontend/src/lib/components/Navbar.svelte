<script>
  export let meta = null;
  let isMobileMenuOpen = false;

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMenu() {
    isMobileMenuOpen = false;
  }
</script>

<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 transition-all">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
    <!-- Brand Logo -->
    <a href="/" class="flex items-center gap-3 group" on:click={closeMenu}>
      <img
        src="/assets/NU-Green-Bg.jpg"
        alt="Logo Nahdlatul Ulama"
        class="w-10 h-10 rounded-full object-cover border border-emerald-800/20 group-hover:scale-105 transition-transform"
        width="40"
        height="40"
      />
      <div class="flex flex-col">
        <span class="text-sm font-black tracking-wide text-nu-deep leading-tight group-hover:text-nu-green transition-colors">
          {meta?.shortName || 'PRNU BANJARKEMUNING'}
        </span>
        <span class="text-xs text-emerald-800/70 font-medium">Kec. Sedati · Kab. Sidoarjo</span>
      </div>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden lg:flex items-center gap-6" aria-label="Navigasi Utama">
      <a href="/" class="text-sm font-semibold text-gray-700 hover:text-nu-green transition-colors">
        Beranda
      </a>
      <a href="/profil" class="text-sm font-semibold text-gray-700 hover:text-nu-green transition-colors">
        Profil
      </a>
      <a href="/struktur" class="text-sm font-semibold text-gray-700 hover:text-nu-green transition-colors">
        Struktur
      </a>

      <!-- Dropdown Banom -->
      <div class="relative group py-2">
        <button class="flex items-center gap-1 text-sm font-semibold text-gray-700 group-hover:text-nu-green transition-colors">
          <span>Banom</span>
          <span class="text-xs transition-transform group-hover:rotate-180">▾</span>
        </button>
        <div class="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div class="w-56 bg-white/98 backdrop-blur-md rounded-xl shadow-xl border border-emerald-900/10 p-2 flex flex-col gap-1">
            <a href="/banom" class="px-3 py-2 text-xs font-bold text-nu-deep uppercase tracking-wider hover:bg-nu-tint rounded-lg">
              Semua Banom →
            </a>
            <div class="h-px bg-gray-100 my-1"></div>
            <a href="/banom/ansor" class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors">
              ⚡ GP Ansor & Banser
            </a>
            <a href="/banom/fatayat" class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors">
              🌸 Fatayat NU
            </a>
            <a href="/banom/ipnu-ippnu" class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors">
              📚 IPNU & IPPNU
            </a>
            <a href="/banom/muslimat" class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors">
              🌙 Muslimat NU
            </a>
            <a href="/banom/pagar-nusa" class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors">
              ⚔️ Pagar Nusa
            </a>
          </div>
        </div>
      </div>

      <!-- Dropdown Lembaga -->
      <div class="relative group py-2">
        <button class="flex items-center gap-1 text-sm font-semibold text-gray-700 group-hover:text-nu-green transition-colors">
          <span>Lembaga</span>
          <span class="text-xs transition-transform group-hover:rotate-180">▾</span>
        </button>
        <div class="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div class="w-56 bg-white/98 backdrop-blur-md rounded-xl shadow-xl border border-emerald-900/10 p-2 flex flex-col gap-1">
            <a href="/lembaga" class="px-3 py-2 text-xs font-bold text-nu-deep uppercase tracking-wider hover:bg-nu-tint rounded-lg">
              Semua Lembaga →
            </a>
            <div class="h-px bg-gray-100 my-1"></div>
            <a href="/lembaga/lazisnu" class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors">
              💚 LAZISNU (Koin NU)
            </a>
            <a href="/lembaga#ldnu" class="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors">
              📖 LDNU (Dakwah)
            </a>
          </div>
        </div>
      </div>

      <a href="/berita" class="text-sm font-semibold text-gray-700 hover:text-nu-green transition-colors">
        Berita
      </a>

      <!-- Catchy Masjid Pill Button -->
      <a
        href="/masjid"
        class="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded-full bg-gradient-to-r from-[#013f20] via-nu-green to-[#00562b] border-2 border-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.35)] hover:scale-105 hover:shadow-[0_0_22px_rgba(212,175,55,0.6)] transition-all overflow-hidden"
      >
        <span class="text-base drop-shadow-[0_0_4px_rgba(255,215,0,0.6)]">🕌</span>
        <span>Masjid & Kas Jumat</span>
        <div class="shine-bar"></div>
      </a>

      <!-- WhatsApp CTA -->
      {#if meta?.contact?.whatsapp}
        <a
          href="https://wa.me/{meta.contact.whatsapp}?text=Assalamualaikum%20Pengurus%20PRNU%20Banjarkemuning"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 text-sm font-bold text-white bg-nu-green hover:bg-nu-deep rounded-xl shadow-sm hover:-translate-y-0.5 transition-all"
        >
          Kontak
        </a>
      {/if}
    </nav>

    <!-- Mobile Menu Toggle Button -->
    <button
      class="lg:hidden p-2 text-nu-deep hover:text-nu-green focus:outline-none"
      aria-label="Toggle navigation menu"
      on:click={toggleMenu}
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if isMobileMenuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Drawer Menu -->
  {#if isMobileMenuOpen}
    <div class="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
      <nav class="flex flex-col gap-2">
        <a href="/" on:click={closeMenu} class="py-2 text-base font-bold text-gray-800 border-b border-gray-100">
          Beranda
        </a>
        <a href="/profil" on:click={closeMenu} class="py-2 text-base font-bold text-gray-800 border-b border-gray-100">
          Profil Ranting
        </a>
        <a href="/struktur" on:click={closeMenu} class="py-2 text-base font-bold text-gray-800 border-b border-gray-100">
          Struktur Pengurus
        </a>

        <!-- Mobile Banom Section -->
        <div class="pt-2">
          <span class="text-xs font-black tracking-wider text-nu-deep uppercase block mb-1">Badan Otonom (Banom)</span>
          <div class="grid grid-cols-2 gap-1 pl-2">
            <a href="/banom/ansor" on:click={closeMenu} class="py-1.5 text-sm text-gray-700 hover:text-nu-green">⚡ GP Ansor</a>
            <a href="/banom/fatayat" on:click={closeMenu} class="py-1.5 text-sm text-gray-700 hover:text-nu-green">🌸 Fatayat NU</a>
            <a href="/banom/ipnu-ippnu" on:click={closeMenu} class="py-1.5 text-sm text-gray-700 hover:text-nu-green">📚 IPNU & IPPNU</a>
            <a href="/banom/muslimat" on:click={closeMenu} class="py-1.5 text-sm text-gray-700 hover:text-nu-green">🌙 Muslimat NU</a>
            <a href="/banom/pagar-nusa" on:click={closeMenu} class="py-1.5 text-sm text-gray-700 hover:text-nu-green">⚔️ Pagar Nusa</a>
            <a href="/banom" on:click={closeMenu} class="py-1.5 text-sm font-bold text-nu-green">Semua Banom →</a>
          </div>
        </div>

        <!-- Mobile Lembaga Section -->
        <div class="pt-2">
          <span class="text-xs font-black tracking-wider text-nu-deep uppercase block mb-1">Lembaga</span>
          <div class="flex flex-col pl-2">
            <a href="/lembaga/lazisnu" on:click={closeMenu} class="py-1.5 text-sm font-semibold text-emerald-800 hover:text-nu-green">💚 LAZISNU (Koin NU)</a>
            <a href="/lembaga" on:click={closeMenu} class="py-1.5 text-sm text-gray-700 hover:text-nu-green">Direktori Lembaga →</a>
          </div>
        </div>

        <a href="/berita" on:click={closeMenu} class="py-2 text-base font-bold text-gray-800 border-b border-gray-100">
          Warta Berita
        </a>

        <!-- Catchy Mobile Button -->
        <a
          href="/masjid"
          on:click={closeMenu}
          class="flex items-center justify-center gap-2 mt-3 py-3 px-4 rounded-xl bg-gradient-to-r from-[#013f20] via-nu-green to-[#00562b] text-white font-bold border-2 border-amber-400 shadow-lg text-center"
        >
          <span>🕌</span>
          <span>Masjid & Laporan Kas Sholat Jumat</span>
        </a>

        {#if meta?.contact?.whatsapp}
          <a
            href="https://wa.me/{meta.contact.whatsapp}?text=Assalamualaikum%20Pengurus%20PRNU%20Banjarkemuning"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 py-2.5 px-4 text-center text-sm font-bold text-white bg-nu-green rounded-xl"
          >
            Hubungi Sekretariat WhatsApp
          </a>
        {/if}
      </nav>
    </div>
  {/if}
</header>

<style>
  .shine-bar {
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transform: skewX(-20deg);
    animation: shine 3.5s infinite;
  }
</style>
