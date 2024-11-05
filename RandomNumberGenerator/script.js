//RANDOM NUMBER GENERATOR
// const min=50;
// const max=100;
//this will help to generate random number between 50 to 100


// let randomNum=Math.floor(Math.random()*(max-min))+min; //this is used to generate random numbers using Math function
//this will generate random num between 0 and 1
//by multiplying by 100 and adding 1 random number between 1 and 100 are generated

// console.log(randomNum);

// RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}


