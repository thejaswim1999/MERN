// Closures -A function will carry its lexical scope
function counter(){
let count=0;
function inc(){
    count++;
    console.log(count);
}

function dec(){
    count--;
    console.log(count);
}
let obj={
    incFn:inc,
    decfn:dec
}
return obj;
}
let obj=counter();
obj.incFn();
obj.incFn();
obj.incFn();
obj.decfn();
count=50;
obj.incFn();
