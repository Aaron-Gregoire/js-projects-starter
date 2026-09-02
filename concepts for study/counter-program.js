// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");         //Gather DOM elements
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){           //when the increase button is clicked it increases the count by 1
    count++;
    countLabel.textContent = count;         //sets the count label text to the count
}
decreaseBtn.onclick = function(){           //when the decrease button is clicked it decreases the count by 1
    count--;
    countLabel.textContent = count;         //sets the count label text to the count
}
resetBtn.onclick = function(){              //when the reset button is clicked it changes the count back to 0 
    count = 0;
    countLabel.textContent = count;         //sets the count label text to the count
}