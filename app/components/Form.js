var React = require("react");
// var axios = require("axios");
// var apiKey = "fc574e0b7722432589364140190802";
// var PropTypes = require("prop-types");

const Form = props => (
  <form onSubmit={props.fetchWeather}>
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

// class Form extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.setState;
//     this.props.onSubmit(this.props.fetchWeather, this.props.fetchForecast);
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           name="city"
//           placeholder="Search"
//           autoComplete="off"
//         />
//         <button type="submit">Get Weather</button>
//       </form>
//     );
//   }
// }

// Form.propTypes = {
//   res: Proptypes.func.isRequired
// };

module.exports = Form;
