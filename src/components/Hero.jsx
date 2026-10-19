import React, { useEffect, useState } from 'react';

export default function Hero({ meta }) {
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="beranda" className="hero-fullpic-section">
      {/* Parallax Background Layer */}
      <div
        className="hero-fullpic-bg"
        style={{
          transform: `translate3d(0, ${scrollY * 0.35}px, 0)`
        }}
      />
      {/* Gradient Ambient Overlay */}
      <div className="hero-fullpic-overlay" />

      <div className="container hero-fullpic-content">
        <div className="hero-fullpic-grid">
          {/* Left Text */}
          <div className="hero-text-wrap">
            <div className="hero-pill-badge">
              <span className="star-icon">★</span>
              <span>{meta?.mwc || 'MWCNU Kecamatan Sedati'} · {meta?.cabang || 'PCNU Kabupaten Sidoarjo'}</span>
            </div>

            <h1 className="hero-fullpic-title">
              Pengurus Ranting <br />
              <span className="text-highlight">Nahdlatul Ulama</span> <br />
              Desa Banjarkemuning
            </h1>

            <p className="hero-fullpic-lead">
              Pusat khidmat jam'iyyah Ahlussunnah wal Jama'ah an-Nahdliyah. 
              {` "${meta?.motto || "Merawat Tradisi, Menjaga Jam'iyyah, Melayani Umat"}"`}
            </p>

            <div className="hero-fullpic-actions">
              <a href="#struktur" className="btn btn-gold btn-shine">
                Struktur Pengurus
              </a>
              <a href="#laporan" className="btn btn-glass">
                Laporan Kas & Koin NU
              </a>
              <a href="#warta" className="btn btn-glass">
                Warta Kegiatan
              </a>
            </div>

            {/* Live Stats Row */}
            <div className="hero-stats-row">
              <div className="stat-item">
                <span className="stat-number">10</span>
                <span className="stat-label">Pengurus Harian</span>
              </div>
              <div className="stat-separator" />
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Badan Otonom</span>
              </div>
              <div className="stat-separator" />
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Lembaga Khidmat</span>
              </div>
              <div className="stat-separator" />
              <div className="stat-item">
                <span className="stat-number">42+</span>
                <span className="stat-label">Penerima Manfaat</span>
              </div>
            </div>
          </div>

          {/* Right Emblem Card */}
          <div className="hero-card-container">
            <div className="hero-floating-glass-card">
              <div className="emblem-wrapper">
                <img
                  src="/assets/NU-Green-Bg.jpg"
                  alt="Lambang Nahdlatul Ulama PRNU Banjarkemuning"
                  className="emblem-hero-img"
                  width="150"
                  height="150"
                />
              </div>

              <h2 className="emblem-org-name">{meta?.shortName || 'PRNU BANJARKEMUNING'}</h2>
              <p className="emblem-org-loc">
                Kecamatan Sedati · Kabupaten Sidoarjo<br />
                Provinsi Jawa Timur
              </p>

              <div className="emblem-footer-tag">
                <span className="tag-aswaja">Aswaja an-Nahdliyah</span>
                <span className="tag-live">● Live Supabase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
