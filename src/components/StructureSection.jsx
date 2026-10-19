import React, { useState } from 'react';

export default function StructureSection({ pengurus }) {
  const [activeTab, setActiveTab] = useState('tanfidziyah');

  const tanfidziyahList = pengurus?.tanfidziyah || [];
  const syuriyahList = pengurus?.syuriyah || [];

  return (
    <section id="struktur" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Tata Kelola Organisasi</span>
          <h2 className="section-title">Struktur Kepengurusan Ranting</h2>
          <p className="section-subtitle">
            Susunan Majelis Syuriyah (pengarah syar'i) dan Pengurus Tanfidziyah (pelaksana harian) PRNU Desa Banjarkemuning.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="tabs-nav" role="tablist" aria-label="Kategori Pengurus">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'tanfidziyah'}
            className={`tab-btn ${activeTab === 'tanfidziyah' ? 'active' : ''}`}
            onClick={() => setActiveTab('tanfidziyah')}
          >
            Pengurus Tanfidziyah ({tanfidziyahList.length} Pengurus)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'syuriyah'}
            className={`tab-btn ${activeTab === 'syuriyah' ? 'active' : ''}`}
            onClick={() => setActiveTab('syuriyah')}
          >
            Majelis Syuriyah ({syuriyahList.length} Ulama & Tokoh)
          </button>
        </div>

        {/* Tab Content: Tanfidziyah */}
        {activeTab === 'tanfidziyah' && (
          <div className="structure-grid" role="tabpanel" aria-label="Daftar Pengurus Tanfidziyah">
            {tanfidziyahList.map((person, idx) => (
              <div key={idx} className="structure-card">
                <span className="card-role-badge">{person.role}</span>
                <h3 className="card-person-name">{person.name}</h3>
                <p className="card-person-desc">{person.responsibility}</p>
                <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--color-nu-green)', fontWeight: 600 }}>
                  Divisi: {person.division || 'Pimpinan Harian'}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: Syuriyah */}
        {activeTab === 'syuriyah' && (
          <div className="structure-grid" role="tabpanel" aria-label="Daftar Majelis Syuriyah">
            {syuriyahList.map((person, idx) => (
              <div key={idx} className="structure-card" style={{ borderLeft: '3px solid var(--color-nu-gold)' }}>
                <span className="card-role-badge" style={{ backgroundColor: 'var(--color-nu-gold-bg)', color: '#8c6a0d' }}>
                  {person.role}
                </span>
                <h3 className="card-person-name">{person.name}</h3>
                <p className="card-person-desc">{person.note || person.responsibility}</p>
                <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Status: <strong style={{ color: 'var(--color-nu-green)' }}>{person.status || 'Aktif'}</strong>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
          Data pengurus terhubung langsung ke database Supabase dan dapat diperbarui kapan saja melalui dashboard admin.
        </div>
      </div>
    </section>
  );
}
