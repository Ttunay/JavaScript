// Одинарные и двойные кавычки работают, по сути, одинаково, а если использовать обратные кавычки, то в такую строку мы сможем вставлять произвольные выражения, обернув их в ${…}:

// function sum(a,b){
//    return a + b
// }
// console.log(`1 + 2 = ${sum(1,2)}`) // 1+2=3 
// Ещё одно преимущество обратных кавычек — они могут занимать более одной строки, вот так:

// let guestList = `biki:
// *john
// * pete
// * mary`

// console.log(guestList)

// Длина строки

// console.log(`my`.length) // 2 

// Доступ к символам

// Получить символ, который занимает позицию pos, можно с помощью квадратных скобок: [pos]. Также можно использовать метод str.at(pos). Первый символ занимает нулевую позицию:

// let str = `Hello`;

// получаем первый символ
// console.log( str[0] ); // H
// console.log( str.at(0) ); // H

// получаем последний символ
// console.log( str[str.length - 1] ); // o
// console.log( str.at(-1) );


// let vowels = 'aeiou'

// for ( let i = 0; i < vowels.length; i++){
//    console.log(vowels[i])
// }



let count = 'hello'
console.log(count.charAt(2))


let stringA = 'я простая строка'
let stringB = 'я простая строка, тоже'

console.log( stringA + " " +stringB) // "" это разделяющий пробел


let counst = 'я простая строка'
let stringC = 'я простая строка, тоже'-m 

console.log( counst + " привет " + stringC) // "" это разделяющий пробел

// Для совмещения строк мы также можем использовать метод concat


let foo = 'я готов'
let blah = 'почему балала'
let blarg = 'do this'

let result = foo.concat(" don't know", " ", blah, " ", blarg)
console.log(result)

// тоже самое, что и + and +=. просто + быстрее значит и удобнее значит можно юзать егоghp[lg4wr[lp]]