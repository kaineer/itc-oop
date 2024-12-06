const { join } = require("path");
const { readFileSync } = require("fs");

const text = readFileSync(join(process.cwd(), "text.txt")).toString();


// const validate = /\b[a-z]{3}\b/gi
const validate = /([a-z]+).$/gim;
const  res = text.match(validate);
console.log(res);
// Посчитайте и выведите в консоль:
// [1] количество слов из двух букв (слова тоже выведите)
// [2] количество слов из трех букв (слова тоже выведите)
// [3] количество пробелов
// [4] количество знаков препинания
// [5] количество чисел в тексте (числа тоже в консоль)
// [6] количество строк в тексте (понадобится модификатор /m)
// [7] слова, стоящие в начале строк
// [8] слова, стоящие в конце строк (можно с точкой, но лучше без)
