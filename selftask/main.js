//Home work first lesson!
//1
// let num = 5;
// console.log(num);
//2
// let a = 10;
// let b = 2;
// let c = 5;
// console.log(a + b + c);
//3
// let task3 = 100;
// console.log(task3 * 2);
//4
// let num = 67;
// console.log(num % 7);
//5
// let a = 10;
// let b = 2;
// console.log(a / b);
//6
// let c = 15;
// let d = 2;
// let result = c + d;
// console.log(result);
//7
// let a = 30;
// let b = 15;
// let c = a + b;
// console.log(c % 4);
//8
// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 5;
// let result = c + d;
// console.log(result);
//9
// let a = 10;
// let b = '99';
// let result = a + b;
// console.log(result);
//10
// let name = 'лет';
// let number = 10;
// let result = name + number;
// console.log(result);


//second home work
//1
// let a = 'теыст';
// if (a === 'test') {
//     console.log('верно')
// } else if (a === 'тест') {
//     console.log('тоже венро)')
// } else {
//     console.log('не верно')
// }
//2
// let number;
// let data = true;
// data ? number = 2 : number = 3;
// console.log(number);
//3
// switch (prompt('когда вы собираетесь прийти в магазин?',0)) {
//     case '23':
//         alert('в это время мы не работает');
//         break;
//     case '24':
//         alert('в это время мы не работает');
//         break;
//     case '1':
//         alert('в это время мы не работает');
//         break;
//     case '2':
//         alert('в это время мы не работает');
//         break;
//     case '3':
//         alert('в это время мы не работает');
//         break;
//     case '4':
//         alert('в это время мы не работает');
//         break;
//     case '5':
//         alert('в это время мы не работает');
//         break;
//     case '6':
//         alert('в это время мы не работает');
//         break;
//     case '7':
//         alert('в это время мы не работает');
//         break;
//     case '8':
//         alert('в это время мы не работает');
//         break;
//     case '9':
//         alert('Будем рады Вас видеть');
//         break;
//     case '10':
//         alert('Будем рады Вас видеть');
//         break;
//     case '11':
//         alert('Будем рады Вас видеть');
//         break;
//     case '12':
//         alert('у нас обед');
//         break;
//     case '13':
//         alert('мы так же рады вас видеть');
//         break;
//     case '14':
//         alert('мы так же рады вас видеть');
//         break;
//     case '15':
//         alert('мы так же рады вас видеть');
//         break;
//     case '16':
//         alert('мы так же рады вас видеть');
//         break;
//     case '17':
//         alert('мы так же рады вас видеть');
//         break;
//     case '18':
//         alert('мы так же рады вас видеть');
//         break;
//     case '19':
//         alert('мы так же рады вас видеть');
//         break;
//     case '20':
//         alert('мы так же рады вас видеть');
//         break;
// }
//4
// let m = 41;
// let n;
// if (m > 50) {
//     console.log(n = 'большое')
// } else {
//     console.log(n = 'маленькое')
// }
//5
// let a = -3;
// if (a === 0 || a === 2) {
//     console.log(a + 7)
// } else {
//     console.log(a / 10)
// }
//6
// if (confirm('есть ли вам 18?')) {
//     console.log('YES!')
// } else {
//     console.log('NO!!!')
// }
//7
// let a = 3;
// let b = 5;
// if (a <= 1 && b >= 3) {
//     console.log(a + b)
// } else {
//     console.log(a - b)
// }
//8
// let pasha = 17;
// if (pasha >= 18) {
//     console.log(pasha = 'какой уже большой!!!')
// } else {
//     console.log(pasha = 'малыш')
// }
//9
// let seasons = 'октябрь';
// switch (seasons) {
//     case 'декабрь':
//     case 'январь':
//     case 'февраль':
//         console.log('зима');
//         break;
//     case 'март':
//     case 'апрель':
//     case 'май':
//         console.log('весна');
//         break;
//     case 'июнь':
//     case 'июль':
//     case 'август':
//         console.log('лето');
//         break;
//     case 'сентябрь':
//     case 'октябрь':
//     case 'ноябрь':
//         console.log('осень');
//         break;
// }
//10
// let time = 61;
// if (time >= 0 && time <= 15) {
//     console.log("время относится к четверти часа")
// } else if (time > 15 && time <= 30) {
//     console.log("время относится к половине часа")
// } else if (time > 30 && time <= 45) {
//     console.log("время относится к 3/4 часа")
// } else if (time > 45 && time <= 60) {
//     console.log("время относится к целому часу")
// } else {
//     console.log("неизвестный диапазон")
// }




