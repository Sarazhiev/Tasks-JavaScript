



// let myStudy = 'good';
// if (myStudy !== 'good') {
//     console.log('Меня отчислят')
// } else {
//     console.log('То все будет хорошо')
// }
// let person = {
//     name: 'Amir',
//     age: 15
// };
// if (person.name.length > 5){
//     console.log('Слишком длинное')
// } else {
//     console.log('OK')
// }
// let person = {
//     name: 'Amir',
//     age: 15,
//     stack: {
//         react: true
//     }
// };
// if (person.stack.react) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// let  cars = ['MERS', 'BMW', 'LEXUS'];
// if (cars.length > 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }
//
// let number = 10;
// if (number % 2 === 0) { // получаем четное или нет
//     console.log(true)
// } else {
//     console.log(false)
// // }
// let number = 5.4;
// if (Math.round(number) === 5) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// let car = 'Mercedes-benz';
// if (car.includes('benz')){
//     console.log(true)
// } else {
//     console.log(false)
// }
// let box = [1,2,3];
// if (Array.isArray(box)) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// let number = 5;
// if (number >= 5) {
//     console.log(true)
// } else {
//     console.log(false)
// }


//Оператор и - &&  / Оператор или - ||

// true && true = true
// true && false = false
// false && true = false
// false && false = false

// true || true = true
// true || false = true
// false || true = true
// false || false = true
// console.log(0 && 1); //смотрит первый и видит false, при виде false они не смотрит дальше!
// console.log(2 && 4); // смотрит что true, идет дальше , выводит последний элемент.
// console.log(1 && 0); // смотрит что 1 это true, идет дальше видит false выводит false!
// console.log(0 && undefined); // смотрит что первый false, выводит сразу false!

// console.log(0 || 1); // при false, он продолжает искать, если второе значение true они берет true!
// console.log(2 || 4); // при виде true он останавливает поиск!
// console.log(1 || 0); // при виде true он останавливает поиск!
// console.log(0 || undefined); // при false он продолжает искать, не нашел выводит последний элемент!

// let number = 9;
// if (number > 5 && number < 9) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// let name = '1Abracadabra';
// if (name.length > 10 || name.includes('Abra')) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// let numbers = [10, 101,102,103];
// if (numbers.length % 2 === 0 && numbers[numbers.length - 1] % 2 === 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// let go = 'middle';
// if (go === 'left') {
//     console.log('banana')
// } else if (go === 'middle') {
//     console.log(go = 'apple')
// } else if (go === 'right') {
//     console.log(go = 'peach')
// } else {
//     console.log('NOTHING')
//  }

// let num = 5;
// if (num === 5) {
//     console.log(5)
// } else if (num === 4) {
//     console.log(4)
// } else {
//     console.log(false)
// }
//
// let day = 'суббота';
// if (day ==='вторник') {
//     console.log('рабочий день!')
// } else if (day === 'понедельник') {
//     console.log('рабочий день!')
// } else if (day === 'среда') {
//     console.log('рабочий день!')
// } else if (day === 'четверг') {
//     console.log('рабочий день!')
// } else if (day === 'пятницы') {
//     console.log('рабочий день!')
// } else {
//     console.log('выходной')
// }
// let day = 'понедельник';
// if (day === 'понедельник' || day === 'вторник' || day === 'среда' || day === 'четверг' || day === 'пятница') {
//     console.log('рабочий день')
// } else {
//     console.log('выходной')
// }

// let day = 'аааа';
// if (day !== 'воскресенье' && day !== 'суббота') {
//     console.log('рабочий день!')
// } else if (day  === 'суббота' && day === 'воскресенье') {
//     console.log('выходной')
// } else {
//     console.log('выходной')
// }

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// prompt(a + b );

// let min = 31;
// if (min <= 15) {
//     console.log(1)
// } else if (min >= 15) {
//     console.log(2)
// } else if (min >= 30) {
//     console.log(3)
// }

// let arr = ['xs', "s",];
//
// if (arr.includes('xs' || 's' || 'm' || 'l')) {
//     console.log('tiny')
// } else if (arr.includes('xl')) {
//     console.log('middle')
// } else if (arr.includes('xxl' && 'xxxl')) {
//     console.log('big')
// }
//
//
//













//  let num = 11;
//
// if ( num % 2){
//     console.log(false)
// } else {
//     console.log(true)
// }
// let num = 5.6;
// if (Math.round(num) === 6){
//     console.log(true)
// } else {
//     console.log(false )
// // }
// let car ='Mercedes-Benz';
// if (car.includes('Benz')) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// let arr = [1,2,3];
// if (Array.isArray(arr )) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// let number = 6;
// if (number >= 5) {
//     console.log(true)
// } else {
//     console.log(false)
// }
// let number = 19;
// if (5 < number < 10)  {
//     console.log(true)
// } else {
//     console.log(false)
// }
// let name = 'Abracadabra';
// if (name.length>10 && name.includes('abra')){
//     console.log(true)
// } else { console.log(false)
// }
// let number = [10, 101, 102, 103];
// if (number.length % 2 === 0 && number[number.length -1] % 2 === 0){
//     console.log(true)
// } else {
//     console.log(false)
// }

// let num = 0;
// if  (num === 5) {
//     console.log('пятерочка')
// } else if (num === 4) {
//     console.log('четверочка')
// } else if (num === 3) {
//     console.log('троечка')
// } else {
//     console.log('двойка!!!')
// }
// let day = 'вторник';
// if (day === 'monday' || 'tuesday' || 'thursday' || wend)
// let num = 1232131;
// console.log(num);
// let a = 10;
// let b = 2;
// let c = 5;
// console.log(a + b + c);
// let asd = 100;
// console.log(asd * 2);

// let asd = 67;
// console.log(asd % 7);
// let a = 10;
// let b = 2;
// // console.log(a / b);
// let c = 15;
// let d = 2;
// let result = c + d;
// console.log(result)
// let a = 30;
// let b = 15;
// let c = a + b;
// console.log(c)
// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 123;
// let resulta = c + d;
// console.log(resulta);
// let a = '10';
// let b = '99';
// let result = a + b;
// console.log(result);



