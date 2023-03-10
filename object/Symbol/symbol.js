// // let id = Symbol()


// // создаём символ id с именем "id"

// // let id = Symbol("id")


// // два символа с одинаковым описанием, но они не будут равны

// let id1 = Symbol("id")
// let id2 = Symbol("id")

// console.log( id1 == id2 ) // false

// code false

// let id =Symbol("id")
// alert(id) // Type Error


// если все-же надо вывести через символ alert, то можно воспользоваться методам .toString 

// let id =Symbol("id")

//  alert(id.toString)


// или через symbol.description
// let id =Symbol("id")

// alert(id.description) // id


// let user = {
//     name: 'Ivan'
// }

// let id = Symbol('id')
// user[id] = 1

// alert(user[id]) //

// если мы хотим использовать символ при литеральном использовании, ( {...}), то надо его заключить в квадратные скобки


// let id = Symbol('id')

// let user = {
//     name: Inav, 
//     [id]: 123 // просто id: 123 не сработало. 
//     // Это вызвано тем, что нам нужно использовать значение переменной id в качестве ключа, а не строку «id».
// }