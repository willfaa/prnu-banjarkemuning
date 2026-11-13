import type { Metadata } from 'next';
import SubpageHero from '@/components/SubpageHero';
import WartaGrid from '@/components/WartaGrid';
import { getWartaBerita } from '@/lib/api';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Warta & Berita Kegiatan',
  description:
    "Arsip warta, kabar jam'iyyah, dan kegiatan Nahdlatul Ulama Desa Banjarkemuning, Sedati, Sidoarjo."
};

export default async function BeritaPage() {
  const warta = await getWartaBerita();

  return (
    <>
      <SubpageHero
        breadcrumbs={[{ label: 'Beranda', href: '/' }, { label: 'Warta & Berita' }]}
        title="Warta & Kabar Ranting"
        description="Publikasi resmi aktivitas jam'iyyah, agenda Banom, dan kabar kemaslahatan warga Desa Banjarkemuning."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <WartaGrid articles={warta} />
      </div>
    </>
  );
}

