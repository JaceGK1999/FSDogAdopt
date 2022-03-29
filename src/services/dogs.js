import { checkError, client } from './client';
export async function fetchDogs() {
  const resp = await client.from('Dogs').select('*');
  return checkError(resp);
}

export async function fetchDogById(id) {
  const resp = await client.from('Dogs').select('*').eq('id', id);
  return checkError(resp);
}
