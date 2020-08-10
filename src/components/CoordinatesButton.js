// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {


    handleClick = (event) => {
        let array = [event.clientX, event.clientY]
         const coords = this.props.onReceiveCoordinates(array)
         return coords
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} ></button>
              </div>
        )

    }
}