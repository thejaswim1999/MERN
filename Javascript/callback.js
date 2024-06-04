// // Callback Function

// let sum=(a,b)=>{
//     return a+b;
// }
// function calc(a,b,cbFn){
//     return cbFn(a,b);
// }
// console.log(calc(3,4,sum));

// Aschnochronous function
// console.log("StaRT")
// function makemaggie(){
//     setTimeout(function(){
//         console.log("Maggie is ready")
//     },2000)
// }
// makemaggie();
// console.log("End");


// Callbsck hell
function task1(){
    setTimeout(function(){
        console.log("Task1 done")
        function task2(){
            setTimeout(function(){
                console.log("Task2 done")
                function task3(){
                    setTimeout(function(){
                        console.log("Task3 done")
                    },2000)
                    
                }
                task3() 
            },2000)
             
            
        }
        task2()   
    },2000)   
}
task1()





task1()