//1
// let arr = [1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
//2
// let arr = [1,2,3,4,5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
// }
// console.log(result);
//3
// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
// }
// let i = 0;
// while (i < 3) {
//     i++;
//     console.log(`number ${i}!`)
// }
//4
// let arr = [-2,7,9,5,8,1,12,15,17,3];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i])
//     }
// }
//5
// for (let i = 2; i <= 10; i += 2) {
//     console.log(i)
// }
//6
// let sum = 1;
// for (let i = 1; i <= 100; i++) {
//     sum += i
// }
// console.log(sum);
//7
// let arr = ['BMW', 'Mersedes', 'Opel', 'Mazda', 'FIAT', 'Ferarri', 'Reno'];
// let empty = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i].toUpperCase()) {
//         empty = [...empty, arr[i]]
//     }
// }
// console.log(empty);
//8
// let arr = [2,3,4,5,6,7];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {

// }

//9
// let arr = [-2, 7, '9б', 'Vlad', 1, 12, 15, 'Ivan', 17, 3];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         console.log(arr[i])
//     }
// }
//10
// let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб','вс'];
// for (let i = 0; i < week.length; i++) {
//     if (week[i] === week[5] || week[i] === week[6]) {
//         week[i] = 'выходной'
//     }
//     console.log(week[i])
// }
//11
// let arr = ['Наташа','Анастасия','Дмитрий','Максим'];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[0]) {
//         continue
//     } else {
//         console.log(arr[i])
//     }
// }
//12
// let arr = ['Наташа', 'Анастасия', 2, 'Максим', 4];
// for (let i = 0; i < 1; i++) {
//     console.log(arr.sort());
// }
//13
// let num = 5;
// for (let i = 2; i <= 10; i++) {
//     console.log(num * i)
// }

//1
// let name = 'Анастасия';
// name = 'Максим';
// console.log(name);
//2
// let str = 'Я хочу быть большим и сильным';
// console.log(str.length);
//3
// let a = '15';
// let b = 15;
// let c = 10;
// console.log(a + b + c);
// console.log(b + c + a);
//4
// let arr = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(arr[1][0]);
//5
// let obj = {
//     name: 'Ivan',
//     age: 35,
//     gender: 'male',
//     job: 'web-developer',
// };
// for (let key in obj) {
//     console.log(`значение свойства ${key} является ${obj[key]}`);
// }
//6
// let surname = 'Серебров';
// let changeName = 'фф';
// surname = surname.slice(0,7);
// console.log(surname + changeName);

// let surname = 'Серебров';
// surname = surname.split('');
// surname.splice(-1, 1, 'фф');
// console.log(surname.join(''));
//7
// let str = 'Я люблю торт';
// console.log(str.includes('торт'));

//8
// let str = '10223040';
// str = str.split('').reverse();
// console.log(str.join(''));

//9
// let age = 22;
// console.log(`мне ${age} года`);

//10
// let str = "  asdasdsadsadsadsadc";
// console.log(str.trim().split(''));

//11
// let arr = [2, 1, 3, 4, 5];
// arr.sort();
// arr.splice(3,0,'a,b,c');
// console.log(arr);

//12
// let str = 'Мой город самый лучший город в России!';
// console.log(str.indexOf('город'));

//13
// let str = 'place';
// console.log(str.slice(1, -1));

//14
// let a = 10,
//     b = 10;
// if (a > b) {
//     console.log(a + b)
// } else  if(a < b) {
//     console.log(a * b)
// } else {
//     console.log('числа одинаковые')
// }

