let inputtag=document.getElementById("inputtag");
let addbtn=document.getElementById("btn");
let dropdown=document.getElementById("dd")
let colorinput=document.getElementById("color");
let cont=document.querySelector(".shape");


addbtn.addEventListener("click",function(){
    cont.innerHTML="";
    let value=inputtag.value;
    inputtag.value="";
    let shape=dropdown.value;
    let color=colorinput.value;

    for(let i=0;i<value;i++){
    let ele=document.createElement("div");
    ele.classList.add(shape);
    ele.style.backgroundColor=color;
    cont.appendChild(ele);
    }
})