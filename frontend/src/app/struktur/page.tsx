import type { Metadata } from 'next';
import SubpageHero from '@/components/SubpageHero';
import PengurusTabs from '@/components/PengurusTabs';
import { getPengurus } from '@/lib/api';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Struktur Pengurus Syuriyah & Tanfidziyah',
  description:
    'Susunan pengurus harian Syuriyah dan Tanfidziyah Pengurus Ranting Nahdlatul Ulama Desa Banjarkemuning, masa khidmat aktif.'
};

export default async function StrukturPage() {
  const pengurus = await getPengurus();

  return (
    <>
      <SubpageHero
        breadcrumbs={[{ label: 'Beranda', href: '/' }, { label: 'Struktur Organisasi' }]}
        title="Struktur Kepengurusan"
        description="Susunan Majelis Syuriyah dan Pengurus Tanfidziyah PRNU Desa Banjarkemuning Masa Khidmat 2024 - 2029."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <PengurusTabs pengurus={pengurus} showBranchSummary />
      </div>
    </>
  );
}

