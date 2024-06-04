let arr=[100,90,6,5,4,0]
// function abc(ele,idx,arr){
//     arr[idx]=ele*2
// }

// arr.forEach(abc);
// console.log(arr);
// function abc(ele,idx,arr){
//     return ele+2;
// }
// let ans=arr.map(abc);
// let ans=arr.filter(function(ele,idx,arr){
//     return ele%2==0
// })

let ans=arr.reduce(function(acc,curr){
    return acc+curr;
})

console.log("arr",arr);
console.log("Ans",ans);