import TodoController from './Todo.js';
import UserController from './User.js';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const todoController = new TodoController(BASE_URL);
const userController = new UserController(BASE_URL);

Promise.all([
  todoController.fetchTodo(1),
  userController.fetchUser(1),
]).then(([todo, user]) => {
  console.log('Todo:', todo);
  console.log('User:', user);
});

Promise.race([
  todoController.fetchTodo(1),
  userController.fetchUser(1),
]).then((result) => {
  console.log('Race result:', result);
});
