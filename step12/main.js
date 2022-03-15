let  todoList = [
    {
        id: 1,
        title:  'Название задания 1',
        isDone: false,
        isImportant: false,
    },
    {
        id: 1,
        title: 'Название задания 2',
        isDone: false,
        isImportant: false,
    },
    {
        id: 1,
        title: 'Название задания 3',
        isDone: false,
        isImportant: false,
    }
];

let list = document.querySelector('.todo__list');
let form = document.querySelector('.todo__form');
let todoBtnDelete;

const showList = () => {

    todoList.forEach((item, idx) => {
        list.innerHTML += `
        <li class="todo__item">
                <span style="color: ${item.isImportant ? 'red' : ''}; text-decoration: ${item.isDone ? 'line-through' : ''} " class="todo__item-title">${item.title}</span>
                <div class="todo__item-btns">
                    <button class="todo__item-btn done">Done</button>
                    <button class="todo__item-btn important">Important</button>
                    <button class="todo__item-btn delete">Delete</button>
                </div>
            </li>
        `
    });
    todoBtnDelete = document.querySelectorAll('.delete');
    let todoImportant = document.querySelectorAll('.important');
    let todoDone = document.querySelectorAll('.done');
    let todoCount = document.querySelector('.todo__count-num');
    let todoEmpty = document.querySelector('.todo__empty');

    todoDone.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            todoList = todoList.map((el, index) => {
                if (idx === index) {
                    return {...el, isDone: !el.isDone}
                }
                return el
            });
            list.innerHTML = '';
            showList()
        })
    });

    todoBtnDelete.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            todoList = todoList.filter((el, index) => {
                return idx !== index
            });
            list.innerHTML = '';
            showList()
        })
    });
    todoImportant.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            todoList = todoList.map((el, index) => {
                if (idx === index) {
                    return {...el, isImportant: !el.isImportant}
                }
                return el
            });
            list.innerHTML = '';
            showList()
        })
    });
    todoCount.textContent = todoList.length;
    todoEmpty.style.display = !todoList.length ? 'block' : 'none'
};

form.addEventListener('submit', (e) => {
   e.preventDefault();
   todoList = [...todoList, {
       id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
       title: e.target[0].value,
       isDone: false,
       isImportant: false,
   }];
   e.target[0].value = '';
   list.innerHTML = '';
    showList()
});
showList();
