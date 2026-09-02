// RANDOM NUMBER GENERATOR

/*
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min)) + min; gives random number between 50 and 100 
*/

// let randomNum = Math.floor(Math.random() * 100) + 1; gives random number between 1 and 100 and gets rid of decimals

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){ //function that runs when button is clicked and rolls 3 six sided dice
    randomNum1 = Math.floor(Math.random() * max) + min; //random number between 1 and 6
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1; // displays the number in the corresponding label
    label2.textContent = randomNum1;
    label3.textContent = randomNum1;
}