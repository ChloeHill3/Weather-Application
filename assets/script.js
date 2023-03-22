let today = moment().format("DD-MM-YYYY");
var cityName = document.querySelector("#search-input").value;
const myApiKey = "c9e8960cfd8a13fba033eae63434578c";
let cities = [];






// document.querySelector("#search-button")
//   .addEventListener("click", function (event, cityName) {
//     // Preventing the submit button from trying to submit the form
//     event.preventDefault();
//     city(cityName);
//     var lat = data[0].lat;
//     var lon = data[0].lon;
//     queryCurrentURL =
//       "https://api.openweathermap.org/data/2.5/weather?lat=" +
//       lat +
//       "&lon=" +
//       lon +
//       "&units=metric&appid=c9e8960cfd8a13fba033eae63434578c";
//     queryForecastURL =
//       "https://api.openweathermap.org/data/2.5/forecast?lat=" +
//       lat +
//       "&lon=" +
//       lon +
//       "&units=metric&appid=c9e8960cfd8a13fba033eae63434578c";
//     queryURL = queryCurrentURL;
//     return fetch(queryURL);

//     function city(cityName) {
//       console.log(cityName);

//       queryURL =
//         "https://api.openweathermap.org/data/2.5/weather?q=" +
//         cityName +
//         "&appid=c9e8960cfd8a13fba033eae63434578c";

//       fetch(queryURL)
//         .then((response) => response.json())
//         .then((data) => {
//           let cityNameData = data;
//           console.log(responseData);
//           for (let i = 0; i < 20; i++) {
//             cities[i] = cityNameData[i].city;
//           }
//         });
//     }

//     getLatLong(cityName);
//   });
