//DOM - Document Object Model - Объектная модель документа

// console.log(document); // Документ html
// let h1 = document.location; // выдает объект, где у нас описание и где находится сам объект
// let h1 = document.body; // получаем наш body, и все что в нем находится!
// console.log(h1);
//Получение элементов
// let h1Id = document.getElementById('name'); // получение элемента по = Id
// let h1class = document.getElementsByClassName('title'); // получение класса, из псевдо массива, не работают методы перебора
// console.log([...h1class]); есть 2 варианта переноса из псевдомассива в массив для перебора- это первый
// console.log(Array.from(h1class)); // перевод псевдо массива в - нормальный массив

// let h1Tag = document.getElementsByTagName('h1'); // получение элементов по тегу - вывод в виде псевдо массивов
// console.log(h1Tag);

// let h1Class = document.querySelectorAll('.title'); // nodelist можно использовать метод - foreach
// //получение элементов по классу - вывод в виде псевдо массива!
// console.log(h1Class);

// let h1Alone = document.querySelector('.title'); // получаем первый элемент
// console.log(h1Alone);

//Получение текста из тега

// let h1Get = document.querySelector('#name');// получаем текстовое значение
// console.log(h1Get.textContent); // читает все пробелы и отступы и не читает теги будем работать с ним
// console.log(h1Get.innerHTML); //  читает пробелы отступы и читает теги
// console.log(h1Get.innerText); // не читает пробелы отступы и теги

//если мы используем textContent - то мы не можем использовать теги,
// поэтому если у нас в текстовом значении используются теги, То будем исользовать innerHtml
// но в основном это textContent

// let text = document.querySelector('p');
// console.log(text.className); // при использовании className - получаем простой текст
// console.log(text.classList); // при использовании classList - получаем псевдомассив где наш класс разделен через пробел

// text.className = 'red'; //изменили класс
// text.className += 'red'; //добавили класс


// text.classList.add('red'); // добавить класс
// text.classList.remove('subtitle'); // удалить класс
// text.classList.toggle('black'); // добваить если нету, иначе удалить
// text.classList.replace('text','title'); // заменить первый класс на второй новый

// console.log(text.classList.contains('text')); // поиск класса получаем в виде boolean значения

//добавление стилей через js
//получаем стили, инлайново. то есть приоритет будет самый сильный
// let div = document.querySelector('.box');
// // div.style.borderRadius = '50%';
// // div.style.width = '300px';
// // div.style.height = '300px';
// // div.style.background = 'blue';
//
// div.style.cssText = 'border-radius: 50%; background: orange; width: 250px; height: 250px';
// будем работать так, гораздо удобнее

// работа с атрибутом
// let p = document.querySelector('.text');
// console.log(p.attributes); // получаем атрибуты
// console.log(p.getAttribute('data-test-class'));
// console.log(p.dataset.testClass); // получаем дату
// p.setAttribute('id','main'); // установать аттрибут
// p.removeAttribute('class'); // удалить аттрибут
// console.log(p.hasAttribute('id')); // проверить на наличие атрубита
// p.getAttribute('id'); // получить аттрибут

// let atr = document.querySelector('p');
// console.log(atr.getAttribute('id'));
// console.log(atr.hasAttribute('id'));
// console.log(atr.setAttribute('class','qwerty'));
// console.log(atr.removeAttribute('id'));


// let h3 = document.createElement('h3'); // создание нового тега
// let title = document.querySelector('.title');
// //
// let body = document.body;
//
//
// h3.textContent = 'Новый элемент';

//body.appendChild(h3); // Добавление элемента в конец
//body.append('привет'); // Добавление элемента в конец + он принимает в виде элементов обычные строки !

//body.prepend(h3);// Добавление элемента в начало


//title.after(h3);// Добавление элемента после
//title.before(h3);// Добавление элемента до


// let box = document.querySelector('#box');
// let hello = document.querySelector('.hi');


//box.removeChild(hello); // удалить ребенка обращаясь к родителю
//hello.remove(); // удалить элемент


