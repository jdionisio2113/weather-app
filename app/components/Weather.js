var React = require("react");

class Weather extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <div>
        <div className="column">
          <h1>
            {this.props.name},{this.props.region}
          </h1>

          <img src={this.props.icon} />

          <p>{this.props.temperature}</p>

          <p>{this.props.condition}</p>
        </div>
      </div>
    );
  }
}

module.exports = Weather;
