// пример правильного использования
let a = {}
let b = a // копирование по ссылке

alert( a==b) // true, обе переменные ссылаются на одно и тоже
alert( a===b) // true

// пример не правильного использования

let c = {}
let d = {}  // два независимых объекта

alert( c == d ) // falsse
alert( c === d ) // false, обе перменные независимые