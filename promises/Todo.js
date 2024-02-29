export default class TodoController {
  constructor(baseURL) {
    this._baseURL = baseURL;
  }

  async fetchTodo(id) {
    const response = await fetch(`${this._baseURL}/todos/${id}`);
    const body = await response.json();
    // console.log(body)
    return body;
  }
}
