import cloud from "../img/cloud.svg";
import humidity from "../img/humidity.svg";
import wind from "../img/wind.svg";

var windy = document.querySelectorAll("#wind");
windy.forEach(function (element) {
  element.src = wind;
});
var cloudy = document.querySelectorAll("#cloud");
cloudy.forEach(function (element) {
  element.src = cloud;
});
var humidities = document.querySelectorAll("#humidity");
humidities.forEach(function (element) {
  element.src = humidity;
});
