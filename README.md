# 🌤️ Lakshita’s Weather App

Lakshita’s Weather App is a modern, responsive weather application built using **HTML, CSS, and JavaScript**, powered by **WeatherAPI**.  
It provides accurate real-time weather data with a clean UI, dark mode, and intelligent city search.

---

## ✨ Features

- 🔍 **City Search with Autocomplete**
  - Shows **city + country** in suggestions
  - Uses **latitude & longitude** to avoid wrong city results

- 🌡️ **Real-Time Weather Data**
  - Current temperature
  - Weather condition
  - Dynamic weather icons

- 🌗 **Dark Mode**
  - Toggle between light and dark themes
  - Theme preference saved using `localStorage`

- 🔁 **Temperature Unit Toggle**
  - Switch between **°C** and **°F**

- ❌ **Error Handling**
  - Handles invalid city searches
  - Displays user-friendly error messages

- 🎨 **Modern UI**
  - Gradient-based design
  - Borderless cards
  - Clean navbar with branding

- 🖼️ **Custom Favicon**
  - App logo visible in browser tab

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **WeatherAPI**

---

## 🔑 API Details

- **WeatherAPI**
  - `search.json` → Location autocomplete
  - `current.json` → Current weather data

> Weather data is fetched using **latitude and longitude** to ensure accurate city-country mapping.

---

## ⚙️ How to Run

1. Download or clone the repository
2. Make sure `logo.png` is in the same folder as `index.html`
3. Open `index.html` in your browser  
   *(Recommended: VS Code Live Server)*

---

## 🧠 Engineering Highlights

- Used **lat/lon-based API calls** to avoid incorrect city matches
- Implemented **localStorage** for theme persistence
- Clean separation of **HTML, CSS, and JavaScript**
- Graceful loading and error states

---

## 🚀 Future Improvements

- Auto-detect user location
- Hourly and 7-day forecast
- Favorite cities
- Weather-based background animations
- React / Next.js version

---

## 👩‍💻 Author

**Lakshita**

---
