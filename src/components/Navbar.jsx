import React, { useState, useEffect } from 'react';

export default function Navbar({ meta }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key (a11y)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Struktur', href: '#struktur' },
    { label: 'Banom', href: '#banom' },
    { label: 'Laporan Koin', href: '#laporan' },
    { label: 'Warta', href: '#warta' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Kontak', href: '#kontak' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappNumber = meta?.contact?.whatsapp || '6281234567890';

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Link */}
        <a href="#beranda" className="brand-link" title="Beranda PRNU Banjarkemuning">
          <img
            src="/assets/logo-nu.svg"
            alt="Lambang Nahdlatul Ulama"
            className="brand-logo-img"
            width="46"
            height="46"
          />
          <div className="brand-info">
            <span className="brand-title">{meta?.shortName || 'PRNU BANJARKEMUNING'}</span>
            <span className="brand-subtitle">{meta?.mwc || 'Kec. Sedati'} · {meta?.cabang || 'Kab. Sidoarjo'}</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Navigasi Utama">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ minHeight: '38px', padding: '0.45rem 1.1rem', fontSize: '0.875rem' }}
          >
            Layanan Warga
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <nav className="mobile-nav-list" aria-label="Navigasi Mobile">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ width: '100%' }}
          onClick={handleLinkClick}
        >
          Hubungi Sekretariat Ranting
        </a>
      </div>
    </header>
  );
}
