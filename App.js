import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0
    };
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    });
  }
  render() {
    return (
      <main>
        <NumInput ref="red"
          min={0}
          max={255}
          step={1}
          label="Value"
          val={+this.state.red}
          update={this.update} />
      </main>
    );
  }
}

class NumInput extends React.Component {
  constructor() {
    super();
    this.types = ['range', 'number'];
    this.typeIndex = 0;
    this.state = {
      type: 'range'
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.props.update();
    this.typeIndex = (this.typeIndex + 1) % 2;
    this.setState({
      type: this.types[this.typeIndex]
    });
  }
  render() {
    let label = this.props.label ? this.props.label + '-' : '';
    let val = this.props.val;
    let update = this.props.update;
    return (
      <div>
        <label>
          <div>{label} { val }</div>
          <input
            className="value-input"
            ref="inp"
            type={this.state.type}
            defaultValue={val}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            onChange={update}/>
        </label>
        <label className="switch">
          <input type="checkbox"
            onChange={this.toggle}/>
          <div className="slider round"></div>
        </label>
      </div>
    );
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  val: React.PropTypes.number,
  step: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired
};

NumInput.defaultProps = {
  min: 0,
  val: 0,
  step: 1,
  label: ''
};


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);