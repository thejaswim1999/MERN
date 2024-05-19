//Reassign
//Var and Let can be reassigned but const cannot be 

//Let and const cannot be redeclared 
// const a=10;
//Accessing the values before intialization
//Hoisting -Variables and functions will move to the top of the scope and they will get the memory 
// console.log(a)

// var a=10;
// console.log(a)
// abc()
// function abc(){
//     console.log("ABC Called")
// }
// abc()
// console.log(a)
// var a=10;
// console.log(a);
// function abc(){
//     console.log(a)
//     var a=99;
// }
// abc();
// console.log(a);

//Var let and const are hoisted in a different zone called 
// are called temporial dead zone(tdz) and we cannot access the variable in TDZ zone 
// console.log(a)
// let a=10;
// console.log(a)
// SCOPE
// Var is function scoped ,let and const are block scoped.
// Var,let,const is function scoped bcoz function is also a block of code
// var a=10;
// function abc(){
// console.log(a);
// var a=99;
// }
// abc();
// console.log(a);

// let a=10;
// function abc(){
//     let a=99;
//     console.log(a);

// }
// abc();
// console.log(a);
// Function scope (Done)
// Chain scope/Scope Chain
// Block scope
// Lexical Scope(DONE)
// let a=10;
// function abc(){
//     // let a=99;
//     console.log(a);

// }
// abc();
// console.log(a);
// Global Scope:-Anything which is not in the function is called global scope
// var a=10;
// var b=99;
// function abc(){
//     console.log(a);
//     var a=99;
//     function second(){
//         console.log(a);
//         third();
//     function third(){
//         console.log(b);
//         console.log(a);
//         var c=99;
//     }
//     console.log(c);
//     }
//     second()
// }
// // first();
// abc();
// console.log(a);
// Block Scope
// let a=10;{
// let a=99;}
// console.log(a);
// var a=10;
// let x=100;
// {
//     var a=99;
//     let x=999;
//     console.log(a);
//     console.log(x);
// }
// console.log(a);
// console.log(x);

// Cage Block
let x=100;
console.log(a);
console.log(x);
{
    var a=99;
    let x=999;
    console.log(a);
    console.log(x);
}
console.log(a);
console.log(x);