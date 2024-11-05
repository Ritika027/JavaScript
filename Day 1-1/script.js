console.log("Hello");

//for alert box on window we use //
window.alert("This is an alert");
window.alert("I like Pizza");

document.getElementById("myH1").textContent="Hello";
//this is used to add something to a particular tag like here in h1 to add specific details
document.getElementById(myP).textContent="Hii";



//VARIABLE

let x;//declaration 
x=100;//assignment
console.log(x);
//this will display 100

let y=200; //both declaration and assignment
console.log(y);

let age = 21;
let price = 10.99;
//boolean
let student = 20;
student = student+1;
console.log(student);
//answer will be 21 Arithmetic operation similarly we can multiply divide sub etc



let name = "abc";
console.log(typeof name);

console.log(typeof price);//This is to find weather the price is number alphabet etc
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);


/*
OPERATOR PROCEDENCE
1.parenthesis()
2.exponents
3.multiplication &divison & modulo
4.addition & subtraction
*/

//HOW TO ACCEPT JAVASCRIPT USER INPUT
let username ;


//this is to change text content
 document.getElementById("mySubmit").onclick=function(){
  username=document.getElementById("myText").ariaValueMax;
  console.log(username);
 }

