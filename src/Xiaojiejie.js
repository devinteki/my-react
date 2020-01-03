import React, { Component, Fragment } from 'react';
import './style.css';
import XiaojiejieItem from './XiaojiejieItem';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.inputChange = this.inputChange.bind(this);
        this.addList = this.addList.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        axios
            .get(
                'https://www.easy-mock.com/mock/5e0e06947b7d5204d82954d1/ReactDemo1/xiaojiejie'
            )
            .then(res => {
                console.log(
                    'axios get data successfully:' + JSON.stringify(res)
                );
                this.setState({
                    list: res.data.data
                });
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
                    <TransitionGroup>
                        {this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={2000}
                                    classNames='boss-text'
                                    unmountOnExit
                                    appear={true}
                                    key={index + '_' + item}
                                >
                                    <XiaojiejieItem
                                        key={index + '_' + item}
                                        content={item}
                                        index={index}
                                        deleteItem={this.deleteItem}
                                    />
                                </CSSTransition>
                            );
                        })}
                    </TransitionGroup>
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
        if (this.state.inputValue.trim().length !== 0) {
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
