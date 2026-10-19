import React from 'react';

export default function Sambutan() {
  return (
    <section id="sambutan" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag">Khidmat Jam'iyyah</span>
          <h2 className="section-title">Mukadimah Pengurus</h2>
          <p className="section-subtitle">
            Amanat khidmat dalam merajut ukhuwah Islamiyah, wathaniyah, dan basyariyah di tingkat ranting desa.
          </p>
        </div>

        <div className="quote-card">
          <div className="basmalah">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>

          <p className="quote-text">
            "Keberadaan Pengurus Ranting Nahdlatul Ulama di Desa Banjarkemuning adalah benteng amaliyah dan mu'amalah 
            Ahlussunnah wal Jama'ah an-Nahdliyah. Kami berikhtiar menghubungkan khidmat ulama dengan denyut kehidupan 
            warga sehari-hari: menjaga ketenangan ibadah, membina generasi muda melalui Banom (Ansor, Fatayat, IPNU-IPPNU), 
            menggerakkan kepedulian sosial lewat KOIN LAZISNU, serta memelihara kerukunan antar-tetangga di seluruh lingkungan RT dan RW."
          </p>

          <div className="quote-author">
            <div className="author-avatar-placeholder" aria-hidden="true">
              NU
            </div>
            <div>
              <div className="author-name">Pimpinan Majelis Syuriyah & Tanfidziyah</div>
              <div className="author-role">Pengurus Ranting Nahdlatul Ulama Desa Banjarkemuning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
