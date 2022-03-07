//Колл бэк Функция           ****** Нужно запомнить, будем использовать часто! ********


// const task1 = (num, callback) => { //стрелочная функция!!! ****
//     return callback(num, 10)
// };
// console.log(task1(1, (a, b) => { // это callback function. функция обратоного вызова!!! можем вызывать прям внутри с помощью строчной функции
//     return a + b
// }));


//map  перебирает наш массив, работает как цикл          ****************

// let fruits = ['banana', 'apple', 'peach', 'orange']; // здесь мы создали массив
// fruits = fruits.map((item,idx, array) => { // здесь мы присвоили к массиву map переберающию функцию, а так же у map есть -
//     // 3 свойства. первое item это значение нашего массива( то есть то что есть в нем. в нашем случае это apple banana и тд) второе это idx это
//     // индекс, тоесть его место 0 1 2 3 . и третье это сам наш массив[fruits]
//     return item + 1 //здесь мы прибавили к нашим фруктам = 1
// });
// console.log(fruits);

// let arr = [1,2, true, false]; // массив
// arr = arr.map((item) => { // перевели в map и создали item
//    if (typeof item === 'number') { // проверили если typeof равен number то дай hello!
//        return 'Hello'
//    }
//    return item // если не писать 'иначе' то boolean значение не покажутся, то есть будет undefined ***
// });
// console.log(arr);

// const task1 = (arr) => {
//     return arr.map((item, idx) => {
//         if (typeof item === 'boolean') {
//             return idx
//         }
//         return item
//     })
// };
// console.log(task1([1,2,true,false]));

//filter ******

// const filterMethod = (arr) => {
//     return arr.filter((item, idx, array) => {
//         return typeof item === 'string'
//     })
//
// };
// console.log(filterMethod(['ivan', 'kolyan', 'vova', 10, 12, 23]));


// const filterMethod = (arr) => {
//     return arr.filter((item) => {
//         return item > 5
//     })
//
// };
// console.log(filterMethod([5,4,3, 2, 11, 100, 10, 12, 23]));

// Find перебирает массив, выводит то что просим и все остонавливается!      **************

// const findMethod = (arr) => {
//     return arr.find((item, idx) => {
//         return item > 9     // здесь попросили больше 10, он сразу вывел нам 10 и все. остановился!! *******
//     })
// };
// console.log(findMethod([1,2,3,4,5,6,7,8,9,10,20,30]));

// Findindex тоже самое как find но выдает индекс то есть, его место

// const findMethod = (arr) => {
//     return arr.findIndex((item, idx) => {
//         return item > 9     // здесь попросили больше 9, он сразу вывел нам 10 и все. остановился!! *******
//     })
// };
// console.log(findMethod([1,2,3,4,5,6,7,8,9,10,20,30]));    // здесь он даст 9 потому что место индекса у него 9!!***

//sort    сортирует наш массив

// const sortMethod = (arr) => {
//     return arr.sort((a,b) => {
//         return a - b  // сортирует правильно если наш массив состоит из цифр
//     })
// };
// console.log(sortMethod([1,2,3,10,20,50,100,200]));

// const sortMethod = (arr) => {
//     return arr.sort((a,b) => {
//         if (a > b) {  //сортирует правильно если наш массив состоит из букв!! ****
//             return 1
//         }
//         if (a < b) {
//             return -1
//         }
//         return 0
//     })
// };
// console.log(sortMethod(['ivan', 'alex', 'max', 'nurs']));

// const task1 = (arr) => {
//     return arr.map((item) => {
//         return item * 3
//     }).filter((el) => {
//         return el % 2 === 0
//     }).map((item, idx) => {
//         return idx
//     })
// };
// console.log(task1([2, 1, 3, 4, 10, 20]));

// just tasks:
// const task1 = (arr1,arr2) => {
//     return arr1.map((item, idx) => {
//         return item + arr2[idx]
//     })
// };
// console.log(task1([2,1], [1,4]));

// const task2 = (arr) => {
//     return arr.map((item, idx) => {
//         return item * 2
//     })
// };
// console.log(task2([2,3,4,1,5]));
// const task3 = arr => arr.map(item => item['id']);
//
// console.log(task3([{id: '100'}, {id: 5}, {id: true}, {id: undefined}]));

// const task4 = (arr) => {
//     return arr.map((item) => {
//         return `<div>${item}</div>`
//     })
// };
// console.log(task4([1,2]));

// const task5 = (arr) => {
//     return arr.filter((item) => {
//         return item.length % 2 === 0
//     })
// };
// console.log(task5(['ab', 'abc', 'abcd']));

// const task6 = (arr) => {
//     return arr.filter((item) => {
//         if (item % 10 === 0) {
//             return item * 2
//         }
//     })
// };
// console.log(task6([1,2,3,7,4,5,10,20]));

// const task7 = (arr) => {
//     return arr.filter((item) => {
//         if (item === true) {
//             return item
//         }
//     })
// };
// console.log(task7([true, false,true, false, false]));

// const task = (arr) => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }
//     return result
// };
// console.log(task([1,2,3,4,5,]));

// const task = (arr) => {
//     let result = 0;
//     arr.map((item) => {
//          result += item
//     })
//     return result
// };
// console.log(task([1,2,3,4,5]));

// const task = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return acc + rec
//     }, 0)
// };
// console.log(task([1,2,3,4,5]));
//
// acc = 0; rec = 1;
// return = 0 + 1 = 1 = acc;
//
// acc = 1; rec = 2;
// return = 1+2 = 3 = acc;
//
// acc = 3; rec = 3;
// return 3 + 3 = 6 = acc;
//
// acc = 6; rec = 4;
// return 6 + 4 = 10 = acc;
//
// acc = 10; rec = 5;
// return 10 + 5 = 15 = acc;

// const task = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec + 2]
//     }, [])
// };
// console.log(task([5,5,6,6]));
//
// acc = []; rec = 5;
// return [...[], 5 + 2] = [7] = acc;
//
// acc = [7]; rec = 5;
// return [...[7], 5 + 2] = [7,7] = acc;
//
// acc = [7,7]; rec = rec = 6;
// return [... [7,7], 6 + 2] = [7,7,8] = acc;
//
// acc = [7,7,8]; rec = 6;
// return [...[7,7,8], 6 + 2] = [7,7,8,8] = acc;

// const task = (obj) => {
//     return Object.keys(obj).reduce((acc, rec) => {
//         if (typeof obj[rec] === 'string') {
//             return {...acc, [rec] : obj[rec]}
//         }
//         return acc
//     }, {})
// };
// console.log(task({name: 'Pilot', isActive: true, task: 'first' }));
//
// obj[rec] = 'pilot';                 // значение нашего ключа
// acc = {};                            // наш аккамулятор
// rec = name;              // наш ключ
// typeof 'pilot' === 'string' = true;     // проверяем тип нашего зачения
// return {...{}, name: 'pilot'} = {name: 'pilot'} = acc; // берем все из объекта
//
// obj[rec] = true;
// acc = {name: 'pilot'};
// rec = 'isActive';
// typeof true === 'string' = false;
// return {name: 'pilot'}
//
// obj[rec] = 'first';
// acc = {name: 'pilot'};
// rec = 'task';
// typeof 'first' === 'string' = true;
// return  {...name: 'pilot', task: 'first'}; = {name: 'pilot', task: 'first'} = acc;