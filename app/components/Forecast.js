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
   * Iterate through this.props.date array.
   * For each item in the array, display the forcast
   *
   */

  var forecastArr = props.forecastArr;
  //   const { forecastArr } = props;

  if (forecastArr.length > 0) {
    return (
      <div>
        <ul>
          {forecastArr.map(function(dayObj) {
            return (
              //   <li key={dayObj.date}>
              //     date: {dayObj.date}
              //     maxtemp:{dayObj.day.maxtemp_f}
              //     mintemp: {dayObj.day.mintemp_f}
              //   </li>
              <ul key={dayObj.date} className="forecast-container">
                <h2 className="forecast-item">{Week(dayObj.date)}</h2>
                <li className="forecast-item">
                  {dayObj.day.maxtemp_f} / {dayObj.day.mintemp_f}
                </li>
                <li className="forecast-item">{dayObj.day.condition.text}</li>
                <img
                  className="icon forecast-item"
                  src={dayObj.day.condition.icon}
                />
              </ul>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

module.exports = Forecast;

// forecastArr: forecast.map(function(forecast) {
//   return (
//     <ul key={forecast.date} className="forecast-container">
//       <h2 className="forecast-item">{Week(forecast.date)}</h2>
//       <li className="forecast-item">
//         {forecast.day.maxtemp_f} / {forecast.day.mintemp_f}
//       </li>
//       <li className="forecast-item">{forecast.day.condition.text}</li>
//       <img className="icon forecast-item" src={forecast.day.condition.icon} />
//     </ul>
//   );
// });

var foo = [1, 2, 3, 4];

var double = foo.map(function(num) {
  return num * 2;
});
