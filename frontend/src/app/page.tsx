import Link from 'next/link';
import Hero from '@/components/Hero';
import Sambutan from '@/components/Sambutan';
import PengurusTabs from '@/components/PengurusTabs';
import WartaGrid from '@/components/WartaGrid';
import {
  formatRupiah,
  getBanomAndLembaga,
  getBanomLogo,
  getKegiatanList,
  getLaporanKoin,
  getMasjidData,
  getOrganizationInfo,
  getPengurus,
  getWartaBerita
} from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const [meta, pengurus, banomLembaga, kegiatan, laporan, warta, masjid] = await Promise.all([
    getOrganizationInfo(),
    getPengurus(),
    getBanomAndLembaga(),
    getKegiatanList(),
    getLaporanKoin(),
    getWartaBerita(),
    getMasjidData()
  ]);

  const latestKas = masjid?.kasList?.[0];

  return (
    <>
      <Hero meta={meta} />
      <Sambutan />

      {/* 1. Highlight Masjid Desa */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-emerald-50/40" id="masjid-highlight">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300 mb-2">
              🕌 KEMAKMURAN MASJID DESA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nu-deep tracking-tight mb-3">
              {masjid?.info?.name || "Masjid Jami' Baitul Muttaqin"}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Pusat ibadah dan transparansi laporan kas sholat Jumat jamaah Desa Banjarkemuning.
            </p>
          </div>

          <div className="relative w-full min-h-[380px] bg-nu-darker rounded-3xl overflow-hidden border border-amber-400/40 shadow-xl flex items-center justify-center mb-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,135,68,0.3)_0%,rgba(1,30,15,0.92)_85%)]" />

            <div className="relative z-10 text-center p-8 max-w-2xl text-white">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-gray-950 mb-3 shadow-md">
                SENTRA IBADAH DESA
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {masjid?.info?.name}
              </h3>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6">
                {masjid?.info?.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/masjid"
                  className="px-6 py-3 rounded-xl text-sm font-bold bg-amber-400 hover:bg-amber-300 text-gray-950 shadow-lg shadow-amber-400/25 transition-all"
                >
                  Buka Halaman Lengkap Masjid &amp; Kas Jumat →
                </Link>
                {meta?.contact?.whatsapp && (
                  <a
                    href={`https://wa.me/${meta.contact.whatsapp}?text=Assalamualaikum%20Takmir%20Masjid%20Banjarkemuning`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-sm font-bold bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white transition-all"
                  >
                    Hubungi Takmir
                  </a>
                )}
              </div>
            </div>
          </div>

          {latestKas && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-900/10 shadow-md">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-gray-100">
                <div>
                  <span className="text-xs font-black tracking-wider text-nu-deep uppercase">
                    Laporan Kas Terakhir
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mt-1">{latestKas.period_label}</h4>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs text-gray-500 font-medium">Saldo Akhir Kas Masjid:</span>
                  <div className="text-2xl font-black text-nu-deep">{formatRupiah(latestKas.balance)}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <span className="text-xs text-gray-500 font-semibold block">Infaq Kotak Jumat</span>
                  <div className="text-base sm:text-lg font-bold text-nu-green mt-1">
                    +{formatRupiah(latestKas.income_box)}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <span className="text-xs text-gray-500 font-semibold block">Infaq Transfer / Donatur</span>
                  <div className="text-base sm:text-lg font-bold text-nu-green mt-1">
                    +{formatRupiah(latestKas.income_transfer)}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100">
                  <span className="text-xs text-gray-500 font-semibold block">Operasional &amp; Kebersihan</span>
                  <div className="text-base sm:text-lg font-bold text-rose-600 mt-1">
                    -{formatRupiah(latestKas.expense_operational)}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100">
                  <span className="text-xs text-gray-500 font-semibold block">Pemeliharaan &amp; Listrik</span>
                  <div className="text-base sm:text-lg font-bold text-rose-600 mt-1">
                    -{formatRupiah(latestKas.expense_maintenance)}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. Kilas Struktur Pengurus Ranting */}
      <section className="py-16 sm:py-20 bg-white border-y border-emerald-900/10" id="struktur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
              SUSUNAN KEPENGURUSAN
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nu-deep tracking-tight mb-3">
              Syuriyah dan Tanfidziyah PRNU
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Sinergi ulama dan umara dalam memimpin jalannya jam&apos;iyyah Nahdlatul Ulama di tingkat ranting.
            </p>
          </div>

          <PengurusTabs pengurus={pengurus} />

          <div className="text-center mt-10">
            <Link
              href="/struktur"
              className="inline-block px-6 py-2.5 rounded-xl text-sm font-bold bg-white border-2 border-emerald-800/20 text-nu-deep hover:bg-nu-tint hover:border-nu-green transition-all"
            >
              Lihat Bagan Struktur Lengkap →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Kilas Badan Otonom */}
      <section className="py-16 sm:py-20 bg-nu-soft" id="banom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
              SAYAP GERAKAN
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nu-deep tracking-tight mb-3">
              Badan Otonom PRNU Banjarkemuning
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Wadah pembinaan generasi pemuda, santriwati, pelajar, dan ibu-ibu dalam naungan Nahdlatul Ulama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banomLembaga.banom.map((b) => {
              const logo = getBanomLogo(b.id);
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
                            width={48}
                            height={48}
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
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/banom"
              className="inline-block px-6 py-3 rounded-xl text-sm font-bold bg-nu-green hover:bg-nu-deep text-white shadow-md transition-all"
            >
              Buka Direktori Lengkap Banom &amp; Sub-Divisi →
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Laporan Koin NU (LAZISNU) */}
      <section className="py-16 sm:py-20 bg-white border-y border-emerald-900/10" id="laporan">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-300 mb-2">
              AKUNTABILITAS UMAT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nu-deep tracking-tight mb-3">
              Gerakan Koin NU &amp; Dana ZIS
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Transparansi pengumpulan koin sehat dari kaleng warga nahdliyin se-Desa Banjarkemuning.
            </p>
          </div>

          {laporan && (
            <div className="bg-nu-soft rounded-3xl p-6 sm:p-10 border border-emerald-900/10 shadow-md">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-emerald-900/10">
                <div>
                  <span className="text-xs font-black tracking-wider text-nu-gold uppercase">PERIODE LAPORAN</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">{laporan.period}</h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-xs font-bold text-emerald-700 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Realtime Supabase</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                <div className="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm">
                  <span className="text-xs text-gray-500 font-semibold block mb-1">Total Koin &amp; Infaq</span>
                  <div className="text-xl sm:text-2xl font-black text-nu-green">{formatRupiah(laporan.total_income)}</div>
                  <span className="text-xs text-gray-400 mt-1 block">Dari kaleng warga desa</span>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm">
                  <span className="text-xs text-gray-500 font-semibold block mb-1">Dana Tersalurkan</span>
                  <div className="text-xl sm:text-2xl font-black text-amber-600">{formatRupiah(laporan.total_spent)}</div>
                  <span className="text-xs text-gray-400 mt-1 block">Santunan yatim &amp; dhuafa</span>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm">
                  <span className="text-xs text-gray-500 font-semibold block mb-1">Saldo Kas LAZISNU</span>
                  <div className="text-xl sm:text-2xl font-black text-nu-deep">{formatRupiah(laporan.balance)}</div>
                  <span className="text-xs text-gray-400 mt-1 block">Kas aman &amp; diaudit</span>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm">
                  <span className="text-xs text-gray-500 font-semibold block mb-1">Penerima Manfaat</span>
                  <div className="text-xl sm:text-2xl font-black text-nu-deep">
                    {laporan.beneficiaries_count || 0} Jiwa
                  </div>
                  <span className="text-xs text-gray-400 mt-1 block">Yatim, janda, dhuafa</span>
                </div>
              </div>

              {laporan.notes && (
                <div className="mt-6 p-4 rounded-xl bg-white/70 border border-emerald-900/10 text-xs sm:text-sm text-gray-700">
                  <strong className="text-nu-deep block mb-1">Catatan Penyaluran Amanah:</strong>
                  {laporan.notes}
                </div>
              )}

              <div className="text-center mt-8">
                <Link
                  href="/lembaga/lazisnu"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-amber-400 hover:bg-amber-300 text-gray-950 shadow-md transition-all"
                >
                  Detail Program LAZISNU &amp; Layanan Jemput Koin →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. Warta Berita & Artikel */}
      <section className="py-16 sm:py-20 bg-nu-soft" id="warta">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
              KABAR RANTING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nu-deep tracking-tight mb-3">
              Warta &amp; Berita Kegiatan
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Dokumentasi aktivitas jam&apos;iyyah, peringatan hari besar Islam, dan kabar dari Banom.
            </p>
          </div>

          <WartaGrid articles={warta} />

          <div className="text-center mt-10">
            <Link
              href="/berita"
              className="inline-block px-6 py-2.5 rounded-xl text-sm font-bold bg-white border-2 border-emerald-800/20 text-nu-deep hover:bg-nu-tint hover:border-nu-green transition-all"
            >
              Buka Seluruh Arsip Berita →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Agenda Rutinan */}
      <section className="py-16 sm:py-20 bg-white border-t border-emerald-900/10" id="agenda">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-nu-tint text-nu-deep border border-emerald-200 mb-2">
              JADWAL JAM&apos;IYYAH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nu-deep tracking-tight mb-3">
              Agenda Rutinan Jam&apos;iyyah
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Jadwal pengajian, dzikir bersama, dan majelis shalawat di lingkungan Desa Banjarkemuning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kegiatan.map((k, idx) => (
              <div
                key={k.id || `${k.title}-${idx}`}
                className="p-6 rounded-2xl bg-nu-soft border border-emerald-900/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white text-nu-deep border border-emerald-200 inline-block mb-3">
                    {k.category || 'Ranting'}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{k.title}</h3>
                  <div className="text-xs text-gray-500 space-y-1 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span>🕒</span>
                      <span>{k.time_info}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span>📍</span>
                      <span>{k.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pt-3 border-t border-emerald-900/10">
                  {k.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

