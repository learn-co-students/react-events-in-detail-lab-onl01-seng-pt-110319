import React, { Component } from "react";

  class CoordinatesButton extends Component {
    handleClick = (event) => {
      this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    
    render() {
      return(
        <button type="button" onClick={this.handleClick}>
        Mouse Coords
      </button>
      )
    }
  }
  
export default CoordinatesButton 
  