import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.handleCLick = this.handleCLick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        }
        return false;
    }

    render() {
        console.log('child - render');
        return (
            <li
                onClick={this.handleCLick}
                dangerouslySetInnerHTML={{
                    __html: this.props.avname + '为你做-' + this.props.content
                }}
            ></li>
        );
    }
    handleCLick() {
        this.props.deleteItem(this.props.index);
    }
}

XiaojiejieItem.propTypes = {
    content: PropTypes.string.isRequired,
    index: PropTypes.number,
    deleteItem: PropTypes.func
};
XiaojiejieItem.defaultProps = {
    avname: '波多野结衣'
};

export default XiaojiejieItem;
