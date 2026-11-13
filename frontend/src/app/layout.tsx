import type { Metadata, Viewport } from 'next';
import { Amiri, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RealtimeSync from '@/components/RealtimeSync';
import { getOrganizationInfo } from '@/lib/api';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta'
});

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri'
});

export const dynamic = 'force-dynamic';

export const viewport: Viewport = {
  themeColor: '#033826'
};

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getOrganizationInfo();
  return {
    title: {
      default: `${meta.name} | Nahdlatul Ulama Sedati Sidoarjo`,
      template: '%s | PRNU Banjarkemuning'
    },
    description:
      'Website resmi Pengurus Ranting Nahdlatul Ulama (PRNU) Desa Banjarkemuning, Kecamatan Sedati, Kabupaten Sidoarjo. Informasi kegiatan, transparansi kas masjid, laporan Koin LAZISNU, dan badan otonom.',
    icons: {
      icon: '/assets/NU-Green.png'
    },
    openGraph: {
      title: `${meta.name} - Melayani Umat Menjaga Tradisi`,
      description:
        'Pusat informasi resmi PRNU Desa Banjarkemuning, Kec. Sedati, Kab. Sidoarjo. Laporan kas masjid, Koin NU, dan khidmat warga nahdliyin.',
      images: ['/assets/NU-Green-Bg.jpg']
    }
  };
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const meta = await getOrganizationInfo();

  return (
    <html lang="id" className={`${jakarta.variable} ${amiri.variable}`}>
      <body className="font-sans">
        <RealtimeSync />
        <div className="app-root">
          <Navbar meta={meta} />
          <main id="main-content">{children}</main>
          <Footer meta={meta} />
        </div>
      </body>
    </html>
  );
}

