var React = require('react');

var Weather = React.createClass({
  getInitialState: function() {
    return { weatherInfo: false };
  },
  componentDidMount: function() {
    (function loadXMLDoc() {
      var xmlhttp;

      xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
          if(xmlhttp.status === 200){
            var datos = JSON.parse(xmlhttp.responseText);
            this.setState({weatherInfo: datos});
          }
        }
      }.bind(this);
      var url = "http://api.openweathermap.org/data/2.5/weather?";
      var locale = navigator.geolocation;

      function successfulLocale(location) {
        url += "lat=" + location.coords.latitude + "&lon=" + location.coords.longitude;
        url += "&appid=645c5d39c7603f17e23fcaffcea1a3c1";
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
      }

      locale.getCurrentPosition(successfulLocale);

    }).bind(this)();
  },
  render: function() {
    if(this.state.weatherInfo) {
      var tiempo = this.state.weatherInfo;
      return (
        <div>
          <h3>Weather for: {tiempo.name}</h3>
          <ul>
            <li>{tiempo.weather[0].main}: {tiempo.weather[0].description}</li>
            <li>Wind Speed: {tiempo.wind.speed}</li>
          </ul>
        </div>
      );
    } else {
      return (<h3>Loading...</h3>);
    }
  }
});

module.exports = Weather;
