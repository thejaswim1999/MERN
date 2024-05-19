// console.log(Document)
// using ID
// let h1tag=document.getElementById("h1tag");
// let ptag=document.querySelector(".pt")
// h1tag.innerHTML="I am inner text"
// console.dir(h1tag)

// let img=document.getElementById("imgtag")
// // console.dir(img)
// img.src="./download (1).jpg"

// let box=document.querySelector(".box");
// console.log(box.classList)
// box.classList.add("circle");
// box.classList.remove("circle");
// box.classList.toggle("circle");
// console.log(box.classList)

// let h1tag=document.createElement("h1")
// h1tag.innerHTML="I AM H1 TAG FROM JS";
// console.log(h1tag)
// box.appendChild(h1tag)

let img=document.getElementById("imgtag")
// console.dir(img)
let flag=true
img.addEventListener("click",function(){
    if (flag){
    img.src="./download (1).jpg";
    console.log("IMAGE CLICKED")
    }
    else{
        img.src="./download.jpg";
        
    }
    flag=!flag
})
