import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {id:1, name: '001'},
        {id:2, name: '002'},
        {id:3, name: '003'},
        {id:4, name: '004'},
        {id:5, name: '005'},
        {id:6, name: '006'},
        {id:7, name: '007'},
        {id:8, name: '008'},
        {id:9, name: '009'},
        {id:10, name: '010'},
        {id:11, name: '011'},
        {id:12, name: '012'},
        {id:13, name: '013'},
        {id:14, name: '014'},
        {id:15, name: '015'},
      ]
    };
  }
  render() {
    let rows = this.state.data.map( person => {
      return <PersonRow key={person.id} data={person}/>
    });
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);