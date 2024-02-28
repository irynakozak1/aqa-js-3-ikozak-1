const averageGrade = 73;
let successRate;

if (averageGrade >= 0 && averageGrade < 60) {
  successRate = 'Незадовільно';
} else if (averageGrade >= 60 && averageGrade <= 70) {
  successRate = 'Задовільно';
} else if (averageGrade >= 71 && averageGrade <= 80) {
  successRate = 'Добре';
} else if (averageGrade >= 81 && averageGrade <= 90) {
  successRate = 'Дуже добре';
} else if (averageGrade >= 91 && averageGrade <= 100) {
  successRate = 'Відмінно';
} else {
  successRate = 'Unhandled average grade';
}
console.log(successRate);
