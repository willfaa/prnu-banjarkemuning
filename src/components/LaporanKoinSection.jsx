import React from 'react';

export default function LaporanKoinSection({ data, whatsapp }) {
  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val || 0);
  };

  const percentDisbursed = data?.totalIncome > 0
    ? Math.min(100, Math.round((data.totalSpent / data.totalIncome) * 100))
    : 0;

  return (
    <section id="laporan" className="laporan-parallax-section">
      {/* Background Image Overlay */}
      <div className="laporan-bg-layer" />
      <div className="laporan-overlay-dark" />

      <div className="container laporan-content">
        <div className="section-header" style={{ color: '#ffffff' }}>
          <span className="badge-tag badge-gold">
            Transparansi Umat
          </span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Laporan Koin NU & Kas Ranting
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            Akuntabilitas perolehan dan penyaluran kaleng Koin LAZISNU Peduli Umat di Desa Banjarkemuning. 
            Periode: <strong>{data?.period || 'Triwulan Berjalan'}</strong>
          </p>
        </div>

        {/* 4 Financial Metric Cards */}
        <div className="laporan-cards-grid">
          {/* Card 1: Total Penerimaan */}
          <div className="laporan-metric-card">
            <span className="metric-badge-label">Total Penerimaan</span>
            <div className="metric-value text-green">
              {formatRupiah(data?.totalIncome)}
            </div>
            <p className="metric-desc">Infaq kaleng KOIN NU & shadaqah jamaah</p>
          </div>

          {/* Card 2: Total Penyaluran */}
          <div className="laporan-metric-card">
            <span className="metric-badge-label">Total Penyaluran</span>
            <div className="metric-value text-gold">
              {formatRupiah(data?.totalSpent)}
            </div>
            <p className="metric-desc">Santunan yatim, dhuafa & tanggap darurat</p>
          </div>

          {/* Card 3: Saldo Kas */}
          <div className="laporan-metric-card">
            <span className="metric-badge-label">Saldo Kas Siaga</span>
            <div className="metric-value text-cyan">
              {formatRupiah(data?.balance)}
            </div>
            <p className="metric-desc">Kas tersimpan di rekening kas LAZISNU</p>
          </div>

          {/* Card 4: Penerima Manfaat */}
          <div className="laporan-metric-card">
            <span className="metric-badge-label">Penerima Manfaat</span>
            <div className="metric-value" style={{ color: '#ffffff' }}>
              {data?.beneficiaries || 0} <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>Warga</span>
            </div>
            <p className="metric-desc">Santri, lansia, dan dhuafa binaan</p>
          </div>
        </div>

        {/* Progress & Transparency Breakdown */}
        <div className="laporan-detail-box">
          <div className="progress-header">
            <span style={{ fontWeight: 600 }}>Tingkat Penyaluran Dana Umat:</span>
            <span style={{ fontWeight: 700, color: 'var(--color-nu-gold-light)' }}>
              {percentDisbursed}% Tersalurkan
            </span>
          </div>

          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${percentDisbursed}%` }}
              role="progressbar"
              aria-valuenow={percentDisbursed}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>

          <div className="laporan-notes">
            <strong>Catatan Penyaluran:</strong> {data?.notes || 'Data diperbarui secara real-time dari database Supabase.'}
          </div>

          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <a
              href={`https://wa.me/${whatsapp}?text=Assalamualaikum%2C%20saya%20warga%20Banjarkemuning%20ingin%20meminta%20kaleng%20KOIN%20NU%20untuk%20di%20rumah.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Minta Kaleng KOIN NU untuk Rumah Anda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
