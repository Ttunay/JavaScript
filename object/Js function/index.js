// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной

//   let message = 'Привет, ' + userName;
//   alert(message);
// }


// showMessage()



// function showMessage(from,text){
//     alert(from + ':' + text)
// }
                    // undefined becuese element "text " dont have parant
// showMessage('Nk, hello')
// showMessage('Nk, How are you?')


// function showMessage(from,text){

//     console.log( from + ':' + text)
// }

// let from = 'Nk'
// showMessage(from,'hi')

// console.log(from)


// function showMessage(from, text= 'параметр не указан'){
//     console.log(from + ':' + text)
    
// }
// showMessage('Nk')


// // проверка на undefinded


// function ShowNe(text){
//     if (text === undefined ){
//         text = 'run Vasia'
//     }
//     console.log(text)
// }

// ShowNe()


// function showCount(count){
//     console.log(count ?? 'unknow')
// }

// showCount(0)
// showCount(null)
// showCount()


// // ВОЗВРАТ ЗНАЧЕНИЯ 

// function sum (a,b){
//     return a+b
// }

// let result = sum(1,2777)
// console.log(result)



// function checkAge(age){
//     if (age > 18){
//         return true; }
//     else {
//         return confirm(' А родители разрешили')
//     }
// }

// let age = prompt('Сколько вам лет?',18)


// if (checkAge(age) ){
//     alert('доступ получен')
// } else {
//     alert('close')
// }







// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }

// let x =prompt('x?','')
// let n = prompt('n?','')

// if (n < 1){
//     alert(`Степерь ${n} не поддерживается, используйте натуральное число`)}
// else {
//     alert(pow(x,n))
// }


function checkAge(age){
    if (age > 18){
        return true
    }
    else {
        return confirm('А родители разрешили')
    }
}

let age = prompt('Скок лет?', 18)


if (checkAge(age)){
    alert('open')
}
else{
    alert('close')
}