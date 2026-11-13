import type { Metadata } from 'next';
import SubpageHero from '@/components/SubpageHero';

export const metadata: Metadata = {
  title: 'Muslimat NU',
  description:
    "Pimpinan Ranting Muslimat NU Desa Banjarkemuning: Wadah pembinaan keluarga maslahah, majelis ta'lim, dan sosial keagamaan ibu-ibu nahdliyin."
};

export default function MuslimatPage() {
  return (
    <>
      <SubpageHero
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Banom', href: '/banom' },
          { label: 'Muslimat NU' }
        ]}
        visual={<span className="text-5xl">🌙</span>}
        title="Pimpinan Ranting Muslimat NU Banjarkemuning"
        description="Menegakkan Martabat Perempuan Islam, Mewujudkan Keluarga Maslahah, dan Memakmurkan Jam'iyyah Yasin-Tahlil."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
            JAM&apos;IYYAH IBU-IBU
          </span>
          <h2 className="text-2xl font-extrabold text-nu-deep mb-3">
            Basis Kekuatan Jamaah dan Tradisi Keagamaan Desa
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            Muslimat NU Ranting Banjarkemuning adalah pilar terdepan dalam menjaga tradisi amaliyah Aswaja di tingkat
            keluarga. Melalui jam&apos;iyyah rutin Yasin-Tahlil di setiap RT dan dusun, Muslimat merekatkan ukhuwah
            antar-warga, menggalang dana santunan kematian, dan membina pendidikan akhlak anak-anak di rumah tangga.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
            SUSUNAN PENGURUS
          </span>
          <h3 className="text-xl font-extrabold text-nu-deep mb-5">
            Pimpinan Harian Muslimat NU Banjarkemuning
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-nu-soft rounded-2xl">
              <span className="text-xs font-bold text-nu-deep uppercase">Ketua Ranting</span>
              <h4 className="text-base font-bold text-gray-900 mt-1">Hj. Siti Romlah</h4>
            </div>
            <div className="p-5 bg-nu-soft rounded-2xl">
              <span className="text-xs font-bold text-nu-deep uppercase">Sekretaris</span>
              <h4 className="text-base font-bold text-gray-900 mt-1">Ibu Hj. Shofiyah</h4>
            </div>
            <div className="p-5 bg-nu-soft rounded-2xl">
              <span className="text-xs font-bold text-nu-deep uppercase">Bendahara</span>
              <h4 className="text-base font-bold text-gray-900 mt-1">Ibu Hj. Masruroh</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300 mb-2">
            AGENDA JAM&apos;IYYAH
          </span>
          <h3 className="text-xl font-extrabold text-nu-deep mb-4">Rutinan Muslimat NU</h3>
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-nu-green bg-nu-soft/40 rounded-r-xl">
              <strong className="text-nu-deep text-base block">Majelis Ta&apos;lim Yasin &amp; Tahlil Akbar</strong>
              <p className="text-xs text-gray-500 mt-1">
                Setiap Kamis Malam Jumat (Ba&apos;da Maghrib) · Bergilir antar musala RT
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Pembacaan Surat Yasin, Tahlil, istighotsah, dan infaq sosial janda/dhuafa.
              </p>
            </div>
            <div className="p-5 border-l-4 border-nu-gold bg-nu-soft/40 rounded-r-xl">
              <strong className="text-nu-deep text-base block">Khotmil Qur&apos;an Muslimat Ahad Kliwon</strong>
              <p className="text-xs text-gray-500 mt-1">
                Ahad Kliwon Pagi (07:30 WIB) · Masjid Jami&apos; Baitul Muttaqin
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Khotmil Qur&apos;an bersama dan ceramah fiqih rumah tangga sakinah mawaddah wa rahmah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