//15
// let arr = [12,'12', true, undefined, 'Ivan', 35];
// for (let item of arr) {
//     console.log(`Массив содержит в себе элемент ${item}`)
// }

// let a = 'test';
// if (a === 'test') {
//     console.log(true)
// } else {
//     console.log(false)
// }
// let a = 'test';
// if (a === 'test') {
//     console.log('test')
// } else if (a === 'тест') {
//     console.log('тест')
// } else if (a === 3) {
//     console.log(3)
// }
// let car = 'BMW';
// car === 'BMW' ? console.log(true) : console.log(true);
// let number;
// data = false;
// data === true ? console.log(number = 2) : console.log(number = 3);
// let m;
// let n;
// let m;
// let n;
// m = 66;
// if (m > 50) {
//     console.log(n = 'большое')
// } else console.log('маленькое');
// let m;
// let n;
// m = 66;
// m > 50 ? console.log(n = 'большое') : console.log('Маленькое');
// let a = 0;
// if (a === 0 || a === 2){
//     console.log(a + 7)
// } else {
//     console.log(a / 10)
// }
//  let a = 0;
// a === 0 || a === 2 ? console.log(a + 7) : console.log(a / 10);
// let a = 2 + 2;
// switch (a) {
//     case 3:
//         console.log('маловато');
//         break;
//     case 4:
//         console.log('верно');
//         break;
//         case 5:
//         console.log('многовато');
//         break
// }

// switch (prompt('когда вы собираетесь прийти в магаз', 0)) {
//     case '23':
//         alert('мы закрыты');
//         break;
//     case '24':
//         alert('мы закрыты');
//         break;
//     case '1':
//         alert('мы закрыты');
//         break;
//     case '2':
//         alert('мы закрыты');
//         break;
//     case '3':
//         alert('мы закрыты');
//         break;
//     case '4':
//         alert('мы закрыты');
//         break;
//     case '5':
//         alert('мы закрыты');
//         break;
//     case '6':
//         alert('мы закрыты');
//         break;
//     case '7':
//         alert('мы закрыты');
//         break;
//     case '8':
//         alert('мы закрыты');
//         break;
//     case '9':
//         alert('будем рады вас видеть!!!');
//         break;
//     case '10':
//         alert('будем рады вас видеть!!!');
//         break;
//     case '11':
//         alert('будем рады вас видеть!!!');
//         break;
//     case '12':
//     case '13':
//         alert('у нас обед!!!');
//         break;
//     case '14':
//         alert('так же рады вас видеть!!!');
//         break;
//     case '15':
//         alert('так же рады вас видеть!!!');
//         break;
//     case '16':
//         alert('так же рады вас видеть!!!');
//         break;
//     case '17':
//         alert('так же рады вас видеть!!!');
//         break;
//     case '18':
//         alert('так же рады вас видеть!!!');
//         break;
//     case '19':
//         alert('так же рады вас видеть!!!');
//         break;
//     case '20':
//         alert('так же рады вас видеть!!!');
//         break;
//     case '21':
//         alert('так же рады вас видеть!!!');
//         break;
//     case '22':
//         alert('так же рады вас видеть!!!');
//         break;
// }

// let a = confirm('есть ли вам 18?');
// if (a === true) {
//     console.log('есть')
// } else {
//     console.log('нет')
// }


// let a = 1;
// let b = 3;
// if (a <= 1 && b >= 3) {
//     console.log(a + b)
// } else {
//     console.log(a - b)
// }


// let pasha = 18;
// if (pasha === 17) {
//     console.log('еще ребенок!')
// } else if (pasha === 18) {
//     console.log('уже большой мальчик')
// }

