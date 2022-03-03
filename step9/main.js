// reduce

// const task1 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec * 2]
//     }, [])
// };
// console.log(task1([1, 2, 3]));

// const task2 = (arr) => {
//     return arr.reduce((acc, rec, idx) => {
//         if (idx % 2 === 0) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// };
// console.log(task2(['Привет', 'Пока', 'Снова привет']));

// const task3 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc,~rec +1]
//     }, [])
// };
// console.log(task3([1, 2, 3, 4, 5,]));

// const task4 = (arr, num) => {
//     return arr.reduce((acc, rec, idx) => {
//         if (idx < num) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// };
// console.log(task4([0, 1, 2, 3, 5, 8, 13], 3));
// console.log(task4([0, 1, 2, 3, 5, 8, 13], 5));

// const task5 = (arr) => {
//     return arr.reduce((acc, rec, idx) => {
//         if (rec % idx === 0) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// };
// console.log(task5([22, -6, 32, 82, 9, 25]));
// console.log(task5([68, -1, 1, -7, 10, 10]));

// const task6 = (arr) => {
//     return arr.reduce((acc, rec, idx) => {
//         if (typeof rec === 'string') {
//             return [...acc, rec = null]
//         } if (typeof rec === "number") {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// };
// console.log(task6([4, 6, 'Ivan', 5, 'Denis'] ));

// const  task7 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec.length <= 5) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// };
// console.log(task7(['Евдоким','Ivan', 'Игнат', 'Denis']));

// const task8 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if (rec % 3 === 0 && rec % 5 === 0) {
//             return [...acc, 0]
//         }
//         return [...acc, rec ** 3]
//     },[])
// };
// console.log(task8([7, 8, 15, 30, 2]));

// const task9 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, rec.length]
//     }, [])
// };
// console.log(task9(['Термос', 'Ураган', 'Земля', 'Комбо', 'Корень']));

// const task10 = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return [...acc, `<div>${rec}</div>`]
//     }, [])
// };
// console.log(task10([1, 2, 3, 4, 5 ]));

// const task11 = (arr) => {
//     return arr.reduce((acc,rec, idx) => {
//         if (rec.length % 2 === 0) {
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// };
// console.log(task11(['ab', 'abc', 'abcd']));

// const task1 = (arr1, arr2) => {
//
// };
// console.log(task1([2,3], [1,4]));


// ***
// const task = (arr1, arr2) => {
//     return arr1.reduce((acc, rec, idx) => {
//         if (rec === arr2[idx]){
//             return [...acc, rec]
//         }
//         return acc
//     }, [])
// };
// console.log(task([1,2,3,4,5], [1,12,3,8,5]));
// const task = (arr) => {
//     return arr.reduce((acc, rec) => {
//         return {...acc, [rec.token] : rec}
//     }, {})
// };
// console.log(task([{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]));

// const task = (arr) => {
//     return arr.reduce((acc, rec) => {
//         if(acc[rec]){
//             acc[rec]++
//         }else{
//             acc[rec] = 1;
//         }
//         return acc
//
//     }, {})
// };
// console.log(task( ['a','b', 'aa']));

// const task = (arr1) => {
//     return arr1.reduce((acc, rec) => {
//         return [...acc, ...rec]
//     }, [])
// };
// console.log(task([['ab','abc'],['abcd']]));

// const task = (obj) => {
//     return Object.entries(obj)
// };
// console.log(task({a:1,b:2}));