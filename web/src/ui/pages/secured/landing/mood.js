import React, { Component } from 'react'

class MoodFilterComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wackyValue: ''
    }
  }

    handleInputChange = (event) => {
      event.preventDefault()
      this.setState({ wackyValue: event.target.value })
    }
    render() {
      return (
        <div>
          <input type="text"
            value={this.state.wackyValue}
            placeholder="enter something"
            onChange={this.handleInputChange} />
        </div>
      )
    }
}

export default MoodFilterComp
