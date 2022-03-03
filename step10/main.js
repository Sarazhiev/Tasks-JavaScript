// Рекурсия ***********

// Рекурсивная функция - Это функция которая вызывает саму себя, до окончания памяти
// В рекурсии есть главное условие - Это условие выхода рекурсии - с помощью return
// Рекурсия работает, на много быстрей, чем цикл!!!

// const task = () => { // наша стрелочная функция.
//     console.log('Hello'); // в консоль просим выдать, рекурсию, то есть очень много
//     task() // рекурсия будет работать , если мы напишем ее внутри нашей функции. а так же снаружи.
// };
// task(); // снаружи

// let i = 0;
// const task = () => {
//     if (i === 4000) {
//         console.log('Завершение!!!');  // < мы задали в условии, если наш i равен 4000 то остановись, и дай завершение!!!
//         return 'Завершение'// Return стерает весь код, который ниже. То есть останавливается, при заданном условии!!!
//     }
//     i++;  // инкремент
//     console.log(i);
//     task()
// };
//
// task();


// Каррирование ***

// Каррирование - это когда функция принимает более одного параметра и которую мы делим
// на группу функции которые принимают по 1 параметру и каждая функция возвращает другую в виде анонимной функции

// const task = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c   // это у нас каррирование, оно работает. Но так писать не грамотно !!!
//         }
//     }
// };
// console.log(task(5)(10)(7));

// const task = (a) => {  //создали функцию стрелочную здесь параметр а
//     return (b) => { // создали анонимную функцию параметр b
//         return (c) => { // создали анонимную функцию параметр c
//             return a + b + c     // а это уже правильное, грамотное разделение функции!!!
//         }
//     }
// };
// const task2 = task(5);   // а здесь присвоили наши значения на 3 параметра // как раз таки это и является у нас Коррированием!!!
// const task3 = task2(10);
// console.log(task3(7));

// const task = (a, b) => {
//     return a + b
// };
// console.log(task('https://google.com/', 'signin'));
// console.log(task('https://google.com/', 'signup'));
// console.log(task('https://google.com/', 'news'));
// console.log(task('https://google.com/', 'catalog'));

// const task = (domen) => {
//     return (page) => {
//         return domen + page
//     }
// };
// const task2 = task('https://google.com/');
// console.log(task2('signin'));
// console.log(task2('signup'));
// console.log(task2('news'));
// console.log(task2('catalog'));


//Замыкание ******

//Замыкание - это функция(внутр) внутри другой функции (главная) которая ее возвращает
// и наша внутр функция получает доступ ко всем параметрам и переменным главной функции

// const task = (a) => {
//     let num = 5;
//     return (b) => {
//         return a + b + num
//     }
// };
// console.log(task(5));

//ES - 6 Syntax - Ecma Script  - Это стандарт, новинки правила, как что будет писаться

// Spread Operator - замена конкат [...arr, 1], {...obj, name : 'Max'}
//Шаблонная строка = ` Меня зовут ${name}`
// Ленивая инициализация - Когда я могу задать значение в параметре функции сразу!!!

// const task = (a, b = 3) => {  // ленивая инициализация , может дать значение по дефолту!!!
//     return a + b
// };
// console.log(task(1));

//Short Hand - работа с объектом, тоесть когда мой ключ принимает значение в виде JavaScript выражение
//и если ключ и значение одного слова, то есть одинаковые,  то можем писать просто значением

// let name = 'Max';
// let obj = {
//   age: 23,
//   name: name,     // Short Hand !!! если одинаковые, то можем писать просто значение
//     react: true
// };
// console.log(obj);

// const task = (age, name, react) => {
//     return {age, name, react}  // Short Hand !!! если одинаковые, то можем писать просто значение
// };
// console.log(task(23,'Max', true));

//Деструктуризация = выводд отдельного ключа в объекте, в отдельную переменную

// let obj = {
//   name: 'Max',
//   age: 23,
//   react: true
// };
//
// // let name = obj.name;
// // let age = obj.age;
// // let react = obj.react;
//
// const {name, age, react} = obj; // Это у нас Деструктуризация !!!  можно вытащить наши значения в отдельные переменные!
//
// console.log(name);
// console.log(age);
// console.log(react);

// let arr = ['Ivan', 'Kewa', 'Nurs'];

// const [first, second, third] = arr;   // Это деструктуризация в массиве, можно получить наши значения в отдельных переменных!!!
// работает по их индексу, то есть порядку!!

// console.log(first, second, third);

// Rest Operator - пишем как spread... - Принимает в параметрах функции и является последним,
// то есть это означает что это все остальное и это у нас массив

// const task = (a, b, ...other) => {  // это у нас Rest Operator !! берет остальные значения!!! а так же получаем массив внутри параметров!!!
//     return other
// };
// console.log(task(1, 2, 3, 4, 5, 10 , 20));

// let obj = {
//   name: 'Max',
//   age: 23,
//   react: true
// };
//
// const {name, ...other} = obj;  // а здесь у нас так же Rest Operator, но когда мы используем в объекте получаем объект!!!
// console.log(name);
// console.log(other);

// let arr = ['Nurs', 'Akdil', 'Max'];
//
// const [first, ...other] = arr;       // когда мы используем Rest Operator с массивом получаем массив!!!
//
// console.log(first);
// console.log(other);
