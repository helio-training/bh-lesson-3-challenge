import React, { Component } from 'react'

class Mood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wackyValue: ''
    }
  }

  handleInputChange = (event) => {
    event.preventDefault()
    console.log('i am changing')
    this.setState({ wackyValue: event.target.value })
  }

  render() {
    return (
      <div>
        <div>This is the one </div>
        <input type="text"
          value={this.state.wackyValue}
          placeholder="enter something"
          onChange={this.handleInputChange} />
      </div>
    )
  }
}

export default Mood
