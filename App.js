import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    });
  }
  render() {
    return (
      <main>

        <Slider ref="red"
          val={ this.state.red }
          update={ this.update } />

        <Slider ref="green"
          val={ this.state.green }
          update ={this.update } />

        <Slider ref="blue"
          val={ this.state.blue }
           update= {this.update } />

      </main>
    );
  }
};

class Slider extends React.Component {
  render() {
    let val = this.props.val;
    let update = this.props.update;
    return (
      <label>
        <div>{ val }</div>
        <input ref="inp" type="range"
          value={ val }
          min="0" max="255"
          onChange={update} />
      </label>
    );
  }
}

ReactDOM.render(
  <App cat={5}/>,
  document.getElementById('app')
);