// let user = prompt('Введите номер квартиры:')


// if (user <= 20) {
//        alert(
//         'Квартира которую вы ищите находиться  в Первом подъезде'
//     )
// }
// else {
//     if (user <= 49) {
//         alert(2)
//     }
// }

// if (user <= 99){
//     alert(3)
// }
// else {
//     if (user >=100) {
//         alert('В нашем доме таких квартир неьу')
//     }
// }



let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}