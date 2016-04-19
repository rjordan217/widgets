var Header = require('./header');
var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return { focused: 0 };
  },
  clicked: function(index) {
    this.setState({focused: index});
  },
  render: function() {
    var ziji = this;
    var seleccionado = 0;
    return (
      <div>
        <ul>{ this.props.items.map(function(item, idx) {
          var estilo = '';
          if (ziji.state.focused === idx) {
            estilo = 'focused';
            seleccionado = idx;
          }

          return (
            <Header key={idx} estilo={estilo} title={item.title} onClick={ziji.clicked.bind(ziji, idx)}></Header>

          );
        })
        }</ul>
      <article>{this.props.items[seleccionado].content}</article>
      </div>
    );
  }
});

module.exports = Tabs;
