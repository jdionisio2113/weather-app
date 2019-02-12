var React = require("react");

// // axios.get(
// //     `http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${city}`
// //   )

// function Forecast(date) {
//   var days = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday];
//   var d = new Date(date);
//   console.log(d);
//   return days[d.getDay()];
// }

// module.exports = Forecast;

class Forecast extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       date: ""
  //     };
  //   }

  render() {
    return (
      <div>
        <div className="row">
          {this.props.date}
          {/* <li>{this.props.temp}</li> */}
        </div>
      </div>
    );
  }
}

module.exports = Forecast;
