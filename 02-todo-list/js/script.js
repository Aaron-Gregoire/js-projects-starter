/* =========================================================
   PROJECT 2: Interactive To-Do List
   Concepts: DOM manipulation, events (incl. delegation), arrays
   ========================================================= */

// STEP 1: Grab your DOM elements
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskSummary = document.querySelector("#task-summary");
const filterButtons = document.querySelectorAll(".filter-btn");

// STEP 2: This array is your "source of truth" for the app's data.
// Never trust the DOM to hold your state — always re-render from this array.
// Each task should look like: { id: 1, text: "Buy milk", completed: false }
let tasks = [];
let nextId = 1;
let currentFilter = "all"; // "all" | "active" | "completed"

// STEP 3: Handle form submission
//   - prevent the default page reload
//   - read and trim the input value (ignore empty submissions)
//   - push a new task object onto `tasks`
//   - clear the input
//   - re-render the list
// TODO: implement and attach to taskForm's "submit" event
function handleAddTask(event) {
  // TODO
}

// STEP 4: Render function — the single place that draws tasks to the page.
// Call this any time `tasks` changes.
//   - clear out taskList
//   - filter `tasks` based on currentFilter
//   - for each task, create an <li> with a checkbox, a <span> for the text,
//     and a delete button
//   - update taskSummary with something like "3 of 5 tasks completed"
function renderTasks() {
  // TODO
}

// STEP 5: Use EVENT DELEGATION instead of adding a listener to every task.
// Attach ONE click listener to taskList. Inside it, check what was clicked
// (event.target) to figure out whether to toggle "completed" or delete
// the task. This matters because tasks are created dynamically — listeners
// added directly to <li> elements won't exist until render time.
// TODO: taskList.addEventListener("click", (event) => { ... });

// STEP 6: Wire up the filter buttons
//   - clicking a filter button should update currentFilter
//   - add/remove the "active-filter" class to show which filter is selected
//   - re-render the list
// TODO: filterButtons.forEach(btn => btn.addEventListener("click", ...));


/* ---------- STRETCH GOALS ----------
   - Persist tasks with localStorage so they survive a page refresh
   - Add an "edit task" feature (double-click to edit text)
   - Add drag-and-drop reordering
------------------------------------- */
