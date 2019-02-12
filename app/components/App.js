var React = require("react");
var Form = require("./Form");
var Weather = require("./Weather");
var axios = require("axios");
var Forecast = require("./Forecast");

var apiKey = "fc574e0b7722432589364140190802";

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
            icon: res.data.current.condition.icon,
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
                date: forecast.map(function(forecast) {
                  return (
                    <ul key={forecast.date}>
                      <h2 className="forecast-item">{Week(forecast.date)}</h2>
                      <li className="forecast-item">
                        {forecast.day.maxtemp_f} / {forecast.day.mintemp_f}
                      </li>
                      <li className="forecast-item">
                        {forecast.day.condition.text}
                      </li>
                      <img
                        className="icon forecast-item"
                        src={forecast.day.condition.icon}
                      />
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
          icon={this.state.icon}
        />
        <Forecast date={this.state.date} />
      </div>
    );
  }
}

module.exports = App;
