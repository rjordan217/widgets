var React = require('react');

var Clock = React.createClass({
  getInitialState: function() {
    return { clock: new Date() };
  },
  tick: function() {
    var newClock = this.state.clock;
    newClock.setSeconds(newClock.getSeconds() + 1);
    this.setState({clock: newClock});
  },
  componentDidMount: function() {
    this.timer = setInterval(this.tick, 1000);
  },
  render: function() {
    return (
      <h3>{this.state.clock.toLocaleTimeString()}</h3>
    );
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
  }
});

module.exports = Clock;
