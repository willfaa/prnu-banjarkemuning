import type { Metadata } from 'next';
import SubpageHero from '@/components/SubpageHero';

export const metadata: Metadata = {
  title: 'Fatayat NU',
  description:
    'Pimpinan Ranting Fatayat NU Desa Banjarkemuning: Wadah perempuan muda Nahdlatul Ulama dalam dakwah, sosial, dan kesehatan keluarga.'
};

export default function FatayatPage() {
  return (
    <>
      <SubpageHero
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Banom', href: '/banom' },
          { label: 'Fatayat NU' }
        ]}
        visual={
          <img
            src="/assets/Fatayat.png"
            alt="Logo Fatayat NU"
            width={80}
            height={80}
            className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
          />
        }
        title="Pimpinan Ranting Fatayat NU Banjarkemuning"
        description="Membina Pemudi Berakhlakul Karimah, Mandiri, dan Berdaya bagi Kemaslahatan Keluarga dan Umat."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
            TENTANG FATAYAT NU
          </span>
          <h2 className="text-2xl font-extrabold text-nu-deep mb-3">
            Perempuan Muda Nahdliyin Banjarkemuning
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            Fatayat NU Ranting Banjarkemuning menaungi pemudi nahdliyin usia 20 hingga 45 tahun. Program kerja
            difokuskan pada penguatan literasi fiqih wanita, pendampingan gizi dan stunting untuk ibu muda di desa,
            gerakan kemandirian UMKM rumahan, serta pembacaan shalawat Diba&apos;iyah rutin mingguan.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
            SUSUNAN PENGURUS
          </span>
          <h3 className="text-xl font-extrabold text-nu-deep mb-5">
            Pimpinan Harian Fatayat NU Banjarkemuning
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-nu-soft rounded-2xl">
              <span className="text-xs font-bold text-nu-deep uppercase">Ketua Ranting</span>
              <h4 className="text-base font-bold text-gray-900 mt-1">Sahabati Hj. Siti Aminah, S.E</h4>
            </div>
            <div className="p-5 bg-nu-soft rounded-2xl">
              <span className="text-xs font-bold text-nu-deep uppercase">Sekretaris</span>
              <h4 className="text-base font-bold text-gray-900 mt-1">Sahabati Nur Laili Rohmah</h4>
            </div>
            <div className="p-5 bg-nu-soft rounded-2xl">
              <span className="text-xs font-bold text-nu-deep uppercase">Bendahara</span>
              <h4 className="text-base font-bold text-gray-900 mt-1">Sahabati Dewi Masithoh</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300 mb-2">
            AGENDA KEGIATAN
          </span>
          <h3 className="text-xl font-extrabold text-nu-deep mb-4">Aktivitas Rutin Fatayat</h3>
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-nu-green bg-nu-soft/40 rounded-r-xl">
              <strong className="text-nu-deep text-base block">Diba&apos;iyah &amp; Tahlil Rutin Fatayat</strong>
              <p className="text-xs text-gray-500 mt-1">
                Setiap Jumat Siang (13:30 WIB) · Bergilir antar rumah anggota
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Pembacaan shalawat nabi, tahlil kubur untuk ahli kubur warga, serta arisan silaturahmi kader.
              </p>
            </div>
            <div className="p-5 border-l-4 border-nu-gold bg-nu-soft/40 rounded-r-xl">
              <strong className="text-nu-deep text-base block">
                Kajian Fiqih An-Nisa&apos; &amp; Parenting Islami
              </strong>
              <p className="text-xs text-gray-500 mt-1">Ahad Pon Bulanan (09:00 WIB) · Musholla Al-Ikhlas</p>
              <p className="text-sm text-gray-700 mt-2">
                Kajian hukum fiqih wanita, kesehatan reproduksi islami, dan pendidikan anak usia dini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

