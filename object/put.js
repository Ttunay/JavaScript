// let nikita = {
//     name: 'Nik',
//     age: 15;
// }

// alert( nikita.name)

// user.isAdmin = true // свойство с логическим значением

// delete user.age // для удаления используем оператор delate


// let artem = {
//     name: heff,
//     age: 15,
//     'heeelo': true,
// }

// // мы можем поменять значения если переменная объявленна через const
// // пример

// const  cansc = {
//     name: 'nik'
// }

// cansc.name = 'rick';

// alert(cansc) // rick

// let user = {}

// user['likes bor'] = true
// console.log(user['likes bor'])

// delete user ['likes bor']

// let ket = 'open'

// user[ket] = true


// let use1 = {
//     name: 'Nikita',
//     age: 15
// }

// let key = prompt('Что вы хотите узнать', 'age')

// alert( use1[key])


// let fruits = prompt('Какой фрукт взять?', 'green')
// let  bag = {
//     [fruits]: 4,
// }
// console.log(bag.green) // undifined


// function makeUser (name,age){
//     return{
//         name: name,
//         age: age
//     }
// }

// let user = makeUser('nick',30)
// alert(user.name) // nick


// let obj =  {
//     name: 5,
//     age: 4
// }

// alert(obj.name + obj.age) // 9


// let user2 = {name: 'rick', age: 15}


// let key = 'age'
// alert( key in user)


// let user ={
//     name:'ricx',
//     age: 15,
//     isAdmin: true
// }

// for (let key in user)
// console.log(key)
// console.log(user[key])  // нельзя сразу писать две console.log к одинаковым переменным


// let codes = {
//     'Германия': '49',
//     'США':   '1',
//     'Великобритания': '44',
//     'Швейцария': '41'
// }

// let key = prompt('Какую страну вы желаете узнать?', '')
// alert( codes[key])


// let user ={
//     name: 'John',
//     surname: 'surname',
// }

// alert (user.name = 'Pete')

// console.log (delete user.name)


//function isEmpty(obj){
//    for (let key in obj){
//        return false
//    }
//}
//return true


// let calculator = {
//     first: null,
//     second: null,

//     ada(){
//         this.first = +prompt('G?',0)
//         this.second = +prompt('G?',0)
//     },
//     sum (){
//         return this.first+ this.second   },
//     mul(){
//         return this.first+ this.second
//     }
// }
// calculator.ada();
// alert(calculator.sum());
// alert(calculator.mul());


// let canlculataor = {
//     name: null,
//     lastName: undefined,



// asd(){
//     this.name = +prompt('g',0)
//     this.lastName = +prompt('g',0)
// },
// sum2 (){
//     return this.name + this.lastName
// },


// }
// canlculataor.asd() 
// alert(canlculataor.sum2())


let calculator= {
    first: null,
    second: null,

calc(){
    this.first = +prompt('первое число?',)
    this.second = +prompt('второе число?',)
},


sum(){
    return this.first + this.second
},
mul(){
             return this.first+ this.second
         }
}

calculator.calc()
alert(calculator.sum())
alert(calculator.mul())

