import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // Constructor for the component class
  constructor() {
    // access to context
    super();
    this.state = {
      increasing: false
    };
    this.update = this.update.bind(this);
  }

  // increment the level
  update() {
    ReactDOM.render(
      <App level={this.props.level + 1}/>,
      document.getElementById('app')
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      increasing: nextProps.level > this.props.level
    });
    console.log(this.state.increasing);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.level % 5 === 0;
  }

  componentDidUpdate(prevProps, nextProps) {
    console.log('prevProps', prevProps);
  }

  // default render function
  render() {
    return (
      <button onClick={this.update}>{ this.props.level }</button>
    );
  }
};

App.defaultProps = {
  level: 0
};

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);