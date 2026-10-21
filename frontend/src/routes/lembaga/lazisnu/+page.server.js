import { getLaporanKoin, getOrganizationInfo } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const [laporan, meta] = await Promise.all([
    getLaporanKoin(),
    getOrganizationInfo()
  ]);

  return {
    laporan,
    whatsapp: meta?.contact?.whatsapp
  };
}
