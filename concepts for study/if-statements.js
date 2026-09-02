// IF STATEMENTS = if condition is true, execute some code
//                 if not, do something else

/*
let age = 13;

if(age >= 18){
    console.log("you are old enough to enter this site");
}
else{
    console.log("you must be 18+ to enter this site");
}
*/

/*
let time = 14;

if(time < 12){
    console.log("good morning");
}
else{
    console.log("good afternoon");
}
*/

/*
let isStudent = false;

if(isStudent){
    console.log("you are a student");
}
else{
    console.log("you are not a student");
}
*/

// Nested if statment
/*
let age = 15;
let hasLiscence = false;

if(age >= 16){
    console.log("you are old enough to drive");

    if(hasLiscence){
        console.log("you have your liscence")
    }
    else{
        console.log("you do not have your liscence yet");
    }
}
else{
    console.log("you must be 16+ to have a liscence");
}
*/

//else if statments

const myText = document.getElementById("myText");                   //get DOM Elements
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;                                                            //leave age undefined

mySubmit.onclick = function() {                                     //function that is run on click of submit button
    age = myText.value;                                             //age is the value of the myText input
    age = Number(age);                                              //convert it to an int
    if(age >= 100){
        resultElement.textContent = "you are too old to enter this site";
    }
    else if(age == 0){
        resultElement.textContent = "you cant enter you were just born";
    }
    else if(age >= 18){
        resultElement.textContent = "you are old enough to enter this site";
    }
    else if(age < 0){
        resultElement.textContent = "your age cant be below 0";
    }
    else{
        resultElement.textContent = "you are not old enough to enter this site";
    }
}


