var React = require("react");
var Form = require("./Form");
var Weather = require("./Weather");
var axios = require("axios");
var Forecast = require("./Forecast");

var apiKey = "fc574e0b7722432589364140190802";

const ChangeDegreeTypeButton = ({ updateType }) => {
  return (
    <button className="unit-button" onClick={updateType}>
      change
    </button>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecastArr: [],
      error: false,
      loading: false,

      celsiusOrFahrenheit: " ºF" /* either "c" or "f" */,
      todaysWeather: {}
    };

    this.fetchWeather = this.fetchWeather.bind(this);
    this.changeCelsiusOrFahrenheit = this.changeCelsiusOrFahrenheit.bind(this);
  }

  changeCelsiusOrFahrenheit() {
    if (this.state.celsiusOrFahrenheit === "ºF") {
      this.setState({ celsiusOrFahrenheit: "ºC" });
    } else {
      this.setState({ celsiusOrFahrenheit: "ºF" });
    }
  }

  fetchWeather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;

    // axios.all([currentWeather(), weeklyForecast()]).then;

    axios
      .get(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=${city}`)
      .then(res => {
        console.log(res.data);
        // console.log(res.data.location.name);
        this.setState(function() {
          return {
            error: false,
            todaysWeather: res.data
          };
        });

        axios
          .get(
            `http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
          )
          .then(res => {
            console.log(res.data.forecast.forecastday);

            this.setState({
              forecastArr: res.data.forecast.forecastday.slice(1),
              error: false
            });
          });
      })
      .catch(function(err) {
        console.error(err);
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <div className="container">
        <Form
          fetchWeather={this.fetchWeather}
          // fetchForecast={this.fetchForecast}
        />
        <Weather
          todaysWeather={this.state.todaysWeather}
          celsiusOrFahrenheit={this.state.celsiusOrFahrenheit}
          error={this.state.error}
        />
        <ChangeDegreeTypeButton updateType={this.changeCelsiusOrFahrenheit} />
        <Forecast
          forecastArr={this.state.forecastArr}
          celsiusOrFahrenheit={this.state.celsiusOrFahrenheit}
        />
      </div>
    );
  }
}

// const ChangeDegreeTypeButton = ({ updateType }) => {
//   return <button onClick={updateType}>change</button>;
// };

module.exports = App;
