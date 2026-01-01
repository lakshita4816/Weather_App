const apiKey = "d71ca63cd1334c7cbc684220260101";

const locationInput = document.getElementById("locationInput");
const suggestions = document.getElementById("suggestions");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const weatherIcon = document.getElementById("weatherIcon");
const weatherResult = document.getElementById("weatherResult");
const loader = document.getElementById("loader");
const errorBox = document.getElementById("error");
const unitToggle = document.getElementById("unitToggle");
const themeToggle = document.getElementById("themeToggle");

let unit = "C";
let currentData = null;

// DARK MODE (FIXED)
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
};


/* UNIT TOGGLE */
unitToggle.onclick = () => {
  unit = unit === "C" ? "F" : "C";
  unitToggle.textContent = unit === "C" ? "°F" : "°C";
  updateTemperature();
};

/* AUTOCOMPLETE WITH LAT/LON */
locationInput.addEventListener("input", async () => {
  const q = locationInput.value.trim();

  if (q.length < 2) {
    suggestions.innerHTML = "";
    return;
  }

  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${q}`
    );

    const data = await res.json();
    suggestions.innerHTML = "";

    if (data.length === 0) {
      suggestions.innerHTML = "<li>No results found</li>";
      return;
    }

    data.forEach(place => {
      const li = document.createElement("li");
      li.textContent = `${place.name}, ${place.country}`;
      li.onclick = () => {
        locationInput.value = li.textContent;
        suggestions.innerHTML = "";
        fetchWeather(place.lat, place.lon);
      };
      suggestions.appendChild(li);
    });

  } catch {
    suggestions.innerHTML = "<li>Error fetching locations</li>";
  }
});

/* FETCH WEATHER (ACCURATE) */
async function fetchWeather(lat, lon) {
  try {
    loader.classList.remove("hidden");
    errorBox.classList.add("hidden");
    weatherResult.classList.add("hidden");

    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`
    );

    if (!res.ok) throw new Error();

    currentData = await res.json();

    cityName.textContent =
      `${currentData.location.name}, ${currentData.location.country}`;
    condition.textContent = currentData.current.condition.text;
    weatherIcon.src = "https:" + currentData.current.condition.icon;

    updateTemperature();
    weatherResult.classList.remove("hidden");

  } catch {
    errorBox.textContent = "Unable to fetch weather for this location.";
    errorBox.classList.remove("hidden");
  } finally {
    loader.classList.add("hidden");
  }
}

/* UPDATE TEMP */
function updateTemperature() {
  if (!currentData) return;
  temperature.textContent =
    unit === "C"
      ? `${currentData.current.temp_c} °C`
      : `${currentData.current.temp_f} °F`;
}
