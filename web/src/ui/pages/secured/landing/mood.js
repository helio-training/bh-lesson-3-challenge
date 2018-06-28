import React, { Component } from 'react'

class Mood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wackyValue: ''
    }
  }

  handleinputchange = (event) => {
    event.preventDefault()
    console.log('Imsmo')
    this.setState({ wackyValue: event.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.wackyValue}
          placeholder="enter something"
          onChange={this.handleinputchange} />
      </div>
    )
  }
}

export default Mood
