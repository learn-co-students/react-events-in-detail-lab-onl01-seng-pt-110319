import React, {Component} from 'react';

export default class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist()
        const delayClick = () => {
            this.props.onDelayedClick(event)
        }
        setTimeout(delayClick, this.props.delay)
        
    }

    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}