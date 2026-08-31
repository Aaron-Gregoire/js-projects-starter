/* =========================================================
   PROJECT 7: Weather App (Fetch + JSON)
   Concepts: fetch, promises/async-await, JSON parsing,
             conditionals driving icon/UI choices
   ========================================================= */

// STEP 1: Grab DOM elements
const cityForm = document.querySelector("#city-form");
const cityInput = document.querySelector("#city-input");
const weatherResult = document.querySelector("#weather-result");
const weatherIcon = document.querySelector("#weather-icon");
const weatherCity = document.querySelector("#weather-city");
const weatherTemp = document.querySelector("#weather-temp");
const weatherDescription = document.querySelector("#weather-description");
const weatherError = document.querySelector("#weather-error");

/* This project uses Open-Meteo (https://open-meteo.com) because it's free
   and doesn't require an API key — good for practicing fetch without
   getting stuck on account signup. It's a two-step process:
     1. Geocoding API: turn a city name into latitude/longitude
     2. Forecast API: get the current weather for those coordinates */

// STEP 2: Write an async function `getCoordinates(cityName)` that fetches:
//   https://geocoding-api.open-meteo.com/v1/search?name=CITY_NAME&count=1
// and returns { latitude, longitude, name } from the first result.
// Remember: fetch() returns a Response — you need to call .json() on it
// (which ALSO returns a promise) to get the actual data.
async function getCoordinates(cityName) {
  // TODO
  // const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`);
  // const data = await response.json();
  // if (!data.results || data.results.length === 0) throw new Error("City not found");
  // return data.results[0];
}

// STEP 3: Write an async function `getWeather(latitude, longitude)` that fetches:
//   https://api.open-meteo.com/v1/forecast?latitude=LAT&longitude=LON&current_weather=true
// and returns the `current_weather` object (has temperature and weathercode).
async function getWeather(latitude, longitude) {
  // TODO
}

// STEP 4: Open-Meteo gives you a numeric "weather code", not a nice string.
// Write a function that maps a weathercode to a description + icon choice.
// A few common codes: 0 = Clear sky, 1-3 = Mainly clear/partly cloudy,
// 45/48 = Fog, 51-67 = Rain/drizzle, 71-77 = Snow, 95 = Thunderstorm.
// Full table: https://open-meteo.com/en/docs (see "WMO Weather interpretation codes")
function interpretWeatherCode(code) {
  // TODO: return { description: "...", icon: "☀️" } (emoji is fine, or use
  // your own SVGs like the ones from your course's lesson-4 weather app)
  return { description: "Unknown", icon: "❓" };
}

// STEP 5: Tie it together in the form submit handler.
//   - preventDefault()
//   - hide any previous error, hide the result while loading
//   - await getCoordinates(), then await getWeather() with those coords
//   - use interpretWeatherCode() to fill in the icon/description
//   - fill in city name and temperature, un-hide weatherResult
//   - wrap it all in try/catch — on error, show the message in weatherError
async function handleSubmit(event) {
  // TODO
}

// TODO: cityForm.addEventListener("submit", handleSubmit);


/* ---------- STRETCH GOALS ----------
   - Show a loading spinner/text while the fetches are in flight
   - Add a "use my location" button using the Geolocation API from
     project 9 to skip typing a city name
   - Cache the last searched city in localStorage and load it on page open
------------------------------------- */
