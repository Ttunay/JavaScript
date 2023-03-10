let fruits = ['Apple', 'Ocance', 'Sliva'];
console.log (fruits[0])
console.log (fruits[1])
console.log (fruits[2])
console.log(fruits.length);


let apple = ['Apple', 'jfgjf', 'mnfhd3']
console.log( apple[apple.length-1] ) // mnfhd3

let ocance = ['apple','oragne']
console.log( ocance.flat(-1) )


// pop v nachalo

let pop = ['iphone', 'macbook', 'airdots'];
console.log(pop.pop())  // удаляем "Груша" и выводим его
console.log (
  pop
); // iphone,macbook

//push - Добавляет элемент в конец массива

let android = ['Xiomi, Samsung']
android.push('Iphone')
console.log(android)  // Xiomi, Samsung, Iphone.

// shift - Удаляет из массива первый элемент и возвращает его

let windows = [
  'RXT',
  'GTX',
  'NVIDIA'
]

console.log (windows.shift()) // delete RXT and выводим из массива
console.log(
  windows
); // RTX, NVIDIA


// unshift - Добавляет элемент в начало массива:

let Linux = ['macSO','MSi','teamgroup'];
Linux.unshift('Telegram')
console.log(Linux) // Telegram, macSO,MSi,teamgroup


// Методы push и unshift могут добавлять сразу несколько элементоv

let macOs = ['Magicbook']

macOs.push('steam','discord')
macOs.unshift('Destop','learn')

console.log(macOs);



let arr = ['Apple','Apelcin','grysha']

for(let i =0; i< arr.length; i++){
  console.log( arr[i] );
}

// let fruits44 = ['Appleee','fgfff','dasdad'];
// for ( let fruits44 of fruits44) {
//   console.log( fruit4);
// }

let fru6its = ["Яблоко", "Апельсин", "Слива"];

// проходит по значениям
for (let fruit of fru6its) {
  console.log( fruit );
}


let ara = [1,2,3,4,5]
arr.length = 2; // укорачиваем до 2-ух элементов
console.log (ara) // [1,2]

ara.length = 5; // возвращаем как было
console.log( arr[3] ); //indefined: значени не восстановились



// new Array()

let arra = new Array('SOSS','Sass', 'KMFDKFD')

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] ); // 5, центральный элемент


let ardddf = [1,2,3]

console.log( ardddf ); // 1,2,3
console.log(String(ardddf) === '1,2,3') / true



let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
console.log (styles.shift()) // delete RXT and выводим из массива
console.log(
  styles
);
styles.shift('Рэп','Регги' )