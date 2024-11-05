//ternary operator == a shortcut to if else statement

// let age =21;
// let message = age >= 18 ? "You are an adult": "You are minor";

   // condition ? codeIfTrue : codeIfFalse
//    console.log(message);



//SWITCH

const day = 7; 

switch (day) {
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}








// string methods = allow you to manipulate and work with text (strings)

let userName = "Bro Code";
let phoneNumber = "123-456-7890";

//console.log(userName.length);


//console.log(userName.charAt(0));
    //character at particular index


//console.log(userName.indexOf("o"));
          //first occurrence of o

//console.log(userName.lastIndexOf("o"));
    //last occurrence of o

//userName = userName.trim();
     // to remove white space

//userName = userName.toUpperCase();


//userName = userName.toLowerCase();


//userName = userName.repeat(3);


//let result = userName.startsWith(" ");


//let result = userName.endsWith(" ");


//let result = userName.includes(" ");


//phoneNumber = phoneNumber.replaceAll("-", "");


//phoneNumber = phoneNumber.padStart(15, "0");


//phoneNumber = phoneNumber.padEnd(15, "0");



console.log(phoneNumber);


//STRING SLICING
// creating a substring from a portion of string 
//string.slice(start,end)

// const fullName = "Bro Code";

// let firstName = fullName.slice(0,3);
// console.log(firstName);

// let lastCharacter = fullName.slice(-1);

let firstName = fullName.slice(0 , fullName.indexOf(""))