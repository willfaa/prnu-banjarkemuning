import { getBanomAndLembaga } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const { lembaga } = await getBanomAndLembaga();
  return {
    lembaga
  };
}
