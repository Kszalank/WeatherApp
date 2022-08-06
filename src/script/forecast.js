import { baseUrl } from "./constans";
import { updateBackground } from "./backgroundUpdate";
import { currentTime } from "./constans";
import { storeCity } from "./localStorage";
export { fetchWeather };

function fetchWeather(url) {
  fetch(baseUrl + url)
    .then((response) => response.json())
    .then((data) => displayWeather(data));
}

function displayWeather(data) {
  const sunset = data.city.sunset;
  const sunrise = data.city.sunrise;
  updateBackground(currentTime, sunrise, sunset);
  const name = data.city.name;
  storeCity(name);
  const description = data.list[0].weather[0].description;
  const tempToday = data.list[0].main.temp;
  const tempTomorrow = data.list[8].main.temp;
  const tempIn2Days = data.list[16].main.temp;
  const tempIn3Days = data.list[24].main.temp;

  const cloudinessToday = data.list[0].clouds.all;
  const cloudinessTomorrow = data.list[8].clouds.all;
  const cloudinessIn2Days = data.list[16].clouds.all;
  const cloudinessIn3Days = data.list[24].clouds.all;

  const windToday = data.list[0].wind.speed;
  const windTomorrow = data.list[8].wind.speed;
  const windIn2Days = data.list[16].wind.speed;
  const windIn3Days = data.list[24].wind.speed;

  const humidityToday = data.list[0].main.humidity;
  const humidityTomorrow = data.list[8].main.humidity;
  const humidityIn2Days = data.list[16].main.humidity;
  const humidityIn3Days = data.list[24].main.humidity;

  document.querySelector(".city__name").innerText = name;
  document.querySelector(".city__weather").innerText = description;

  document.querySelector(".city__temperature").innerText = Math.round(tempToday) + "°C";
  document.querySelector(".top--cloud__inner").innerText = cloudinessToday + "%";
  document.querySelector(".top--wind__inner").innerText = windToday + "m/s";
  document.querySelector(".top--humidity__inner").innerText = humidityToday + "%";

  document.querySelector(".tomorrow__temperature").innerText = Math.round(tempTomorrow) + "°C";
  document.querySelector(".tomorrow__cloudiness--inner").innerText = cloudinessTomorrow + "%";
  document.querySelector(".tomorrow__wind--inner").innerText = windTomorrow + "m/s";
  document.querySelector(".tomorrow__humidity--inner").innerText = humidityTomorrow + "%";

  document.querySelector(".in-2-days__temperature").innerText = Math.round(tempIn2Days) + "°C";
  document.querySelector(".in-2-days__cloudiness--inner").innerText = cloudinessIn2Days + "%";
  document.querySelector(".in-2-days__wind--inner").innerText = windIn2Days + "m/s";
  document.querySelector(".in-2-days__humidity--inner").innerText = humidityIn2Days + "%";

  document.querySelector(".in-3-days__temperature").innerText = Math.round(tempIn3Days) + "°C";
  document.querySelector(".in-3-days__cloudiness--inner").innerText = cloudinessIn3Days + "%";
  document.querySelector(".in-3-days__wind--inner").innerText = windIn3Days + "m/s";
  document.querySelector(".in-3-days__humidity--inner").innerText = humidityIn3Days + "%";
}

function search() {
  const city = document.querySelector(".city__selection").value;
  fetchWeather(`&cnt=72&units=metric&q=${city}`);
}

document.querySelector(".city__selection").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    search();
  }
});
