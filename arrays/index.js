// let fruits = ['Яблоки', 'апельсивы', 'мандарины'];
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[0])

// //  висячая запятая 
// let fruits0 = ['orance',
// 'apple',
// 'firefox'
// ]

// // Допустим, нам нужен последний элемент массива.

// let fruits1 = ["Apple", "Orange", "Plum"];

// console.log( fruits1.at(-1) ); 


// // Методы, работающие с концом массива:
// // pop

// let fruits2 = ['Apple', 'Oracle', 'Grysha'];
// console.log (fruits2.pop()) // Удялаяем грушу и выводим ее в консоль
// console.log(fruits2); // Apple and Oracle в консоль

// // push
// //     Добавляет элемент в конец массива:

// let fruits3 = ['Apple', 
//             'Orance'
// ];
// fruits3.push('Grysha')
// console.log(fruits3); // Яблоко, Апельсин, Груша


// // shift
// //     Удаляет из массива первый элемент и возвращает его:

// let fruits4 = ['Apple', 'orance,', 'grysha'];
// console.log(fruits3.shift()); // удаляем Яблоко и выводим его
// console.log(fruits4); // Апельсин, Груша

// // unshift
// //     Добавляет элемент в начало массива:

// let fruits5 = ['apple', 'orance'];
// fruits5.unshift('Apple')
// console.log(fruits5)// Яблоко, Апельсин, Груша

// // Методы push и unshift могут добавлять сразу несколько элементов:

// let fruits6 = ['Яблоки'];

// fruits6.push('Апельсин', 'grusha');
// fruits6.unshift('Ananac', 'Lime');

// // ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
// console.log( fruits );


// // Внутреннее устройство массива

// let fruits8 = ['Banan'];

// let arr = fruits8; // копируется по ссылке (две перемнные ссылаются на один и тотже массив)

// console.log (arr === fruits8); // выведется tru
// arr.push('Груша') // массив меняется по ссылке
// console.log(fruits8);

// //  Перебор элементов

// let arrr = ["Яблоко", "Апельсин", "Груша"];

// for (let i = 0; i < arrr.length; i++) {
//   console.log( arrr[i] );
// }

// // for .. of

// let count = ['Apple', 'ocance', 'grysha']

// for ( let key in count){
//     console.log(count[key] ); // apple. ocance, grusha.
// }
// // не следует использовать цикл for..in для массивов. окда

// // Немного о «length»

// let fruits9 =[]
// fruits9[128] ='Apple'

// console.log(fruits9.length) // 129 // +1 из-за 90-ой строчки с путыми [] скобками. ( наверное) 