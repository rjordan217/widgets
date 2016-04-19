var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./widgey/tabs');
var WeatherClock = require('./widgey/weatherclock');
var Autocomplete = require('./widgey/autocomplete');


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Widgets/>, document.getElementById("root"));
});
var Widgets = React.createClass({
  render: function() {
    return (
      <div>
        <Tabs items={
            [
              {title: "Cat", content: "I'm a kitty kat"},
              {title: "Dog", content: "I'm better than a cat"},
              {title: "Turtle", content: "My name is Franklin"}
            ]
          }></Tabs>
        <WeatherClock></WeatherClock>
        <Autocomplete items={
          [
            'grizabella', 'tofina', 'alfred', 'germina', 'yurbelle'
          ]
        }></Autocomplete>
      </div>
    );
  }
});
