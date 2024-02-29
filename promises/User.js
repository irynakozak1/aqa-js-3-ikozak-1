export default class UserController {
  constructor(baseURL) {
    this._baseURL = baseURL;
  }

  async fetchUser(id) {
    const response = await fetch(`${this._baseURL}/users/${id}`);
    const body = await response.json();
    // console.log(body)
    return body;
  }
}
