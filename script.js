
async function fetchLocationData(input){

   const myApiKey = "5e0b4d6052160b2f958a7399b9657052"

   const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid=${myApiKey}`
   );
   const locationData = await response.json();
   console.log(locationData)
   return locationData;
}




async function fetchWeatherData(input) {
   const myApiKey = "5e0b4d6052160b2f958a7399b9657052"

   const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${myApiKey}`

   );
   const data = await response.json();
   console.log(data)
   return data;
}



