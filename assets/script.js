let today = moment().format("DD-MM-YYYY");
const myApiKey = '1ffa6d2a9e2efff932f3fc6da58adb78';
const weatherWrapper = document.querySelector("#today");
const forecastWrapper = document.querySelector("#forecast");
const forecastContainer = document.querySelector("#forecast-list");
const searchHistory = document.querySelector("#search-history");

function fetchWeather(city, myApiKey) {

  $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}`)
   .then((list) => {
    var lon = list.coord.lon;
    var lat = list.coord.lat;

    
    displayWeather(list);
   }
  );
}

function displayWeather(currentData) {
  console.log(`
   City: ${currentData.name}
   Temp: ${Math.round(currentData.main.temp)} Cº
   Wind: ${currentData.wind.speed} M/S
   Humidity: ${currentData.main.humidity}
   `);

  let city = `${currentData.name}`;
  let date = moment().format("DD-MM-YYYY");
  let icon = `${currentData.weather[0].icon}`;
  let weatherDescription = `${currentData.weather[0].description}`;
  let temp = `${Math.round(currentData.main.temp)} Cº`;
  let wind = `${currentData.wind.speed} m/s`;
  let humidity = `${currentData.main.humidity}%`;


  $(`<div id="city-date-icon-wrap">
           <h2 class="heading radius">${city.name} ${date}</h2>
           <img src="https://openweathermap.org/img/w/${icon}.png" alt="${weather[0].description}"></img>
       </div>
       <p>Temp: ${main.temp}</p>
       <p>Wind: ${wind.speed}</p>
       <p>Humidity: ${main.humidity}</p>`).appendTo(weatherWrapper);

  //Show 5 day Forecast
  $(forecastWrapper).show();

  for (i = 0; i < 5; i++) {
    date = moment().format("DD-MM-YYYY");
    temp = "";
    wind = `${3 * i} mph`;
    humidity = "";
    $(`<div class="forecast-card radius" id="today">
               <h3>${date}</h3>
               <p>${img}</p>
               <p>${weatherDescription}</p>
               <p>Temp: ${temp}</p>
               <p>Wind: ${wind}</p>
               <p>Humidity: ${humidity}</p>
           </div>
       `).appendTo(forecastContainer);
  }
}

fetchWeather();

