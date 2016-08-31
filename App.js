import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    // access to context
    super();
    this.state = {
      level: 0
    };
    this.update = this.update.bind(this);
  }
  // increment the level
  update() {
    this.setState({
      level: this.state.level + 1
    });
  }
  render() {
    return (
      <InnerComponent
        update={this.update}
        {...this.state}
        {...this.props}/>
    );
  }
}

const Button = (props) => <button onClick={props.update}>{props.txt} - {props.level}</button>

let ButtonMixed = Mixin(Button);

const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.level}</label>

let LabelMixed = Mixin(Label);

class App extends React.Component {
  // Constructor for the component class

  // default render function
  render() {
    return (
      <div>
        <ButtonMixed txt="Button"/>
        <br/>
        <LabelMixed txt="Label"/>
      </div>
    );
  }
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);