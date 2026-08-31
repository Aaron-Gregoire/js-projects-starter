/* =========================================================
   PROJECT 9: Location-Aware Journal
   Concepts: Geolocation API, fetch, arrays of objects, dates
   ========================================================= */

// STEP 1: Grab DOM elements
const locateBtn = document.querySelector("#locate-btn");
const locationStatus = document.querySelector("#location-status");
const entryForm = document.querySelector("#entry-form");
const entryText = document.querySelector("#entry-text");
const entriesContainer = document.querySelector("#entries");

// STEP 2: State
let entries = []; // each entry: { id, text, timestamp, coords: {lat, lon} | null, placeName: string | null }
let currentCoords = null; // set when the user taps "Tag My Location"

// STEP 3: Write getLocation() using the Geolocation API:
//   navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
//   - on success: store { latitude, longitude } from position.coords into
//     currentCoords, update locationStatus with a confirmation message
//   - on error: show a message explaining permission was denied or location
//     is unavailable (don't just fail silently)
function getLocation() {
  // TODO
}

// TODO: locateBtn.addEventListener("click", getLocation);

// STEP 4 (optional but recommended): Write an async function
// `reverseGeocode(lat, lon)` that calls a free reverse-geocoding API
// to turn coordinates into a human-readable place name, e.g.:
//   https://geocoding-api.open-meteo.com/v1/reverse?latitude=LAT&longitude=LON
// (check the response shape in the browser/devtools — it may vary)
// This is optional: you can just display raw lat/lon if you'd rather
// keep this project simpler.
async function reverseGeocode(lat, lon) {
  // TODO
  return null;
}

// STEP 5: Handle the journal form submission
//   - preventDefault()
//   - build an entry object: text, a `new Date()` timestamp, and
//     currentCoords if it's been set (null otherwise)
//   - push to `entries`, clear the textarea and currentCoords
//   - re-render
function handleAddEntry(event) {
  // TODO
}

// TODO: entryForm.addEventListener("submit", handleAddEntry);

// STEP 6: Render function — show newest entries first.
// Format the timestamp nicely (toLocaleString() is fine to start).
// If an entry has coords, show them (or the resolved place name).
function renderEntries() {
  // TODO
}


/* ---------- STRETCH GOALS ----------
   - Persist entries in localStorage
   - Show entries on a simple map (e.g. embed an OpenStreetMap iframe
     using the lat/lon)
   - Let the user delete or edit an entry
------------------------------------- */
