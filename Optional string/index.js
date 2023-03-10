// let user = {} // пользователь без свойсва address

// console.log(user.addres.street) // error

// document.querySelector('.elem') равен null если элемента нету
// document.querySelector('.elem').innerHTML ошибка если он равен null

// let user = {}

// console.log(user.addres ? user.addres.street : undefined) // undefined


// let html = document.querySelector('elem') ? document.querySelector('.elem').innerHTML : null

// let user = {}

// alert(user.addres ? user.addres.street ? user.addres.street.name : null : null)

// let user = {}

// alert(user.addres && user.addres.street && user.addres.street.nam) // undefined

// безопастный способо плучить user.address.street

// let user = {}

// console.log( user?.address?.street ) // undifined

// let html = document.querySelector('.elem')?.innerHTML undifined
