//number 2
'use strict';
// function showMultiplicationTable(num) {
//     var i = 1;
//     do {
//         console.log(i + ' ' + 'x' + ' ' + num + ' ' + '=' + ' ' + i * num);
//         i++;
//     } while (i <= 10);
//     {
//
//     }
// }
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(i + ' ' + 'x' + ' ' + num + ' ' + '=' + ' ' + i * num);
    }


}
showMultiplicationTable(5);

// number 3

// for (showMultiplicationTable(Math.random()); {
//
// };)
// var i = 1; i <= 10; i +=1;
// var random = Math.floor(Math.random()* 200 - 20 + 1) + 20;
//     console.log(random + " ");
//     var evenOddMessage = "is even";
//
// if(random % 2 === 0) {
// }else {
//     evenOddMessage = " is odd"
//
//     }
//
//
// showMultiplicationTable(i);

// number 4
function numbersDividedByFiveFromOneHundred(num) {
    for (var k = 100; k >= 5;  k-=5) {
        console.log(k)
    }
}
numbersDividedByFiveFromOneHundred("");


//number 5
var output = "";
    for (var l = 1; l <= 9; l++) {
    for (var m = 0; m < l; m++) {
        if(l === 9 && m === l-1) {
        output += l
    } else {
        output += l + ", "
    }
}
}
console.log(output);

for(l = 1; l < 10; l++) {
    console.log(String(l).repeat(l))
}


