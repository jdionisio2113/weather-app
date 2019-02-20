var React = require("react");

function Week(date) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  var d = new Date(date);
  // console.log(d)
  return days[d.getDay()];
}

function Forecast(props) {
  /**
   * Iterate through this.props.forecastArr array.
   * For each item in the array, display the forcast
   *
   */

  //   var value;
  //   if (celsiusOrFahrenheit === " ºF") {
  //     value = <p className="current-temp">{todaysWeather.current.temp_f}</p>;
  //   } else {
  //     value = <p className="current-temp">{todaysWeather.current.temp_c}</p>;
  //   }
  var { forecastArr, celsiusOrFahrenheit } = props;
  //   var forecastArr = props.forecastArr;
  //   var celsiusOrFahrenheit = props.celsiusOrFahrenheit;

  if (forecastArr.length > 0) {
    return (
      <div>
        <div className="scrollmenu">
          {forecastArr.map(function(dayObj) {
            var temp;
            if (celsiusOrFahrenheit === "ºF") {
              temp = (
                <p className="forecast-item">
                  {dayObj.day.mintemp_f} {celsiusOrFahrenheit}/{" "}
                  {dayObj.day.maxtemp_f} {celsiusOrFahrenheit}
                </p>
              );
            } else {
              temp = (
                <p className="forecast-item">
                  {dayObj.day.mintemp_c} {celsiusOrFahrenheit} /{" "}
                  {dayObj.day.maxtemp_c} {celsiusOrFahrenheit}
                </p>
              );
            }
            return (
              //   <li key={dayObj.date}>
              //     date: {dayObj.date}
              //     maxtemp:{dayObj.day.maxtemp_f}
              //     mintemp: {dayObj.day.mintemp_f}
              //   </li>

              <div key={dayObj.date} className="forecast-container">
                <h2 className="forecast-item">{Week(dayObj.date)}</h2>
                <img
                  className="icon forecast-item"
                  src={dayObj.day.condition.icon}
                />
                {temp}
                {/* <p className="forecast-temp">{celsiusOrFahrenheit}</p> */}
                {/* <li className="forecast-item">{dayObj.day.condition.text}</li> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

module.exports = Forecast;
