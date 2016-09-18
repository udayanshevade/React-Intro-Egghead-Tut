import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      output: '',
      input: '/* enter your jsx here */',
      err: ''
    };
    this.update = this.update.bind(this);
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: 'all'
        }).code,
        err: ''
      });
    } catch (err) {
      this.setState({
        err: err.message
      });
    }
  }
  render() {
    return (
      <main>
        <header className="error-message">{this.state.err}</header>
        <section className="container">
          <textarea className="container-split input"
            onChange={this.update}
            defaultValue={this.state.input}></textarea>
          <pre className="container-split output">
            {this.state.output}
          </pre>
        </section>
      </main>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);