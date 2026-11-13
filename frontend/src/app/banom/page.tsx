import type { Metadata } from 'next';
import Link from 'next/link';
import SubpageHero from '@/components/SubpageHero';
import { getBanomAndLembaga, getBanomLogo, getBanomUrl } from '@/lib/api';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Badan Otonom (Banom)',
  description:
    'Direktori Badan Otonom Nahdlatul Ulama Desa Banjarkemuning: GP Ansor, Banser, Fatayat, IPNU, IPPNU, Muslimat, dan Pagar Nusa.'
};

export default async function BanomPage() {
  const { banom } = await getBanomAndLembaga();

  return (
    <>
      <SubpageHero
        breadcrumbs={[{ label: 'Beranda', href: '/' }, { label: 'Badan Otonom (Banom)' }]}
        title="Badan Otonom NU Banjarkemuning"
        description="Sayap kaderisasi dan perjuangan berbasis usia, profesi, dan minat bakat warga Nahdlatul Ulama Desa Banjarkemuning."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banom.map((b) => {
            const logo = getBanomLogo(b.id);
            const url = getBanomUrl(b.id);
            return (
              <div
                key={b.id}
                className="p-6 rounded-2xl bg-white border border-emerald-900/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {logo ? (
                      <div className="w-14 h-14 p-1.5 rounded-xl bg-nu-soft flex items-center justify-center border border-emerald-100">
                        <img
                          src={logo}
                          alt={`Logo ${b.name}`}
                          className="max-w-full max-h-full object-contain"
                          width={56}
                          height={56}
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-nu-soft flex items-center justify-center text-2xl border border-emerald-100">
                        {b.icon_symbol || '🌿'}
                      </div>
                    )}
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-nu-tint text-nu-deep border border-emerald-200">
                      {b.badge || 'Banom NU'}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mb-1">{b.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{b.full_name}</p>

                  <div className="p-3 rounded-lg bg-nu-soft/70 text-xs mb-3">
                    <span className="text-gray-500 block font-semibold">Ketua / Pimpinan:</span>
                    <strong className="text-nu-deep font-bold">{b.leader}</strong>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">{b.focus}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-900/10">
                  <Link
                    href={url}
                    className="block w-full text-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-nu-tint hover:bg-nu-green text-nu-deep hover:text-white transition-colors"
                  >
                    Buka Halaman &amp; Struktur {b.name} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

