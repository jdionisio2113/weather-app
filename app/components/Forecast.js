var React = require("react");

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
        <div className="row">{this.props.date}</div>
      </div>
    );
  }
}

module.exports = Forecast;
