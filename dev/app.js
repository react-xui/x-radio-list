import React from 'react';
import ReactDOM from 'react-dom';
import RadioList from '../src/index';
import '../src/_index';
const {Radio} = RadioList;
var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  testFunc() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
       <RadioList value="1">
         <Radio value="1">aaaa</Radio>
         <Radio value="2">bbb</Radio>
       </RadioList>
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);