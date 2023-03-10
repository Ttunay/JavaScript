function showMessege(from,text){
    console.log(from + ':' + text);
}

showMessege('Аня', 'Привет');
showMessege('Аня', 'как дела?');


function showMessege(from,text){
    from = '*' + from + '*';
    console.log(from + ':' + text);
}

let from ='Anna';

showMessege(from,'Hello');

console.log(from);


// Возврат значения

function sum(a,b){
    return (a+b);
}
let result =sum(1,2);
console.log(result);


// function checkAge(age){
//     if (age>18){
//         return true;
//     }
//     else{
//         return confirm('Родители разрешили?')
//     }
// }
// let age = prompt('Сколько вам лет?', 18)

// if (checkAge(age)){
//     console.log('Open')
// }
// else {
//     console.log('Close')
// }


// function showPrimes(n) {
//     nextPrime: for (let i =2; i < n; i++){
//         fir (let j =2; j < i; j++){
//             if ( i % j == 0)continue nextPrime;
//         }
//         alert(i)
//     }
// }

// function  showPrimes(n){

//     for let ( let i = 2; i< n; i++){
//         if ( !isPrime(i)) continue;
//         alert(i);
//     }
// }

// function isPrime(n) {
//     for ( let i = 2; i < n;i++) {
//         if ( n % i == 0) return false;
//     }
//     return true;
// }



// function pow(x,n) {
//     let result = x;
//     for (let i =1; i < n; i++){
//         result *=x;
//     }
//     return result;
// }

// let x = prompt('x?', '')
// let n = prompt('n?', '')

// if (n<1) {
//     alert('Степерь ${n} не поддерживается');
// }
// else {
//     alert(pow(x,n));
// }

let f = function g() { return 23; };

alert( typeof g() );
