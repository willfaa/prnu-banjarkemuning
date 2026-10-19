import React from 'react';

export default function AgendaSection({ kegiatan, meta }) {
  const agendaList = kegiatan || [];
  const whatsappNumber = meta?.contact?.whatsapp || '6281234567890';
  const address = meta?.address || 'Jl. Pemuda / Balai RT/RW Desa Banjarkemuning, Kec. Sedati, Kab. Sidoarjo';
  const serviceHours = meta?.contact?.serviceHours || 'Setiap Hari (08.00 - 21.00 WIB)';

  return (
    <section id="agenda" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Amaliyah & Kegiatan</span>
          <h2 className="section-title">Agenda Rutinan Jam'iyyah</h2>
          <p className="section-subtitle">
            Jadwal istiqomah amaliyah Nahdlatul Ulama yang diselenggarakan bersama jamaah se-Desa Banjarkemuning.
          </p>
        </div>

        <div className="agenda-grid">
          {agendaList.map((item, idx) => (
            <div key={idx} className="agenda-card">
              <div className="agenda-time">{item.time}</div>
              <h3 className="agenda-title">{item.title}</h3>
              <div className="agenda-loc">
                📍 {item.location}
              </div>
              <p className="agenda-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact Banner / Layanan Warga */}
        <div id="kontak" className="contact-banner">
          <div>
            <h3 className="contact-info-title">Layanan Warga & Kontak Sekretariat</h3>
            <p className="contact-info-desc">
              Untuk permohonan doa/tahlil jamaah lelayu, informasi infaq KOIN NU, administrasi rekomendasi ranting, 
              maupun koordinasi kegiatan musholla/masjid, silakan hubungi kontak pengurus.
            </p>
            <div style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
              🕒 {serviceHours} · 📍 {address}
            </div>
          </div>

          <div>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
