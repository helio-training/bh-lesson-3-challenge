import React, { Component } from 'react'

class MoodFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: ''
    }
  }
  handleZipCodeChange = (userEvent) => {
    userEvent.preventDefault()
    this.setState({ zipCode: userEvent.target.value })
  }
  render() {
    return (
      <div>
                I'm the mood MoodFilter
        <input typer="text"
          value={this.state.zipCode}
          placeholder="Enter a Zip Code"
          onChange={this.handleZipCodeChange} />
      </div>
    )
  }
}

export default MoodFilter
