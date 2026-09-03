// string methods = allow you to manipulate an work with text (Strings)

let userName = "Aaron";

userName.charAt(0);                  // get character at specific index

userName.indexOf("o");              // get the first occurance of o in the string 
userName.lastIndexOf("o");         // get the last occruance of an o in the string 

userName.length;                   // will return the length of a string      not a string method but very simillar

userName = userName.trim();       // removes whitespace before and after string

userName.toUpperCase();          // makes all characters uppercase
userName.toLowerCase();          // makes all characters lowercase

userName = userName.repeat(3);   // repeats the string a number of times based on the number parameter

let result = userName.startsWith("A");  // will return true if it matches the first character in the string otherwise will return false can be good for if statements
let results = userName.endsWith("n");   // will return true if it matches the last character in the string otherwise will return false can be good for if statements

let include = userName.includes("A")   // will return true if the string includes what is in the () 

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "/") //replaces all of the first parameter with the second

phoneNumber = phoneNumber.padStart(15, "0")  // will pad the string with the assigned character at the start of the string until its the designated number of characters long
phoneNumber = phoneNumber.padEnd(15, "0")   // will pad the string with the assigned character at the end of the string until its the designated number of characters long