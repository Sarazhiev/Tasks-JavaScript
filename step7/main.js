//Функции
// function callAlert(a,b) {
//     console.log(a + b);
//     return a + b
// }
// let width = callAlert(5,5);
// console.log('моя ширина =>>>>', width);

//
// function sayHello(str) {
//     return str
// }
//
// console.log(sayHello('Hello'));
// console.log(sayHello('Hi'));
// console.log(sayHello('Привет'));
// console.log(sayHello('Здраствуйте'));
// console.log(sayHello('Дарова'));
//

// function compression(a,b) {
//     if (a > b) {
//         return 'Больше'
//     } else {
//         return 'Меньше'
//     }
// }
// console.log(compression(5,10));
// console.log(compression(20,10));



// function cutFunc(str) {
//     let str2 = 'break';
//      // return str.slice(1) + str2.slice(1)
//      return `${str.slice(1)}${str2.slice(1)}`
// }
//
// console.log(cutFunc('Word'));


// function text(str) {
// return str
// }
//
// console.log(text('sadad'));

// function math(a,b) {
// return a * b
// }
//
// console.log(math(2,4));
// function num(a) {
// if (a > 10) {
//     return 'больше';
// }
//     return 'меньше или ровно'
// }
// console.log(num(6));
// function hel(a) {
//     if ( a.includes('hello')) {
//         return true
//     }
//     return false
//
// }
//
// console.log(hel('hello world'));
// function take(num) {
// for (let i = 0; i < num.length; i++) {
//
// }
//     return i += num[i]
// }
//
//
//
// console.log(take(1,2,3,4,5));


//Функции

// ОБЫЧНАЯ ФУНКЦИЯ
// Название такой функции - Declaration = простая функция

// function makeFarsh(item) {
//     // return 'фарш' // написав я выдаю фарш, не важно что у меня в консоли! Он выдаст мне фарш
//     return arguments // дает порядок их мест
// }
//
// console.log(makeFarsh('Мясо')); // в обычной функции можем вызывать значения до его создания
// console.log(makeFarsh(11111));


//АНОНИМНАЯ ФУНКЦИЯ
// Название такой функции - Expression = Анонимная функция, без имени

// const calcNumbers = function (a,b) {
//     // return a + b
//     return arguments // дает порядок их мест
// };
// console.log(calcNumbers(1,2)); // в Анонимной  функции не можем вызывать значения до его создания

//СТРЕЛОЧНАЯ ФУНКЦИЯ
// название такой функции - Arrow function = Стрелочная функция =>

// const calcNumbers = (a,b) => {
//     // return a + b
//     return arguments // берет аргументы своего родителя // порядок их мест
//
// };
// console.log(calcNumbers(1,2)); // в стрелочной функции не можем вызывать значения до его создания





// const example = (name) => {
//     if (name.length % 2 === 0) {  // проверка на четность  ******
//         return 'Luffy'
//     }
//     return 'Pizza'
// };
// console.log(example('Сабине'));

// const giveText = (numbers) => {
//     let arr1 = [];
//     let arr2 = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === Math.trunc(numbers[i])) { // проверяем является ли наш массив целым или дробным *****
//             arr1 = [...arr1, numbers[i]]  // переводим целые в arr1
//         } else {
//             arr2 = [...arr2, numbers[i]]  // а дробные в arr2
//         }
//     }
//     return `У нас есть целые числа это : ${arr1.join(', ')}, а так же есть дробные это ${arr2.join(', ')}` // шаблонная строка ***
// };
// console.log(giveText([2, 3,  5.5, 1.2, 3.8]));
// console.log(giveText([22, 33,  10.5, 13.2, 23.8]));


// const getArray = (num) => {
//     let arr = [];   // создали пустой arr чтобы, вставить в будущем наши значения
//     for (let i = num; i <= num + 5; i++) { // присвоили  i к num, чтобы он считал от начала плюс 5
//         arr = [...arr, i] // используем spread оператор, чтобы скопировать наш массив и цикл!
//     }
//     return arr
// };
// console.log(getArray(5)); // в итоге мы получаем, любое число + 5
// console.log(getArray(34));
// console.log(getArray(24));


// const reverse = (str) => { // наша стрелочная строка
//     if (str === str.split('').reverse().join('')) { // просим если наш str равен str переведенный в массив и reverse если все верно выдает true иначе false
//         return true
//     }
//     return false
// };
// console.log(reverse('боб'));
// console.log(reverse('шалаш'));
// console.log(reverse('или'));

// const reverse = (str) => {
//     for (let i = 0; i < str.length; i++) {  // наш цикл
//         if (str[i] !== str[str.length - 1 - i]) { // здесь он перебирает каждую букву нашей строки!
//             return false
//         }
//     }
//     return true
// };
// console.log(reverse('боб'));

// const callAlert = (a,b,c) => {
//     let arr = []; // создали пустой массив, чтобы в дальнейшем работать с ним!!! ***
//     for (let i = 0; i < a.length || i < b.length || i < c.length; i++) { // наш цикл ***
//         arr = [...arr, a[i], b[i], c[i]] // используем spread оператор чтобы скопировать в наш массив все данные!!! ***
//     }[
//     return arr.join('') // берем наш arr и переводим в строчный!!! ***
// };
// console.log(callAlert('Bm','aa', 'tn')); // в итоге мы получаем переберающее значение!! ***

// const uppLow = (str) => { // создали цикл!!! ***
//     str = str.split(''); // перевели нашу строку в массив ***
//     for (let i = 0; i < str.length; i++) {
//         str[i] === str[i].toUpperCase() ? str[i] = str[i].toLowerCase() : str[i] = str[i].toUpperCase()
//     }
//     return str.join('')
// };
// console.log(uppLow('HeLlO WoRlD'));