/* =========================================================
   PROJECT 6: Vehicle Fleet Simulator — OOP layer
   Concepts: constructor functions, prototypal inheritance
   (This matches the style from your Car/Person lessons —
   constructor functions + `.prototype`, not ES6 classes,
   so you get real practice with how JS inheritance works
   under the hood.)
   ========================================================= */

// STEP 1: Build the base constructor function `Vehicle`.
// It should set `this.make`, `this.model`, and `this.mileage = 0`.
function Vehicle(make, model) {
  // TODO
}

// STEP 2: Add a `describe` method to Vehicle.prototype that returns a string
// like "2024 Honda Civic — 0 miles". Methods go on the prototype (not inside
// the constructor) so every instance shares the same function instead of
// each one getting its own copy.
Vehicle.prototype.describe = function () {
  // TODO
  return "";
};

// STEP 3: Add a `drive(miles)` method to Vehicle.prototype that adds
// to `this.mileage`.
Vehicle.prototype.drive = function (miles) {
  // TODO
};

/* ---------- Car: inherits from Vehicle ---------- */

// STEP 4: Build the Car constructor. It should call Vehicle's constructor
// using `Vehicle.call(this, make, model)` so it gets make/model/mileage
// set up the same way, then add anything Car-specific (e.g. `this.doors = 4`).
function Car(make, model) {
  // TODO: Vehicle.call(this, make, model);
  // TODO: this.doors = 4;
}

// STEP 5: Wire up the prototype chain so Car instances inherit Vehicle's
// methods (describe, drive). This is the classic pattern:
//   Car.prototype = Object.create(Vehicle.prototype);
//   Car.prototype.constructor = Car;
// TODO

// STEP 6: Give Car its own method that Truck/Motorcycle don't have,
// e.g. `honk()` that returns "Beep beep!"
// TODO: Car.prototype.honk = function () { ... };

/* ---------- Truck: inherits from Vehicle ---------- */

// STEP 7: Repeat the same pattern for Truck. Give it something unique,
// like `this.towCapacity` and a `tow()` method.
function Truck(make, model, towCapacity) {
  // TODO
}
// TODO: set up Truck.prototype = Object.create(Vehicle.prototype); etc.

/* ---------- Motorcycle: inherits from Vehicle ---------- */

// STEP 8: Same again for Motorcycle. Give it something like
// `this.hasSidecar = false` and a `wheelie()` method.
function Motorcycle(make, model) {
  // TODO
}
// TODO: set up the prototype chain

/* ---------- STRETCH GOALS ----------
   - Override `describe()` in Car/Truck/Motorcycle to include the
     type-specific detail (e.g. tow capacity), calling the parent's
     describe() first with Vehicle.prototype.describe.call(this)
   - Add a `ElectricCar` that inherits from Car (a THIRD level of
     inheritance) with a `batteryLevel` property
------------------------------------- */