// let number;
// let data = false;
// data === true ? console.log(number = 2) : console.log(number =3);
// let seasons = 'июнь';
// switch (seasons) {
//     case 'декабрь' :
//         console.log('зима');
//         break;
//     case  'январь' :
//         console.log('зима');
//         break;
//     case 'февраль' :
//         console.log('зима');
//     break;
//     case 'апрель' :
//         console.log('весна');
//         break;
//     case  'март' :
//         console.log('весна');
//         break;
//     case 'май' :
//         console.log('весна');
//         break;
//     case 'июнь' :
//         console.log('лето');
//         break;
//     case  'июль' :
//         console.log('лето');
//         break;
//     case 'август' :
//         console.log('лето');
//         break;
//     case 'сентябрь' :
//         console.log('осень');
//         break;
//     case  'октябрь' :
//         console.log('осень');
//         break;
//     case 'ноябрь' :
//         console.log('осень');
//         break;
// }
// let time = 15;
// if (time >= 0 && time <= 14) {
//     console.log('время относится к четверти часа')
// } else if (time >= 15 && time <= 29) {
//     console.log('время относится к половине часа')
// } else if (time >= 30 && time <= 44) {
//     console.log('время относится к 3/4 часа')
// } else if (time >= 45 && time <= 60) {
//     console.log('время относится к целому часу')
// } else {
//     console.log('неизвестный диапазон')
// }
// let time = 61;
// switch (time) {
//     case 1 :
//     case 2 :
//     case 3 :
//     case 4 :
//     case 5 :
//     case 6 :
//     case 7 :
//     case 8 :
//     case 9 :
//     case 10 :
//     case 11 :
//     case 12 :
//     case 13 :
//     case 14 :
//         console.log('время относится к четверти часа');
//         break;
//     case 15 :
//     case 16 :
//     case 17 :
//     case 18 :
//     case 19 :
//     case 20 :
//     case 21 :
//     case 22 :
//     case 23 :
//     case 24 :
//     case 25 :
//     case 26 :
//     case 27 :
//     case 28 :
//     case 29 :
//         console.log('время относится к половине часа');
//         break;
//     case 30 :
//     case 31 :
//     case 32 :
//     case 33 :
//     case 34 :
//     case 35 :
//     case 36 :
//     case 37 :
//     case 38 :
//     case 39 :
//     case 40 :
//     case 41 :
//     case 42 :
//     case 43 :
//     case 44 :
//         console.log('время относится к 3/4 часа');
//         break;
//     case 45 :
//     case 46 :
//     case 47 :
//     case 48 :
//     case 49 :
//     case 50 :
//     case 51 :
//     case 52 :
//     case 53 :
//     case 54 :
//     case 55 :
//     case 56 :
//     case 57 :
//     case 58 :
//     case 59 :
//     case 60 :
//         console.log('время относится к целому часу');
//         break;
//     default:
//         console.log('неизвестный диапазон')
// }
// let age = prompt('возраст?', 18);
// let message = (age < 3) ? 'Здраствуй, малыш' :
//     (age < 18) ? 'привет!' :
//         (age < 100) ? 'здраствуйте!' :
//             'какой необычный возраст!';
// alert(message);
// let age = prompt('возраст' , 18);
// if (age < 3) {
//     message = 'здраствуй, малыш'
// } else if (age < 18) {
//     message = 'привет!'
// } else if (age < 100) {
//     message = 'здраствуйте!'
// } else {
//     message = 'какой необычный возраст'
// }
// alert(message);











// let a = 'test';
// if (a === 'test') {
//     console.log('верно')
// } else {
//     console.log('Неверно')
// }

// let number;
// let data = true;
// data === true ? number = 2 : number = 3;
// console.log(number);

