/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-radio-list
 * User: 田想兵
 * Date: 2017-05-14
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from 'react';
import Radio from './Radio';

export default class RadioList extends Component {
  static Radio = Radio;
  constructor(props){
    super(props);
    this.state = { selected:props.value||"" }
  }
  onSelect=(v)=>{
    this.setState({selected:v})
  }
  formatRadio(children){
    return children.map( (item,key)=>{
      let {children,value}= item.props;
      let selected = false;
      if(value == this.state.selected){
        selected = true;
      }
      return <Radio key={key} selected={selected} value={value} onSelect={this.onSelect}>{children}</Radio>
    })
  }
  render () {
    let {className, children} = this.props;
    return (
      <div className={className||"" + " x-radiolist"}>
        {this.formatRadio(children)}
      </div>
    );
  }
}
