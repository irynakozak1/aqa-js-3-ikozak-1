const BASE_URL = 'https://jsonplaceholder.typicode.com'

function fetchTodo(id) {
    return fetch(`${BASE_URL}/todos/${id}`)
        .then((response) => response.json())
}

function fetchUser(id) {
    return fetch(`${BASE_URL}/users/${id}`)
        .then((response) => response.json())
}

Promise.all([
    fetchTodo(1),
    fetchUser(1)
]).then(([todo, user]) => {
    console.log("Todo:", todo)
    console.log("User:", user)
})

Promise.race([
    fetchTodo(1),
    fetchUser(1)
]).then((result) => {
    console.log("Race result:", result)
})