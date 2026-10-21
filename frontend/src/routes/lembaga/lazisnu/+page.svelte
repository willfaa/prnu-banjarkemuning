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
  <title>LAZISNU & Transparansi Koin NU | PRNU Banjarkemuning</title>
  <meta name="description" content="Laporan kas Koin NU, transparansi infaq kaleng warga, penyaluran santunan anak yatim dan dhuafa Desa Banjarkemuning." />
</svelte:head>

<div class="subpage-hero" style="background: linear-gradient(135deg, #01351b 0%, #006030 50%, #084724 100%);">
  <div class="container">
    <div class="subpage-breadcrumb">
      <a href="/">Beranda</a>
      <span>›</span>
      <a href="/lembaga">Lembaga</a>
      <span>›</span>
      <span>LAZISNU</span>
    </div>
    <span class="badge-tag badge-gold" style="margin-bottom: 0.5rem;">KEMANDIRIAN UMAT</span>
    <h1 class="subpage-hero-title">UPZIS LAZISNU Banjarkemuning</h1>
    <p class="subpage-hero-desc">
      Dari Umat, Oleh Umat, Untuk Kemaslahatan Warga Nahdliyin Desa Banjarkemuning.
    </p>
  </div>
</div>

<!-- Parallax Aid Distribution Banner -->
<div class="full-bleed" style="margin-top: 0; margin-bottom: 3.5rem;">
  <div
    style="
      position: relative;
      width: 100vw;
      min-height: 380px;
      background: #012815;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 2px solid var(--color-nu-gold);
    "
  >
    <div
      style="
        position: absolute;
        inset: 0;
        background-image: url('/assets/koin-nu-banner.jpg');
        background-size: cover;
        background-position: center 40%;
        background-attachment: fixed;
        opacity: 0.45;
      "
    ></div>
    <div
      style="
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, rgba(0, 86, 43, 0.4) 0%, rgba(1, 30, 15, 0.9) 85%);
      "
    ></div>

    <div style="position: relative; z-index: 2; text-align: center; padding: 2.5rem; max-width: 800px; color: #fff;">
      <h2 style="font-size: 2.2rem; font-weight: 800; text-shadow: 0 2px 8px rgba(0,0,0,0.5); margin-bottom: 0.75rem;">
        Gerakan Kaleng Koin Sehat NU
      </h2>
      <p style="font-size: 1.05rem; color: #eaf5ee; line-height: 1.7; margin-bottom: 1.5rem;">
        Menyisihkan uang koin receh sisa belanja setiap hari ke dalam kaleng LAZISNU di rumah masing-masing, terbukti mampu membiayai santunan anak yatim, ambulan desa, dan pengobatan warga yang membutuhkan.
      </p>
      {#if data.whatsapp}
        <a
          href="https://wa.me/{data.whatsapp}?text=Assalamualaikum%20LAZISNU%20Banjarkemuning,%20saya%20ingin%20minta%20kaleng%20Koin%20NU%20atau%20jemput%20donasi"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-gold btn-shine"
        >
          Minta Kaleng Koin / Jemput Infaq via WA →
        </a>
      {/if}
    </div>
  </div>
</div>

<div class="container section">
  <div style="max-width: 960px; margin: 0 auto;">
    <!-- Dashboard Live Numbers -->
    {#if data.laporan}
      <div class="laporan-main-card" style="margin-bottom: 3rem;">
        <div class="laporan-card-header">
          <div>
            <span class="laporan-period-badge">PERIODE LAPORAN KEUANGAN</span>
            <h3 class="laporan-period-title">{data.laporan.period}</h3>
          </div>
          <div class="laporan-live-indicator">
            <span class="live-pulse"></span>
            <span>Live Supabase Sync</span>
          </div>
        </div>

        <div class="laporan-cards-grid">
          <div class="metric-card metric-income">
            <span class="metric-label">Total Koin & Infaq Terkumpul</span>
            <div class="metric-value">{formatRupiah(data.laporan.total_income)}</div>
            <span class="metric-hint">Dari ratusan kaleng nahdliyin</span>
          </div>

          <div class="metric-card metric-spent">
            <span class="metric-label">Dana Disalurkan</span>
            <div class="metric-value">{formatRupiah(data.laporan.total_spent)}</div>
            <span class="metric-hint">Penyaluran tepat sasaran</span>
          </div>

          <div class="metric-card metric-balance">
            <span class="metric-label">Saldo Kas LAZISNU</span>
            <div class="metric-value">{formatRupiah(data.laporan.balance)}</div>
            <span class="metric-hint">Tersimpan aman di kas organisasi</span>
          </div>

          <div class="metric-card metric-beneficiaries">
            <span class="metric-label">Penerima Manfaat</span>
            <div class="metric-value">{data.laporan.beneficiaries_count || 0} Jiwa</div>
            <span class="metric-hint">Warga desa yang tertolong</span>
          </div>
        </div>

        {#if data.laporan.notes}
          <div class="laporan-notes-box" style="margin-top: 1.5rem;">
            <span class="notes-title">Catatan Penggunaan Dana Umat:</span>
            <p class="notes-body">{data.laporan.notes}</p>
          </div>
        {/if}
      </div>
    {/if}

    <!-- 4 Pilar Program LAZISNU -->
    <div style="margin-bottom: 3.5rem;">
      <div class="section-header">
        <span class="badge-tag">PROGRAM KEMANUSIAAN</span>
        <h2 class="section-title">Pilar Penyaluran ZIS</h2>
        <p class="section-subtitle">Dana Koin NU disalurkan tanpa potongan birokrasi yang rumit.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
        <div style="background: var(--color-surface); padding: 1.75rem; border-radius: var(--radius-md); border-top: 4px solid var(--color-nu-green); box-shadow: var(--shadow-sm);">
          <span style="font-size: 2rem;">🤝</span>
          <h4 style="color: var(--color-nu-deep); font-size: 1.2rem; margin: 0.5rem 0 0.35rem 0;">NU Peduli (Sosial)</h4>
          <p style="font-size: 0.9rem; color: var(--color-text-body);">Santunan rutin anak yatim piatu, sembako janda lansia, dan bantuan tanggap darurat musibah warga.</p>
        </div>

        <div style="background: var(--color-surface); padding: 1.75rem; border-radius: var(--radius-md); border-top: 4px solid var(--color-nu-gold); box-shadow: var(--shadow-sm);">
          <span style="font-size: 2rem;">🏥</span>
          <h4 style="color: var(--color-nu-deep); font-size: 1.2rem; margin: 0.5rem 0 0.35rem 0;">NU Sehat (Kesehatan)</h4>
          <p style="font-size: 0.9rem; color: var(--color-text-body);">Bantuan biaya pengobatan dhuafa, transportasi pasien ke rumah sakit, dan penyediaan alat kesehatan gratis.</p>
        </div>

        <div style="background: var(--color-surface); padding: 1.75rem; border-radius: var(--radius-md); border-top: 4px solid var(--color-nu-green); box-shadow: var(--shadow-sm);">
          <span style="font-size: 2rem;">🎓</span>
          <h4 style="color: var(--color-nu-deep); font-size: 1.2rem; margin: 0.5rem 0 0.35rem 0;">NU Cerdas (Pendidikan)</h4>
          <p style="font-size: 0.9rem; color: var(--color-text-body);">Beasiswa santri berprestasi dari keluarga kurang mampu dan insentif operasional guru ngaji TPQ desa.</p>
        </div>

        <div style="background: var(--color-surface); padding: 1.75rem; border-radius: var(--radius-md); border-top: 4px solid var(--color-nu-gold); box-shadow: var(--shadow-sm);">
          <span style="font-size: 2rem;">🌱</span>
          <h4 style="color: var(--color-nu-deep); font-size: 1.2rem; margin: 0.5rem 0 0.35rem 0;">NU Berdaya (Ekonomi)</h4>
          <p style="font-size: 0.9rem; color: var(--color-text-body);">Bantuan modal bergulir usaha mikro tanpa bunga untuk membangkitkan ekonomi keluarga nahdliyin desa.</p>
        </div>
      </div>
    </div>
  </div>
</div>
