<script>
  export let data;
  let activeTab = 'tanfidziyah';
</script>

<svelte:head>
  <title>Struktur Pengurus Syuriyah & Tanfidziyah | PRNU Banjarkemuning</title>
  <meta name="description" content="Susunan pengurus harian Syuriyah dan Tanfidziyah Pengurus Ranting Nahdlatul Ulama Desa Banjarkemuning, masa khidmat aktif." />
</svelte:head>

<div class="subpage-hero">
  <div class="container">
    <div class="subpage-breadcrumb">
      <a href="/">Beranda</a>
      <span>›</span>
      <span>Struktur Organisasi</span>
    </div>
    <h1 class="subpage-hero-title">Struktur Kepengurusan</h1>
    <p class="subpage-hero-desc">
      Susunan Majelis Syuriyah dan Pengurus Tanfidziyah PRNU Desa Banjarkemuning Masa Khidmat 2024 - 2029.
    </p>
  </div>
</div>

<div class="container section">
  <div class="structure-tabs-wrapper">
    <div class="structure-tabs">
      <button
        class="tab-btn {activeTab === 'tanfidziyah' ? 'active' : ''}"
        on:click={() => (activeTab = 'tanfidziyah')}
      >
        Pengurus Tanfidziyah (Eksekutif)
      </button>
      <button
        class="tab-btn {activeTab === 'syuriyah' ? 'active' : ''}"
        on:click={() => (activeTab = 'syuriyah')}
      >
        Majelis Syuriyah (Pengarah)
      </button>
    </div>

    <!-- Description of selected branch -->
    <div style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); margin-bottom: 2rem; text-align: center;">
      {#if activeTab === 'tanfidziyah'}
        <strong style="color: var(--color-nu-deep); font-size: 1.1rem;">Pengurus Tanfidziyah</strong>
        <p style="color: var(--color-text-muted); font-size: 0.9375rem; margin-top: 0.35rem;">
          Pelaksana harian tugas-tugas organisasi, membidangi program kemasyarakatan, persuratan, keuangan, dan hubungan antar-lembaga.
        </p>
      {:else}
        <strong style="color: var(--color-nu-gold); font-size: 1.1rem;">Majelis Syuriyah</strong>
        <p style="color: var(--color-text-muted); font-size: 0.9375rem; margin-top: 0.35rem;">
          Pemimpin tertinggi jam'iyyah yang bertugas membina, mengarahkan, mengawasi, serta menetapkan kebijakan dan fatwa keagamaan.
        </p>
      {/if}
    </div>

    <div class="structure-grid">
      {#each (activeTab === 'tanfidziyah' ? data.pengurus.tanfidziyah : data.pengurus.syuriyah) as p}
        <div class="person-card">
          <div class="person-card-header">
            <span class="person-role-badge">{p.role}</span>
            <span class="person-status">● {p.status || 'Aktif Berkhidmat'}</span>
          </div>
          <h3 class="person-name">{p.name}</h3>
          <p class="person-responsibility">
            {p.responsibility || (p.division ? `Bidang: ${p.division}` : 'Khidmat Organisasi')}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>
