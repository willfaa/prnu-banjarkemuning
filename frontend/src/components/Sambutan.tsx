export default function Sambutan() {
  return (
    <section className="py-16 sm:py-20 bg-white border-y border-emerald-900/10" id="sambutan">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-nu-soft border border-emerald-900/10 shadow-sm relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 text-emerald-900/5 select-none pointer-events-none text-9xl font-serif">
            ﷽
          </div>

          <div className="text-center mb-8">
            <p className="font-serif text-2xl sm:text-3xl text-nu-deep mb-4 font-normal" dir="rtl">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-nu-deep border border-emerald-200 mb-3">
              MUKADIMAH KHIDMAT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-nu-deep tracking-tight">
              Khidmat Jam&apos;iyyah untuk Kemaslahatan Desa Banjarkemuning
            </h2>
            <div className="w-16 h-1 bg-nu-gold rounded-full mx-auto mt-4" />
          </div>

          <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed relative z-10">
            <p className="italic text-nu-deep font-semibold">
              Assalamu&apos;alaikum Warahmatullahi Wabarakatuh.
            </p>
            <p>
              Segala puji bagi Allah Subhanahu wa Ta&apos;ala yang telah melimpahkan rahmat, taufiq, dan inayah-Nya kepada kita semua.
              Shalawat serta salam senantiasa tercurahkan kepada junjungan kita Nabi Agung Muhammad Shallallahu &apos;Alaihi Wasallam,
              keluarga, sahabat, dan para ulama penerus risalah kenabian.
            </p>
            <p>
              Pengurus Ranting Nahdlatul Ulama (PRNU) Desa Banjarkemuning hadir sebagai wadah jam&apos;iyyah dan jama&apos;ah dalam menegakkan ajaran
              Islam <em>Ahlussunnah wal Jama&apos;ah an-Nahdliyah</em>. Kami berikhtiar menghubungkan nilai-nilai tradisi keagamaan para <em>masyayikh</em>{' '}
              dengan pelayanan nyata bagi warga: mulai dari transparansi pengelolaan <strong className="text-nu-deep">Kotak Koin NU (LAZISNU)</strong>, kemakmuran <strong className="text-nu-deep">Masjid Jami&apos; Baitul Muttaqin</strong>,
              hingga pemberdayaan generasi muda melalui Badan Otonom (GP Ansor, Banser, Fatayat, IPNU, IPPNU, Muslimat, dan Pagar Nusa).
            </p>
            <p>
              Portal digital ini didedikasikan untuk keterbukaan informasi, pertanggungjawaban amanah kas umat, serta jembatan silaturahmi antarwarga
              nahdliyin di seluruh pelosok Desa Banjarkemuning. Semoga khidmat ini senantiasa diridhai Allah SWT.
            </p>
            <p className="pt-2 text-nu-deep font-semibold">
              Wallahul Muwaffiq ila Aqwamith Thariq.
              <br />
              Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 mt-8 border-t border-emerald-900/10 text-center relative z-10">
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase font-extrabold tracking-wider text-nu-gold mb-1">Rais Syuriyah</span>
              <span className="text-lg font-bold text-gray-900">K.H. Mas&apos;ud Ali</span>
              <span className="text-xs text-gray-500">Pengasuh Ibadah &amp; Fatwa Keagamaan</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase font-extrabold tracking-wider text-nu-gold mb-1">Ketua Tanfidziyah</span>
              <span className="text-lg font-bold text-gray-900">H. Moch. Hasan Bisri</span>
              <span className="text-xs text-gray-500">Penanggung Jawab Eksekutif Jam&apos;iyyah</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

