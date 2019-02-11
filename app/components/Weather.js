var React = require("react");

class Weather extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div>
        <div className="column">
          {this.props.name && this.props.region && (
            <p>
              Location:{this.props.name},{this.props.region}
            </p>
          )}
          {this.props.temperature && (
            <p>Temperature: {this.props.temperature}</p>
          )}
          {this.props.condition && <p>Condition: {this.props.condition}</p>}
        </div>
      </div>
    );
  }
}

module.exports = Weather;
