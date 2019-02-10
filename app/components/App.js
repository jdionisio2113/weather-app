var React = require("react");
var Form = require("./Form");
var Weather = require("./Weather");
var axios = require("axios");

var apiKey = "fc574e0b7722432589364140190802";

class App extends React.Component {
  //   getWeather = async e => {
  //     e.preventDefault();
  //     const api_call = await fetch(
  //       `http://api.apixu.com/v1/current.json?key=${apiKey}&q=paris`
  //     );
  //     const data = await api_call.json();
  //     console.log(data);
  //   };
  constructor(props) {
    super(props);

    this.state = {
      temperature: undefined,
      name: undefined,
      region: undefined,
      condition: undefined
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
        console.log(res.data.location.name);
        this.setState(function() {
          return {
            temperature: res.data.current.temp_f,
            name: res.data.location.name,
            region: res.data.location.region,
            condition: res.data.current.condition.text
          };
        });
      });
  }

  render() {
    return (
      <div>
        <Form fetchWeather={this.fetchWeather} />
        <Weather
          name={this.state.name}
          region={this.state.region}
          temperature={this.state.temperature}
          condition={this.state.condition}
        />
      </div>
    );
  }
}

module.exports = App;
