<script>
  export let meta = null;
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-nu-darker text-emerald-100/80 pt-16 pb-12 border-t-4 border-nu-gold">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
      <!-- Col 1: Identity (4 cols) -->
      <div class="lg:col-span-4 flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <img
            src="/assets/NU-Green-Bg.jpg"
            alt="Logo NU"
            class="w-12 h-12 rounded-full object-cover border border-amber-400/40"
            width="48"
            height="48"
          />
          <div>
            <span class="text-base font-black text-white block leading-tight">
              {meta?.name || 'PRNU Banjarkemuning'}
            </span>
            <span class="text-xs text-emerald-300 font-semibold">
              Kecamatan Sedati · Kabupaten Sidoarjo
            </span>
          </div>
        </div>
        <p class="text-sm text-emerald-200/70 leading-relaxed">
          Organisasi keagamaan kemasyarakatan Islam berhaluan Ahlussunnah wal Jama'ah an-Nahdliyah,
          berkhidmat untuk kesejahteraan, pendidikan, dakwah, dan kemandirian jamaah di Desa Banjarkemuning.
        </p>
      </div>

      <!-- Col 2: Navigation Links (2 cols) -->
      <div class="lg:col-span-2 flex flex-col gap-3">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider">Halaman</h4>
        <ul class="flex flex-col gap-2 text-sm">
          <li><a href="/profil" class="hover:text-amber-300 transition-colors">Profil & Sejarah</a></li>
          <li><a href="/struktur" class="hover:text-amber-300 transition-colors">Struktur Pengurus</a></li>
          <li><a href="/banom" class="hover:text-amber-300 transition-colors">Badan Otonom (Banom)</a></li>
          <li><a href="/lembaga/lazisnu" class="hover:text-amber-300 transition-colors">LAZISNU & Koin NU</a></li>
          <li><a href="/masjid" class="text-amber-300 font-semibold hover:text-white transition-colors">🕌 Masjid & Kas Jumat</a></li>
          <li><a href="/berita" class="hover:text-amber-300 transition-colors">Warta Kegiatan</a></li>
        </ul>
      </div>

      <!-- Col 3: Jam'iyyah Network (3 cols) -->
      <div class="lg:col-span-3 flex flex-col gap-3">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider">Jaringan NU</h4>
        <ul class="flex flex-col gap-2 text-sm">
          <li><a href="https://nu.or.id/" target="_blank" rel="noopener noreferrer" class="hover:text-amber-300 transition-colors">PBNU (nu.or.id) ↗</a></li>
          <li><a href="https://digdaya.nu.id/" target="_blank" rel="noopener noreferrer" class="hover:text-amber-300 transition-colors">Digdaya NU ↗</a></li>
          <li><a href="https://pwnujatim.or.id/" target="_blank" rel="noopener noreferrer" class="hover:text-amber-300 transition-colors">PWNU Jawa Timur ↗</a></li>
          <li><a href="https://pcnusidoarjo.or.id/" target="_blank" rel="noopener noreferrer" class="hover:text-amber-300 transition-colors">PCNU Kabupaten Sidoarjo ↗</a></li>
          <li><span class="text-amber-300/90 font-medium">MWCNU Kecamatan Sedati</span></li>
        </ul>
      </div>

      <!-- Col 4: Secretariat (3 cols) -->
      <div class="lg:col-span-3 flex flex-col gap-3">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider">Sekretariat</h4>
        <div class="text-sm text-emerald-200/70 space-y-2">
          <p>
            <strong class="text-white block font-semibold">Alamat:</strong>
            {meta?.address || 'Jl. Raya Banjarkemuning, Kec. Sedati, Sidoarjo, Jawa Timur'}
          </p>
          <p>
            <strong class="text-white block font-semibold">Layanan Umat:</strong>
            {meta?.contact?.serviceHours || 'Senin - Ahad, 08:00 - 21:00 WIB'}
          </p>
          {#if meta?.contact?.whatsapp}
            <p>
              <strong class="text-white block font-semibold">Hotline WhatsApp:</strong>
              <a href="https://wa.me/{meta.contact.whatsapp}" class="text-amber-300 font-bold hover:underline">
                +{meta.contact.whatsapp}
              </a>
            </p>
          {/if}
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/60">
      <p>© {currentYear} <strong>{meta?.shortName || 'PRNU BANJARKEMUNING'}</strong>. Berkhidmat untuk Umat dan Bangsa.</p>
      <div class="flex items-center gap-3">
        <span>Aswaja an-Nahdliyah</span>
        <span>•</span>
        <span>Kecamatan Sedati</span>
        <span>•</span>
        <span>Kabupaten Sidoarjo</span>
      </div>
    </div>
  </div>
</footer>
