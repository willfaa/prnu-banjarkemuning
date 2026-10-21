<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';
  import { invalidateAll } from '$app/navigation';
  import { supabase } from '$lib/supabaseClient';

  export let data;

  onMount(() => {
    // Supabase Realtime Subscription: auto-sync kapan pun data berubah di database
    const channelName = `prnu-sync-${Math.random().toString(36).substring(7)}`;
    const channel = supabase
      .channel(channelName)
      .on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
        console.log('⚡ Realtime change detected in SvelteKit:', payload.table, payload.eventType);
        invalidateAll();
      })
      .subscribe((status, err) => {
        console.log(`📡 Supabase Realtime SvelteKit [${channelName}] status:`, status);
        if (err) console.error('Realtime error:', err);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  });
</script>

<svelte:head>
  <title>{data.meta?.name || 'PRNU Banjarkemuning'} | Nahdlatul Ulama Sedati Sidoarjo</title>
  <meta name="description" content="Website resmi Pengurus Ranting Nahdlatul Ulama (PRNU) Desa Banjarkemuning, Kecamatan Sedati, Kabupaten Sidoarjo. Informasi kegiatan, transparansi kas masjid, laporan Koin LAZISNU, dan badan otonom." />
  <meta property="og:title" content="{data.meta?.name || 'PRNU Banjarkemuning'} - Melayani Umat Menjaga Tradisi" />
  <meta property="og:description" content="Pusat informasi resmi PRNU Desa Banjarkemuning, Kec. Sedati, Kab. Sidoarjo. Laporan kas masjid, Koin NU, dan khidmat warga nahdliyin." />
  <meta property="og:image" content="/assets/NU-Green-Bg.jpg" />
</svelte:head>

<div class="app-root">
  <Navbar meta={data.meta} />

  <main id="main-content">
    <slot />
  </main>

  <Footer meta={data.meta} />
</div>
