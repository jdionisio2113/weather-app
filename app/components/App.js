var React = require("react");
var Form = require("./Form");
var Weather = require("./Weather");
var axios = require("axios");
var Forecast = require("./Forecast");

var apiKey = "fc574e0b7722432589364140190802";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: "",
      name: "",
      region: "",
      condition: "",
      date: ""
    };

    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;

    return axios
      .get(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=${city}`)

      .then(res => {
        console.log(res.data);
        // console.log(res.data.location.name);
        this.setState(function() {
          return {
            temperature: res.data.current.temp_f,
            name: res.data.location.name,
            region: res.data.location.region,
            condition: res.data.current.condition.text
          };
        });
        axios
          .get(
            `http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
          )
          .then(res => {
            console.log(res.data);
            this.setState(function() {
              var forecast = res.data.forecast.forecastday;
              return {
                date: forecast.map(function(forecast, index) {
                  return (
                    <ul>
                      <li key={forecast.date} className="forecast-item">
                        {forecast.date}
                      </li>
                      <li key={forecast} className="forecast-item">
                        {forecast.day.maxtemp_f} / {forecast.day.mintemp_f}
                      </li>
                    </ul>
                  );
                })

                // date: res.data.forecast.forecastday[0].date,
                // temp: res.data.current.temp_f
              };
            });
          });
      });
  }

  fetchData() {
    // fetch weather
    // fetch forecast
  }

  render() {
    return (
      <div>
        <Form
          fetchWeather={this.fetchWeather}
          // fetchForecast={this.fetchForecast}
        />
        <Weather
          name={this.state.name}
          region={this.state.region}
          temperature={this.state.temperature}
          condition={this.state.condition}
        />
        <Forecast date={this.state.date} />
      </div>
    );
  }
}

module.exports = App;
