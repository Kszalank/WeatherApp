import { fetchWeather } from "./forecast";
import { fail } from "./localStorage";
function searchFromGeolocation({ latitude, longitude }) {
  fetchWeather(`&lat=${latitude}&lon=${longitude}&units=metric`);
}

function success(data) {
  searchFromGeolocation(data.coords);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
  }
}

getLocation();
