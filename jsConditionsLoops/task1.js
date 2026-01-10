let averageGrade = 96;
let result;
if (averageGrade < 60) {
  result = "Незадовільно";
} else if (averageGrade <= 70) {
  result = "Задовільно";
} else if (averageGrade <= 80) {
  result = "Добре";
} else if (averageGrade <= 90) {
  result = "Дуже добре";
} else if (averageGrade <= 100) {
  result = "Відмінно";
} else {
  result = "Некоректна оцінка";
}

console.log(result);
