import React, { Component } from 'react'

class MoodFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: ''
    }
  }

  handlezipCodeChange = (userEvent) => {
    userEvent.preventDefault()
    this.setState({ zipCode: userEvent.target.value })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.zipCode} placeholder="enter zip" onChange={this.handlezipCodeChange} />
      </div>
    )
  }
}

export default MoodFilter
