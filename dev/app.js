/*
 * @Descripttion: 
 * @Author: tianxiangbing
 * @Date: 2019-04-02 10:41:30
 * @LastEditTime : 2020-01-17 11:02:30
 * @github: https://github.com/tianxiangbing
 */
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
        <Radio value="1" secText="12345">aaaa</Radio>
        <Radio value="2">bbb</Radio>
      </RadioList>
      <br/>
       <RadioList value="1">
         <Radio value="1" text="AAA">aaaa</Radio>
         <Radio value="2">bbb</Radio>
       </RadioList>
      <br/>
       <RadioList disabled={true} disabledCls="disabled" value="1" options={[{value:1,text:"aaa"},{value:2,text:"bbb"}]}>
       </RadioList>
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);