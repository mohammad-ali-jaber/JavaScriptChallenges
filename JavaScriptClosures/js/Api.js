export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
