const person = {
    name: 'Ivan',
    age: 26,
    isProgrammer: true,
    languauges: ['ru', 'eng'],
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.name);
console.log(person.age);

//тут greet это метод, тк эта ф-я в объекта