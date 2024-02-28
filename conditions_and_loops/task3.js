console.log('Генерація таблиці множення: цикл FOR');

const number = 6;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log('Генерація таблиці множення: цикл WHILE');

let index = 1;
while (index <= 10) {
  console.log(`${number} x ${index} = ${number * index}`);
  index++;
}
