// DOM дерево - document object module
// https://learn.javascript.ru/dom-nodes

// alert(1); //на самом деле это window.alert()


// document.getElementById(); // быстрее всего
// document.querySelector(); //поиск элемента, если их несколько, то выдает первый, ('.class') - класс, ('#id') - id

let word = document.querySelector('q');
console.log(word);
console.dir(word); // раскрыть свойства объекта


word.textContent = 'Changed by JS'; // изменение контента
word.style.color = 'blue'; //смена css, нужен строковый формат
document.querySelector('div').style.textAlign = 'center';

// используем setTimeout:

setTimeout(() => {
    addStyles(word)
}, 1500)

// оформим через ф-ю

function addStyles(node) {
    node.style.backgroundColor = 'pink';
    node.style.padding = '2rem';
}

const h2Tag = document.querySelector('h2');
const headind2 = h2Tag.nextElementSibling; // следующий элемент
console.log(headind2);

// множество элементов

let h2List = document.querySelectorAll('h2');
console.log(h2List);

// второй элемент:

let secondElement = h2List[h2List.length - 1];

console.log(secondElement);

addStyles(secondElement);

// события:
// https://developer.mozilla.org/ru/docs/Web/Events

secondElement.onclick = () => {
    if (secondElement.style.color === 'red') {
        secondElement.style.color = 'black';
        secondElement.style.backgroundColor = 'pink';
    }
    else {
        secondElement.style.color = 'red'
        secondElement.style.backgroundColor = 'black'
    }
};

// обработчик событий
console.log(h2Tag)

h2Tag.addEventListener('dblclick', () => {
    if (h2Tag.style.color === 'red') {
        h2Tag.style.color = 'black';
        h2Tag.style.backgroundColor = 'pink';
    }
    else {
        h2Tag.style.color = 'red'
        h2Tag.style.backgroundColor = 'black'
    }
})

// отмена дефолтового поведения
document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event)
})