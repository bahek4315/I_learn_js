const person = {
    name: 'Ivan',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'eng'],
    'complex key': 'Complex Value', //сложные ключи можно задавать строкой
    ['key_' + (1+3)]: 'Computed key', //key_4
    greet: function() {
        console.log('greet from person')
    },
    info() {
        console.info('Информация про человека по имени:', this.name) //вывод инфы в консоль
    }
}

//тут greet это метод, тк эта ф-я в объекта
// const key = 'isProgrammer';

// console.log(person);
// console.log(person[key]);
// console.log(person.name);
// console.log(person['age']);
// person.greet(); //вызов метода
// console.log(person['key_4']);

// person.age++;
// person.languauges.push('fr');
// console.log(person);

// person['key_4'] = undefined;
// console.log(person);
// console.log(person.key_4);
// //чтобы удалить ключ:
// delete person['key_4'];
// console.log(person);

// Деструктуризация

// const name1 = person.name;
// const age1 = person.age;
// const languages1 = person.languages;

//или

// const {name: name1, age: age1, languages: languages1} = person;
// //передаем в ключи переменные
// console.log(name1, age1, languages1);

//объекты не итетируемы, те нельзя в них задать цикл как в массиве, но есть хаки
// console.log(person);
// for (let key in person) { 
//     if (person.hasOwnProperty(key)) { //если у об-та есть свое свойство вне прототипа (proto), туда передается строка
//         console.log('key:', key);
//         console.log('value:', person[key]);  
//     }
// }; //вывод ключей в строк

// этот цикл опасен тем, что цикл может забежать в прототип (ф-ции внутри объекта), нужна проверка
// чтобы избежать такого цикла, можно исп person.hasOwnProperty(key)


//можно и не так, можно так: 

// const keys = Object.keys(person); //это массив ключей, не бежит по прототипу
// console.log(keys);

// keys.forEach((key) => {
//     console.log('key:', key);
//     console.log('value:', person[key]);
// })

// Context
// person.info();

// зачем исп this:

const logger = {
    keys(obj) {
        console.log('Object keys: ', Object.keys(obj))
    }
}
logger.keys(person)

const logger1 = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    }
}
logger1.keys(person)