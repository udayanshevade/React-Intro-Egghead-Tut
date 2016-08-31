import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // Constructor for the component class
  constructor() {
    // access to context
    super();
    // define component properties
    this.state = {
      level: 0
    };
    this.update = this.update.bind(this);
  }

  // increment the level
  update() {
    this.setState({ level: this.state.level + 1 });
  }

  // Mounting of the app component
  // these are only relative to the local component
  componentWillMount() {
    console.log('App will unmount shortly.');
  }
  componentDidMount() {
    console.log('App has successfully unmounted.');
  }

  // Unmounting the app component
  // these are only relative to the local component
  componentWillUnmount() {
    console.log('App will unmount shortly.');
  }
  componentHasUnmounted() {
    console.log('App has successfully unmounted.');
  }

  // default render function
  render() {
    return (
      <button onClick={this.update}>{ this.state.level }</button>
    );
  }
};

class Wrapper extends React.Component {
  constructor() {
    super();
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
  }

  mount() {
    console.log('Mounting the level.');
    this.levelContainer = document.getElementById('level-container');
    ReactDOM.render(<App/>, this.levelContainer);
  }

  componentWillMount() {
    console.log('Wrapper will mount shortly.');
  }
  componentDidMount() {
    console.log('Wrapper has successfully mounted.');
  }

  unmount() {
    console.log('Unmounting the level.');
    ReactDOM.unmountComponentAtNode(this.levelContainer);
  }
  componentWillUnmount() {
    console.log('Wrapper will unmount shortly.');
  }
  componentHasUnmounted() {
    console.log('Wrapper has successfully unmounted.');
  }

  render() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="level-container"></div>
      </div>
    );
  }

}

ReactDOM.render(
  <Wrapper/>,
  document.getElementById('app')
);