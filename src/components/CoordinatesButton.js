// Code CoordinatesButton Component Here
import React, { Component } from 'react'
class CoordinatesButton extends Component{
    click = e => {
        this.props.onReceiveCoordinates(
            [e.clientX, e.clientY]
            )
    }
  
    render() {
        return <button onClick={this.click}></button>
    }
}
export default CoordinatesButton