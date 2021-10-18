let name = 'Иван';
const age = 26;

// function getAge() {
//     return age;
// }

// console.log(typeof name);
// const output = 'Привет, меня зовут ' + name + ' и мне ' + age + ' лет';
// const anotherOutput = `Привет, меня зовут ${name} и мне ${getAge()} лет`;
// const thirdOutput = `Тут должно быть ${age < 20 ? 'A' : 'B'}`
// console.log(output);
// console.log(anotherOutput);
// console.log(thirdOutput);

// const string = `
//     <div>This is div</div>
//     <p>This is p</p>
// `; // Отступы и перенос сохраняются
// console.log(string);

//строка создается методом new String, поэтому есть у строки методы

// console.log(name.length)
// console.log(name.toUpperCase()); //все в верх регистр
// console.log(name); //строка не поменялась
// console.log(name.charAt(2)); //второй символ
// console.log(name.indexOf('ан')); //есть ли в строке строка и позиция начала, если нет, то -1
// console.log(name.startsWith('и')); //true если да, регистр важен
// console.log(name.toLowerCase().startsWith('и'));
// console.log(name.repeat(3)); // повтор 3 раза
// const newString = '  password   ';
// console.log(newString); //пробелы будут
// console.log(newString.trim()); // убирает все пробелы
// console.log(newString.trimLeft()); //ток слева
// console.log(newString.trimRight()); //ток справа

function logPerson (s, name, age) {
    console.log(s, name, age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = 'Иван';
const personAge = 26;

const output = logPerson`Имя: ${personName}, Возраст ${personAge}!`;

console.log(output);