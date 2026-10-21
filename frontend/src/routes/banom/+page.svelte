<script>
  export let data;

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

  function getBanomUrl(id) {
    const map = {
      ansor: '/banom/ansor',
      fatayat: '/banom/fatayat',
      ipnu: '/banom/ipnu-ippnu',
      ippnu: '/banom/ipnu-ippnu',
      muslimat: '/banom/muslimat',
      pagar_nusa: '/banom/pagar-nusa'
    };
    return map[id] || '/banom';
  }
</script>

<svelte:head>
  <title>Badan Otonom (Banom) | PRNU Banjarkemuning</title>
  <meta name="description" content="Direktori Badan Otonom Nahdlatul Ulama Desa Banjarkemuning: GP Ansor, Banser, Fatayat, IPNU, IPPNU, Muslimat, dan Pagar Nusa." />
</svelte:head>

<div class="subpage-hero">
  <div class="container">
    <div class="subpage-breadcrumb">
      <a href="/">Beranda</a>
      <span>›</span>
      <span>Badan Otonom (Banom)</span>
    </div>
    <h1 class="subpage-hero-title">Badan Otonom NU Banjarkemuning</h1>
    <p class="subpage-hero-desc">
      Sayap kaderisasi dan perjuangan berbasis usia, profesi, dan minat bakat warga Nahdlatul Ulama Desa Banjarkemuning.
    </p>
  </div>
</div>

<div class="container section">
  <div class="banom-grid">
    {#each data.banom as b}
      {@const logo = getBanomLogo(b.id)}
      {@const url = getBanomUrl(b.id)}
      <div class="banom-card" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div class="banom-card-header">
            {#if logo}
              <div class="banom-real-logo-box">
                <img src={logo} alt="Logo {b.name}" class="banom-real-logo-img" width="56" height="56" />
              </div>
            {:else}
              <div class="banom-symbol-box">
                <span class="banom-symbol">{b.icon_symbol || '🌿'}</span>
              </div>
            {/if}
            <span class="banom-badge-tag">{b.badge || 'Banom NU'}</span>
          </div>
          <h3 class="banom-name">{b.name}</h3>
          <p class="banom-full-name">{b.full_name}</p>
          <div class="banom-leader-box">
            <span class="leader-label">Ketua / Pimpinan:</span>
            <span class="leader-name">{b.leader}</span>
          </div>
          <p class="banom-focus">{b.focus}</p>
        </div>

        <div style="margin-top: 1.5rem; pt: 1rem; border-top: 1px solid var(--color-border-subtle);">
          <a href={url} class="btn btn-secondary btn-sm" style="width: 100%;">
            Buka Halaman & Struktur {b.name} →
          </a>
        </div>
      </div>
    {/each}
  </div>
</div>
