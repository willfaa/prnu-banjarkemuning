import React from 'react';

export default function Footer({ meta }) {
  const currentYear = new Date().getFullYear();
  const orgName = meta?.name || "Pengurus Ranting Nahdlatul Ulama Desa Banjarkemuning";
  const motto = meta?.motto || "Merawat Tradisi, Menjaga Jam'iyyah, Melayani Umat";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/assets/NU-Green-Bg.jpg"
                alt="Logo NU"
                width="38"
                height="38"
                style={{ filter: 'brightness(1.1)' }}
              />
              <h3 className="footer-brand-title" style={{ margin: 0 }}>
                {meta?.shortName || 'PRNU BANJARKEMUNING'}
              </h3>
            </div>
            <p className="footer-brand-desc">
              {orgName}, {meta?.mwc || 'Kecamatan Sedati'}, {meta?.cabang || 'Kabupaten Sidoarjo'}, {meta?.wilayah || 'Jawa Timur'}.
              Wadah silaturahmi, tarbiyah, dan amaliyah Aswaja An-Nahdliyah di tingkat akar rumput desa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigasi Utama</h4>
            <ul className="footer-links-list">
              <li><a href="#beranda">Beranda Utama</a></li>
              <li><a href="#struktur">Struktur Syuriyah & Tanfidziyah</a></li>
              <li><a href="#banom">Badan Otonom & Lembaga</a></li>
              <li><a href="#laporan">Laporan Koin NU LAZISNU</a></li>
              <li><a href="#warta">Warta Kegiatan Desa</a></li>
              <li><a href="#agenda">Jadwal Agenda Rutin</a></li>
              <li><a href="#kontak">Layanan Sekretariat</a></li>
            </ul>
          </div>

          {/* Jaringan Jam'iyyah Links */}
          <div>
            <h4 className="footer-col-title">Jaringan Jam'iyyah</h4>
            <ul className="footer-links-list">
              <li>
                <a href="https://nu.or.id" target="_blank" rel="noopener noreferrer">
                  PBNU Resmi (nu.or.id)
                </a>
              </li>
              <li>
                <a href="https://digdaya.nu.id" target="_blank" rel="noopener noreferrer">
                  Digdaya NU (digdaya.nu.id)
                </a>
              </li>
              <li>
                <a href="https://pwnujatim.or.id" target="_blank" rel="noopener noreferrer">
                  PWNU Jawa Timur
                </a>
              </li>
              <li>
                <a href="https://pcnusidoarjo.or.id" target="_blank" rel="noopener noreferrer">
                  PCNU Kabupaten Sidoarjo
                </a>
              </li>
              <li>
                <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
                  {meta?.mwc || 'MWCNU Kecamatan Sedati'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {currentYear} {orgName}. Hak Cipta Dilindungi.
          </div>
          <div style={{ color: 'var(--color-nu-gold-light)', fontWeight: 600 }}>
            {motto}
          </div>
        </div>
      </div>
    </footer>
  );
}
