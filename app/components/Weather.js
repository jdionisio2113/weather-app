var React = require("react");

class Weather extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div className="column">
        {this.props.name}
        {this.props.region}
        {this.props.temperature}
        {this.props.condition}
      </div>
    );
  }
}

module.exports = Weather;
