/* =========================================================
   PROJECT 2: Interactive To-Do List
   Concepts: DOM manipulation, events (incl. delegation), arrays
   ========================================================= */

// STEP 1: Grab your DOM elements
const taskForm = document.querySelector("#task-form"); // Find the form element so we can listen for submit events.
const taskInput = document.querySelector("#task-input"); // Find the text input where the user types a new task.
const taskList = document.querySelector("#task-list"); // Find the list element that will hold all tasks.
const taskSummary = document.querySelector("#task-summary"); // Find the text that shows how many tasks are complete.
const filterButtons = document.querySelectorAll(".filter-btn"); // Find all filter buttons like All, Active, and Completed.

// STEP 2: This array is your "source of truth" for the app's data.
// Never trust the DOM to hold your state — always re-render from this array.
// Each task should look like: { id: 1, text: "Buy milk", completed: false }
let tasks = []; // This array stores every task object in the app.
let nextId = 1; // This number increases so each task gets a unique id.
let currentFilter = "all"; // The current filter value: "all", "active", or "completed".

// STEP 3: Handle form submission
//   - prevent the default page reload
//   - read and trim the input value (ignore empty submissions)
//   - push a new task object onto `tasks`
//   - clear the input
//   - re-render the list
function handleAddTask(event) {
  event.preventDefault(); // Stop the form from reloading the page when it is submitted.

  const text = taskInput.value.trim(); // Read the user's input and remove extra spaces around it.
  if (!text) return; // If the input is empty, do nothing.

  tasks.push({ id: nextId++, text, completed: false }); // Add a new task to the array with a unique id and an incomplete status.
  taskInput.value = ""; // Clear the input field after adding the task.
  renderTasks(); // Rebuild the task list based on the updated tasks array.
}
taskForm.addEventListener("submit", handleAddTask); // Run handleAddTask whenever the form is submitted.

// STEP 4: Render function — the single place that draws tasks to the page.
// Call this any time `tasks` changes.
//   - clear out taskList
//   - filter `tasks` based on currentFilter
//   - for each task, create an <li> with a checkbox, a <span> for the text,
//     and a delete button
//   - update taskSummary with something like "3 of 5 tasks completed"
function renderTasks() {
  taskList.innerHTML = ""; // Clear the list before rebuilding it from the tasks array.

  const visibleTasks = tasks.filter(task => { // Create a smaller array of tasks that match the selected filter.
    if (currentFilter === "active") {
      return task.completed === false; // Keep only unfinished tasks.
    }
    if (currentFilter === "completed") {
      return task.completed === true; // Keep only finished tasks.
    }
    return true; // For "all", keep every task.
  });

  visibleTasks.forEach(task => {
    const list = document.createElement("li"); // Create one <li> for the current task.

    const checkbox = document.createElement("input"); // Create an input element for the checkbox.
    checkbox.type = "checkbox"; // Make the input a checkbox.
    checkbox.checked = task.completed; // Set the checked state from the task's completed property.
    checkbox.dataset.id = task.id; // Store the task id on the checkbox so we can match it later.

    const span = document.createElement("span"); // Create a text container for the task description.
    span.textContent = task.text; // Put the task's text in the span.

    const dltbtn = document.createElement("button"); // Create the delete button for this task.
    dltbtn.textContent = "Delete"; // Show the button label.
    dltbtn.dataset.id = task.id; // Save the task id on the button so it can be deleted later.

    list.appendChild(checkbox); // Add the checkbox to the list item.
    list.appendChild(span); // Add the task text to the list item.
    list.appendChild(dltbtn); // Add the delete button to the list item.
    taskList.appendChild(list); // Add the finished list item to the list in the DOM.
  });

  const completedCount = tasks.filter(task => task.completed).length; // Count how many tasks are currently complete.
  const totalCount = tasks.length; // Count how many tasks exist total.
  taskSummary.textContent = `${completedCount} of ${totalCount} tasks completed`; // Update the status text shown to the user.
}

// STEP 5: Use EVENT DELEGATION instead of adding a listener to every task.
// Attach ONE click listener to taskList. Inside it, check what was clicked
// (event.target) to figure out whether to toggle "completed" or delete
// the task. This matters because tasks are created dynamically — listeners
// added directly to <li> elements won't exist until render time.
taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") { // If the user clicked the Delete button.
    const taskId = Number(event.target.dataset.id); // Read the task id from the button.
    tasks = tasks.filter(task => task.id !== taskId); // Remove the matching task from the tasks array.
    renderTasks(); // Rebuild the list after deleting the task.
  }

  if (event.target.type === "checkbox") { // If the user clicked a checkbox.
    const taskId = Number(event.target.dataset.id); // Read the task id from the checkbox.
    tasks = tasks.map(task => { // Loop through all tasks and update the matching one.
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }; // Toggle the task's completed state.
      }
      return task; // Leave all other tasks alone.
    });
    renderTasks(); // Re-render the list so the checkbox states and summary update.
  }
});

// STEP 6: Wire up the filter buttons
//   - clicking a filter button should update currentFilter
//   - add/remove the "active-filter" class to show which filter is selected
//   - re-render the list
filterButtons.forEach(button => {
  button.addEventListener("click", () => { // Listen for clicks on each filter button.
    currentFilter = button.dataset.filter; // Update the active filter based on the button clicked.
    filterButtons.forEach(btn => btn.classList.remove("active-filter")); // Remove the highlighted style from all filters.
    button.classList.add("active-filter"); // Highlight the selected filter button.
    renderTasks(); // Re-render the list according to the new filter.
  });
});

renderTasks(); // Run the initial render so the page starts with the current task data on screen.

/* ---------- STRETCH GOALS ----------
   - Persist tasks with localStorage so they survive a page refresh
   - Add an "edit task" feature (double-click to edit text)
   - Add drag-and-drop reordering
------------------------------------- */
