function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");

  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "e3a4ea3eobaf1tb802ba5309a36047f0";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiURL).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");
