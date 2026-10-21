import { getMasjidData } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const masjid = await getMasjidData();
  return {
    masjid
  };
}
