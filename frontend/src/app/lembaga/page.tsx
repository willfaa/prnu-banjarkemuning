import type { Metadata } from 'next';
import Link from 'next/link';
import SubpageHero from '@/components/SubpageHero';

export const metadata: Metadata = {
  title: "Lembaga Jam'iyyah",
  description:
    "Lembaga-lembaga di bawah Pengurus Ranting Nahdlatul Ulama Desa Banjarkemuning: LAZISNU, LDNU, dan LP Ma'arif NU."
};

export default function LembagaPage() {
  return (
    <>
      <SubpageHero
        breadcrumbs={[{ label: 'Beranda', href: '/' }, { label: 'Lembaga Ranting' }]}
        title="Lembaga PRNU Banjarkemuning"
        description="Perangkat departementasi jam'iyyah yang menjalankan program spesifik di bidang zakat, dakwah, dan pendidikan."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-3xl border-2 border-nu-green shadow-md flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300 mb-3">
                PENGELOLA KOIN NU
              </span>
              <h3 className="text-xl font-extrabold text-nu-deep mb-3">LAZISNU Banjarkemuning</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lembaga Amil Zakat, Infaq, dan Shadaqah NU. Mengelola gerakan Koin Sehat kaleng warga, santunan yatim
                dan dhuafa, beasiswa santri berprestasi, dan layanan tanggap darurat.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/lembaga/lazisnu"
                className="block w-full text-center px-4 py-3 rounded-xl text-sm font-bold bg-nu-green hover:bg-nu-deep text-white transition-colors"
              >
                Buka Laporan Transparansi Koin NU →
              </Link>
            </div>
          </div>

          <div
            id="ldnu"
            className="bg-white p-7 rounded-3xl border border-emerald-900/10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-3">
                DAKWAH &amp; KHUTBAH
              </span>
              <h3 className="text-xl font-extrabold text-nu-deep mb-3">LDNU Banjarkemuning</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lembaga Dakwah Nahdlatul Ulama. Mengkoordinasikan muballigh dan khotib Jumat di masjid/musholla desa,
                pembinaan majelis istighotsah, serta dakwah wasathiyah Aswaja.
              </p>
            </div>
            <div className="mt-6 p-3.5 bg-nu-soft rounded-xl text-xs sm:text-sm text-gray-700">
              <strong>Koordinator:</strong> Ust. M. Ridwan, M.Pd
            </div>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-emerald-900/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-3">
                PENDIDIKAN SANTRI
              </span>
              <h3 className="text-xl font-extrabold text-nu-deep mb-3">LP Ma&apos;arif NU Banjarkemuning</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Lembaga Pendidikan Ma&apos;arif NU. Melakukan pendampingan terhadap guru ngaji TPQ, madrasah diniyah, dan
                penguatan kurikulum Aswaja bagi santri cilik di desa.
              </p>
            </div>
            <div className="mt-6 p-3.5 bg-nu-soft rounded-xl text-xs sm:text-sm text-gray-700">
              <strong>Fokus:</strong> Penguatan Mutu TPQ &amp; Madin Desa
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

