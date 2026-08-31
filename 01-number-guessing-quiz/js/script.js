/* =========================================================
   PROJECT 1: Number Guessing Game + Quiz App
   Concepts: variables, conditionals, loops, DOM updates
   ========================================================= */

/* ---------- PART A: Number Guessing Game ---------- */

// STEP 1: Grab the DOM elements you'll need
const guessInput = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-btn");
const guessFeedback = document.querySelector("#guess-feedback");
const guessCount = document.querySelector("#guess-count");

// STEP 2: Generate a random target number between 1 and 100
// TODO: use Math.random() and Math.floor() to create `targetNumber`
let targetNumber = Math.floor(Math.random() * 100) + 1; // TODO



// STEP 3: Track how many guesses the player has made
let guesses = 0; // TODO: increment this each time the player guesses

// STEP 4: Add a click listener to guessBtn that:
//   - reads the value from guessInput (remember it comes in as a string!)
//   - increments the guess counter
//   - compares the guess to targetNumber
//   - updates guessFeedback with "Too high", "Too low", or "Correct!"
//   - updates guessCount to show how many guesses so far
// TODO: implement this function and attach it to guessBtn
function handleGuess() {
  // TODO
  let userGuess = Number(guessInput.value);
  guesses++;
  if (userGuess > targetNumber){
    guessFeedback.textContent = "Too High";
  } else if (userGuess < targetNumber){
    guessFeedback.textContent = "Too Low";
  } else{
    guessFeedback.textContent = "correct";
  }
  guessCount.textContent = guesses;
  
}

// TODO: guessBtn.addEventListener("click", handleGuess);
guessBtn.addEventListener("click", handleGuess)

/* ---------- PART B: Quiz Mode ---------- */

// STEP 5: Build an array of question objects.
// Each question needs: a prompt, an array of answer options, and the correct answer.
// TODO: fill in at least 5 questions
const quizQuestions = [
   {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Method",
      "Display Output Mode"
    ],
    answer: "Document Object Model"
  },

  {
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: [
      "let",
      "const",
      "var"
    ],
    answer: "const"
  },

  {
    question: "Which method is used to select an HTML element by its ID?",
    options: [
      "document.querySelector()",
      "document.createElement()",
      "document.addEventListener()"
    ],
    answer: "document.querySelector()"
  },

  {
    question: "Which method adds an event handler to an HTML element?",
    options: [
      "addEventListener()",
      "addClass()",
      "createEvent()"
    ],
    answer: "addEventListener()"
  },

  {
    question: "Which method creates a new HTML element using JavaScript?",
    options: [
      "document.createElement()",
      "document.newElement()",
      "document.makeElement()"
    ],
    answer: "document.createElement()"
  }
];

// STEP 6: Track quiz state
let currentQuestionIndex = 0;
let score = 0;

// STEP 7: Grab the quiz DOM elements
const quizSection = document.querySelector("#quiz-game");
const quizQuestionEl = document.querySelector("#quiz-question");
const quizOptionsEl = document.querySelector("#quiz-options");
const quizFeedbackEl = document.querySelector("#quiz-feedback");
const quizScoreEl = document.querySelector("#quiz-score");
const nextBtn = document.querySelector("#next-question-btn");
const startQuizBtn = document.querySelector("#start-quiz-btn");
const guessGame = document.querySelector("#guess-game");

// STEP 8: Write a function that renders the current question:
//   - set quizQuestionEl's text to the current question's prompt
//   - clear out quizOptionsEl, then create a button for each option
//   - each option button, when clicked, should check the answer
function renderQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  quizQuestionEl.textContent = currentQuestion.question ;

  quizOptionsEl.textContent = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("quiz-options");
    button.addEventListener("click", () => checkAnswer(option));
    quizOptionsEl.appendChild(button);
  });
}

// STEP 9: Write a function that handles an answer being selected:
//   - compare the selected option to the correct answer
//   - update score if correct
//   - show feedback (use the .correct / .incorrect CSS classes)
//   - reveal the "Next Question" button
function checkAnswer(selectedOption) {
  // TODO
  currentQuestion = quizQuestions[currentQuestionIndex];

  quizFeedbackEl.classList.remove("correct");
  quizFeedbackEl.classList.remove("incorrect");

  if(selectedOption == currentQuestion.answer){
    score++;
    quizFeedbackEl.textContent = "Correct"
    quizFeedbackEl.classList.add("correct")
  }else{
    quizFeedbackEl.textContent = "Incorrect"
    quizFeedbackEl.classList.add("incorrect")
  }
  nextBtn.hidden = false
}


// STEP 10: Write a function to advance to the next question
//   - increment currentQuestionIndex
//   - if there are no questions left, show a final score message instead
//   - otherwise call renderQuestion() again
function nextQuestion() {
  // TODO
  currentQuestionIndex++;
  if(currentQuestionIndex >= quizQuestions.length){
    quizScoreEl.textContent = "final Score: " + score
  }else{
    quizFeedbackEl.textContent = ""
    renderQuestion();
  }
}

// STEP 11: Wire up startQuizBtn to hide the guessing game, show the quiz
// section, and call renderQuestion() for the first time.
// TODO: startQuizBtn.addEventListener("click", () => { ... });
startQuizBtn.addEventListener("click", () => {
  guessGame.hidden = true;
  quizSection.hidden = false;
  currentQuestionIndex = 0;
  score = 0;
  renderQuestion();
});
// TODO: nextBtn.addEventListener("click", nextQuestion);
nextBtn.addEventListener("click", nextQuestion)

/* ---------- STRETCH GOALS ----------
   - Limit the number guessing game to a max number of tries
   - Add a timer to each quiz question
   - Store high scores using an array and display a "best score"
------------------------------------- */
