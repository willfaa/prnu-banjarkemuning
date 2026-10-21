import { getPengurus } from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const pengurus = await getPengurus();
  return {
    pengurus
  };
}
