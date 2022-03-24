
let  todoList = [
    {
        id: 1,
        title:  'Название задания 1',
        isDone: false,
        isImportant: false,
        time:'20:00'
    },
    {
        id: 2,
        title: 'Название задания 2',
        isDone: true,
        isImportant: false,
        time:'20:05'
    },
    {
        id: 3,
        title: 'Название задания 3',
        isDone: false,
        isImportant: true,
        time:'21:00'
    }
]; // Список дел, каждое дело является отдельно объектом

let list = document.querySelector('.todo__list'); // тег ul - для принятия списков
let form = document.querySelector('.todo__form'); // форма для добавления задачи

const showList = (status = 'all') => { // главная функция - выполняет добавление элементов в список
    todoList.filter((item) => {
        if (status === 'done'){
            return item.isDone
        } else if (status === 'important') {
            return item.isImportant
        } else {
            return item
        }
    }).forEach((item, idx) => {
        list.innerHTML += `
                <li class="todo__item">
                    <div>
                        <span class="todo__item-time">${item.time}</span>
                        <span style="color: ${item.isImportant ? 'red' : ''}; text-decoration: ${item.isDone ? 'line-through' : ''} " class="todo__item-title">${item.title}</span>
                    </div>
                <div class="todo__item-btns">
                    <button class="todo__item-btn done" data-id="${item.id}">Done</button>
                    <button class="todo__item-btn important" data-id="${item.id}">Important</button>
                    <button class="todo__item-btn delete" data-id="${item.id}">Delete</button>
                </div>
            </li>
        `
    });
    let todoBtnDelete = document.querySelectorAll('.delete'); // получение псевдомассива кнопок удалить
    let todoImportant = document.querySelectorAll('.important'); // получение псевдомассива кнопок важных
    let todoDone = document.querySelectorAll('.done'); // получение псевдомассива кнопок выполненных
    let todoCount = document.querySelector('.todo__count-num'); // получение тега span
    let todoEmpty = document.querySelector('.todo__empty'); // получение тега h2 для отображения текста при пустоте

    todoDone.forEach((item) => { // перебор кнопок выолненных
        item.addEventListener('click', (e) => { // добавления события при нажатии на кнопку
            todoList = todoList.map((el) => { // переопределение списка дел - где найдя по индексу мы изменяем
                if (item.dataset.id == el.id) {                                // значение ключа isDone на противоположный
                    return {...el, isDone: !el.isDone}
                }
                return el
            });
            list.innerHTML = ''; // обнуляем текст внутри ul
            showList() // заново вызываем функцию
        })
    });

    todoBtnDelete.forEach((item) => { // перебор кнопок удалить
        item.addEventListener('click', (e) => {
            todoList = todoList.filter((el) => { // переопределяем список дел удаляем тот на который нажали
                return item.dataset.id != el.id
            });
            list.innerHTML = '';
            showList()
        })
    });

    todoImportant.forEach((item) => {
        item.addEventListener('click', (e) => {
            todoList = todoList.map((el) => {
                if (item.dataset.id == el.id) {
                    return {...el, isImportant: !el.isImportant}
                }
                return el
            });
            list.innerHTML = '';
            showList()
        })
    });
    todoCount.textContent = todoList.length; // записывем значение для количества - берем из длины списка
    todoEmpty.style.display = !todoList.length ? 'block' : 'none' // если список пуст то задаем дисплей блок иначе None
};

form.addEventListener('submit', (e) => { // при отправке формы вызываем функцию
   e.preventDefault(); // функция для запрета обновления страницы
    let getTime = new Date();
   todoList = [...todoList, {
       id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1, // устанавливаем значение которая будет больше на 1 чем предыдущий
       title: e.target[0].value, // устанавливаем значение - из данных который получили при отправке формы
       isDone: false,
       isImportant: false,
       time: getTime.toString().substr(16, 5)
   }]; // переопределяем список дел- где говорил возьми все что у тебя было и новый объект
   e.target[0].value = ''; // обнуляем значение поле ввода
   list.innerHTML = '';
    showList()
});

let all = document.querySelector('.status__all');
let important = document.querySelector('.status__important');
let done = document.querySelector('.status__done');
let todoStatus = document.querySelector('.todo__status');
let todoAllDelete = document.querySelector('.delete__btn');

all.addEventListener('click', () => {
    todoStatus.textContent = 'All';
    list.innerHTML = '';
    showList()
});

important.addEventListener('click', () => {
    todoStatus.textContent = 'Important';
    list.innerHTML = '';
    showList('important')
});

done.addEventListener('click', () => {
    todoStatus.textContent = 'Done';
    list.innerHTML = '';
    showList('done')
});

todoAllDelete.addEventListener('click',()=>{
    list.innerHTML = '';
    todoList = [];
    showList()
});

let time = document.querySelector('.todo__time');
let date = new Date();  
time.textContent = date.toString().substr(16, 5);
showList();