// switch (prompt('когда вы хотите придти в магазин?')) {
//     case '23':
//         alert('В это время мы не работаем!');
//         break;
//     case '24':
//         alert('В это время мы не работаем!');
//         break;
//     case '1':
//         alert('В это время мы не работаем!');
//         break;
//     case '2':
//         alert('В это время мы не работаем!');
//         break;
//     case '3':
//         alert('В это время мы не работаем!');
//         break;
//     case '4':
//         alert('В это время мы не работаем!');
//         break;
//     case '5':
//         alert('В это время мы не работаем!');
//         break;
//     case '6':
//         alert('В это время мы не работаем!');
//         break;
//     case '7':
//         alert('В это время мы не работаем!');
//         break;
//     case '8':
//         alert('В это время мы не работаем!');
//         break;
//             case '9':
//                 alert('Будем рады вас видеть!');
//                 break;
//             case '10':
//                 alert('Будем рады вас видеть!');
//                 break;
//             case '11':
//                 alert('Будем рады вас видеть!');
//                 break;
//         case '12':
//             alert('У нас обед!');
//             break;
//         case '13':
//             alert('Так же рады вас видеть!');
//             break;
//         case '14':
//             alert('Так же рады вас видеть!');
//             break;
//         case '15':
//             alert('Так же рады вас видеть!');
//             break;
//         case '16':
//             alert('Так же рады вас видеть!');
//             break;
//         case '17':
//             alert('Так же рады вас видеть!');
//             break;
//         case '18':
//             alert('Так же рады вас видеть!');
//             break;
//         case '19':
//             alert('Так же рады вас видеть!');
//             break;
//         case '20':
//             alert('Так же рады вас видеть!');
//             break;
//         case '21':
//             alert('Так же рады вас видеть!');
//             break;
//         case '22':
//             alert('Так же рады вас видеть!');
//             break;
//     }


// const task1 = (val) => {
//     return `${val} typeof ${typeof val}`
// };
// console.log(task1(1));
// console.log(task1(true));


// const task2 = (num) => {
//     // return Math.pow(num,2)
//     return num ** 2
// };
// console.log(task2(3));
// console.log(task2(5));

// const task3 = (a,b,c) => {
//     let arr = [];
//
//     for (let i = 0; i < a.length || b.length || c.length; i++) {
//        arr = [...arr, a[i],b[i],c[i]]
//     }
//     return arr.join('')
// };

// const task4 = (a) => {
//     let arr = [];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === a[i].toUpperCase()) {
//          arr = [...arr, a[i]]
//         }
//     }
//     return arr.join('')
// };
// console.log(task4('Сергей Семёнов'));
// console.log(task4('Анастасия Черданцева'));

// const task5 = (name, city, region) => {
//     return `привет ${name} добро пожаловать ${city}, ${region}`
// };
// console.log(task5(['Дмитрий', 'Серебров'], 'Ишим', 'Тюменская обл'));

// const task6 = (num) => {
//     if (num < 0) {
//         return 'Negative'
//     } else if (num > 0) {
//         return 'Positive'
//     } return 'zero'
// };
// console.log(task6(-1));


// function task7(str) {
//   str = str.split('');
//   for (let i = 0; i < str.length; i++) {
//     str[i] === str[i].toUpperCase() ? str[i] = str[i].toLowerCase() : str[i] = str[i].toUpperCase()
//   }
//   return str.join('')
// }
// console.log(task7('hello world'));
// console.log(task7('HELLO WORLD'));
// console.log(task7('HeLLo WoRLD'));


// const task8 = (obj) => {
//     return obj.id
// };
// console.log(task8({id: 10}));
// console.log(task8({id: true}));

// const task9 = (obj) => {
//     return obj.name.length % 2 === 0 ? 0 : 1
// };
// console.log(task9({name: 'alpha'}));


// const task10 = (num1, num2) => {
//     return num1 > num2 ? 1 : num1 < num2 ? -1 : 0
// };
// console.log(task10(5,5));

// function mrYoda(num) {
//     return num % 3 === 0 && num % 5 === 0 ? 'MasterYoda': num % 3 === 0 ?
//                 'Master': num % 5 === 0 ? 'Yoda' : num
// }
//
// console.log(mrYoda(15));


//переборы

// const task1 = (arr) => {
//     return arr.map((item) => {
//         return item * 2
//     })
// };
// console.log(task1([1, 2, 3]));
// console.log(task1([4, 1, 1, 1, 4]));

// const task2 = (arr) => {
//     return arr.filter((item, idx) => {
//         return idx % 2 === 0
//     })
// };
// console.log(task2(['Привет', 'Пока', 'Снова привет']));
// console.log(task2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(task2(['Пока', {'Цвет': 'Синий'}]));

// const task3 = (arr) => {
//     return arr.map((item, idx) => {
//         return ~item +1
//     })
// };
// console.log(task3([1, 2, 3, 4, 5]));
// console.log(task3([1, -2, 3, -4, 5]));

