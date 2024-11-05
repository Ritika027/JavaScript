// Method Chaining = Calling one method after another
//                                    in one continuous line of code.

let username = window.prompt("Enter your username: ");

// ----- NO METHOD CHAINING -----
/*
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);
*/

// ----- METHOD CHAINING -----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);

// logical operators =  used to combine or manipulate Boolean values 
//                                    (true or false)

// AND = &&
// OR  = ||
// NOT = !

//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator

const PI = 3.14;

if(PI === "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}

// while loop = repeat some code WHILE some condition is true

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}




// for loop = repeat some code a LIMITED amount of times

// ------- INCREMENT -------
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// ------- DECREMENT -------
for(let i = 10; i > 0; i--){
    console.log(i);
}