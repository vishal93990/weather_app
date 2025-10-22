let weather_detail = document.querySelector(".weather-detail");
const temperature = document.querySelector(".temperature");
const weather_descriptions = document.querySelector(".weather-report");
const humidity_description = document.querySelector(".inner-humidity");
const wind_speed = document.querySelector(".innerwind");
const png = document.querySelector(".change");
const errors = document.querySelector(".error");
const citys = document.querySelector(".city");
const input = document.querySelector(".inputs");
const btn = document.querySelector(".search-button");
const main = document.querySelector(".main");
async function getdata(city) {
  const APIkey = "2b15af1d9efafbbfe1bf790bd599bb5d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    errors.style.display = "none";
    weather_detail.style.display = "flex";
    temperature.innerHTML = `${Math.round(result.main.temp - 273.15)}°C`;
    weather_descriptions.innerHTML = `${result.weather[0].description}`;
    humidity_description.innerHTML = `${result.main.humidity}%`;
    wind_speed.innerHTML = `${result.wind.speed}Km/h`;
    citys.innerHTML = `${result.name}`;
    switch (result.weather[0].main) {
      case "Clouds":
        png.src = "images/cloudy.png";
        main.style.background =
          "linear-gradient(164deg, rgba(161,149,139,1) 0%, rgba(69,71,73,1) 38%)";
        break;
      case "Clear":
        png.src = "images/suns.png";
        main.style.background =
          "linear-gradient(var(--angle), oklab(82.1% -0.131 0.022), oklab(66.2% -0.123 0.014), oklab(45.9% -0.064 -0.054), oklab(33.3% -0.02 -0.16))";
        break;
      case "Mist":
        png.src = "images/drizzle.png";
        main.style.background =
          "linear-gradient(164deg, rgba(161,149,139,1) 0%, rgba(69,71,73,1) 38%)";
        break;
      case "Rain":
        png.src = "images/rain.png";
        main.style.background =
          "linear-gradient(164deg, rgba(161,149,139,1) 0%, rgba(69,71,73,1) 38%)";
        break;
      case "Snow":
        png.src = "images/snow.webp";
        break;
      case "lightrain":
        png.src = "images/lightrain.webp";
    }
  } catch (e) {
    weather_detail.style.display = "none";
    errors.style.display = "flex";
  }
}

btn.addEventListener("click", () => {
  getdata(input.value);
});
