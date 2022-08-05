import { fetchWeather } from "./forecast";

function searchFromGeolocation({ latitude, longitude }) {
  fetchWeather(`&lat=${latitude}&lon=${longitude}&units=metric`);
}

function success(data) {
  searchFromGeolocation(data.coords);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, console.error);
  }
}

getLocation();
