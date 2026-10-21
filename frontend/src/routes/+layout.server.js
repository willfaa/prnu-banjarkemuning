import { getOrganizationInfo } from '$lib/api';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  const meta = await getOrganizationInfo();
  return {
    meta
  };
}
