// promise


//у промиса есть 3 статуса = pending(ожидание), fulfilled(resolve) and rejected(reject)
// используем при отправке запросов, он у нас асинхронный
//promise = объект. принимает в себя коллбэк функцию, принимает в себя 2 значения - resolve and reject.
// resolve это ответ моего верного вывода a reject не верного
//есть три метода: then - когда true, catch - когда false, и finally - когда хотим выяснить работает ли наш промис,
// а так же он выдаст в любом случае свое заданное значение, будет тру или фалс без разницы

// const person = {
//   name: 'Nurs',
//   age: 22,
//   happy: true,
// };
//
// const p = new Promise((resolve, reject) => {
//     if (person.happy) {
//         resolve(`мы получили ответ что ${person.name} счастливый !!`)
//     } else {
//         reject(`увы... ${person.name} без настроения!!!`)
//     }
// }).then((res) => console.log(res)).catch((err) => console.log(err)).finally(() => console.log('promise is working'));
// console.log(p);

// fetch('https://jsonplaceholder.typicode.com/todos/1/')
//     .then((res) => res.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));


let list = document.querySelector('ul');
let btn = document.querySelector('.btn');
let form = document.querySelector('form');
let h2 = document.querySelector('h2');

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => data.forEach((item, idx) => {
            list.innerHTML += `
              <li>${idx + 1} ${item.title}</li>
            `
        })).catch((err) => alert('произошла ошибка'))
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${e.target[0].value}`)
        .then((res) => res.json())
        .then((data) => {
            h2.textContent = data.title
        }).catch((err) => alert('По такому id пост не найден!!'))
});





