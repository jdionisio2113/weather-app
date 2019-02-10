var React = require("react");
// var axios = require("axios");
// var apiKey = "fc574e0b7722432589364140190802";
// var PropTypes = require("prop-types");

const Form = props => (
  <form onSubmit={props.fetchWeather}>
    <input type="text" name="city" placeholder="Search" autoComplete="off" />
    <button type="submit">Get Weather</button>
  </form>
);

// Form.propTypes = {
//   res: Proptypes.func.isRequired
// };

module.exports = Form;
