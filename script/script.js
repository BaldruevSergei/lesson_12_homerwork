//Задача: Изменение текста элемента
//Условие: Создайте HTML-страницу с элементом <p>, содержащим текст "Привет, мир!". С использованием JavaScript измените текст этого элемента на "Привет, JavaScript!
   const myString = document.querySelector("p");
    myString.innerText = "Привет, JavaScript!";


// Задача: Добавление нового элемента в DOM 
// Условие: Создайте массив из строк. Напишите функцию, которая получает этот массив и создает нумерованный список из этих строк в html документе.
// вариант 1. 
function creatTopic(number, text) {
    // создание div 
    const container  = document.createElement("div");
    // создание p
    const textNode = document.createElement("p");
    const textNumber = document.createElement("p");
    textNumber.innerText = number + ' . ';
    textNode.innerText = text;
    container.append(textNumber, textNode);
    return container;
 
 }
 const stringArray = [
    { title: "Заголовок 1"},
    { title: "Заголовок 2"},
    { title: "Заголовок 3"},
    { title: "Заголовок 4"},
    { title: "Заголовок 5"}
  ];

 //const root = document.querySelector('#root');
 let currentNumber = 1;
 stringArray.forEach(({title})=> root.append(creatTopic(currentNumber++, title)));
// вариант 2. 
 function creatTopic(number, title) {
    // создание li
    const listItem  = document.createElement("li");

    const numberNode = document.createElement("span");
    numberNode.innerText = number +  ' . ';
    const titleNode = document.createElement("span");
    titleNode.innerText = title;
    listItem.append(numberNode, titleNode);
    return listItem;
 
 }
 const array = [
    { title: "Заголовок 1"},
    { title: "Заголовок 2"},
    { title: "Заголовок 3"},
    { title: "Заголовок 4"},
    { title: "Заголовок 5"}
  ];

 //const root = document.querySelector('#root');
 const list = document.createElement("ul");
 array.forEach(({title}, index)=>  {
    const listItem = creatTopic(index+1, title);
    list.appendChild(listItem);
 });

 root.appendChild(list);


// Задача: Создание ссылок
// Условие: Подготовьте массив из объектов со свойствами label и link. Создайте функцию, которая проходится циклом по этмоу массиву и создает ссылки, ведущие на link с содержимым label.

function createLink({ label, link }) {
    const container = document.createElement("div");
    const linkNode = document.createElement("a");
    linkNode.innerText = label;
    linkNode.href = link;
    container.appendChild(linkNode);
    return container;
}

const linksArray = [
    { label: "Главная", link: "/home" },
    { label: "О нас", link: "/about" },
    { label: "Услуги", link: "/services" },
    { label: "Контакты", link: "/contact" }
];

const root = document.querySelector('#root');

linksArray.forEach(linkInfo => {
    const linkElement = createLink(linkInfo);
    root.appendChild(linkElement);
});