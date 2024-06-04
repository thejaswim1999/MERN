// function sum(a){
//     return function(b){
//         return a+b;
//     }
// }
// let add100=sum(100);
// console.log(add100(4));
// console.log(add100(200));

function sum(A){
    return function(B){
        return A*B
    }

}
let add100=sum(100);
console.log(add100(4));
console.log(add100(200));
