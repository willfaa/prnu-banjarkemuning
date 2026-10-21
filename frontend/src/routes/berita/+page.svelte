<script>
  export let data;
  let selectedArticle = null;
</script>

<svelte:head>
  <title>Warta & Berita Kegiatan | PRNU Banjarkemuning</title>
  <meta name="description" content="Arsip warta, kabar jam'iyyah, dan kegiatan Nahdlatul Ulama Desa Banjarkemuning, Sedati, Sidoarjo." />
</svelte:head>

<div class="subpage-hero">
  <div class="container">
    <div class="subpage-breadcrumb">
      <a href="/">Beranda</a>
      <span>›</span>
      <span>Warta & Berita</span>
    </div>
    <h1 class="subpage-hero-title">Warta & Kabar Ranting</h1>
    <p class="subpage-hero-desc">
      Publikasi resmi aktivitas jam'iyyah, agenda Banom, dan kabar kemaslahatan warga Desa Banjarkemuning.
    </p>
  </div>
</div>

<div class="container section">
  <div class="warta-grid">
    {#each data.warta as article}
      <article class="warta-card">
        <div class="warta-card-meta">
          <span class="warta-category">{article.category}</span>
          <time class="warta-date">
            {new Date(article.published_at).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
          </time>
        </div>
        <h2 class="warta-title" style="font-size: 1.35rem;">{article.title}</h2>
        <p class="warta-excerpt">{article.excerpt}</p>
        <div class="warta-card-footer">
          <button
            class="btn-read-more"
            on:click={() => (selectedArticle = article)}
          >
            Baca Berita Lengkap →
          </button>
        </div>
      </article>
    {/each}
  </div>
</div>

<!-- Modal Reader Berita -->
{#if selectedArticle}
  <div class="article-modal-backdrop" on:click={() => (selectedArticle = null)}>
    <div class="article-modal-container" on:click|stopPropagation>
      <div class="article-modal-header">
        <div>
          <span class="badge-tag">{selectedArticle.category}</span>
          <h2 class="modal-article-title">{selectedArticle.title}</h2>
          <div class="modal-article-meta">
            <span>Oleh: {selectedArticle.author || 'Tim Media PRNU'}</span>
            <span>•</span>
            <time>{new Date(selectedArticle.published_at).toLocaleDateString('id-ID', { dateStyle: 'long' })}</time>
          </div>
        </div>
        <button class="modal-close-btn" on:click={() => (selectedArticle = null)}>✕</button>
      </div>

      <div class="article-modal-body">
        <p class="article-lead">{selectedArticle.excerpt}</p>
        <div class="article-full-content">
          <p>{selectedArticle.content || selectedArticle.excerpt}</p>
        </div>
      </div>

      <div class="article-modal-footer">
        <a
          href="https://api.whatsapp.com/send?text={encodeURIComponent(selectedArticle.title + ' - Baca di website resmi PRNU Banjarkemuning')}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary btn-sm"
        >
          Bagikan ke WhatsApp
        </a>
        <button class="btn btn-primary btn-sm" on:click={() => (selectedArticle = null)}>
          Tutup Bacaan
        </button>
      </div>
    </div>
  </div>
{/if}
