import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sambutan from './components/Sambutan';
import StructureSection from './components/StructureSection';
import BanomSection from './components/BanomSection';
import LaporanKoinSection from './components/LaporanKoinSection';
import WartaSection from './components/WartaSection';
import AgendaSection from './components/AgendaSection';
import Footer from './components/Footer';

import {
  getOrganizationInfo,
  getPengurus,
  getBanomAndLembaga,
  getKegiatanList,
  getLaporanKoin,
  getWartaBerita
} from './services/api';

import { supabase } from './services/supabaseClient';

export default function App() {
  const [meta, setMeta] = useState(null);
  const [pengurus, setPengurus] = useState(null);
  const [banomLembaga, setBanomLembaga] = useState({ banom: [], lembaga: [] });
  const [laporan, setLaporan] = useState(null);
  const [warta, setWarta] = useState([]);
  const [kegiatan, setKegiatan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAllData() {
      try {
        const [metaData, pengurusData, banomData, koinData, wartaData, kegiatanData] =
          await Promise.all([
            getOrganizationInfo(),
            getPengurus(),
            getBanomAndLembaga(),
            getLaporanKoin(),
            getWartaBerita(),
            getKegiatanList()
          ]);

        setMeta(metaData);
        setPengurus(pengurusData);
        setBanomLembaga(banomData);
        setLaporan(koinData);
        setWarta(wartaData);
        setKegiatan(kegiatanData);
      } catch (err) {
        console.error("Gagal memuat data dari Supabase:", err);
      } finally {
        setLoading(false);
      }
    }

    loadAllData();

    // Supabase Realtime Subscription: auto-sync kapan pun data berubah di database
    const channelName = `prnu-sync-${Math.random().toString(36).substring(7)}`;
    const channel = supabase
      .channel(channelName)
      .on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
        console.log('⚡ Realtime database change detected:', payload.table, payload.eventType);
        loadAllData();
      })
      .subscribe((status, err) => {
        console.log(`📡 Supabase Realtime [${channelName}] status:`, status);
        if (err) console.error('Realtime subscription error:', err);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="app-root">
      <Navbar meta={meta} />

      <main id="main-content">
        <Hero meta={meta} />
        <Sambutan />
        <StructureSection pengurus={pengurus} />
        <BanomSection banom={banomLembaga.banom} lembaga={banomLembaga.lembaga} />
        <LaporanKoinSection data={laporan} whatsapp={meta?.contact?.whatsapp} />
        <WartaSection articles={warta} />
        <AgendaSection kegiatan={kegiatan} meta={meta} />
      </main>

      <Footer meta={meta} />
    </div>
  );
}
