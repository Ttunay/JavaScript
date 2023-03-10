 
    // if ( i== 9) break;  // break останавливает числа, если 9, то 8  и тд. обрывет цикл
    let div = document.querySelectorAll('.one');
    console.log(div);
    // div.style.background = 'red';

    // for (let i = 0; i < div.length; i = i + 1){
    //     console.log(div[i]);
    //     div[i].style.background = 'red';
    //     div[i].onclick = two;
    // }


    // function two(){
    //     console.log('work1111')
    // }

    // let b = document.getElementsByClassName('one');
    // let c = document.getElementsByClassName('div')
    // console.log(b);
    // console.log(c);

    // for (let i=0; i<b.length; i++){
    //     b[i].style.border ='5px solid black'
    // }

    document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for ( let i =0; i < r.length; i++){
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}



let out = '';
for ( let i = 0; i < 10; i++){

    if ( i == 6 ) continue;
    out += i + ' ';
}
document.querySelector('#out') .innerHTML 


// for ( let i = 0; i<100; i++ ){
//     document.write(i+ '<br>');
// }


let i =0 
while (i<144);{
    document.write(i+ '<br>');
    i++;
}