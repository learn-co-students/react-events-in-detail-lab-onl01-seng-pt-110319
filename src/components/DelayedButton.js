import React, { Component } from "react";

class DelayedButton extends Component {
  
  handleClick = event => {
    event.persist()
    window.setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }

  render() {
    return(
      <div>
      <br />
      <button type="button" onClick={this.handleClick}>
        Delay Button
      </button>
      </div>
    )
  }
}
export default DelayedButton