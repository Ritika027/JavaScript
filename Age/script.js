// //if else statement
// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mySubmit.onclick = function(){
//     age = myText.value;
//     age = Number(age);
//     if(age >= 100){
//         resultElement.textContent = `You are TOO OLD to enter this site`;
//     }
//     else if(age == 0){
//         resultElement.textContent = `You can't enter. You were just born.`
//     }
//     else if(age >= 18){
//         resultElement.textContent = `You are old enough to enter this site`
//     }
//     else if(age < 0){
//         resultElement.textContent = `Your age can't be below 0`;
//     }
//     else{
//         resultElement.textContent = `You must be 18+ to enter this site`;
//     }
// }
document.getElementById('mySubmit').addEventListener('click', function () {
    const age = document.getElementById('myText').value;
    const resultElement = document.getElementById('resultElement');
    
    resultElement.innerText = `You entered age: ${age}`;
    resultElement.classList.add('show');

    // Optionally, remove the 'show' class after some time
    setTimeout(() => {
        resultElement.classList.remove('show');
    }, 3000);
});

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);
    
    if(age >= 100){
        resultElement.textContent = `You are TOO OLD to enter this site`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter. You were just born.`
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}


