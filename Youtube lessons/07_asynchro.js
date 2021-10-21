// Для асинхронности используетс event loop
// таймауты и сет интервалы

const timeout = setTimeout(() => {
    clearTimeout(timeout); //таймаут вызовится ток один раз
    console.log('After timeout');
}, 2500) // две переменные, колбэк и сам таймаут, возвращает об-т таймаут

// если вызвать отдельно, то ф-я не вызовится, можем чистить timeout, если уже не хотим выполнения

clearTimeout(timeout);

const interval = setInterval(() => {
    // clearInterval(interval); //таймаут вызовится ток один раз
    console.log('After interval');
}, 1000) // две переменные, колбэк и сам таймаут, возвращает об-т таймаут

// если вызвать отдельно, то ф-я не вызовится, можем чистить timeout, если уже не хотим выполнения
clearInterval(interval);

// Задача, создать ф-ю и продублир ф-ционал timeout

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay(() => {
//     console.log('After 2 sec')
// }, 2000);

// в ф-ции нет смысла,тк не поменялось, но есть интересный механизм Промисы
// перепишем ф-цию delay через промисы

// Ассинхронный код оборачиваем в промис, в конструктор промиса передаем колбэк, этот колбэк принимает 2 параметра, resolve и reject
// Чтобы промис использовать извне, надо его вернуть
// Промисы нужны, чтобы избежать вложенности

// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve()
//         }, wait)
//     })
//     return promise
// }

// delay(2500) // каждый из этих методов принимает колбэк
//     .then(() => console.log('After 2 sec'))
//     .catch(err => console.error(err)) //тут сработает, если произошла ошибка
//     .finally(() => console.log('Finally after 2 sec'))

// // Если вместо resolve встввить reject, будет ошибка, и finally

// const delay1 = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             reject()
//         }, wait)
//     })
//     return promise
// }
// delay1(2500) // каждый из этих методов принимает колбэк
//     .then(() => console.log('After 2 sec'))
//     .catch(err => console.error(err)) //тут сработает, если произошла ошибка
//     .finally(() => console.log('Finally after 2 sec'))

// Оформим err

// const delay2 = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             reject('Что-то пошло не так. Повторите попытку')
//         }, wait)
//     })
//     return promise
// }
// delay2(2500) // каждый из этих методов принимает колбэк
//     .then(() => console.log('After 2 sec'))
//     .catch(err => console.error('Error:', err)) // тут сработает, если произошла ошибка, нужная вещь
//     .finally(() => console.log('Finally after 2 sec'))

// Можно исп промисы для асинхрон кода

const getData = () => new Promise(resolve => resolve([1, 1, 2, 3, 5, 8, 13]));
// getData().then(data => console.log(data));

const delay3 = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve()
        }, wait)
    })
    return promise
}

async function asyncExample() {
    await delay3(3000); //только после выполнения этого, будет выполнена следущая
    const data = await getData();
    console.log('Data', data)
}

// asyncExample();

// если вместо resolve сделать reject, будет через 3 сек ошибка
const delay4 = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            reject('Что-то пошло не так')
        }, wait)
    })
    return promise
}

async function asyncExample1() {
    await delay4(3000); //только после выполнения этого, будет выполнена следущая
    const data = await getData();
    console.log('Data', data)
}
// asyncExample1();

// как сделать catch в async await:

async function asyncExample2() {
    try {
        await delay4(3000); //только после выполнения этого, будет выполнена следущая
        const data = await getData();
        console.log('Data', data)
    } catch (e) {
        console.log(e);
    } finally {
        console.log('Finally')
    }
}

// asyncExample2();
// Будет текст, не красный, тк ошибка обработана


// Асинхронность исп в интервалах, в AJAX асинхрон запросах, которые JS в фоне браузера отправляет на сервер и без перезагрузки страницы получает данные обратно
// Например постоянное изменение курса валют, листаем вк ленту,отслеживает скролл, до этапа дошел, отправил запрос