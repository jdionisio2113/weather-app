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

  var forecastArr = props.forecastArr;
  //   const { forecastArr } = props;

  if (forecastArr.length > 0) {
    return (
      <div>
        <div className="scrollmenu">
          {forecastArr.map(function(dayObj, { celsiusOrFahrenheit }) {
            var value;
            if (celsiusOrFahrenheit === " ºF") {
              value = (
                <p className="forecast-item">
                  {dayObj.day.mintemp_f} / {dayObj.day.maxtemp_f}
                </p>
              );
            } else {
              value = (
                <li className="forecast-item">
                  {dayObj.day.mintemp_c} / {dayObj.day.maxtemp_c}
                </li>
              );
            }
            return (
              //   <li key={dayObj.date}>
              //     date: {dayObj.date}
              //     maxtemp:{dayObj.day.maxtemp_f}
              //     mintemp: {dayObj.day.mintemp_f}
              //   </li>
              <ul key={dayObj.date} className="forecast-container">
                <h2 className="forecast-item">{Week(dayObj.date)}</h2>
                <img
                  className="icon forecast-item"
                  src={dayObj.day.condition.icon}
                />
                {value}
                <p>{celsiusOrFahrenheit}</p>
                {/* <li className="forecast-item">{dayObj.day.condition.text}</li> */}
              </ul>
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
