var React = require("react");
var Form = require("./Form");
var Weather = require("./Weather");
var axios = require("axios");
var Forecast = require("./Forecast");
var Loading = require("./Loading");

var apiKey = "fc574e0b7722432589364140190802";

function handleError(error) {
  console.warn(error);
  return null;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecastArr: [],
      error: null,
      loading: false,

      celsiusOrFahrenheit: "ºF" /* either "c" or "f" */,
      todaysWeather: {}
    };

    this.fetchWeather = this.fetchWeather.bind(this);
    this.changeCelsiusOrFahrenheit = this.changeCelsiusOrFahrenheit.bind(this);
    this.usersLocationData = this.usersLocationData.bind(this);
  }

  usersLocationData(current, forecast) {
    axios
      .all([axios.get(current), axios.get(forecast)])
      .then(res => {
        // console.warn(res);
        var currentDay = res[0].data;
        var forecast = res[1].data.forecast.forecastday;
        // if (currentDay === null) {
        //   return this.setState(function() {
        //     return {
        //       error:
        //         "Looks like there was an error. Check that both users exist on Github.",
        //       loading: false
        //     };
        //   });
        // }
        // console.log(current);
        // console.log(forecast);
        this.setState(function() {
          return {
            error: null,
            todaysWeather: currentDay,
            loading: false
          };
        });
        this.setState({
          forecastArr: forecast.slice(1),
          error: null,
          loading: false
        });
      })
      .catch(handleError);
  }

  componentDidMount() {
    this.setState({ loading: true });
    navigator.geolocation.getCurrentPosition(position => {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      // console.log(lon, lat);
      this.usersLocationData(
        `http://api.apixu.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`,
        `http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=7`
      );
    });
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
    this.setState({ loading: true });
    const city = e.target.elements.city.value;
    this.usersLocationData(
      `http://api.apixu.com/v1/current.json?key=${apiKey}&q=${city}`,
      `http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
    );
  }

  render() {
    var loading = this.state.loading;
    // var error = this.state.error;

    if (loading === true) {
      return <Loading />;
    }

    // if (error) {
    //   return (
    //     <div>
    //       <p>{error}</p>
    //     </div>
    //   );
    // }

    return (
      <div className="container">
        <Form fetchWeather={this.fetchWeather} />
        <Weather
          todaysWeather={this.state.todaysWeather}
          celsiusOrFahrenheit={this.state.celsiusOrFahrenheit}
          // error={this.state.error}
          updateType={this.changeCelsiusOrFahrenheit}
          loading={this.state.loading}
        />
        <Forecast
          forecastArr={this.state.forecastArr}
          celsiusOrFahrenheit={this.state.celsiusOrFahrenheit}
        />
      </div>
    );
  }
}

module.exports = App;
