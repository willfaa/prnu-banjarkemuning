import type { Metadata } from 'next';
import SubpageHero from '@/components/SubpageHero';
import { formatRupiah, getLaporanKoin, getOrganizationInfo } from '@/lib/api';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'LAZISNU & Transparansi Koin NU',
  description:
    'Laporan kas Koin NU, transparansi infaq kaleng warga, penyaluran santunan anak yatim dan dhuafa Desa Banjarkemuning.'
};

const PILAR_LAZISNU = [
  {
    icon: '🤝',
    title: 'NU Peduli (Sosial)',
    accent: 'border-t-nu-green',
    desc: 'Santunan rutin anak yatim piatu, sembako janda lansia, dan bantuan tanggap darurat musibah warga.'
  },
  {
    icon: '🏥',
    title: 'NU Sehat (Kesehatan)',
    accent: 'border-t-nu-gold',
    desc: 'Bantuan biaya pengobatan dhuafa, transportasi pasien ke rumah sakit, dan penyediaan alat kesehatan gratis.'
  },
  {
    icon: '🎓',
    title: 'NU Cerdas (Pendidikan)',
    accent: 'border-t-nu-green',
    desc: 'Beasiswa santri berprestasi dari keluarga kurang mampu dan insentif operasional guru ngaji TPQ desa.'
  },
  {
    icon: '🌱',
    title: 'NU Berdaya (Ekonomi)',
    accent: 'border-t-nu-gold',
    desc: 'Bantuan modal bergulir usaha mikro tanpa bunga untuk membangkitkan ekonomi keluarga nahdliyin desa.'
  }
];

export default async function LazisnuPage() {
  const [laporan, meta] = await Promise.all([getLaporanKoin(), getOrganizationInfo()]);
  const whatsapp = meta?.contact?.whatsapp;

  return (
    <>
      <SubpageHero
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Lembaga', href: '/lembaga' },
          { label: 'LAZISNU' }
        ]}
        badge="KEMANDIRIAN UMAT"
        title="UPZIS LAZISNU Banjarkemuning"
        description="Dari Umat, Oleh Umat, Untuk Kemaslahatan Warga Nahdliyin Desa Banjarkemuning."
      />

      <div className="w-full relative bg-[#012815] overflow-hidden border-b-2 border-nu-gold mb-14">
        <div
          className="absolute inset-0 bg-cover bg-[center_40%] opacity-45 pointer-events-none bg-fixed"
          style={{ backgroundImage: "url('/assets/koin-nu-banner.jpg')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,86,43,0.4)_0%,rgba(1,30,15,0.9)_85%)] pointer-events-none" />

        <div className="relative z-10 text-center p-10 max-w-3xl mx-auto min-h-[380px] flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-md mb-3">
            Gerakan Kaleng Koin Sehat NU
          </h2>
          <p className="text-base text-emerald-50 leading-relaxed mb-6">
            Menyisihkan uang koin receh sisa belanja setiap hari ke dalam kaleng LAZISNU di rumah masing-masing,
            terbukti mampu membiayai santunan anak yatim, ambulan desa, dan pengobatan warga yang membutuhkan.
          </p>
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}?text=Assalamualaikum%20LAZISNU%20Banjarkemuning,%20saya%20ingin%20minta%20kaleng%20Koin%20NU%20atau%20jemput%20donasi`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-bold bg-amber-400 hover:bg-amber-300 text-gray-950 shadow-lg transition-all"
            >
              Minta Kaleng Koin / Jemput Infaq via WA →
            </a>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-14">
        {laporan && (
          <div className="bg-nu-soft rounded-3xl p-6 sm:p-10 border border-emerald-900/10 shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-emerald-900/10">
              <div>
                <span className="text-xs font-black tracking-wider text-nu-gold uppercase">
                  PERIODE LAPORAN KEUANGAN
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{laporan.period}</h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-xs font-bold text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Supabase Sync</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm">
                <span className="text-xs text-gray-500 font-semibold block mb-1">
                  Total Koin &amp; Infaq Terkumpul
                </span>
                <div className="text-xl sm:text-2xl font-black text-nu-green">{formatRupiah(laporan.total_income)}</div>
                <span className="text-xs text-gray-400 mt-1 block">Dari ratusan kaleng nahdliyin</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm">
                <span className="text-xs text-gray-500 font-semibold block mb-1">Dana Disalurkan</span>
                <div className="text-xl sm:text-2xl font-black text-amber-600">{formatRupiah(laporan.total_spent)}</div>
                <span className="text-xs text-gray-400 mt-1 block">Penyaluran tepat sasaran</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm">
                <span className="text-xs text-gray-500 font-semibold block mb-1">Saldo Kas LAZISNU</span>
                <div className="text-xl sm:text-2xl font-black text-nu-deep">{formatRupiah(laporan.balance)}</div>
                <span className="text-xs text-gray-400 mt-1 block">Tersimpan aman di kas organisasi</span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm">
                <span className="text-xs text-gray-500 font-semibold block mb-1">Penerima Manfaat</span>
                <div className="text-xl sm:text-2xl font-black text-nu-deep">
                  {laporan.beneficiaries_count || 0} Jiwa
                </div>
                <span className="text-xs text-gray-400 mt-1 block">Warga desa yang tertolong</span>
              </div>
            </div>

            {laporan.notes && (
              <div className="mt-6 p-4 rounded-xl bg-white/80 border border-emerald-900/10 text-xs sm:text-sm text-gray-700">
                <strong className="text-nu-deep block mb-1">Catatan Penggunaan Dana Umat:</strong>
                {laporan.notes}
              </div>
            )}
          </div>
        )}

        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
              PROGRAM KEMANUSIAAN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nu-deep">Pilar Penyaluran ZIS</h2>
            <p className="text-gray-600 text-sm mt-1">
              Dana Koin NU disalurkan tanpa potongan birokrasi yang rumit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILAR_LAZISNU.map((pilar) => (
              <div
                key={pilar.title}
                className={`bg-white p-6 rounded-2xl border border-emerald-900/10 border-t-4 ${pilar.accent} shadow-sm`}
              >
                <span className="text-3xl">{pilar.icon}</span>
                <h4 className="text-lg font-bold text-nu-deep mt-2 mb-1.5">{pilar.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

