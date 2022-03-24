// setTimeout(() => {
//     console.log('hello')
// }, 5000);
// let i = 0;
// let time = setInterval(() => {
//     i++;
//     console.log('hellow world!!!');
//     if (i === 5) {
//         clearInterval(time);
//     }
// }, 1000);

//
// let btn = document.querySelector('.btn');
// let count = document.querySelector('.count');
// let stop = document.querySelector('.stop');
// let reset = document.querySelector('.reset');
// let list = document.querySelector('.list');
// let interval = document.querySelector('.interval');
// let i = 0;
// let j = 0;
//
// btn.addEventListener('click', () => {
//     let timer = setInterval(() => {
//         count.textContent = `${j < 10 ? '0' + j : j}:${i  < 10 ? '0' + i : i}`;
//         i++;
//         if (i === 60) {
//             j++;
//            count.textContent = `${j < 10 ? '0' + j : j}${i < 10 ? '0' + i : i}`;
//             i = 0
//         }
//         stop.addEventListener('click',() => {
//             clearInterval(timer)
//         });
//         reset.addEventListener('click', () => {
//             clearInterval(timer);
//             i = 0;
//             j = 0;
//             count.textContent = '00:00';
//             list.innerHTML = ''
//         })
//     }, 100);
//
// });
// interval.addEventListener('click', () => {
//     list.innerHTML += `<li>${count.textContent}</li>`
// });

// let now = new Date();
// console.log(now.getFullYear()); //получить год
// console.log(now.getMonth()); //получить месяц
// console.log(now.getDay()); //получить день
// console.log(now.getDate()); //получить дату
// console.log(now.getHours()); //получить часы
// console.log(now.getMinutes()); //получить минуты
// console.log(now.getSeconds()); //получить секунды
// console.log(now.getMilliseconds()); //получить мили-секунды
// console.log(now.getTimezoneOffset()); //получить разницу в минутах от uts
// console.log(now.getTime());    // получить время по uts с 1970 года 1 января
//
// let now = new Date();  // получили сколько прошло в мили-секундах
// let birthday = '2000-02-25'; // получили дату, откуда пойдет отсчет
// let different = now - Date.parse(birthday); // создали новую переменную, и отминусовали нашу дату в милисекундах и откуда пойдет отсчет
// console.log(different);
// console.log(different / 1000); // разделили мили-секунды
// console.log(different / 1000 / 60); // разделили секунды
// console.log(different / 1000 / 60 / 60); // разделили минуты
// console.log(different / 1000 / 60 / 60 / 24); // разделили часы
// console.log(different / 1000 / 60 / 60 / 24 / 365); // разделили дни



