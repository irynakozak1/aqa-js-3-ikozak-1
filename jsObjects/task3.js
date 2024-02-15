const car1 = {
    brand: "Audi",
    model: "A3",
    year: 2020
}

const car2 = {
    brand: "BMW",
    model: "X3",
    owner: "John"
}

const car3 = {
    ...car1,
    ...car2
}
console.log(car3)