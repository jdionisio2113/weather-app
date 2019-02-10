// var axios = require("axios");
// var apiKey = "fc574e0b7722432589364140190802";

// function getWeather(e) {
//   e.preventDefault();
//   const city = e.target.elements.city.value;

//   return axios
//     .get(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=${city}`)
//     .then(res => {
//       console.log(res.data);
//       console.log(res.data.location.name);
//     });
// }

// function getForecast(e) {
//   e.preventDefault();
//   return axios
//     .get(`http://api.apixu.com/v1/forecast.json?${apiKey}&q=${city}`)
//     .then(res => {
//       console.log(res.data);
//     });
// }

// function getWeatherData(location) {
//   return axios
//     .all([getWeather(location), getForecast(location)])
//     .then(function(data) {
//       var weather = data[0];
//       var forecast = data[1];

//       return {
//         weather: weather,
//         forecast: forecast
//       };
//     });
// }

// function displayWeather(location) {
//   console.log(location);
// }

// module.exports = {
//   form: function(location) {
//     return axios.all(location.map(getWeatherData)).then(displayWeather);
//   }
// };
