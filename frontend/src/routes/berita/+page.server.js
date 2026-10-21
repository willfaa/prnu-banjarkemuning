import { getWartaBerita } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const warta = await getWartaBerita();
  return {
    warta
  };
}
