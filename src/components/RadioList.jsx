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
  constructor(props) {
    super(props);
    this.state = { selected: props.value || "" }
  }
  onSelect = (v) => {
    this.setState({ selected: v })
  }
  formatRadio(children) {
    let { options } = this.props;
    let list = []
    if (typeof options !== 'undefined') {
      list = options;
    } else {
      list = children;
    }
    return list.map((item, key) => {
      let {text} = item;
      if (item && item.$$typeof && Symbol.for('react.element') == item.$$typeof) {
        item = item.props;
        text = typeof item.text === 'undefined' ? item.children : item.text;
      }
      let { value } = item;
      let selected = false;
      if (value == this.state.selected) {
        selected = true;
      }
      return <Radio key={key} selected={selected} value={value} text={text} onSelect={this.onSelect} />
    })
  }
  render() {
    let { className, children } = this.props;
    let cls = typeof className ==='undefined' ? "x-radiolist":className+ " x-radiolist";
    return (
      <div className={cls}>
        {this.formatRadio(children)}
      </div>
    );
  }
}
