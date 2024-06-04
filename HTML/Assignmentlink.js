let inputtag=document.getElementById("inputtag");
let circle=document.getElementById("circle");
let square=document.getElementById("square");
let colori=document.getElementById("color");
let submiti=document.getElementById("submit");

let cont=document.querySelector(".shape");

submiti.addEventListener("click",function(){
    cont.innerHTML="";
    let value=inputtag.value;
    console.log(value)
    inputtag.value=""
    
    let color=colori.value;
    for (let i=0;i<value;i++){
    let ele=document.createElement("div");
    if (circle.checked){
        ele.classList.add("circle");
    }
    else if (square.checked){
        ele.classList.add("square");
    }
    ele.style.backgroundColor=color;
    cont.appendChild(ele);
    }
});