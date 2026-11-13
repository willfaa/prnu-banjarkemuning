import type { Metadata } from 'next';
import SubpageHero from '@/components/SubpageHero';

export const metadata: Metadata = {
  title: 'IPNU & IPPNU',
  description:
    'Pimpinan Ranting Ikatan Pelajar Nahdlatul Ulama & Ikatan Pelajar Putri Nahdlatul Ulama Desa Banjarkemuning, Sedati, Sidoarjo.'
};

export default function IpnuIppnuPage() {
  return (
    <>
      <SubpageHero
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Banom', href: '/banom' },
          { label: 'IPNU & IPPNU' }
        ]}
        visual={
          <>
            <img
              src="/assets/IPNU.png"
              alt="Logo IPNU"
              width={70}
              height={70}
              className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
            />
            <img
              src="/assets/IPPNU.png"
              alt="Logo IPPNU"
              width={70}
              height={70}
              className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
            />
          </>
        }
        title="IPNU & IPPNU Banjarkemuning"
        description="Gerakan Pelajar dan Santri Millenial: Belajar, Berjuang, dan Bertaqwa di Bawah Panji Nahdlatul Ulama."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-emerald-900/10 border-t-4 border-t-nu-green shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <img src="/assets/IPNU.png" alt="IPNU" width={45} height={45} />
              <div>
                <h3 className="text-lg font-extrabold text-nu-deep">PR IPNU Banjarkemuning</h3>
                <span className="text-xs text-gray-500">Pelajar Putra Nahdlatul Ulama</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Wadah pengembangan minat bakat, kepemimpinan pelajar desa, literasi santri, dan pengkaderan dasar MAKESTA
              (Masa Kesetiaan Anggota).
            </p>
            <div className="mt-4 p-3.5 bg-nu-soft rounded-xl text-sm">
              <strong>Ketua IPNU:</strong> Rekan Fikri Maulana
            </div>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-emerald-900/10 border-t-4 border-t-nu-gold shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <img src="/assets/IPPNU.png" alt="IPPNU" width={45} height={45} />
              <div>
                <h3 className="text-lg font-extrabold text-nu-deep">PR IPPNU Banjarkemuning</h3>
                <span className="text-xs text-gray-500">Pelajar Putri Nahdlatul Ulama</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Wadah kreasi pelajar putri, keputrian, pembinaan karakter santriwati berprestasi, dan kampanye lingkungan
              bersih anti-narkoba di desa.
            </p>
            <div className="mt-4 p-3.5 bg-nu-soft rounded-xl text-sm">
              <strong>Ketua IPPNU:</strong> Rekanita Nabila Zahra
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
            AGENDA PELAJAR NU
          </span>
          <h3 className="text-xl font-extrabold text-nu-deep mb-5">Kegiatan Rutin IPNU &amp; IPPNU</h3>
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-nu-green bg-nu-soft/40 rounded-r-xl">
              <strong className="text-nu-deep text-base block">Khotmil Qur&apos;an &amp; Shalawat Pelajar</strong>
              <p className="text-xs text-gray-500 mt-1">Malam Ahad Legi (19:30 WIB) · Musholla Al-Huda</p>
              <p className="text-sm text-gray-700 mt-2">
                Khotmil Qur&apos;an bil ghaib dan binnadhor bersama para santri dan remaja desa.
              </p>
            </div>
            <div className="p-5 border-l-4 border-nu-gold bg-nu-soft/40 rounded-r-xl">
              <strong className="text-nu-deep text-base block">Pelatihan Desain &amp; Media Digital Santri</strong>
              <p className="text-xs text-gray-500 mt-1">Pekan Ke-3 Setiap Bulan · Balai Pertemuan Ranting</p>
              <p className="text-sm text-gray-700 mt-2">
                Pelatihan pembuatan konten dakwah, fotografi kegiatan, dan pengelolaan media sosial ranting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

