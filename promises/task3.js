const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function fetchTodo(id) {
  const response = await fetch(`${BASE_URL}/todos/${id}`);
  const body = await response.json();
  return body;
}

async function fetchUser(id) {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  const body = await response.json();
  return body;
}

Promise.all([
  fetchTodo(1),
  fetchUser(1),
]).then(([todo, user]) => {
  console.log('Todo:', todo);
  console.log('User:', user);
});

Promise.race([
  fetchTodo(1),
  fetchUser(1),
]).then((result) => {
  console.log('Race result:', result);
});
