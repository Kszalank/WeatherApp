export const weather = {
  apiKey: "8490331e8ae52478f2dafd5088206cb3",
  fetchWeather: function (city) {
    // fetch("https://api.openweathermap.org/data/2.5/weather?cnt=45&q=" + city + "&units=metric&appid=" + this.apiKey)
    fetch("https://api.openweathermap.org/data/2.5/forecast?cnt=72&q=" + city + "&units=metric&appid=" + this.apiKey)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const name = data.city.name;
    const description = data.list[0].weather[0].description;
    const temp_today = data.list[0].main.temp;
    const temp_tomorrow = data.list[8].main.temp;
    const temp_in_2_days = data.list[16].main.temp;
    const temp_in_3_days = data.list[24].main.temp;

    const cloudiness_today = data.list[0].clouds.all;
    const cloudiness_tomorrow = data.list[8].clouds.all;
    const cloudiness_in_2_days = data.list[16].clouds.all;
    const cloudiness_in_3_days = data.list[24].clouds.all;

    const wind_today = data.list[0].wind.speed;
    const wind_tomorrow = data.list[8].wind.speed;
    const wind_in_2_days = data.list[16].wind.speed;
    const wind_in_3_days = data.list[24].wind.speed;

    const humidity_today = data.list[0].main.humidity;
    const humidity_tomorrow = data.list[8].main.humidity;
    const humidity_in_2_days = data.list[16].main.humidity;
    const humidity_in_3_days = data.list[24].main.humidity;

    document.querySelector(".city__name").innerText = name;
    document.querySelector(".city__weather").innerText = description;

    document.querySelector(".city__temperature").innerText = Math.round(temp_today) + "°C";
    document.querySelector(".top--cloud__inner").innerText = cloudiness_today + "%";
    document.querySelector(".top--wind__inner").innerText = wind_today + "m/s";
    document.querySelector(".top--humidity__inner").innerText = humidity_today + "%";

    document.querySelector(".tomorrow__temperature").innerText = Math.round(temp_tomorrow) + "°C";
    document.querySelector(".tomorrow__cloudiness--inner").innerText = cloudiness_tomorrow + "%";
    document.querySelector(".tomorrow__wind--inner").innerText = wind_tomorrow + "m/s";
    document.querySelector(".tomorrow__humidity--inner").innerText = humidity_tomorrow + "%";

    document.querySelector(".in-2-days__temperature").innerText = Math.round(temp_in_2_days) + "°C";
    document.querySelector(".in-2-days__cloudiness--inner").innerText = cloudiness_in_2_days + "%";
    document.querySelector(".in-2-days__wind--inner").innerText = wind_in_2_days + "m/s";
    document.querySelector(".in-2-days__humidity--inner").innerText = humidity_in_2_days + "%";

    document.querySelector(".in-3-days__temperature").innerText = Math.round(temp_in_3_days) + "°C";
    document.querySelector(".in-3-days__cloudiness--inner").innerText = cloudiness_in_3_days + "%";
    document.querySelector(".in-3-days__wind--inner").innerText = wind_in_3_days + "m/s";
    document.querySelector(".in-3-days__humidity--inner").innerText = humidity_in_3_days + "%";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".city__selection").value);
  },
};
console.log(weather.fetchWeather("Sydney"));

document.querySelector(".city__selection").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});
