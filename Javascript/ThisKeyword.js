// This Keyword
let obj={
    name:"Thejas",
    age:24,
    givedetails:function(){
        return `The name is ${this.name} an age is ${this.age}`;
    }
}
console.log(obj.givedetails());