// объекты

// let person = { // Начало блока кода
//     name : 'Nurs', // ключ : значением может быть, любой тип данных
//     age : 22,
//     skills : 'Front-end Dev',
//     'first name' : 'Nurs', // если ключ состоит из двух или более слов то пишем в ковычках ввиде строки
// }; // конец блока кода
// console.log(person);
// console.log(person.skills); // для получения свойство ключа
// console.log(person['first name']); // если мой ключ состоит из двух и более значений,
// // чтобы получить его значение пишем в квадратных скобках и в кавычках

// let car = {
//     model : 'BMW',
//     color : 'black',
//     year : 2022,
//     price : 200,
//     wheels : {
//         left : true,
//         right : false
//     }
// };
// // car.wheels.right = true;
// car.price += 400;
// delete car.year; // для удаления ключа но использовать не будем !!!
// Object.freeze(car); // не позволяет  объекту изменять свои данные
// Object.freeze(car.wheels);
// console.log(car);
// car.wheels.right = !car.wheels.right;

//
//
// let asd = 12;
// console.log(!!asd); // при написании !! перед каким либо значением получаем его логическое значение
// // если ! то получаем противоположное логическое значение
//
// const car = { // const можем изменить ключ но не имя
//     model: 'BMW',
//     color: 'black',
//     year: 2022,
//     price: 200,
//     wheels: {
//         left: true,
//         right: false
//     }
// };
// car.price = 300;
// console.log(car);

// let car = {
//     model: 'BMW',
//     color: 'black',
//     year: 2022,
//     price: 200,
//     wheels : {
//         right : false,
//         left : true
//     }
//     };
// // let car2 = car;
// let car2 = {...car}; // spread operator - означает возьми все из car
// car2.price = 300;
// car2.engine = 5.0;
// car2.wheels.right = !car2.wheels.right;
// console.log('машина первая >>>' , car);
// console.log('машина вторая >>>',  car2);

// let car = {
//     model: 'BMW',
//     color: 'black',
//     year: 2022,
//     price: 200,
//     wheels : {
//         right : false,
//         left : true
//     }
// };
// let car2 = Object.assign({engine : 5.0}, car);
//
// car2.price = 500;
// car2.wheels.right = !car2.wheels.right;
// console.log(car);
// console.log(car2);

// JSON Object
// let car = {
//     model: 'BMW',
//     color: 'black',
//     year: 2022,
//     price: 200,
//     wheels : {
//         right : false,
//         left : true
//     }
// };
// let car2 = JSON.parse(JSON.stringify(car));
// car2.wheels.right = !car2.wheels.right;
// console.log(car);
// console.log(car2);



// console.log(JSON.stringify(car)); // перевод моего объекта в JSON cтроку
//
// let str = '{"model":"BMW","color":"black","year":2022,"price":200,"wheels":{"right":false,"left":true}}';
//
// console.log(JSON.parse(str)); // Перевод JSON строки в объект

// Массивы

// let fruits = [100, 200, 'apple', 'banana', true, false, {}];
// // console.log(fruits[5]);
// // console.log(fruits.length);
// // console.log(typeof fruits);
// console.log(Array.isArray(fruits)); // чтобы понять какой тип у нашего массива пишем ARRAY!
// console.log(fruits[fruits.length - 1]); // узнать какой элемент является последним
// let obj = {};
// let obj2 = {};
// console.log(obj === obj2); // объекты никогда не равны!!! потому-что у них разные месторасположения!!! порядковый номер!

// let arr = [];
// let arr2 = [];
// console.log(arr === arr2); // массивы так же не равняются друг другу, так как у них так же разные месторасположения!!!
// // а так же пустой объект и массив является логическим значением true

// let fruits = ['apple', 'banana', 'peach', 'pear', 'orange'];
// //console.log(fruits[4]);
// // console.log(fruits[Math.floor(fruits.length / 2) ]); // eсли мы хотим получить среднее значение в массиве пишем это!
// // fruits[5] = 'pineApple';
// // fruits = [...fruits, 'cococ', 'WaterMelon', 'pineApple']; // здесь мы взяли все как у fruits и добавили 3 слова !!!
// // console.log(fruits);
// let fruits2 =  ['cococ', 'WaterMelon', 'pineApple'];
// // let fruits3 = fruits + fruits2; // если мы ставим + то наши элементы автоматически переводятся в строчный тип
// let fruits3 = [...fruits, ...fruits2]; // а здесь мы использовали spread operator, чтобы наши элементы были как массив!
// console.log(fruits3);
// let fruits = ['apple', 'banana', 'peach', 'pear', 'orange'];
// fruits.push('WaterMelon'); // здесь мы добавили в конец массива 'WaterMelon' через push
// fruits.pop(); // здесь мы извлекли последний последний элемент из массива, через pop
// fruits.shift(); // здесь мы удалили первый элемент из массива, через shift
// fruits.unshift('WaterMelon'); // здесь мы добавили эдемент в начало массива, через unshift
// console.log(fruits);

// let car = {
//     model: 'BMW',
//     color: 'black',
//     year: 2022,
//     price: 200,
//     wheels : {
//         right : false,
//         left : true
//     }
// };
// console.log('объект >>>', car);
// console.log(Object.keys(car)); // здесь мы получили массив из ключей объекта , через Object.keys
// console.log(Object.values(car)); // здесь мы получили массив из значений ключа объекта, через Object.values
// console.log(Object.entries(car)); // здесь мы получили массив из массивов которые хранят по два значения это ключ и значение, через object.entries

//


