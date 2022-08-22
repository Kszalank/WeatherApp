import { fetchWeather } from "./forecast";
export { storeCity, fail };

function storeCity(cityName) {
  window.localStorage.setItem("city", cityName);
}

function fail() {
  const city = localStorage.getItem("city");
  if (city !== 0) {
    fetchWeather(`&cnt=72&units=metric&q=${city}`);
  }
}
