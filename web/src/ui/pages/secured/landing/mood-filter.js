import React, { Component } from 'react'

class moodFilter extends Component {
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
        <input type="text" value={this.state.zipCode}
          placeholder="zipcode"
          onChange={this.handleZipCodeChange} />
      </div>
    )
  }
}

export default moodFilter
