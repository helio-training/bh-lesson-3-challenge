import React, { Component } from 'react'

class MoodComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wackyValue: ''
    }
  }

    handleInputChange = (event) => {
      event.preventDefault()
      console.log('I am changing')
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

export default MoodComp