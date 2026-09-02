// How to accept user input 

// 1. EASY WAY = Window prompt
// 2. PROFESSIONAL WAY = HTML textbox

/*
Easy way

let username;

username = window.prompt("Whats your username?");

console.log(username);
*/

let username;                                                           //create username variable with no value

document.getElementById("mySubmit").onclick = function(){               // get the submit button and add a function that gets called on click
    username = document.getElementById("myText").value;                 // username is = to the value of the my text input element
    document.getElementById("myH1").textContent = `Hello ${username}`   //get the h1 element and print hello username 
}