// const task4 = (arr, num) => {
//     let newArr = [];
//     return arr.filter((item, idx) => {
//         return idx < num
//     })
// };
// console.log(task4([0, 1, 2, 3, 5, 8, 13], 3));
// console.log(task4([0, 1, 2, 3, 5, 8, 13], 5));

// const task5 = (arr) => {
//     return arr.filter((item, idx) => {
//         return item % idx === 0
//     })
// };
// console.log(task5([22, -6, 32, 82, 9, 25]));
// console.log(task5([68, -1, 1, -7, 10, 10]));

// const task6 = (arr) => {
//     return arr.map((item) => {
//         return typeof item === 'string' ? item = 'null' : item
//     })
// };
// console.log(task6([4, 6, 'Ivan', 5, 'Denis '] ));

// const task7 = (arr) => {
//     return arr.filter((item) => {
//         return item.length <= 5
//     })
// };
// console.log(task7(['Евдоким','Ivan', 'Игнат', 'Denis'] ));

// const task8 = (arr) => {
//     return arr.map((item) => {
//         return Math.pow(item, 3)
//     }).map(item => item % 3 === 0 && item % 5 === 0 ? item = 0 : item)
//
// };
// console.log(task8([7, 8, 15, 30, 2] ));

// const task9 = (arr) => {
//     return arr.map((item, idx) => {
//         return item.length
//     })
// };
// console.log(task9(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'] ));

// const task10 = (arr) => {
//     return arr.map(item => {
//         return `<div>${item}</div>`
//     })
// };
// console.log(task10([1, 2, 3, 4, 5 ] ));

// const task11 = (arr) => {
//     return arr.filter(item => {
//         return item.length % 2 === 0
//     })
// };
// console.log(task11(['ab', 'abc', 'abcd']));



// const task = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec * 2]
//     }, [])
// };
// console.log(task([1, 2, 3]));

// const task = (arr) => {
//     return arr.reduce((acc, rec, idx) => {
//         if (idx % 2 === 0) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// };
// console.log(task(['Привет', 'Пока', 'Снова привет']));

// const task = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec === 0) {
//             return [...acc, rec]
//         }
//         return [...acc, -rec]
//     }, [])
// };
// console.log(task([1, 2, 3, 4, 5]));
// console.log(task([-1 ,2, -3, 4, 0, -5]));

// const task = (arr, num) => {
//     return arr.reduce((acc, rec) => {
//         if (rec < 3) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// };
// console.log(task([0, 1, 2, 3, 5, 8, 13], 3));

// const task = () => {
//     return
// };
// console.log(task());

// const task = (arr) => {
//     return arr.reduce((acc, rec, idx) => {
//         if (rec % idx === 0) {
//             return [...acc, rec]
//         } return acc
//     }, [])
// };
// console.log(task([22, -6, 32, 82, 9, 25]));

// const task = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (typeof rec === "string") {
//             return [...acc, null]
//         } return [...acc, rec]
//     }, [])
// };
// console.log(task([4, 6, 'Ivan', 5, 'Denis']));

// const task = (arr) => {
//     return arr.reduce((acc, rec, idx) => {
//         if (rec % 3 === 0 && rec % 5 === 0) {
//             return [...acc, 0]
//         } return [...acc, Math.pow(rec, 3)]
//     }, [])
// };
// console.log(task([7, 8, 15, 30, 2]));

// const task = (arr) => {
//     return arr.reduce((acc, rec, idx) => {
//         return [...acc, rec.length]
//     }, [])
// };
// console.log(task(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень'] ));

// const task = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, `<div>${rec}</div>`]
//     }, [])
// };
// console.log(task([1, 2, 3, 4, 5 ]));

// const task = (arr) => {
//     return arr.reduce((acc, rec, idx) => {
//         if (rec.length % 2 === 0 ) {
//             return [...acc, rec]
//         } return acc
//     }, [])
// };
// console.log(task(['ab', 'abc', 'abcd']));



// const task = (arr1, arr2) => {
//     return arr1.reduce((acc, rec, idx) => {
//         return [...acc, rec + arr2[idx]]
//     }, [])
// };
// console.log(task([2,4],[1,3]));

