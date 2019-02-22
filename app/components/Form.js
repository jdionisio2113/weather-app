var React = require("react");
// var axios = require("axios");
// var apiKey = "fc574e0b7722432589364140190802";
// var PropTypes = require("prop-types");
var Loading = require("./Loading");

const Form = props => (
  <form onSubmit={props.fetchWeather} className="searchInput">
    <input
      type="text"
      name="city"
      placeholder="Los Angeles, CA"
      autoComplete="off"
    />
    <button type="submit">
      <i className="fa fa-search" aria-hidden="true" />
    </button>
  </form>
);

module.exports = Form;
