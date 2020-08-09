import React, {Component} from 'react';

export default class CoordinatesButton extends Component{
   

    clickHandler = (event) =>{
        let mouseData = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(mouseData)
    }

    render() {
        return(
            <button value='Coord' onClick={this.clickHandler}/>
        )
    }
}