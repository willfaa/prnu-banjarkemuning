<script>
  export let data;
</script>

<svelte:head>
  <title>Lembaga Jam'iyyah | PRNU Banjarkemuning</title>
  <meta name="description" content="Lembaga-lembaga di bawah Pengurus Ranting Nahdlatul Ulama Desa Banjarkemuning: LAZISNU, LDNU, dan LP Ma'arif NU." />
</svelte:head>

<div class="subpage-hero">
  <div class="container">
    <div class="subpage-breadcrumb">
      <a href="/">Beranda</a>
      <span>›</span>
      <span>Lembaga Ranting</span>
    </div>
    <h1 class="subpage-hero-title">Lembaga PRNU Banjarkemuning</h1>
    <p class="subpage-hero-desc">
      Perangkat departementasi jam'iyyah yang menjalankan program spesifik di bidang zakat, dakwah, dan pendidikan.
    </p>
  </div>
</div>

<div class="container section">
  <div style="max-width: 900px; margin: 0 auto;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
      <!-- LAZISNU Special Card -->
      <div style="background: var(--color-surface); padding: 2.25rem; border-radius: var(--radius-lg); border: 2px solid var(--color-nu-green); box-shadow: var(--shadow-md); display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <span class="badge-tag badge-gold">PENGELOLA KOIN NU</span>
          <h3 style="color: var(--color-nu-deep); font-size: 1.45rem; margin-top: 0.4rem; margin-bottom: 0.75rem;">
            LAZISNU Banjarkemuning
          </h3>
          <p style="font-size: 0.9375rem; color: var(--color-text-body); line-height: 1.6;">
            Lembaga Amil Zakat, Infaq, dan Shadaqah NU. Mengelola gerakan Koin Sehat kaleng warga, santunan yatim dan dhuafa, beasiswa santri berprestasi, dan layanan tanggap darurat.
          </p>
        </div>
        <div style="margin-top: 1.5rem;">
          <a href="/lembaga/lazisnu" class="btn btn-primary" style="width: 100%;">
            Buka Laporan Transparansi Koin NU →
          </a>
        </div>
      </div>

      <!-- LDNU Card -->
      <div id="ldnu" style="background: var(--color-surface); padding: 2.25rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <span class="badge-tag">DAKWAH & KHUTBAH</span>
          <h3 style="color: var(--color-nu-deep); font-size: 1.45rem; margin-top: 0.4rem; margin-bottom: 0.75rem;">
            LDNU Banjarkemuning
          </h3>
          <p style="font-size: 0.9375rem; color: var(--color-text-body); line-height: 1.6;">
            Lembaga Dakwah Nahdlatul Ulama. Mengkoordinasikan muballigh dan khotib Jumat di masjid/musholla desa, pembinaan majelis istighotsah, serta dakwah wasathiyah Aswaja.
          </p>
        </div>
        <div style="margin-top: 1.5rem; padding: 0.85rem; background: var(--color-nu-tint-soft); border-radius: var(--radius-md); font-size: 0.875rem;">
          <strong>Koordinator:</strong> Ust. M. Ridwan, M.Pd
        </div>
      </div>

      <!-- LP Ma'arif Card -->
      <div style="background: var(--color-surface); padding: 2.25rem; border-radius: var(--radius-lg); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <span class="badge-tag">PENDIDIKAN SANTRI</span>
          <h3 style="color: var(--color-nu-deep); font-size: 1.45rem; margin-top: 0.4rem; margin-bottom: 0.75rem;">
            LP Ma'arif NU Banjarkemuning
          </h3>
          <p style="font-size: 0.9375rem; color: var(--color-text-body); line-height: 1.6;">
            Lembaga Pendidikan Ma'arif NU. Melakukan pendampingan terhadap guru ngaji TPQ, madrasah diniyah, dan penguatan kurikulum Aswaja bagi santri cilik di desa.
          </p>
        </div>
        <div style="margin-top: 1.5rem; padding: 0.85rem; background: var(--color-nu-tint-soft); border-radius: var(--radius-md); font-size: 0.875rem;">
          <strong>Fokus:</strong> Penguatan Mutu TPQ & Madin Desa
        </div>
      </div>
    </div>
  </div>
</div>
