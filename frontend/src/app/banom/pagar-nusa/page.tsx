import type { Metadata } from 'next';
import SubpageHero from '@/components/SubpageHero';

export const metadata: Metadata = {
  title: 'Pencak Silat Pagar Nusa',
  description:
    'Pencak Silat Nahdlatul Ulama Pagar Nusa Desa Banjarkemuning: Melestarikan seni beladiri warisan ulama, benteng NKRI dan kyai.'
};

export default function PagarNusaPage() {
  return (
    <>
      <SubpageHero
        breadcrumbs={[
          { label: 'Beranda', href: '/' },
          { label: 'Banom', href: '/banom' },
          { label: 'Pagar Nusa' }
        ]}
        visual={
          <img
            src="/assets/Pagar-Nusa.png"
            alt="Logo Pagar Nusa"
            width={80}
            height={80}
            className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
          />
        }
        title="PSNU Pagar Nusa Banjarkemuning"
        description={'"La Ghaliba Illa Billah" - Tidak Ada yang Menang Kecuali dengan Pertolongan Allah. Benteng Ulama, Bangsa, dan Pendekar Aswaja.'}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
            PENDEKAR NAHDLIYIN
          </span>
          <h2 className="text-2xl font-extrabold text-nu-deep mb-3">
            Beladiri Warisan Kanjeng Sunan &amp; Para Kyai
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            Pencak Silat Nahdlatul Ulama (PSNU) Pagar Nusa Ranting Banjarkemuning adalah wadah pencak silat resmi di
            bawah naungan jam&apos;iyyah NU. Melatih generasi muda dalam ketangkasan beladiri fisik, ketahanan mental,
            serta penggemblengan rohani (riadhoh dan asmaul husna) agar menjadi pendekar yang berakhlak mulia, patuh
            pada dawuh ulama, dan siap membela tanah air.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
            PENGURUS &amp; PELATIH
          </span>
          <h3 className="text-xl font-extrabold text-nu-deep mb-5">
            Pimpinan Ranting Pagar Nusa Banjarkemuning
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-nu-soft rounded-2xl">
              <span className="text-xs font-bold text-nu-deep uppercase">Ketua Ranting / Pendekar</span>
              <h4 className="text-base font-bold text-gray-900 mt-1">Kang Mas Bambang Setiawan</h4>
            </div>
            <div className="p-5 bg-nu-soft rounded-2xl">
              <span className="text-xs font-bold text-nu-deep uppercase">Pelatih Utama Cabang</span>
              <h4 className="text-base font-bold text-gray-900 mt-1">Pelatih M. Khoirul Anam</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-emerald-900/10 shadow-sm">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300 mb-2">
            JADWAL LATIHAN
          </span>
          <h3 className="text-xl font-extrabold text-nu-deep mb-4">Pemusatan Latihan Padepokan</h3>
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-nu-green bg-nu-soft/40 rounded-r-xl">
              <strong className="text-nu-deep text-base block">Latihan Fisik &amp; Jurus Dasar</strong>
              <p className="text-xs text-gray-500 mt-1">
                Malam Kamis &amp; Malam Ahad (19:30 - 22:00 WIB) · Halaman SDN / Balai Desa Banjarkemuning
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Pelatihan teknik kembangan jurus tradisi, fisik, pernapasan, dan sparring bersahabat.
              </p>
            </div>
            <div className="p-5 border-l-4 border-nu-gold bg-nu-soft/40 rounded-r-xl">
              <strong className="text-nu-deep text-base block">Mujahadah &amp; Pengisian Spiritual Santri</strong>
              <p className="text-xs text-gray-500 mt-1">Malam Jumat Kliwon Bulanan · Masjid Jami&apos;</p>
              <p className="text-sm text-gray-700 mt-2">
                Dzikir Asmaul Husna, doa bersama untuk ketentraman desa, dan pengarahan etika pendekar nahdliyin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

