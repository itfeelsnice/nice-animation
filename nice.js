
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let div1 = document.querySelector("#div1");
let h1 = document.querySelector("#a");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let btn4 = document.querySelector("#btn4");

let transform = 30;

let rotate1 = 0;

btn1.addEventListener("click", () =>{
    transform += 10;
    rotate1 += 360;
    div1.style.transform = `translateX(${transform}%)`; 
    img3.style.transform = `rotate(${rotate1}deg)`;
    img2.style.transform = `rotate(${rotate1}deg)`;
});

btn2.addEventListener("click", () =>{
    // img1.classList.toggle("rotate1");
    div1.style.transform = `rotate(${rotate1}deg)`;
});

btn3.addEventListener("click", () =>{
    transform -= 10;
    rotate1 -= 360;
    div1.style.transform = `translateX(${transform}%)`; 
    img3.style.transform = `rotate(${rotate1}deg)`;
    img2.style.transform = `rotate(${rotate1}deg)`;
});

btn4.addEventListener("click", () =>{

});



// today i started to code at 8.28 i will not code that much because i dont have that much time but i will try in 10 minutes or 15
// to make my idea with an image that will pop up i will not make today the car rotate good because i dont have the time















