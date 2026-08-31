/* =========================================================
   CAPSTONE — Device Status Widget
   New logic (not a copy of an earlier project), using the
   Battery Status API and Device Orientation API from your
   lesson-13/wk13 material. Wrapped in an IIFE — see
   weather-widget.js for why that matters here.

   Note: the Battery Status API is deprecated/unsupported in some
   browsers (notably Firefox and Safari) for privacy reasons — if
   navigator.getBattery doesn't exist, show a friendly fallback
   message instead of letting the page error out.
   ========================================================= */

(function () {
  const batteryStatusEl = document.querySelector("#battery-status");
  const orientationStatusEl = document.querySelector("#orientation-status");

  // STEP 1: Write an async function to display battery info.
  //   - check if navigator.getBattery exists; if not, show
  //     "Battery API not supported in this browser"
  //   - otherwise, await navigator.getBattery() and read .level (0-1)
  //     and .charging (boolean)
  //   - update batteryStatusEl with something like "Battery: 82% (charging)"
  //   - bonus: also listen for the battery's "levelchange" event so the
  //     widget updates live
  async function showBatteryStatus() {
    // TODO
  }

  // STEP 2: Listen for device orientation events.
  //   window.addEventListener("deviceorientation", (event) => { ... })
  //   `event` has .alpha, .beta, .gamma — display them (rounded) in
  //   orientationStatusEl. Note this typically only fires on mobile
  //   devices/browsers that support it, and on iOS Safari requires a
  //   permission prompt (DeviceOrientationEvent.requestPermission()).
  //   Show a fallback message if the event never fires after a couple
  //   seconds, or if the API isn't present at all.
  function setupOrientation() {
    // TODO
  }

  showBatteryStatus();
  setupOrientation();
})();
