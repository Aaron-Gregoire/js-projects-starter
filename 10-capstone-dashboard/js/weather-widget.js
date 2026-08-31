/* =========================================================
   CAPSTONE — Weather Widget
   This is a trimmed-down version of Project 7. Copy your working
   logic over from there once it's done.

   IMPORTANT: This whole file is wrapped in an IIFE (Immediately
   Invoked Function Expression). That means every variable declared
   in here is LOCAL to this file and can't collide with variables
   of the same name in the other widget files (e.g. every widget
   might want a variable called `form` or `data` — the IIFE keeps
   them from stepping on each other). Keep this pattern in the
   other widget files too.
   ========================================================= */

(function () {
  const cityForm = document.querySelector("#city-form");
  const cityInput = document.querySelector("#city-input");
  const weatherResult = document.querySelector("#weather-result");

  // TODO: paste in / adapt getCoordinates(), getWeather(), and
  // interpretWeatherCode() from Project 7

  async function handleSubmit(event) {
    event.preventDefault();
    // TODO: fetch + render into weatherResult
  }

  cityForm.addEventListener("submit", handleSubmit);
})();
