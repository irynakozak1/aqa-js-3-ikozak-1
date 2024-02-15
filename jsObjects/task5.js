const users = [
    {name: "Ann", email: "anna25@gmail.com", age:25},
    {name: "Eliza", email: "eliza35@gmail.com", age:35},
    {name: "Patrik", email: "patrik45@gmail.com", age:45}
]

for (const {name, email, age} of users) {
    console.log(`User ${name} is ${age} y.o and has "${email}" email address.`)
}