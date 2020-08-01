// Code DelayedButton Component Here
import React, { Component } from 'react'; 


export default class DelayedButton extends React.Component {

    handleClick = (event) => {
        event.persist()
        window.setTimeout(() => {
          this.props.onDelayedClick(event) 

        }, this.props.delay)
        // return this.props.delay = setTimeout(this.props.onDelayedClick(event))
    }


    render() {
        return (<div>
            {console.log(this.props.onDelayedClick)}
            <button onClick={this.handleClick} ></button>
        </div>)
    }
}