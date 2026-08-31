/* =========================================================
   PROJECT 8: "Ask Claude" Chat Widget
   Concepts: fetch (POST with headers), async/await, loading
             states, error handling, rendering a message list
   Builds on your wk13 claude-api.js starter.
   ========================================================= */

/* API reference (from your course materials):
   Base URL: https://georgian.polaristechservices.com
   POST /api/claude/messages
     Headers: X-Student-API-Key: your_student_id, Content-Type: application/json
     Body: { model: "claude-3-5-sonnet-20241022", max_tokens: 1000, messages: [...] }
     Response: { content: [{ text: "..." }], usage: { input_tokens, output_tokens } }
   GET /api/claude/status
     Headers: X-Student-API-Key: your_student_id
     Response: { student_id, student_name, tokens_used, tokens_allocated, tokens_remaining, is_enabled } */

// STEP 1: Configuration
const baseURL = "https://georgian.polaristechservices.com";
const studentApiKey = ""; // TODO: fill in your student ID
const maxTokens = 1000;

// STEP 2: Grab DOM elements
const chatWindow = document.querySelector("#chat-window");
const chatForm = document.querySelector("#chat-form");
const chatInput = document.querySelector("#chat-input");
const sendBtn = document.querySelector("#send-btn");
const tokenUsageEl = document.querySelector("#token-usage");
const chatError = document.querySelector("#chat-error");

// STEP 3: Keep the full conversation history in an array, in the exact
// shape the API expects: [{ role: "user", content: "..." }, { role: "assistant", content: "..." }]
// Sending the whole history each time (not just the latest message) is
// what lets Claude "remember" earlier turns in the conversation.
let conversationHistory = [];

// STEP 4: Write a function to add a message bubble to the chat window.
//   - role is "user" or "assistant" (used as a CSS class, see styles.css)
//   - create a div, set its class and text, append to chatWindow
//   - scroll chatWindow to the bottom so the latest message is visible
function appendMessage(role, text) {
  // TODO
}

// STEP 5: Write an async function `sendChatMessage(userText)`:
//   - append the user's message to the UI and to conversationHistory
//   - show a temporary "Claude is thinking..." loading bubble
//   - POST to `${baseURL}/api/claude/messages` with the required headers
//     and a body containing model, max_tokens, and the full conversationHistory
//   - on success: remove the loading bubble, append Claude's reply
//     (response.content[0].text), and push it to conversationHistory too
//   - on failure: remove the loading bubble and show the error in chatError
//   - disable the send button while the request is in flight, re-enable after
async function sendChatMessage(userText) {
  // TODO
}

// STEP 6: Write an async function `checkTokenUsage()` that GETs
// `${baseURL}/api/claude/status` and updates tokenUsageEl with
// something like "Tokens used: 340 / 10000"
async function checkTokenUsage() {
  // TODO
}

// STEP 7: Handle form submission
//   - preventDefault()
//   - read and trim chatInput's value (ignore empty submissions)
//   - clear the input
//   - call sendChatMessage(), then checkTokenUsage() to refresh the count
function handleSubmit(event) {
  // TODO
}

// TODO: chatForm.addEventListener("submit", handleSubmit);

// STEP 8: Call checkTokenUsage() once when the page loads so the
// usage display isn't empty before the first message is sent
// TODO: checkTokenUsage();


/* ---------- STRETCH GOALS ----------
   - Add a "Clear conversation" button that resets conversationHistory
   - Persist the conversation in localStorage across page refreshes
   - Show a warning banner when tokens_remaining gets low
------------------------------------- */
