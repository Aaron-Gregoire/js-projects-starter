// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;


// let age = 21;

// let message = age >= 18 ? "youre an adult" : "youre a child";

// console.log(message);

// let time = 16;

// let greeting = time < 12 ? "goodmorning" : "good afternoon";

// console.log(greeting);

// let isStudent = true;

// let message = isStudent ? "you are a student" : "you are not a student";

// console.log(message)

let purchaseAmount = 125;

let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(`your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);