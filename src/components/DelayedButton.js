// Code DelayedButton Component Here
import React, { Component } from 'react';
class DelayedButton extends Component{
    click = e =>{
        e.persist()
        setTimeout(
            () => this.props.onDelayedClick(e), 
            this.props.delay
        )
    }
    render(){
        return(
            <button onClick={this.click}></button>
        )
    }
}
export default DelayedButton