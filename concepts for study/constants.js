// const = a variable that cant be changed 

//capitalize const variables if they are bools or numbers not strings

const PI = 3.14159; //we dont want this to change so it is const
let radius;
let circumfrence;


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value                    //make the value of radius the value of the input
    radius = Number(radius);                                            // change it from string to number
    circumfrence = 2 * PI * radius;                                     //circumfrence is equal to 2 * PI * radius
    document.getElementById("myH3").textContent = circumfrence + "cm";  //make the h3 the circumference 
}
