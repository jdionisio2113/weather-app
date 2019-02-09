var React = require("react");
var Form = require("./Form");

// var apiKey = "fc574e0b7722432589364140190802";

class App extends React.Component {
  //   getWeather = async e => {
  //     e.preventDefault();
  //     const api_call = await fetch(
  //       `http://api.apixu.com/v1/current.json?key=${apiKey}&q=paris`
  //     );
  //     const data = await api_call.json();
  //     console.log(data);
  //   };

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

module.exports = App;
