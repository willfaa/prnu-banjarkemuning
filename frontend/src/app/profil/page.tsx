import type { Metadata } from 'next';
import SubpageHero from '@/components/SubpageHero';

export const metadata: Metadata = {
  title: 'Profil & Sejarah Khidmat',
  description:
    "Profil, sejarah berdiri, visi, misi, dan khidmat jam'iyyah Nahdlatul Ulama Desa Banjarkemuning, Sedati, Sidoarjo."
};

const PRINSIP_NU = [
  {
    title: 'Tawassuth',
    desc: 'Sikap tengah dan menjauhi ekstremitas (moderat).'
  },
  {
    title: 'Tawazun',
    desc: 'Keseimbangan antara khidmat duniawi dan ukhrawi.'
  },
  {
    title: "I'tidal",
    desc: 'Tegak lurus, adil, dan menjunjung kebenaran hukum.'
  },
  {
    title: 'Tasamuh',
    desc: 'Toleransi menghargai perbedaan tradisi kemasyarakatan.'
  }
];

export default function ProfilPage() {
  return (
    <>
      <SubpageHero
        breadcrumbs={[{ label: 'Beranda', href: '/' }, { label: 'Profil Ranting' }]}
        title="Profil PRNU Banjarkemuning"
        description="Meneguhkan Jam'iyyah, Menjaga Tradisi Keislaman Nusantara, dan Melayani Kebutuhan Umat."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-3">
            SEJARAH &amp; KELAHIRAN
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-nu-deep mb-4">
            Khidmat Nahdlatul Ulama di Desa Banjarkemuning
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            Pengurus Ranting Nahdlatul Ulama (PRNU) Desa Banjarkemuning merupakan struktur kepengurusan basis terbawah
            yang langsung bersentuhan dengan denyut nadi masyarakat. Berdiri di kawasan pesisir Sedati, Sidoarjo,
            jam&apos;iyyah NU di desa ini telah dirintis sejak dekade-dekade awal oleh para sesepuh, kyai kampung, dan
            guru ngaji yang istiqomah melestarikan tradisi tahlilan, manaqiban, diba&apos;iyah, serta pendidikan Al-Qur&apos;an
            bagi anak-anak.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mt-4">
            Seiring perkembangan zaman, PRNU Banjarkemuning bertransformasi menjadi organisasi modern tanpa meninggalkan
            akar salafus shalih: memelopori gerakan kemandirian ekonomi lewat Kotak Koin NU (LAZISNU), mengkader pemuda
            dan pendekar lewat GP Ansor, Banser, dan Pagar Nusa, serta menghidupkan majelis ilmu kaum perempuan bersama
            Muslimat dan Fatayat NU.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 border-t-4 border-t-nu-green shadow-sm">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-3">
              VISI UTAMA
            </span>
            <h3 className="text-xl font-extrabold text-nu-deep mb-3">Visi Khidmat</h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              &ldquo;Terwujudnya masyarakat Desa Banjarkemuning yang bertaqwa, mandiri, sejahtera, serta kokoh memegang
              teguh akidah Islam Ahlussunnah wal Jama&apos;ah an-Nahdliyah dalam bingkai Negara Kesatuan Republik Indonesia.&rdquo;
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 border-t-4 border-t-nu-gold shadow-sm">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300 mb-3">
              MISI STRATEGIS
            </span>
            <h3 className="text-xl font-extrabold text-nu-deep mb-3">Misi Organisasi</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-relaxed">
              <li>Melestarikan amaliyah dan tradisi keagamaan Aswaja di musholla dan masjid desa.</li>
              <li>Mengembangkan kemandirian ekonomi umat melalui pengelolaan ZIS dan Koin NU.</li>
              <li>Meningkatkan kualitas pendidikan generasi muda melalui TPQ dan pembinaan Banom.</li>
              <li>Menjaga kerukunan sosial, toleransi, dan ukhuwah islamiyah antarwarga desa.</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-nu-soft to-white p-8 sm:p-10 rounded-3xl border border-emerald-900/10">
          <h3 className="text-xl sm:text-2xl font-extrabold text-nu-deep mb-6 text-center">
            Prinsip Sikap Kemasyarakatan Nahdlatul Ulama
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {PRINSIP_NU.map((item) => (
              <div key={item.title} className="bg-white p-5 rounded-2xl border border-emerald-900/10 shadow-sm">
                <strong className="text-nu-green text-lg block mb-1.5">{item.title}</strong>
                <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

