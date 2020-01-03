import React, { Component, Fragment } from 'react';
import './style.css';
import { CSSTransition } from 'react-transition-group';

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { isShow: true };
        this.toSummon = this.toSummon.bind(this);
    }
    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames='boss-text'
                    unmountOnExit
                >
                    <div>Boss级人物-孙悟空</div>
                </CSSTransition>

                <div>
                    <button onClick={this.toSummon}>召唤Boos</button>
                </div>
            </Fragment>
        );
    }
    toSummon() {
        this.setState({
            isShow: this.state.isShow ? false : true
        });
    }
}

export default Boss;
