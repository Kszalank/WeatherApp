import cloud from "../img/cloud.svg";
import humidity from "../img/humidity.svg";
import wind from "../img/wind.svg";

const windy = document.querySelectorAll(".wind");
const cloudy = document.querySelectorAll(".cloud");
const humidities = document.querySelectorAll(".humidity");

windy.forEach((element) => {
  element.src = wind;
});
cloudy.forEach((element) => {
  element.src = cloud;
});
humidities.forEach((element) => {
  element.src = humidity;
});
