let arr1=[10,20,30,40];
let arr2=['a','b','c','d'];
let ans=[...arr1,...arr2]
console.log(ans)

let obj1={
    name:"Thejas"
};
let obj2={
    age:24
};
let obj3={
    ...obj1,...obj2
};
console.log(obj3);