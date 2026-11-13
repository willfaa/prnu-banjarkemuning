import type { Metadata } from 'next';
import SubpageHero from '@/components/SubpageHero';

export const metadata: Metadata = {
  title: 'GP Ansor, Banser & Rijalul Ansor',
  description:
    'Gerakan Pemuda Ansor, Satkoryon Banser, dan Majelis Dzikir dan Shalawat Rijalul Ansor Desa Banjarkemuning, Sedati, Sidoarjo.'
};

export default function AnsorPage() {
  return (
    <>
      <SubpageHero
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Banom', href: '/banom' },
          { label: 'GP Ansor & Banser' }
        ]}
        visual={
          <>
            <img
              src="/assets/Ansor.png"
              alt="Logo GP Ansor"
              width={70}
              height={70}
              className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
            />
            <img
              src="/assets/Banser.png"
              alt="Logo Banser"
              width={70}
              height={70}
              className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
            />
          </>
        }
        title="Pimpinan Ranting GP Ansor Banjarkemuning"
        description="Benteng Ulama dan Bangsa: Memadukan militansi kader muda, kepanduan Banser, serta spiritualitas Majelis Rijalul Ansor."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-emerald-900/10 border-t-4 border-t-nu-green shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <img src="/assets/Ansor.png" alt="Ansor" width={40} height={40} />
              <h3 className="text-lg font-extrabold text-nu-deep">Gerakan Pemuda Ansor</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Kaderisasi kepemudaan nahdliyin, penguatan ekonomi kreatif, literasi digital, serta advokasi sosial
              kemasyarakatan di Desa Banjarkemuning.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-emerald-900/10 border-t-4 border-t-amber-600 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <img src="/assets/Banser.png" alt="Banser" width={40} height={40} />
              <h3 className="text-lg font-extrabold text-nu-deep">Satkoryon Banser</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Barisan Ansor Serbaguna sebagai garda terdepan pengamanan kyai/habaib, pengawalan acara jam&apos;iyyah,
              kebencanaan (BAGANA), dan lalu lintas desa (BALANTAS).
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-emerald-900/10 border-t-4 border-t-nu-gold shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">📿</span>
              <h3 className="text-lg font-extrabold text-nu-deep">MDS Rijalul Ansor</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Majelis Dzikir dan Shalawat yang menghidupkan tradisi maulid Simthudduror, shalawat nabi, dan pembacaan
              ratib secara bergiliran antar musholla desa.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
            STRUKTUR KEPENGURUSAN
          </span>
          <h3 className="text-2xl font-extrabold text-nu-deep mb-6">
            Susunan Pengurus GP Ansor &amp; Satkoryon Banser Banjarkemuning
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-nu-soft rounded-2xl">
              <span className="text-xs font-bold text-nu-deep uppercase">Ketua Pimpinan Ranting</span>
              <h4 className="text-base font-bold text-gray-900 mt-1">Sahabat Muhammad Ilham, S.H</h4>
            </div>
            <div className="p-5 bg-nu-soft rounded-2xl">
              <span className="text-xs font-bold text-nu-deep uppercase">Sekretaris Ansor</span>
              <h4 className="text-base font-bold text-gray-900 mt-1">Sahabat Arif Rahman Hakim</h4>
            </div>
            <div className="p-5 bg-nu-soft rounded-2xl">
              <span className="text-xs font-bold text-nu-deep uppercase">Komandan Banser Ranting</span>
              <h4 className="text-base font-bold text-gray-900 mt-1">Ndan M. Syamsuddin</h4>
            </div>
            <div className="p-5 bg-nu-soft rounded-2xl">
              <span className="text-xs font-bold text-nu-deep uppercase">Ketua MDS Rijalul Ansor</span>
              <h4 className="text-base font-bold text-gray-900 mt-1">Gus Ahmad Zainuri</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300 mb-2">
            AGENDA RUTIN
          </span>
          <h3 className="text-2xl font-extrabold text-nu-deep mb-5">
            Jadwal Kegiatan Ansor, Banser, dan Rijalul Ansor
          </h3>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-nu-green bg-nu-soft/40 rounded-r-xl">
              <strong className="text-nu-deep text-base block">
                Rutinan Majelis Dzikir dan Shalawat Rijalul Ansor
              </strong>
              <p className="text-xs text-gray-500 mt-1">
                Malam Jumat Manis (19:45 WIB) · Bergilir musholla se-Banjarkemuning
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Pembacaan Maulid Simthudduror, shalawat nabi, dan kajian fiqih kemasyarakatan kader pemuda.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-600 bg-nu-soft/40 rounded-r-xl">
              <strong className="text-nu-deep text-base block">
                Apel Kesiapsiagaan &amp; Latihan Baris-Berbaris Banser
              </strong>
              <p className="text-xs text-gray-500 mt-1">
                Minggu Pagi Pekan Ke-2 (06:30 WIB) · Halaman Balai Desa / Lapangan Kemuning
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Pemeliharaan fisik, kedisiplinan, materi pertolongan pertama kebencanaan, dan koordinasi pengamanan desa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

