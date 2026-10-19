import React from 'react';

export default function BanomSection({ banom, lembaga }) {
  const banomList = banom || [];
  const lembagaList = lembaga || [];

  return (
    <section id="banom" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Sayap Jam'iyyah</span>
          <h2 className="section-title">Badan Otonom (Banom)</h2>
          <p className="section-subtitle">
            Kaderisasi berkesinambungan lintas generasi di Desa Banjarkemuning: dari pelajar, pemudi-pemuda, hingga ibu-ibu jamaah.
          </p>
        </div>

        {/* Banom Cards Grid */}
        <div className="banom-grid">
          {banomList.map((item) => (
            <div key={item.id} className="banom-card">
              <div className="banom-header">
                <div className="banom-avatar" aria-hidden="true">
                  {item.iconSymbol || item.name.substring(0, 2)}
                </div>
                <div>
                  <h3 className="banom-name">{item.name}</h3>
                  <span className="banom-badge">{item.badge}</span>
                </div>
              </div>

              <div className="banom-leader">
                Pimpinan: {item.leader}
              </div>

              <p className="banom-focus">
                {item.focus}
              </p>
            </div>
          ))}
        </div>

        {/* Lembaga Khidmat Section Banner */}
        <div className="lembaga-section-card">
          <div className="lembaga-header">
            <span className="badge-tag badge-gold" style={{ color: '#ffffff', backgroundColor: 'rgba(212, 175, 55, 0.25)', borderColor: '#d4af37' }}>
              Lembaga Pelaksana Khidmat
            </span>
            <h3>Lembaga & Aksi Nyata Ranting</h3>
            <p>
              Unit kerja khusus penopang kegiatan keagamaan, takmir masjid, dan kepedulian sosial kemasyarakatan.
            </p>
          </div>

          <div className="lembaga-grid">
            {lembagaList.map((lem, idx) => (
              <div key={idx} className="lembaga-item">
                <span className="lembaga-code-badge">{lem.code}</span>
                <h4 className="lembaga-title">{lem.name}</h4>
                <p className="lembaga-desc">{lem.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
