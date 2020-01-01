import React, { Component, Fragment } from 'react';
import './style.css';
import XiaojiejieItem from './XiaojiejieItem';
import axios from 'axios';

class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['基础按摩', '精油推背']
    };
    this.inputChange = this.inputChange.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    axios
      .post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then(res => {
        console.log('axios get data successfully:' + JSON.stringify(res));
      })
      .catch(error => {
        console.log('axios Failed to get data:' + error);
      });
  }
  render() {
    return (
      <Fragment>
        {/* 第一次加注释 */}
        <div>
          <label htmlFor='addInput'>增加服务：</label>
          <input
            id='addInput'
            className='addInput'
            value={this.state.inputValue}
            onChange={this.inputChange}
            ref={inputText => {
              this.input = inputText;
            }}
          />
          <button onClick={this.addList}>增加服务</button>
        </div>
        <ul
          ref={ulArray => {
            this.ul = ulArray;
          }}
        >
          {this.state.list.map((item, index) => {
            return (
              <XiaojiejieItem
                key={index + '_' + item}
                content={item}
                index={index}
                deleteItem={this.deleteItem}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }

  inputChange(e) {
    this.setState({
      inputValue: this.input.value
    });
  }

  // 增加列表
  addList() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      },
      () => {
        console.log(this.ul.querySelectorAll('li').length);
      }
    );
  }

  // 删除列表项
  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}
export default Xiaojiejie;