// console.log(box.children); // получение потомков
// console.log(box.childNodes); // получение потомков
//
// console.log(box.childElementCount); // получение количества потомков
// console.log(box.lastChild); // получение последнего потомка
// console.log(box.firstChild); // получение первого потомка
// console.log(box.firstElementChild); // получение первого  элемента потомка
//
// console.log(hello.parentElement);// получение родителя
// console.log(hello.parentNode);// получение родителя
//
// console.log(hello.nextElementSibling); // получение соседа после тебя
// console.log(hello.previousElementSibling); // получение соседа до тебя




// console.log(input.value); // получение значения у поля ввода
// console.log(input.checked); // проверка на установку
// console.log(input.disabled); // проверка на заблокирован ли наш инпут


// let input = document.querySelector('input');
// let btn = document.querySelector('button');
//
// btn.onclick = () => {                     //при нажатии получаем alert функцию
//     alert('я смог вызвать свою функцию')
// };

// btn.onmouseover = () => {  // при наведении получаем функцию alert!!!
//     h1.style.background = 'red'
// };
//
// btn.onmouseleave = () => {   // если убрать курсор от кнопки, он примет цвет по умолчанию
//     h1.style.background = 'transparent'     //****
// };
//
// btn.ondblclick = () => {            // при нажатии нашей кнопки дважды, получаем нашу функцию, alert!!
//     alert('я смог вызвать свою функцию')
// };

// let input = document.querySelector('input');
// let btn = document.querySelector('button');      //создаем переменные чтобы работать с ними!!!!***
// let agent = document.querySelector('#agent007');
// let agentSpan = document.querySelector('#agent007 span');
//
//
// btn.addEventListener('click', (e) => {  // если наше поле ввода больше нуля,
//     if (input.value.length > 0) {
//         agentSpan.textContent = input.value;  // то дай нам ввод!
//         input.value = ''
//     }
// });
//
//
// input.addEventListener('change', () => {
//     agentSpan.textContent = input.value;
//     if (input.value.length < 1){
//         btn.disabled = true;
//     } else {
//         btn.disabled = false
//     }
// });
//
// let form = document.querySelector('form');
// let inputText = document.querySelector('#input1');
// let checkBox = document.querySelector('#check1');
// let btnSub = document.querySelector('#sub');
//
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // функция для запрета перезагрузки сайта
//    // console.log(e.target[0].value) // значение первого элемента в форме
//    // console.log(e.target[1].checked) // значение второго элемента в форме //проверка checked, на установку
//     if (e.target[1].checked) {       // если у нас второй элемент === checked
//         agentSpan.textContent = e.target[0].value  // то дай нам это условие
//         e.target[0].value = ''
//         e.target[1].checked = false
//     } else {
//         alert('Поставьте галочку !!!')  // иначе получаем функцию  alert !!
//     }
//
// });
//

// let form = document.querySelector('form');
// let listItem = document.querySelectorAll('li');
// let list = document.querySelector('ul');
//
// form.addEventListener('submit', (e) =>{   // создали событие, при нажатии на кнопку :
//     e.preventDefault();  // не перезапускал сайт ***
//
//         let li = document.createElement('li');  // при нажатии создается тэг ли!
//         li.textContent = e.target[0].value;     // значение с инпута переходили в ли!
//         list.append(li)       // добовлялся в конец!!
//         e.target[0].value = '' // после отправки присваивал пустую строку
//
// });
//
//
// Array.from(listItem).forEach(item => {  // перевели нашу форму в массив!
//     item.style.cursor = 'pointer';      // при наводке на ли, включался cursor pointer!!!
//     item.addEventListener('click', (e) => {  // создаем событие при нажатии на наши ли!
//         item.style.color = `rgb(${Math.floor(Math.random()* 255)},${Math.floor(Math.random()* 255)},${Math.floor(Math.random()* 255)})`
                // менялся цвет!!!  а менялся рандомно, то есть у нас есть rgb их у нас три. в каждом rgb есть 255 и вызываем рандомную цифру
                // то есть рандомный цвет!!!
//     })
//
// });

