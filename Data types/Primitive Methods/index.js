console.log(Math.floor(1.23))// всегда округляет нижнюю сторону будет 1
console.log(Math.round(1.23)) // по правилам математики будет 1
console.log(Math.ceil(1.23)) // всегда в большую сторону будет 2

console.log(Math.floor(1.6)) // 1
console.log(Math.round(1.6)) // 2
console.log(Math.ceil(1.6))  // 2

console.log(Math.floor(123.5)) // 123 т.к всегда в нижнюю сторону
console.log(Math.floor(123.5)) // 124 по математике
console.log(Math.floor(123.5)) // 124 т.к всегда вверх

// toFixed

const num = 123.452
console.log(num.toFixed(0)) // 0 --  тоже самое, что round
console.log(num.toFixed(1)) // 123.5, 1 зак после запятой, 5 округлилась в большую сторону
console.log(num.toFixed(2)) // 2 знака после запятой, ВСЕ ОКРУГЛИЛОСЬ