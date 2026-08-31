/* =========================================================
   CAPSTONE — To-Do Widget
   Trimmed-down version of Project 2. Copy your working logic
   over from there. Wrapped in an IIFE — see weather-widget.js
   for why that matters here.
   ========================================================= */

(function () {
  const taskForm = document.querySelector("#task-form");
  const taskInput = document.querySelector("#task-input");
  const taskList = document.querySelector("#task-list");

  let tasks = [];
  let nextId = 1;

  function handleAddTask(event) {
    event.preventDefault();
    // TODO: adapt from Project 2
  }

  function renderTasks() {
    // TODO: adapt from Project 2 (you can drop the filter buttons
    // for this smaller widget version, or keep them if you'd like)
  }

  taskForm.addEventListener("submit", handleAddTask);

  // TODO: event delegation on taskList for toggling/deleting tasks
})();
