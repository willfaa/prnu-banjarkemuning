import { getBanomAndLembaga, getKegiatanList } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const [{ banom }, kegiatan] = await Promise.all([
    getBanomAndLembaga(),
    getKegiatanList()
  ]);

  return {
    banom,
    kegiatan
  };
}
