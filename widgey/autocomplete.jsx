var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function() {
    return {
      input: ""
    };
  },
  written: function(e) {
    this.setState({
      input: e.target.value
    });
  },
  render: function() {
    var searchString = this.state.input.trim().toLowerCase();
    var matchedStrings = this.props.items;

    if(searchString.length > 0) {
      matchedStrings = matchedStrings.filter(function(str){
        return str.match(searchString);
      });
    }
    return (
      <div>
        <input type="text" onInput={this.written}/>
        <ul> {matchedStrings.map(function(str) {
            return <li>{str}</li>;
          })}
        </ul>
      </div>
    );
  }

});



module.exports = Autocomplete;
