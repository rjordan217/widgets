var React = require('react');
var Clock = require('./clock');
var Weather = require('./weather');

var WeatherClock = React.createClass({
  render: function() {
    return (
      <div>
        <Clock></Clock>
        <Weather></Weather>
      </div>
    );
  }
});

module.exports = WeatherClock;
