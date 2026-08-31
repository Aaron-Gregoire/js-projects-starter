/* =========================================================
   PROJECT 6: Vehicle Fleet Simulator — UI layer
   This file wires the DOM up to the Vehicle/Car/Truck/Motorcycle
   constructors defined in vehicles.js (loaded before this file).
   ========================================================= */

// STEP 1: Grab DOM elements
const addVehicleForm = document.querySelector("#add-vehicle-form");
const vehicleTypeSelect = document.querySelector("#vehicle-type");
const vehicleMakeInput = document.querySelector("#vehicle-make");
const vehicleModelInput = document.querySelector("#vehicle-model");
const fleetList = document.querySelector("#fleet-list");

// STEP 2: This array holds the actual Vehicle/Car/Truck/Motorcycle
// instances (objects), not plain data — because their behavior
// (describe, drive, honk...) lives on the prototype.
const fleet = [];

// STEP 3: Handle the form submission
//   - preventDefault()
//   - read the selected type + make + model
//   - use an if/else (or switch) to create the right kind of object:
//     new Car(...), new Truck(...), or new Motorcycle(...)
//   - push it into `fleet`
//   - reset the form and re-render
function handleAddVehicle(event) {
  // TODO
}

// TODO: addVehicleForm.addEventListener("submit", handleAddVehicle);

// STEP 4: Render function — loop over `fleet` and create a card for each.
// Use `vehicle.describe()` for the main text, and `vehicle.constructor.name`
// (or check `instanceof`) to show a type tag like "CAR" / "TRUCK".
// Add a "Drive 10 miles" button per card that calls `vehicle.drive(10)`
// and re-renders so the mileage updates on screen.
function renderFleet() {
  // TODO
}


/* ---------- STRETCH GOALS ----------
   - Add a "type-specific action" button per card (honk / tow / wheelie)
     that calls the right method based on what kind of vehicle it is
   - Show fleet totals: total vehicles, total combined mileage
------------------------------------- */
