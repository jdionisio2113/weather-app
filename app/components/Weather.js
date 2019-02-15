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
    if (celsiusOrFahrenheit === "ºF") {
      value = <p className="current-temp">{todaysWeather.current.temp_f}</p>;
    } else {
      value = <p className="current-temp">{todaysWeather.current.temp_c}</p>;
    }
    return (
      <div>
        <div className="column">
          {todaysWeather.location.name && todaysWeather.location.region && (
            <div className="location">
              <h1 className="city">{todaysWeather.location.name}</h1>
              <h3 className="region">{todaysWeather.location.region}</h3>
              <h5 className="today">Today</h5>
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
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Weather;
