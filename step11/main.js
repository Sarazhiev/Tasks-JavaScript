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