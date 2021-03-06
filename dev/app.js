/*
 * @Descripttion: 
 * @Author: tianxiangbing
 * @Date: 2019-04-02 10:41:30
 * @LastEditTime: 2021-04-27 10:50:53
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
    this.state = { show: false ,value:"1"};
  }
  testFunc() {
    this.setState({ show: !this.state.show });
  }
  toggle(){
    this.setState({value:"2"})
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle.bind(this)}>切换</button>
      <RadioList value={this.state.value}>
        <Radio value="1" secText="12345">aaaa</Radio>
        <Radio value="2">bbb</Radio>
      </RadioList>
      <br/>
       <RadioList value="1">
         <Radio value="1" text="AAA">aaaa</Radio>
         <Radio value="2">bbb</Radio>
       </RadioList>
      <br/>
       <RadioList showTitle={true} disabled={true} disabledCls="disabled" value="1" options={[{value:1,text:"aaa"},{value:2,text:"bbb"}]}>
       </RadioList>
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);