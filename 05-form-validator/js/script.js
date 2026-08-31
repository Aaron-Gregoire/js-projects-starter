/* =========================================================
   PROJECT 5: Form Validator + Dynamic Feedback
   Concepts: conditionals, regex basics, events, DOM feedback
   ========================================================= */

// STEP 1: Grab the form and all the inputs
const form = document.querySelector("#signup-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirm-password");
const successMessage = document.querySelector("#form-success");

// STEP 2: A small regex for a "good enough" email check.
// (Real email validation is notoriously hard — this is a reasonable approximation.)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// STEP 3: Write a validateName() function:
//   - error if empty or shorter than 2 characters
//   - show/clear the error message in #name-error
//   - add/remove the "invalid"/"valid" class on the input
//   - return true if valid, false if not
function validateName() {
  // TODO
  return true;
}

// STEP 4: Write validateEmail() following the same pattern,
// using emailPattern.test(value)
function validateEmail() {
  // TODO
  return true;
}

// STEP 5: Write validatePassword():
//   - require at least 8 characters
//   - also update #password-strength with "Weak" / "Medium" / "Strong"
//     based on length + whether it has a number and a symbol
//     (this part doesn't need to block submission, just give feedback)
function validatePassword() {
  // TODO
  return true;
}

// STEP 6: Write validateConfirmPassword() — check it matches passwordInput's value
function validateConfirmPassword() {
  // TODO
  return true;
}

// STEP 7: Add "input" (or "blur") listeners on each field so the user gets
// LIVE feedback as they type, not just when they submit.
// TODO: nameInput.addEventListener("input", validateName);
// TODO: emailInput.addEventListener("input", validateEmail);
// TODO: passwordInput.addEventListener("input", validatePassword);
// TODO: confirmInput.addEventListener("input", validateConfirmPassword);

// STEP 8: Handle form submission
//   - preventDefault()
//   - run ALL the validators (don't short-circuit — you want every field
//     to show its error if invalid)
//   - only show the success message if everything passed
function handleSubmit(event) {
  // TODO
}

// TODO: form.addEventListener("submit", handleSubmit);


/* ---------- STRETCH GOALS ----------
   - Add a "show password" toggle button
   - Debounce validation so it doesn't fire on every single keystroke
   - Disable the submit button until the whole form is valid
------------------------------------- */
