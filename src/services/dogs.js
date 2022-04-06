import { checkError, client } from './client';
export async function fetchDogs() {
  const resp = await client.from('Dogs').select('*');
  return checkError(resp);
}

export async function fetchDogById(id) {
  const resp = await client.from('Dogs').select('*').eq('id', id);
  return checkError(resp);
}

export async function createDog(dog) {
  const resp = await client.from('Dogs').insert(dog);
  return checkError(resp);
}

export async function updateDog(dog) {
  const resp = await client.from('Dogs').update(dog).match({ id: dog.id });
  return checkError(resp);
}
