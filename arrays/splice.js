// let arr = ['I' ,' Study', 'learnjs']
// arr.splice(1,1) // начиная с позиции 1, удалить 1 элемент
// console.log(arr) // осталось ['I', 'learnjs']

// let arrd = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// arrd.splice(0, 3, "Давай", "танцевать");

// console.log ( arrd ) //['I' ,' Study', 'learnjs', 'go', 'dance']


// 	Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. 
// let number = [1,2,3,4,5];
// number.splice(1,2)
// console.log(number) // [1, 4, 5]

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]. 

// let number = [1,2,3,4,5];
// number.splice(0,1)
// number.splice(3,1)
// console.log(number) //[2, 3, 4]. 



// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. 


// let number = [1,2,3,4,5];
// number.splice(3,0, 'a','b','c')
// console.log(number) // [1, 2, 3, 'a', 'b', 'c', 4, 5]. 

//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].  

// let number = [1,2,3,4,5];
// number.splice(1,1, 'a','b')
// number.splice(5,0, 'c')
// number.splice(7,0, 'e')
// console.log(number)



// slice 

// let arr = [1, 2, 3, 4, 5]
// let sub = arr.slice(0,3)
// console.log(sub);

// let arra = [1, 2, 3, 4, 5]
// let suba = arra.slice(1,0)
// console.log(suba);

let arr = [1, 2, 3,]
arr.push(4,5,7)
console.log(arr)

let arra = [1, 2, 3,]
arra.unshift(4,5,7)
console.log(arra)


let programmer = ['js', 'css', 'jq']
console.log(programmer.shift())
console.log(
    programmer
)

let lang = ['js', 'css', 'jq']
console.log(lang.pop())
console.log(lang)