var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <h1 className={this.props.estilo} key={this.key} onClick={this.props.onClick}>{this.props.title}</h1>
    );
  }
});

module.exports = Header;
