//alert(250);
// алерт это готовая функция, которая вызывает при определенных обстоятельствах  всплывающее окно

// prompt('сколько тебе лет?','150');
//Всплывающее окно  с вопросом и полем ввода, так же я могу дать значение по умолчанию;

// confirm('ты точно хочешь выйти?');
//всплывающее окно с вопросом на подтвержение

// console.log('Nurs');
//функция для примерного отображения значений в консоли разработчика

// var переменная устаревшая, имеет много ошибок - категорически не используем!!

// let car ="Mercedes-Benz";// простое создание переменной, можно изменить сколько угодно раз
// console.log(car);

// const model = '570';  //не изменяемая переменная
// console.log(model);

// let mercedesBenz при названии переменной, нельзя использовать спец символы кроме $ и _
// а так же можно использовать цифры но первый сивмол должен быть буквой или спец символ
//нельзя ставить пробелы, лучше всегда писать через camelCase
//нельзя называть словами которое уже зарезервированны командами

// let type1 = undefined; //type undefined не определено
// let type2 = 'Nurs Sarazhiev'; //type string - записывается внутри ковычек
// let type3 = 100.123; //type number - любое число
// let type4 = null; // type null - пустое значение
// let type5 = true; // type boolean - логическое значение true/false
// let type6 =  {}; //type object - набор данных
//
// // typeOf - //Определение тип данных элемента
// console.log(typeof (type1)); //возвращает тип данных в виде строки
// console.log(typeof type2);
// console.log(typeof type3);
// console.log(typeof type4);
// console.log(typeof type5);
// console.log(typeof type6);

// Операторы сравнения
// let num1 ='10';
// let num2 = 10;

// console.log((num1 == num2)); сравнение на равенство с приведение в один тип данных
// console.log((num1 === num2)); строгое сравнение на равенсто
// console.log(num1 != num2); // сравнение на неравенство с приведение в один тип данных
// console.log(num1 !== num2); строгое сравнение на неравенсто

// let num1 = 10;
// let num2 = 5;
// console.log(num1 > num2); //оператор больше
// console.log(num1 < num2); //оператор меньше
// console.log(num1 >= num2); //оператор больше либо равно
// console.log(num1 <= num2); //оператор меньше либо равно

// console.log(num1 + num2);  // сложение
// console.log(num1 - num2); // вычетание
// console.log(num1 * num2); // умножение
// console.log(num1 / num2); // деление
// console.log(num1 ** num2); // возделение в степень
// console.log(num1 % num2); // получение остатка
// let num1 = 5;
// let num2 = 'a';
// console.log(num1 - num2); // NaN - Not a Number
// console.log(num1 + num2); // конкатенация

// let num1 = 5;
// let num2 = 'a';
// let result = num1 - num2;
//
// let num3 = '20';
// console.log(+num3); // Унарный оператор - позволяет из строки с числовым значением получить число
//
// console.log(isNaN('20')); // Функция isNaN возводит наше значение в числовой тип данных
// // если ответ NaN то получаем true, если число то false
// console.log(isFinite('Ivan')); // Обратная функция isNaN

// let a = 6 / 'a'
// console.log(isNaN(a))

// let num1 = 5;
// // num1 = num1 + 10;
// num1 += 10;
// console.log(num1);

// let num1 = 5;
// let num2 = 0;
// console.log(num1 / num2);
//
// let name = prompt('EnterName');
// alert(name);
