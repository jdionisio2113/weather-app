var React = require("react");
var axios = require("axios");
var apiKey = "fc574e0b7722432589364140190802";
var PropTypes = require("prop-types");

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
  }

  fetchWeather(e) {
    e.preventDefault();
    // const city = e.target.elements.name.city.value;

    return axios
      .get(`http://api.apixu.com/v1/current.json?key=${apiKey}&q=paris`)
      .then(res => {
        console.log(res.data);
        console.log(res.data.location.name);
      });
  }

  render() {
    return (
      <form onSubmit={this.fetchWeather}>
        <input
          type="text"
          name="city"
          placeholder="Search"
          autoComplete="off"
        />
        <button type="submit">Get Weather</button>
      </form>
    );
  }
}

// Form.propTypes = {
//   res: Proptypes.func.isRequired
// };

module.exports = Form;
