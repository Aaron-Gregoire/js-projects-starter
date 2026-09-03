// SWITCH = can be an efficient replacement to many else if statements

/* EXAMPLE OF WHAT WE CAN REPLACE WITH SWITCH
let day = 1;

if(day ==1){
    console.log("it is monday");
}
else if(day == 2){
    console.log("it is tuesday");
}
else if(day == 3){
    console.log("it is wednesday");
}
else if(day == 4){
    console.log("it is thursday");
}
else if(day == 5){
    console.log("it is friday");
}
else if(day == 6){
    console.log("it is saturday");
}
else if(day == 7){
    console.log("it is sunday");
}
else{
    console.log(`${day} is not a day`);
}
    */


// EXAMPLE 1 simple switch statment based on the value of day

let day = 1;

switch(day){
    case 1: 
        console.log("it is monday");
        break;                            // break is to break out of the switch once we have a matching case if it isnt here then it will execute any code after it until it finds a break
    case 2: 
        console.log("it is tuesday");
        break;
    case 3: 
        console.log("it is wednesday");
        break;
    case 4: 
        console.log("it is thursday");
        break;
    case 5: 
        console.log("it is friday");
        break;
    case 6: 
        console.log("it is saturday");
        break;
    case 7: 
        console.log("it is sunday");
        break;
    default:                                // default is if there are no matches 
        console.log(`${day} is not a day`);
}

// EXAMPLE 2 conditional switch satement that determines the case based on true or false

let testScore = 92;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}