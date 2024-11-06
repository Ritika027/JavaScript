//Function = a section of reusable code

// function happyBirthday(username,age){
    //username and age are parameters
    //order do matter
//     console.log("Happy Birthday to you");
//     console.log("Happy Birthday to you");
//     console.log(`Happy Birthday to dear ${username}`);
//     console.log("Happy Birthday to you");
//     console.log(`you are ${age}  years old`);
// }

// happyBirthday("BroCode",25);
// happyBirthday("abc" , 30);
// happyBirthday("ztx" , 3);
//arguments

function add(x,y){
    let result = x+y;
    return result;
}
console.log(add(2,3));

// variable scope = where variable is accessible
//local or global


//ARRAY
let fruits = ["Apple" , "orange" , "banana"];

fruits.push("grapes"); //this is to add element in array
fruits.pop(); // to remove

fruits.shift();


let index = fruits.indexOf("apple");   // to find index

console.log(fruits[0]);   //to find fruit at particular index



