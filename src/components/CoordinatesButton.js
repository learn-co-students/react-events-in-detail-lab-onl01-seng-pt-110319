// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

	constructor(props) {
		super()
	}

	handleClick = (event) => {
		let coordinates = [event.clientX, event.clientY]
		this.props.onReceiveCoordinates(coordinates)
	}

	render() {
		return (
			<button onClick={this.handleClick}>Coordinates Button</button>
		)
	}

}