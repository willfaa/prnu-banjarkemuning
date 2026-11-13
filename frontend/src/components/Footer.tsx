import Link from 'next/link';
import type { OrganizationMeta } from '@/lib/types';

interface FooterProps {
  meta: OrganizationMeta;
}

export default function Footer({ meta }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nu-darker text-emerald-100/80 pt-16 pb-12 border-t-4 border-nu-gold">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/NU-Green-Bg.jpg"
                alt="Logo NU"
                className="w-12 h-12 rounded-full object-cover border border-amber-400/40"
                width={48}
                height={48}
              />
              <div>
                <span className="text-base font-black text-white block leading-tight">
                  {meta?.name || 'PRNU Banjarkemuning'}
                </span>
                <span className="text-xs text-emerald-300 font-semibold">
                  Kecamatan Sedati · Kabupaten Sidoarjo
                </span>
              </div>
            </div>
            <p className="text-sm text-emerald-200/70 leading-relaxed">
              Organisasi keagamaan kemasyarakatan Islam berhaluan Ahlussunnah wal Jama&apos;ah an-Nahdliyah,
              berkhidmat untuk kesejahteraan, pendidikan, dakwah, dan kemandirian jamaah di Desa Banjarkemuning.
            </p>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Halaman</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/profil" className="hover:text-amber-300 transition-colors">Profil &amp; Sejarah</Link></li>
              <li><Link href="/struktur" className="hover:text-amber-300 transition-colors">Struktur Pengurus</Link></li>
              <li><Link href="/banom" className="hover:text-amber-300 transition-colors">Badan Otonom (Banom)</Link></li>
              <li><Link href="/lembaga/lazisnu" className="hover:text-amber-300 transition-colors">LAZISNU &amp; Koin NU</Link></li>
              <li><Link href="/masjid" className="text-amber-300 font-semibold hover:text-white transition-colors">🕌 Masjid &amp; Kas Jumat</Link></li>
              <li><Link href="/berita" className="hover:text-amber-300 transition-colors">Warta Kegiatan</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Jaringan NU</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><a href="https://nu.or.id/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">PBNU (nu.or.id) ↗</a></li>
              <li><a href="https://digdaya.nu.id/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">Digdaya NU ↗</a></li>
              <li><a href="https://pwnujatim.or.id/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">PWNU Jawa Timur ↗</a></li>
              <li><a href="https://pcnusidoarjo.or.id/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">PCNU Kabupaten Sidoarjo ↗</a></li>
              <li><span className="text-amber-300/90 font-medium">MWCNU Kecamatan Sedati</span></li>
            </ul>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Sekretariat</h4>
            <div className="text-sm text-emerald-200/70 space-y-2">
              <p>
                <strong className="text-white block font-semibold">Alamat:</strong>
                {meta?.address || 'Jl. Raya Banjarkemuning, Kec. Sedati, Sidoarjo, Jawa Timur'}
              </p>
              <p>
                <strong className="text-white block font-semibold">Layanan Umat:</strong>
                {meta?.contact?.serviceHours || 'Senin - Ahad, 08:00 - 21:00 WIB'}
              </p>
              {meta?.contact?.whatsapp && (
                <p>
                  <strong className="text-white block font-semibold">Hotline WhatsApp:</strong>
                  <a href={`https://wa.me/${meta.contact.whatsapp}`} className="text-amber-300 font-bold hover:underline">
                    +{meta.contact.whatsapp}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/60">
          <p>© {currentYear} <strong>{meta?.shortName || 'PRNU BANJARKEMUNING'}</strong>. Berkhidmat untuk Umat dan Bangsa.</p>
          <div className="flex items-center gap-3">
            <span>Aswaja an-Nahdliyah</span>
            <span>•</span>
            <span>Kecamatan Sedati</span>
            <span>•</span>
            <span>Kabupaten Sidoarjo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

