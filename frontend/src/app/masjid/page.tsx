import type { Metadata } from 'next';
import SubpageHero from '@/components/SubpageHero';
import { formatRupiah, getMasjidData } from '@/lib/api';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Masjid & Laporan Kas Sholat Jumat',
  description:
    "Laporan kas mingguan sholat Jumat, agenda ibadah, dan kemakmuran Masjid Jami' Baitul Muttaqin Desa Banjarkemuning, Kec. Sedati, Kab. Sidoarjo."
};

export default async function MasjidPage() {
  const masjid = await getMasjidData();

  return (
    <>
      <SubpageHero
        breadcrumbs={[{ label: 'Beranda', href: '/' }, { label: 'Masjid & Kas Jumat' }]}
        title="Masjid Jami' Baitul Muttaqin"
        description="Pusat Ibadah, Sholat Jumat, dan Dakwah Ahlussunnah wal Jama'ah Warga Nahdliyin Desa Banjarkemuning."
      />

      <div className="w-full relative bg-[#012815] overflow-hidden border-b-2 border-nu-gold mb-14">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 scale-105 pointer-events-none bg-fixed"
          style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,86,43,0.4)_0%,rgba(1,30,15,0.92)_80%)] pointer-events-none" />

        <div
          id="masjid-custom-image-space"
          className="relative z-10 max-w-5xl mx-auto min-h-[380px] sm:min-h-[440px] px-6 py-14 flex flex-col items-center justify-center text-center text-white"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-gray-950 mb-3 shadow-[0_0_12px_rgba(212,175,55,0.4)]">
            🕌 KEMAKMURAN RUMAH ALLAH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg mb-3">
            {masjid?.info?.name || "Masjid Jami' Baitul Muttaqin Banjarkemuning"}
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            {masjid?.info?.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#kas-jumat"
              className="px-6 py-3 rounded-xl text-sm font-bold bg-amber-400 hover:bg-amber-300 text-gray-950 shadow-lg shadow-amber-400/25 transition-all"
            >
              Lihat Laporan Kas Jumat Terkini ↓
            </a>
            <a
              href="#jadwal"
              className="px-6 py-3 rounded-xl text-sm font-bold bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white transition-all"
            >
              Jadwal Sholat &amp; Takmir
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm">
            <span className="text-xs font-black tracking-wider text-nu-deep uppercase block mb-1">
              Ketua Takmir Masjid
            </span>
            <h3 className="text-xl font-bold text-gray-900">
              {masjid?.info?.takmir_head || 'H. Ahmad Fauzi, S.Pd.I'}
            </h3>
            <p className="text-xs text-gray-500 mt-2">
              Penanggung jawab kemakmuran, peribadatan, dan aset masjid desa.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm">
            <span className="text-xs font-black tracking-wider text-nu-deep uppercase block mb-1">
              Imam Rawatib Utama
            </span>
            <h3 className="text-xl font-bold text-gray-900">
              {masjid?.info?.imam_rawatib || 'Ust. H. Nur Kholis'}
            </h3>
            <p className="text-xs text-gray-500 mt-2">
              Koordinator pelaksanaan sholat lima waktu dan doa jam&apos;iyyah.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 shadow-sm">
            <span className="text-xs font-black tracking-wider text-nu-deep uppercase block mb-1">
              Muadzin &amp; Kebersihan
            </span>
            <h3 className="text-xl font-bold text-gray-900">
              {masjid?.info?.muadzin_head || 'Bpk. M. Sholeh'}
            </h3>
            <p className="text-xs text-gray-500 mt-2">
              Menjaga kesucian tempat ibadah dan panggilan adzan rawatib.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-900/10 shadow-md mb-14" id="kas-jumat">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-emerald-900/10 mb-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300 mb-2">
                TRANSPARANSI MINGGUAN
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-nu-deep tracking-tight">
                Laporan Kas Sholat Jumat
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Diumumkan secara berkala setiap sholat Jumat untuk keterbukaan amanah jamaah.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-xs font-bold text-emerald-800 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Realtime Supabase Sync</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-nu-soft border-b-2 border-emerald-900/10 text-nu-darker font-bold">
                  <th className="py-3 px-4">Hari / Tanggal</th>
                  <th className="py-3 px-4">Infaq Kotak</th>
                  <th className="py-3 px-4">Infaq Transfer</th>
                  <th className="py-3 px-4">Operasional</th>
                  <th className="py-3 px-4">Perawatan/Listrik</th>
                  <th className="py-3 px-4">Saldo Kas Akhir</th>
                  <th className="py-3 px-4">Khatib Jumat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {(masjid?.kasList || []).map((item, idx) => (
                  <tr key={item.id || `${item.period_label}-${idx}`} className="hover:bg-emerald-50/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-gray-900 whitespace-nowrap">
                      {item.period_label}
                    </td>
                    <td className="py-3.5 px-4 text-nu-green font-bold">+{formatRupiah(item.income_box)}</td>
                    <td className="py-3.5 px-4 text-nu-green font-bold">+{formatRupiah(item.income_transfer)}</td>
                    <td className="py-3.5 px-4 text-rose-600 font-semibold">-{formatRupiah(item.expense_operational)}</td>
                    <td className="py-3.5 px-4 text-rose-600 font-semibold">-{formatRupiah(item.expense_maintenance)}</td>
                    <td className="py-3.5 px-4 text-nu-deep font-black text-base">{formatRupiah(item.balance)}</td>
                    <td className="py-3.5 px-4 text-gray-600">{item.khatib || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-nu-soft text-xs text-gray-700 leading-relaxed border border-emerald-900/10">
            <strong className="text-nu-deep block mb-0.5">Keterangan Kas Masjid:</strong>
            Seluruh pemasukan kotak amal sholat Jumat dan transfer donatur digunakan untuk operasional adzan, kebersihan
            musholla/masjid, pembayaran listrik/air, santunan marbot, dan pemeliharaan sarana ibadah warga Desa Banjarkemuning.
          </div>
        </div>

        <div id="jadwal">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
              JADWAL PERIBADATAN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nu-deep">Kegiatan Rutin di Masjid</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Majelis ta&apos;lim dan pembacaan shalawat yang berpusat di Masjid Jami&apos; Desa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border-l-4 border-nu-green border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-nu-deep mb-1">Sholat Jumat Berjamaah</h4>
              <p className="text-xs text-gray-400 mb-2">Pukul 11:30 WIB - Selesai</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Didahului pembacaan shalawat tarhim, adzan dua kali menurut tradisi Aswaja, dan khutbah keagamaan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-l-4 border-nu-gold border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-nu-deep mb-1">Lailatul Ijtima&apos; Ranting</h4>
              <p className="text-xs text-gray-400 mb-2">Malam Ahad Kliwon, Ba&apos;da Isya</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Dzikir bersama, tahlil akbar, dan koordinasi jam&apos;iyyah seluruh pengurus dan warga nahdliyin ranting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-l-4 border-nu-green border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-nu-deep mb-1">Kajian Subuh Ahad</h4>
              <p className="text-xs text-gray-400 mb-2">Setiap Ahad Pagi, Ba&apos;da Subuh</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Kajian Fiqih Ibadah sehari-hari oleh Asatidz Syuriyah PRNU untuk jamaah bapak-bapak dan ibu-ibu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