// const task = (arr1, arr2) => {
//     return arr1.reduce((acc, rec) => {
//         for (let i of arr2) {
//             if (i === rec) {
//                 return [...acc, rec]
//             }
//         }
//         return acc
//     }, [])
// };
// console.log(task([1,2,3,4,5], [1,12,3,8,5]));
// console.log(task([7,14,14], [14,28]));

const task = (arr) => {
    return arr.reduce((acc, rec, idx) => {
        
    }, {})
};
console.log(task([{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]));






// let h1 = document.querySelector('#name');
// console.log(h1);
// h1.className = 'subtitle';
// h1.className += ' subtitle';
// h1.classList.add('subtitle');
// h1.classList.remove('title');
// h1.classList.replace('title', 'second')
// h1.classList.toggle('title');
// console.log(h1.classList.contains('title'));
// let div = document.querySelector('.content');
// div.style.cssText = 'background: red; width:200px; height:200px;';
// console.log(h1.attributes);
// console.log(h1.getAttribute('data-test-class'));
// console.log(h1.dataset.testClass);
// h1.setAttribute('id', 'main');
// h1.removeAttribute('class');
// h1.getAttribute('');
























//1
// const getFirstEl = () => {
//     let li = document.querySelector('li');
//     return li.textContent
// };
// console.log(getFirstEl());

//2
// const arrLi = () => {
//   let li = document.querySelectorAll('li');
//     return Array.from(li)
// };
// console.log(arrLi());

//3
// const arrText = () => {
//   let li = document.querySelectorAll('.list-item');
//   return Array.from(li).map(item => item.textContent)
// };
// console.log(arrText());

//4
// const arrAtr = () => {
//     let li = document.querySelectorAll('.list-item');
//     return Array.from(li).map(item => item.getAttribute('class'))
// };
// console.log(arrAtr());

//5
// const dataGet = () => {
//     let li = document.querySelectorAll('.list-item');
//     return Array.from(li).map(item => item.dataset.testId)
// };
// console.log(dataGet());

//6
// const getCol = () => {
//     let li = document.querySelectorAll('.list-item');
//     return Array.from(li).filter(item => {
//         return !item.className.includes(item.textContent)
//     }).map(item => {
//         return item.dataset.testId
//     })
// };
// console.log(getCol());

//7
// const getArr = () => {
//     let li = document.querySelectorAll('.list-item');
//     return Array.from(li).forEach((item, idx) => {
//          item.textContent = `${item.dataset.testId} ${item.textContent}`
//     })
// };
// console.log(getArr());

//8
// const delEl = () => {
//     let li = document.querySelectorAll('.list-item');
//     return Array.from(li).forEach(item => {
//         if (!item.className.includes(item.textContent)) {
//             item.remove()
//         }
//     })
// };
// console.log(delEl());

//9
// const changeContent = () => {
//   let changeId = document.querySelector('#secret-login');
//   changeId.value = 'You were hacked'
// };
// console.log(changeContent());

//10
// const iAmHack = () => {
//     let hack = document.querySelector('#button-send');
//     // let hack2 = document.querySelector('#secret-login');
//     let hack2 = document.querySelector('#test-screen');
//     hack.addEventListener('click', (e) => {
//         hack2.textContent = 'you was hacked'
//     })
// };
// console.log(iAmHack());

//11
// const addEl = () => {
//     let newDiv = document.createElement('div');
//     let divEl = document.querySelector('#append-div');
//     newDiv.textContent = 'Hello';
//     newDiv.setAttribute('id', 'just-text');
//     divEl.prepend(newDiv)
// };
// console.log(addEl());

//12
// const addLi = () => {
//     let divEl = document.querySelector('#append-div');
//     let addUl = document.createElement('ul');
//     addUl.setAttribute('id','list');
//     divEl.prepend(addUl);
//     for (let i = 1; i <= 10; i++) {
//         let newLi = document.createElement('li');
//         addUl.append(newLi);
//         newLi.textContent = `child${i}`
//     }
// };
// console.log(addLi());









