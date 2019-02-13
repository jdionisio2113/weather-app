var React = require("react");

// class Weather extends React.Component {
function Weather(props) {
  //   constructor(props) {
  //     super(props);
  //   }
  //   render() {
  return (
    <div>
      <div className="column">
        {/* {this.props.name && this.props.region && (
            <h1>
              {this.props.name} ,{this.props.region}
            </h1>
          )} */}
        <div className="location">
          <h1 className="city">{props.name}</h1>
          <h3 className="region">{props.region}</h3>
        </div>
        <div className="weather-container">
          <img src={props.icon} />
          <div className="curr-weather-info">
            {props.temperature && (
              <p className="current-temp">{props.temperature}º</p>
            )}
            <p className="current-codition">{props.condition}</p>
          </div>
        </div>
      </div>
    </div>
  );
  //   }
}

module.exports = Weather;
