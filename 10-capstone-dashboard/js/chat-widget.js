/* =========================================================
   CAPSTONE — Ask Claude Widget
   Trimmed-down version of Project 8. Copy your working logic
   over from there. Wrapped in an IIFE — see weather-widget.js
   for why that matters here.
   ========================================================= */

(function () {
  const baseURL = "https://georgian.polaristechservices.com";
  const studentApiKey = ""; // TODO: fill in your student ID
  const maxTokens = 500; // smaller for a dashboard widget

  const chatWindow = document.querySelector("#chat-window");
  const chatForm = document.querySelector("#chat-form");
  const chatInput = document.querySelector("#chat-input");

  let conversationHistory = [];

  function appendMessage(role, text) {
    // TODO: adapt from Project 8
  }

  async function sendChatMessage(userText) {
    // TODO: adapt from Project 8
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO
  }

  chatForm.addEventListener("submit", handleSubmit);
})();
