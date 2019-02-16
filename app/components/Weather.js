var React = require("react");

// class Weather extends React.Component {
function Weather({ todaysWeather, error, celsiusOrFahrenheit }) {
  // if todaysWeather is an empty object
  // dont attempt to renderk html
  //   if stement, storevariable, calls

  if (Object.keys(todaysWeather).length === 0) {
    return null;
  } else {
    {
      /*
                    if celsiusOrFahrenheight is f
                        render farehnheit property from todaysweather
                    otherwise
                        render the celsius property
                
                */
    }
    var value;
    var temp;
    if (celsiusOrFahrenheit === "ºF") {
      value = <p className="current-temp">{todaysWeather.current.temp_f}</p>;
      temp = <p>FEELS LIKE:{todaysWeather.current.feelslike_f}º</p>;
    } else {
      value = <p className="current-temp">{todaysWeather.current.temp_c}</p>;
      temp = <p>FEELS LIKE:{todaysWeather.current.feelslike_c}º</p>;
    }
    return (
      <div className="current_weather">
        <div className="column">
          {todaysWeather.location.name && todaysWeather.location.region && (
            <div className="location">
              <h1 className="city">{todaysWeather.location.name}</h1>
              <h3 className="region">{todaysWeather.location.region}</h3>
            </div>
          )}
          <div className="weather-container">
            <img
              className="current-icon"
              src={todaysWeather.current.condition.icon}
            />

            <div className="curr-weather-info">
              {value}
              <p className="current-temp">{celsiusOrFahrenheit}</p>
              <p className="current-condition">
                {todaysWeather.current.condition.text}
              </p>
            </div>
            <div className="weather-info">
              <h5 className="today">Today</h5>
            </div>
          </div>
        </div>
        <div className="day-info">
          <div className="info1">
            {/* <h5 className="humidity">Humidity</h5> */}
            <p>HUMIDITY: {todaysWeather.current.humidity}%</p>
            {/* <h5>WIND</h5> */}
            <p>
              WIND: {todaysWeather.current.wind_dir}{" "}
              {todaysWeather.current.wind_mph} mph
            </p>
          </div>
          <div className="info2">
            {/* <h5>VISIBILITY</h5> */}
            <p>VISIBILITY: {todaysWeather.current.vis_miles} mi</p>
            {/* <h5>FEELS LIKE</h5> */}
            {temp}
          </div>
          <div className="info3">
            <p>UV INDEX: {todaysWeather.current.uv}</p>
            <p>PRECIPITATION: {todaysWeather.current.precip_in} in</p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Weather;
