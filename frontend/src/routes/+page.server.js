import {
  getPengurus,
  getBanomAndLembaga,
  getKegiatanList,
  getLaporanKoin,
  getWartaBerita,
  getMasjidData
} from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const [pengurus, banomLembaga, kegiatan, laporan, warta, masjid] = await Promise.all([
    getPengurus(),
    getBanomAndLembaga(),
    getKegiatanList(),
    getLaporanKoin(),
    getWartaBerita(),
    getMasjidData()
  ]);

  return {
    pengurus,
    banom: banomLembaga.banom,
    lembaga: banomLembaga.lembaga,
    kegiatan,
    laporan,
    warta,
    masjid
  };
}
