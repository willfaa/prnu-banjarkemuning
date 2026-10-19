import React, { useState } from 'react';

export default function WartaSection({ articles }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="warta" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Publikasi & Dokumentasi</span>
          <h2 className="section-title">Warta & Berita Ranting</h2>
          <p className="section-subtitle">
            Kabar kegiatan, amaliyah, dan syiar Ahlussunnah wal Jama'ah an-Nahdliyah di Desa Banjarkemuning.
          </p>
        </div>

        <div className="warta-grid">
          {articles.map((item) => (
            <article key={item.id} className="warta-card">
              <div className="warta-meta-top">
                <span className="warta-badge">{item.category}</span>
                <span className="warta-date">{item.date}</span>
              </div>

              <h3 className="warta-title">{item.title}</h3>
              <p className="warta-excerpt">{item.excerpt}</p>

              <div className="warta-footer">
                <span className="warta-author">✍ {item.author}</span>
                <button
                  type="button"
                  className="warta-read-btn"
                  onClick={() => setSelectedArticle(item)}
                  aria-haspopup="dialog"
                >
                  Baca Selengkapnya →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Baca Artikel */}
        {selectedArticle && (
          <div
            className="article-modal-backdrop"
            onClick={() => setSelectedArticle(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="article-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <span className="badge-tag">{selectedArticle.category}</span>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                    {selectedArticle.date} · Oleh {selectedArticle.author}
                  </div>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Tutup artikel"
                >
                  ✕
                </button>
              </div>

              <h2 className="modal-title">{selectedArticle.title}</h2>
              <div className="modal-body">
                <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-text-main)' }}>
                  {selectedArticle.excerpt}
                </p>
                <div style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
                  {selectedArticle.content}
                </div>
              </div>

              <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSelectedArticle(null)}
                >
                  Tutup Bacaan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
