'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { OrganizationMeta } from '@/lib/types';

interface NavbarProps {
  meta: OrganizationMeta;
}

export default function Navbar({ meta }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
          <img
            src="/assets/NU-Green-Bg.jpg"
            alt="Logo Nahdlatul Ulama"
            className="w-10 h-10 rounded-full object-cover border border-emerald-800/20 group-hover:scale-105 transition-transform"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-wide text-nu-deep leading-tight group-hover:text-nu-green transition-colors">
              {meta?.shortName || 'PRNU BANJARKEMUNING'}
            </span>
            <span className="text-xs text-emerald-800/70 font-medium">
              Kec. Sedati · Kab. Sidoarjo
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navigasi Utama">
          <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-nu-green transition-colors">
            Beranda
          </Link>
          <Link href="/profil" className="text-sm font-semibold text-gray-700 hover:text-nu-green transition-colors">
            Profil
          </Link>
          <Link href="/struktur" className="text-sm font-semibold text-gray-700 hover:text-nu-green transition-colors">
            Struktur
          </Link>

          {/* Dropdown Banom */}
          <div className="relative group py-2">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-gray-700 group-hover:text-nu-green transition-colors"
            >
              <span>Banom</span>
              <span className="text-xs transition-transform group-hover:rotate-180">▾</span>
            </button>
            <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-emerald-900/10 p-2 flex flex-col gap-1">
                <Link
                  href="/banom"
                  className="px-3 py-2 text-xs font-bold text-nu-deep uppercase tracking-wider hover:bg-nu-tint rounded-lg"
                >
                  Semua Banom →
                </Link>
                <div className="h-px bg-gray-100 my-1" />
                <Link
                  href="/banom/ansor"
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors"
                >
                  ⚡ GP Ansor &amp; Banser
                </Link>
                <Link
                  href="/banom/fatayat"
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors"
                >
                  🌸 Fatayat NU
                </Link>
                <Link
                  href="/banom/ipnu-ippnu"
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors"
                >
                  📚 IPNU &amp; IPPNU
                </Link>
                <Link
                  href="/banom/muslimat"
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors"
                >
                  🌙 Muslimat NU
                </Link>
                <Link
                  href="/banom/pagar-nusa"
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors"
                >
                  ⚔️ Pagar Nusa
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown Lembaga */}
          <div className="relative group py-2">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-gray-700 group-hover:text-nu-green transition-colors"
            >
              <span>Lembaga</span>
              <span className="text-xs transition-transform group-hover:rotate-180">▾</span>
            </button>
            <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-emerald-900/10 p-2 flex flex-col gap-1">
                <Link
                  href="/lembaga"
                  className="px-3 py-2 text-xs font-bold text-nu-deep uppercase tracking-wider hover:bg-nu-tint rounded-lg"
                >
                  Semua Lembaga →
                </Link>
                <div className="h-px bg-gray-100 my-1" />
                <Link
                  href="/lembaga/lazisnu"
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors"
                >
                  💚 LAZISNU (Koin NU)
                </Link>
                <Link
                  href="/lembaga#ldnu"
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-nu-tint hover:text-nu-darker rounded-lg transition-colors"
                >
                  📖 LDNU (Dakwah)
                </Link>
              </div>
            </div>
          </div>

          <Link href="/berita" className="text-sm font-semibold text-gray-700 hover:text-nu-green transition-colors">
            Berita
          </Link>

          <Link
            href="/masjid"
            className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded-full bg-gradient-to-r from-[#013f20] via-nu-green to-[#00562b] border-2 border-amber-400 shadow-[0_0_15px_rgba(212,175,55,0.35)] hover:scale-105 hover:shadow-[0_0_22px_rgba(212,175,55,0.6)] transition-all overflow-hidden"
          >
            <span className="text-base drop-shadow-[0_0_4px_rgba(255,215,0,0.6)]">🕌</span>
            <span>Masjid &amp; Kas Jumat</span>
            <div className="shine-bar" />
          </Link>

          {meta?.contact?.whatsapp && (
            <a
              href={`https://wa.me/${meta.contact.whatsapp}?text=Assalamualaikum%20Pengurus%20PRNU%20Banjarkemuning`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-bold text-white bg-nu-green hover:bg-nu-deep rounded-xl shadow-sm hover:-translate-y-0.5 transition-all"
            >
              Kontak
            </a>
          )}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-nu-deep hover:text-nu-green focus:outline-none"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            <Link href="/" onClick={closeMenu} className="py-2 text-base font-bold text-gray-800 border-b border-gray-100">
              Beranda
            </Link>
            <Link href="/profil" onClick={closeMenu} className="py-2 text-base font-bold text-gray-800 border-b border-gray-100">
              Profil Ranting
            </Link>
            <Link href="/struktur" onClick={closeMenu} className="py-2 text-base font-bold text-gray-800 border-b border-gray-100">
              Struktur Pengurus
            </Link>

            <div className="pt-2">
              <span className="text-xs font-black tracking-wider text-nu-deep uppercase block mb-1">
                Badan Otonom (Banom)
              </span>
              <div className="grid grid-cols-2 gap-1 pl-2">
                <Link href="/banom/ansor" onClick={closeMenu} className="py-1.5 text-sm text-gray-700 hover:text-nu-green">
                  ⚡ GP Ansor
                </Link>
                <Link href="/banom/fatayat" onClick={closeMenu} className="py-1.5 text-sm text-gray-700 hover:text-nu-green">
                  🌸 Fatayat NU
                </Link>
                <Link href="/banom/ipnu-ippnu" onClick={closeMenu} className="py-1.5 text-sm text-gray-700 hover:text-nu-green">
                  📚 IPNU &amp; IPPNU
                </Link>
                <Link href="/banom/muslimat" onClick={closeMenu} className="py-1.5 text-sm text-gray-700 hover:text-nu-green">
                  🌙 Muslimat NU
                </Link>
                <Link href="/banom/pagar-nusa" onClick={closeMenu} className="py-1.5 text-sm text-gray-700 hover:text-nu-green">
                  ⚔️ Pagar Nusa
                </Link>
                <Link href="/banom" onClick={closeMenu} className="py-1.5 text-sm font-bold text-nu-green">
                  Semua Banom →
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-black tracking-wider text-nu-deep uppercase block mb-1">
                Lembaga
              </span>
              <div className="flex flex-col pl-2">
                <Link href="/lembaga/lazisnu" onClick={closeMenu} className="py-1.5 text-sm font-semibold text-emerald-800 hover:text-nu-green">
                  💚 LAZISNU (Koin NU)
                </Link>
                <Link href="/lembaga" onClick={closeMenu} className="py-1.5 text-sm text-gray-700 hover:text-nu-green">
                  Direktori Lembaga →
                </Link>
              </div>
            </div>

            <Link href="/berita" onClick={closeMenu} className="py-2 text-base font-bold text-gray-800 border-b border-gray-100">
              Warta Berita
            </Link>

            <Link
              href="/masjid"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 mt-3 py-3 px-4 rounded-xl bg-gradient-to-r from-[#013f20] via-nu-green to-[#00562b] text-white font-bold border-2 border-amber-400 shadow-lg text-center"
            >
              <span>🕌</span>
              <span>Masjid &amp; Laporan Kas Sholat Jumat</span>
            </Link>

            {meta?.contact?.whatsapp && (
              <a
                href={`https://wa.me/${meta.contact.whatsapp}?text=Assalamualaikum%20Pengurus%20PRNU%20Banjarkemuning`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-2.5 px-4 text-center text-sm font-bold text-white bg-nu-green rounded-xl"
              >
                Hubungi Sekretariat WhatsApp
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

